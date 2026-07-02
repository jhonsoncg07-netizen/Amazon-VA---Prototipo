import { NextResponse } from 'next/server';
import { getAllScans } from '@/lib/db';

export async function GET() {
  try {
    const scans = await getAllScans();
    return NextResponse.json({ scans });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
