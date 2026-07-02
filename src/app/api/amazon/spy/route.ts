import { NextResponse } from 'next/server';
import { getCompetitors, getLastScan, saveScan } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sellerId, currentAsins } = body;

    if (!sellerId || !Array.isArray(currentAsins)) {
      return NextResponse.json(
        { error: 'Missing sellerId or currentAsins is not an array' },
        { status: 400 }
      );
    }

    const competitors = await getCompetitors();
    const competitor = competitors.find(c => c.sellerId === sellerId);

    if (!competitor) {
      return NextResponse.json({ error: 'Competitor not found' }, { status: 404 });
    }

    const lastScan = await getLastScan(sellerId);
    let newAsinsDetected: string[] = [];

    if (lastScan) {
      const previousAsinsSet = new Set(lastScan.asins);
      newAsinsDetected = currentAsins.filter(asin => !previousAsinsSet.has(asin));
    } else {
      // First scan, technically all are "new", but we usually don't alert on the initial baseline scan.
      // Let's keep it empty for the very first baseline scan to avoid alert spam.
      newAsinsDetected = [];
    }

    // Save the new scan
    const savedScan = await saveScan(competitor.id, currentAsins, newAsinsDetected);

    // Simulated Telegram Webhook
    if (newAsinsDetected.length > 0) {
      console.log('====================================================');
      console.log('🚀 [TELEGRAM ALERT SIMULATION]');
      console.log(`🏪 Seller: ${competitor.name} (${competitor.sellerId})`);
      console.log(`📦 New Products Detected: ${newAsinsDetected.length}`);
      console.log(`🔗 ASINs: ${newAsinsDetected.join(', ')}`);
      console.log('====================================================');
    }

    return NextResponse.json({
      success: true,
      scanId: savedScan.id,
      newAsinsDetected,
      totalAsins: currentAsins.length
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
