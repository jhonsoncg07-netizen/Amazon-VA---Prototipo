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
// Funciones de Alerta
// ─────────────────────────────────────────────────────────
async function sendNewProductAlert(sellerId: string, sellerName: string, product: ScrapedProduct) {
  const message = `🔥 *¡ALERTA DE COMPETIDOR!* 🔥\n` +
    `*Vendedor:* \`${sellerName}\` \\(${sellerId}\\)\n` +
    `*ASIN:* \`${product.asin}\`\n` +
    `*Precio:* ${product.price}\n` +
    `*Ventas Mes Pasado:* ${product.sales}\n\n` +
    `🔗 [Ver producto en Amazon](https://www.amazon.com/dp/${product.asin})`;
  await sendTelegram(message);
}

async function sendBaseSnapshotAlert(sellerId: string, sellerName: string, totalAsins: number) {
  const message = `🏬 *NUEVO COMPETIDOR REGISTRADO* 🏬\n\n` +
    `*Vendedor:* \`${sellerName}\`\n` +
    `*Seller ID:* \`${sellerId}\`\n` +
    `*Estatus:* 🛡️ Escudo Base Creado Exitosamente\n\n` +
    `📊 *REPORTE:* Se han indexado *${totalAsins}* ASINs.`;
  await sendTelegram(message);
}

// ─────────────────────────────────────────────────────────
// Función principal corregida y robusta
// ─────────────────────────────────────────────────────────
async function runSpyJob() {
  console.log('\n====================================================');
  console.log(`🕵️  Amazon Storefront Spy — Ejecución Única (Cloud)`);
  console.log('====================================================');

  const competitors = await getCompetitors();
  if (competitors.length === 0) return;

  console.log(`📊 ${competitors.length} competidores encontrados.`);

  let session;
  try {
    session = await initAmazonSession();
  } catch (error) {
    console.error('❌ Error fatal al iniciar el navegador:', error);
    return;
  }

  for (const competitor of competitors) {
    console.log(`\n🔍 Escaneando: ${competitor.name} (${competitor.sellerId})`);

    try {
      // LLAMADA CORREGIDA: Pasamos solo session.page y el sellerId limpio
      const scrapeResult = await scrapeAmazonStorefront(session.page, competitor.sellerId);
      
      const extractedAsins = scrapeResult.products.map(p => p.asin);

      if (extractedAsins.length === 0) {
        console.log(`⚠️ Sin ASINs detectados para ${competitor.name}.`);
        continue;
      }

      const lastScan = await getLastScan(competitor.sellerId);
      const isFirstScan = !lastScan;
      const finalSellerName = scrapeResult.sellerName || competitor.name;

      if (isFirstScan) {
        await saveScan(competitor.id, extractedAsins, []);
        await sendBaseSnapshotAlert(competitor.sellerId, finalSellerName, extractedAsins.length);
      } else {
        const previousAsinsSet = new Set(lastScan!.asins);
        const newAsinsDetected = extractedAsins.filter(asin => !previousAsinsSet.has(asin));
        await saveScan(competitor.id, extractedAsins, newAsinsDetected);

        for (const asin of newAsinsDetected) {
          const productData = scrapeResult.products.find(p => p.asin === asin) ?? { asin, price: 'N/A', sales: 'N/A' };
          await sendNewProductAlert(competitor.sellerId, finalSellerName, productData);
        }
      }
    } catch (error) {
      console.error(`❌ Error procesando ${competitor.name}:`, error);
    }
  }

  await session.browser.close();
  console.log('\n🎉 Ciclo de scraping finalizado.');
}

runSpyJob().catch(console.error);