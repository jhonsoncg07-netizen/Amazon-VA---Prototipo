import { Browser, Page, chromium } from 'playwright';

export interface ScraperSession {
  browser: Browser;
  page: Page;
}

export interface ScrapedProduct {
  asin: string;
  price: string;
  sales: string;
}

export interface ScrapeResult {
  sellerName: string;
  products: ScrapedProduct[];
}

export async function initAmazonSession(): Promise<ScraperSession> {
  // En GitHub Actions siempre headless (no hay pantalla).
  // En local, se puede activar el modo visible con SHOW_BROWSER=true en .env.local
  const isHeadless = process.env.GITHUB_ACTIONS === 'true' || process.env.SHOW_BROWSER !== 'true';

  console.log(`[Amazon Scraper] Modo navegador: ${isHeadless ? 'Headless (invisible)' : 'Headed (visible)'}`);

  const browser = await chromium.launch({
    headless: isHeadless,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled'
    ]
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 720 }
  });

  const page = await context.newPage();
  return { browser, page };
}

export async function scrapeAmazonStorefront(session: ScraperSession, amazonStorefrontUrl: string): Promise<ScrapeResult> {
  const { page } = session;
  
  console.log(`[Amazon Scraper] Visitando el Storefront directamente en Amazon: ${amazonStorefrontUrl}`);
  
  await page.goto(amazonStorefrontUrl, { waitUntil: 'networkidle', timeout: 60000 });
  
  const humanDelay = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);
  console.log(`[Amazon Scraper] Simulando lectura humana. Esperando ${humanDelay / 1000} segundos...`);
  await page.waitForTimeout(humanDelay);

  console.log('[Amazon Scraper] Extrayendo ASINs, precios y ventas del DOM...');
  
  // Extraer el nombre real de la tienda (del title o del h1)
  const sellerName = await page.evaluate(() => {
    // Intentar buscar el h1 prominente que suele tener el nombre del seller
    const h1 = document.querySelector('h1#merchant-name') || document.querySelector('h1.a-size-extra-large');
    if (h1 && h1.textContent) return h1.textContent.trim();
    // Fallback al título de la página
    let title = document.title || '';
    title = title.replace('Amazon.com', '').replace('Seller Profile', '').replace(/[:|-]/g, '').trim();
    return title || 'Vendedor Desconocido';
  });

  const extractedProducts = await page.evaluate(() => {
    const results: ScrapedProduct[] = [];
    
    // Buscamos los bloques de producto principales de Amazon
    document.querySelectorAll('div[data-asin]').forEach(el => {
      const asin = el.getAttribute('data-asin')?.trim();
      if (asin && asin.length === 10 && asin.startsWith('B')) {
        
        // Extraer precio
        const priceEl = el.querySelector('.a-price .a-offscreen');
        const price = priceEl ? priceEl.textContent?.trim() || 'No disponible' : 'No disponible';
        
        // Extraer ventas pasadas (ej. "100+ bought in past month")
        const salesTextEl = Array.from(el.querySelectorAll('.a-size-base, .a-color-secondary')).find(
          e => {
            const txt = e.textContent?.toLowerCase() || '';
            return txt.includes('bought in past month') || txt.includes('comprados el mes pasado') || txt.includes('vendidos el mes pasado');
          }
        );
        const sales = salesTextEl ? salesTextEl.textContent?.trim() || 'Sin datos de ventas' : 'Sin datos de ventas';

        if (!results.find(r => r.asin === asin)) {
          results.push({ asin, price, sales });
        }
      }
    });

    return results;
  });

  return { sellerName, products: extractedProducts };
}