import { Browser, Page, chromium } from 'playwright';
import * as path from 'path';

export interface ScraperSession {
  browser: Browser;
  page: Page;
}

export async function initAmazonSession(): Promise<ScraperSession> {
  // Lanzamos un navegador limpio e independiente sin problemas de perfiles bloqueados
  const browser = await chromium.launch({
    headless: false, // Lo dejamos visible para poder monitorear qué hace en Amazon
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled' // Oculta que es un bot
    ]
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 720 }
  });

  const page = await context.newPage();
  return { browser, page };
}

export async function scrapeAmazonStorefront(session: ScraperSession, amazonStorefrontUrl: string): Promise<string[]> {
  const { page } = session;
  
  // Transformamos la URL si es necesario para asegurarnos de que apunte directo al listado de productos de Amazon
  console.log(`[Amazon Scraper] Visitando el Storefront directamente en Amazon: ${amazonStorefrontUrl}`);
  
  await page.goto(amazonStorefrontUrl, { waitUntil: 'networkidle', timeout: 60000 });
  
  // Espera de cortesía humana para evitar sospechas de Amazon
  const humanDelay = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);
  console.log(`[Amazon Scraper] Simulando lectura humana. Esperando ${humanDelay / 1000} segundos...`);
  await page.waitForTimeout(humanDelay);

  console.log('[Amazon Scraper] Extrayendo ASINs expuestos en la tienda...');
  
  // Selector nativo de Amazon para buscar códigos ASIN en los elementos del grid de productos
  const extractedAsins = await page.evaluate(() => {
    const asins: string[] = [];
    
    // Buscamos en los atributos "data-asin" de los bloques de productos de Amazon
    document.querySelectorAll('[data-asin]').forEach(el => {
      const asin = el.getAttribute('data-asin')?.trim();
      if (asin && asin.length === 10 && asin.startsWith('B')) {
        if (!asins.includes(asin)) {
          asins.push(asin);
        }
      }
    });

    // Búsqueda secundaria por expresiones regulares en enlaces por si el diseño varía
    if (asins.length === 0) {
      document.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href') || '';
        const match = href.match(/\/dp\/([B][A-Z0-9]{9})/i) || href.match(/\/gp\/product\/([B][A-Z0-9]{9})/i);
        if (match && match[1]) {
          const asin = match[1].toUpperCase();
          if (!asins.includes(asin)) {
            asins.push(asin);
          }
        }
      });
    }
    
    return asins;
  });

  return extractedAsins;
}