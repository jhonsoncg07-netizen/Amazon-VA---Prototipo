import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { initAmazonSession, scrapeAmazonStorefront, ScrapedProduct } from './sellerAmpScraper';
import { Competitor } from '../lib/types';
import { getLastScan, saveScan, getCompetitors } from '../lib/db';

async function sendTelegramAlert(sellerId: string, sellerName: string, product: ScrapedProduct) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn(`⚠️ Telegram no configurado. Mensaje ignorado para ASIN: ${product.asin}`);
    return;
  }

  // Nuevo formato enriquecido
  const message = `🔥 ¡ALERTA DE COMPETIDOR! 🔥\nVendedor: ${sellerName} (${sellerId})\nASIN: ${product.asin}\nPrecio: ${product.price}\nVentas Mes Pasado: ${product.sales}\n\nEnlace directo: https://www.amazon.com/dp/${product.asin}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: false
      })
    });

    if (!response.ok) {
      console.error(`❌ Error enviando mensaje a Telegram: ${response.status} ${response.statusText}`);
    } else {
      console.log(`✅ Alerta de Telegram enviada exitosamente para ASIN: ${product.asin}`);
    }
  } catch (error) {
    console.error('❌ Error de red al contactar API de Telegram:', error);
  }
}

async function runSpyJob() {
  console.log('\n====================================================');
  console.log(`🕵️ Iniciando Amazon Storefront Spy - Ejecución Única (Cloud) 🕵️`);
  console.log('====================================================');

  const competitors = await getCompetitors();
  
  if (competitors.length === 0) {
    console.log('⚠️ No hay competidores registrados. Añade uno desde la web local.');
    return;
  }

  console.log(`📊 Se encontraron ${competitors.length} competidores válidos para escanear en Amazon.`);

  let session;
  try {
    session = await initAmazonSession();
  } catch (error) {
    console.error('❌ Error fatal al intentar iniciar sesión en Amazon:', error);
    return;
  }

  for (const competitor of competitors) {
    console.log(`\n----------------------------------------------------`);
    console.log(`🔍 Escaneando Storefront de: ${competitor.name} (${competitor.sellerId})`);
    
    try {
      const amazonStorefrontUrl = `https://www.amazon.com/s?i=merchant-items&me=${competitor.sellerId}`;
      const scrapeResult = await scrapeAmazonStorefront(session, amazonStorefrontUrl);

      const extractedAsins = scrapeResult.products.map(p => p.asin);

      if (extractedAsins.length === 0) {
        console.log(`⚠️ No se extrajo ningún ASIN para ${competitor.name}. Es posible que no tenga stock o Amazon bloqueó el request.`);
        continue;
      }

      console.log(`🧠 Comparando ${extractedAsins.length} ASINs extraídos contra el último registro local...`);
      
      const lastScan = await getLastScan(competitor.sellerId);
      let newAsinsDetected: string[] = [];

      if (lastScan) {
        const previousAsinsSet = new Set(lastScan.asins);
        newAsinsDetected = extractedAsins.filter(asin => !previousAsinsSet.has(asin));
      }

      // Guardamos en la base de datos solo la lista de ASINs planos para mantener el diseño horizontal sin romper nada
      await saveScan(competitor.id, extractedAsins, newAsinsDetected);

      if (newAsinsDetected.length > 0) {
        for (const asin of newAsinsDetected) {
          console.log(`🔥 NUEVO PRODUCTO DETECTADO: ASIN ${asin} agregado al inventario del competidor.`);
          
          // Encontrar la información extendida del ASIN actual para enviarla a Telegram
          const productData = scrapeResult.products.find(p => p.asin === asin) || { 
            asin, price: 'No disponible', sales: 'Sin datos de ventas' 
          };
          
          // Enviamos la alerta enriquecida con el Nombre Real extraído de la página (o el nombre guardado como fallback)
          const finalSellerName = scrapeResult.sellerName && scrapeResult.sellerName !== 'Vendedor Desconocido' 
            ? scrapeResult.sellerName 
            : competitor.name;

          await sendTelegramAlert(competitor.sellerId, finalSellerName, productData);
        }
      } else {
        console.log(`✅ No hay productos nuevos en esta tienda.`);
      }
      
      console.log(`💾 Base de datos actualizada con éxito para el vendedor ${competitor.name}.`);

    } catch (error) {
      console.error(`❌ Error procesando al competidor ${competitor.name}:`, error);
    }
  }

  console.log(`\n----------------------------------------------------`);
  console.log('🧹 Cerrando sesión del navegador...');
  await session.browser.close();
  
  console.log(`🎉 Ciclo de scraping finalizado de forma exitosa.`);
}

runSpyJob().catch(console.error);
