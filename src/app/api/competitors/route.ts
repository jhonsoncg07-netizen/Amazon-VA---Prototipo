import { NextResponse } from 'next/server';
import { addCompetitor, getCompetitors } from '@/lib/db';

export async function GET() {
  try {
    const competitors = await getCompetitors();
    return NextResponse.json({ competitors });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sellerId, name, sellerAmpUrl } = body;

    if (!sellerId || !name) {
      return NextResponse.json(
        { error: 'Missing sellerId or name' },
        { status: 400 }
      );
    }

    const newCompetitor = await addCompetitor(sellerId, name, sellerAmpUrl || '');
    return NextResponse.json({ success: true, competitor: newCompetitor });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 400 });
  }
}
