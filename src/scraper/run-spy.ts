import 'dotenv/config';
import { initAmazonSession, scrapeAmazonStorefront, ScrapedProduct } from './sellerAmpScraper';
import { getLastScan, saveScan, getCompetitors } from '../lib/db';

// ─────────────────────────────────────────────────────────
// Función utilitaria: envía cualquier texto a Telegram
// ─────────────────────────────────────────────────────────
async function sendTelegram(text: string, parseMode: 'Markdown' | 'HTML' | undefined = 'Markdown') {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('⚠️ Telegram no configurado (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID). Mensaje ignorado.');
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: parseMode,
        disable_web_page_preview: true
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error(`❌ Error Telegram API: ${response.status} - ${err}`);
    } else {
      console.log('✅ Mensaje enviado a Telegram correctamente.');
    }
  } catch (error) {
    console.error('❌ Error de red al contactar API de Telegram:', error);
  }
}

// ─────────────────────────────────────────────────────────
// Alerta de NUEVO PRODUCTO detectado
// ─────────────────────────────────────────────────────────
async function sendNewProductAlert(sellerId: string, sellerName: string, product: ScrapedProduct) {
  const message =
    `🔥 *¡ALERTA DE COMPETIDOR!* 🔥\n` +
    `*Vendedor:* \`${sellerName}\` \\(${sellerId}\\)\n` +
    `*ASIN:* \`${product.asin}\`\n` +
    `*Precio:* ${product.price}\n` +
    `*Ventas Mes Pasado:* ${product.sales}\n\n` +
    `🔗 [Ver producto en Amazon](https://www.amazon.com/dp/${product.asin})`;

  console.log(`📣 Enviando alerta de nuevo producto ASIN: ${product.asin}`);
  await sendTelegram(message);
}

// ─────────────────────────────────────────────────────────
// Confirmación de PRIMER ESCANEO (Escudo Base)
// ─────────────────────────────────────────────────────────
async function sendBaseSnapshotAlert(sellerId: string, sellerName: string, totalAsins: number) {
  const message =
    `🏬 *NUEVO COMPETIDOR REGISTRADO* 🏬\n\n` +
    `*Vendedor:* \`${sellerName}\`\n` +
    `*Seller ID:* \`${sellerId}\`\n` +
    `*Estatus:* 🛡️ Escudo Base Creado Exitosamente\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `📊 *REPORTE DE INICIO:*\n` +
    `• Se han indexado un total de *${totalAsins}* ASINs activos en su tienda\\.\n` +
    `• Este volumen de productos ha sido archivado de manera horizontal como tu Snapshot de control\\.\n\n` +
    `⚠️ *NOTA:* Actualmente se está creando el historial base para este competidor\\. En esta primera vuelta no se emitirán alertas de cambios\\. A partir del próximo ciclo \\(cada 3 horas\\), recibirás las actualizaciones en tiempo real si el vendedor incluye o remueve algún ASIN de su inventario\\.`;

  console.log(`🛡️ Enviando confirmación de Escudo Base para ${sellerName} con ${totalAsins} ASINs...`);
  await sendTelegram(message);
}

// ─────────────────────────────────────────────────────────
// Función principal: una sola pasada, compatible con GitHub Actions
// ─────────────────────────────────────────────────────────
async function runSpyJob() {
  console.log('\n====================================================');
  console.log(`🕵️  Amazon Storefront Spy — Ejecución Única (Cloud)`);
  console.log('====================================================');

  const competitors = await getCompetitors();

  if (competitors.length === 0) {
    console.log('⚠️ No hay competidores registrados. Añade uno desde la web local.');
    return;
  }

  console.log(`📊 ${competitors.length} competidores encontrados para escanear.`);

  let session;
  try {
    session = await initAmazonSession();
  } catch (error) {
    console.error('❌ Error fatal al iniciar el navegador:', error);
    return;
  }

  for (const competitor of competitors) {
    console.log(`\n----------------------------------------------------`);
    console.log(`🔍 Escaneando: ${competitor.name} (${competitor.sellerId})`);

    try {
      const url = `https://www.amazon.com/s?i=merchant-items&me=${competitor.sellerId}`;
      const scrapeResult = await scrapeAmazonStorefront(session, url);
      const extractedAsins = scrapeResult.products.map(p => p.asin);

      if (extractedAsins.length === 0) {
        console.log(`⚠️ Sin ASINs para ${competitor.name}. Sin stock o bloqueado por Amazon.`);
        continue;
      }

      const lastScan = await getLastScan(competitor.sellerId);
      const isFirstScan = !lastScan;

      const finalSellerName = (scrapeResult.sellerName && scrapeResult.sellerName !== 'Vendedor Desconocido')
        ? scrapeResult.sellerName
        : competitor.name;

      if (isFirstScan) {
        // ── PRIMER ESCANEO: Guardar snapshot base y notificar en Telegram ──
        console.log(`🛡️ Primer escaneo detectado para ${finalSellerName}. Creando Snapshot Base...`);
        await saveScan(competitor.id, extractedAsins, []); // Sin nuevos en el baseline
        await sendBaseSnapshotAlert(competitor.sellerId, finalSellerName, extractedAsins.length);

      } else {
        // ── ESCANEOS SUBSECUENTES: Comparar y alertar por nuevos ASINs ──
        const previousAsinsSet = new Set(lastScan!.asins);
        const newAsinsDetected = extractedAsins.filter(asin => !previousAsinsSet.has(asin));

        await saveScan(competitor.id, extractedAsins, newAsinsDetected);

        if (newAsinsDetected.length > 0) {
          for (const asin of newAsinsDetected) {
            console.log(`🔥 NUEVO PRODUCTO: ${asin}`);
            const productData = scrapeResult.products.find(p => p.asin === asin)
              ?? { asin, price: 'No disponible', sales: 'Sin datos de ventas' };
            await sendNewProductAlert(competitor.sellerId, finalSellerName, productData);
          }
        } else {
          console.log(`✅ Sin cambios en el inventario de ${finalSellerName}.`);
        }
      }

      console.log(`💾 Base de datos actualizada para ${competitor.name}.`);

    } catch (error) {
      console.error(`❌ Error procesando ${competitor.name}:`, error);
      // Continúa con el siguiente aunque este falle
    }
  }

  console.log(`\n----------------------------------------------------`);
  console.log('🧹 Cerrando navegador...');
  await session.browser.close();
  console.log('🎉 Ciclo de scraping finalizado.');
}

runSpyJob().catch(console.error);
