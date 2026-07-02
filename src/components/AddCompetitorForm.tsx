"use client";

import { useState } from 'react';

export default function AddCompetitorForm({ onAdd }: { onAdd: () => void }) {
  const [sellerId, setSellerId] = useState('');
  const [name, setName] = useState('');
  const [sellerAmpUrl, setSellerAmpUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/competitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sellerId, name, sellerAmpUrl }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add competitor');
      }

      setSellerId('');
      setName('');
      setSellerAmpUrl('');
      onAdd();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 mb-8 transition-all duration-300 hover:border-zinc-700/80">
      <h2 className="text-xl font-semibold mb-4 text-white">Add New Competitor</h2>
      
      {error && <div className="mb-4 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">{error}</div>}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">Seller ID</label>
          <input
            type="text"
            required
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
            value={sellerId}
            onChange={(e) => setSellerId(e.target.value)}
            placeholder="e.g. A294P4X9EWVXLJ"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">Store Name</label>
          <input
            type="text"
            required
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Acme Tech Store"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">SellerAmp URL (Optional)</label>
          <input
            type="url"
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
            value={sellerAmpUrl}
            onChange={(e) => setSellerAmpUrl(e.target.value)}
            placeholder="https://sas.selleramp.com/..."
          />
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-lg shadow-lg shadow-green-900/20 transition-all duration-300 hover:shadow-green-900/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Adding...
            </>
          ) : (
            'Add Competitor'
          )}
        </button>
      </div>
    </form>
  );
}
