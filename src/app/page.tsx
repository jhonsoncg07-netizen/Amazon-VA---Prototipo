"use client";

import { useEffect, useState } from 'react';
import AddCompetitorForm from '@/components/AddCompetitorForm';
import CompetitorTable from '@/components/CompetitorTable';
import { Competitor, ScanRecord } from '@/lib/types';

export default function Home() {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [scans, setScans] = useState<ScanRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/competitors');
      const data = await res.json();
      setCompetitors(data.competitors || []);
      // the scans are not fetched from /api/competitors right now. 
      // I'll update the API or create a new route if I haven't included scans in the GET yet.
      // Wait, let's create a full dashboard endpoint or update the existing one.
      
      const scansRes = await fetch('/api/scans');
      if (scansRes.ok) {
        const scansData = await scansRes.json();
        setScans(scansData.scans || []);
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-[1600px] mx-auto">
      <header className="mb-10 pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.3)]">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
            Amazon Storefront Spy
          </h1>
        </div>
        <p className="text-zinc-400 text-sm">Real-time competitor inventory monitoring and alerts.</p>
      </header>

      <AddCompetitorForm onAdd={fetchData} />

      {loading ? (
        <div className="glass-panel h-64 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/10 to-zinc-800/10 rounded-xl blur"></div>
          <CompetitorTable competitors={competitors} scans={scans} />
        </div>
      )}
    </main>
  );
}
