import fs from 'fs/promises';
import path from 'path';
import { Competitor, ScanRecord } from './types';

const DB_FILE = path.join(process.cwd(), 'data', 'mock-db.json');

interface DatabaseSchema {
  competitors: Competitor[];
  scans: ScanRecord[];
}

const DEFAULT_DB: DatabaseSchema = {
  competitors: [],
  scans: [],
};

export async function initDb() {
  try {
    await fs.mkdir(path.dirname(DB_FILE), { recursive: true });
    try {
      await fs.access(DB_FILE);
    } catch {
      await fs.writeFile(DB_FILE, JSON.stringify(DEFAULT_DB, null, 2));
    }
  } catch (error) {
    console.error('Error initializing DB:', error);
  }
}

async function readDb(): Promise<DatabaseSchema> {
  await initDb();
  try {
    const data = await fs.readFile(DB_FILE, 'utf-8');
    return JSON.parse(data) as DatabaseSchema;
  } catch (error) {
    console.error('Error reading DB:', error);
    return DEFAULT_DB;
  }
}

async function writeDb(data: DatabaseSchema): Promise<void> {
  await initDb();
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

export async function getCompetitors(): Promise<Competitor[]> {
  const db = await readDb();
  return db.competitors;
}

export async function addCompetitor(sellerId: string, name: string, sellerAmpUrl: string): Promise<Competitor> {
  const db = await readDb();
  
  if (db.competitors.some(c => c.sellerId === sellerId)) {
    throw new Error('Competitor already exists');
  }

  const newCompetitor: Competitor = {
    id: crypto.randomUUID(),
    sellerId,
    name,
    sellerAmpUrl,
  };

  db.competitors.push(newCompetitor);
  await writeDb(db);
  return newCompetitor;
}

export async function getLastScan(sellerId: string): Promise<ScanRecord | null> {
  const db = await readDb();
  const competitor = db.competitors.find(c => c.sellerId === sellerId);
  if (!competitor) return null;

  const competitorScans = db.scans
    .filter(s => s.competitorId === competitor.id)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return competitorScans.length > 0 ? competitorScans[0] : null;
}

export async function getScans(sellerId: string): Promise<ScanRecord[]> {
  const db = await readDb();
  const competitor = db.competitors.find(c => c.sellerId === sellerId);
  if (!competitor) return [];

  return db.scans
    .filter(s => s.competitorId === competitor.id)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export async function getAllScans(): Promise<ScanRecord[]> {
  const db = await readDb();
  return db.scans;
}

export async function saveScan(competitorId: string, asins: string[], newAsinsDetected: string[]): Promise<ScanRecord> {
  const db = await readDb();
  
  const scan: ScanRecord = {
    id: crypto.randomUUID(),
    competitorId,
    timestamp: new Date().toISOString(),
    asins,
    newAsinsDetected,
  };

  db.scans.push(scan);
  await writeDb(db);
  return scan;
}
