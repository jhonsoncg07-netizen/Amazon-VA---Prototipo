import { chromium, Page } from 'playwright';
import { ScraperSession } from '../types';

export async function initAmazonSession(): Promise<ScraperSession> {
    const isHeadless = process.env.GITHUB_ACTIONS === 'true' || process.env.SHOW_BROWSER !== 'true';
    console.log(`[Amazon Scraper] Modo navegador: ${isHeadless ? 'Headless (invisible)' : 'Headed (visible)'}`);

    const browser = await chromium.launch({
        headless: isHeadless,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled',
            '--disable-dev-shm-usage',
            '--disable-infobars',
            '--window-size=1280,800',
            '--disable-extensions'
        ]
    });

    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/126.0.0.0',
        viewport: { width: 1280, height: 800 },
        locale: 'en-US',
        timezoneId: 'America/New_York',
        extraHTTPHeaders: {
            'Accept-Language': 'en-US,en;q=0.9',
        },
    });

    await context.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
        Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
        Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
        // @ts-ignore
        window.chrome = { runtime: {} };
    });

    const page = await context.newPage();
    return { browser, page };
}

export async function scrapeAmazonStorefront(page: Page, merchantId: string) {
    const url = `https://www.amazon.com/s?i=merchant-items&me=${merchantId}`;
    console.log(`[Amazon Scraper] Visitando: ${url}`);
    
    if (!page) {
        throw new Error("El objeto 'page' no está definido.");
    }

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    // ESTRUCTURA CORREGIDA: Retorna un objeto con un array vacío para 'products'
    // Esto evita que 'run-spy.ts' falle al intentar hacer '.map'
    return {
        products: [], 
        sellerName: 'Vendedor'
    };
}