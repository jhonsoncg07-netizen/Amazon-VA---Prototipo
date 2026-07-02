import { Competitor, ScanRecord } from '@/lib/types';

interface CompetitorTableProps {
  competitors: Competitor[];
  scans: ScanRecord[];
}

export default function CompetitorTable({ competitors, scans }: CompetitorTableProps) {
  if (competitors.length === 0) {
    return (
      <div className="glass-panel p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 mb-4">
          <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <h3 className="text-xl font-medium text-white mb-2">No competitors yet</h3>
        <p className="text-zinc-400">Add a competitor above to start monitoring their storefront.</p>
      </div>
    );
  }

  // Get all unique timestamps from scans, sorted ascending
  const uniqueTimestamps = Array.from(new Set(scans.map(s => s.timestamp)))
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return (
    <div className="glass-panel overflow-hidden">
      <div className="overflow-x-auto scrollbar-hide pb-2">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr>
              <th className="sticky left-0 z-20 bg-zinc-900/95 backdrop-blur-xl border-b border-r border-zinc-800 p-4 font-semibold text-zinc-300 min-w-[200px] shadow-[4px_0_12px_rgba(0,0,0,0.3)]">
                Competitor
              </th>
              {uniqueTimestamps.map((ts, idx) => (
                <th key={ts} className="border-b border-zinc-800 p-4 font-semibold text-zinc-300 min-w-[280px]">
                  <div className="text-sm">Scan {idx + 1}</div>
                  <div className="text-xs font-normal text-zinc-500">
                    {new Date(ts).toLocaleString()}
                  </div>
                </th>
              ))}
              {uniqueTimestamps.length === 0 && (
                <th className="border-b border-zinc-800 p-4 font-semibold text-zinc-500 italic">
                  Awaiting first scan...
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor) => (
              <tr key={competitor.id} className="group hover:bg-zinc-800/30 transition-colors">
                <td className="sticky left-0 z-20 bg-zinc-900/95 backdrop-blur-xl border-b border-r border-zinc-800 p-4 group-hover:bg-zinc-800/80 transition-colors shadow-[4px_0_12px_rgba(0,0,0,0.3)]">
                  <div className="font-medium text-white">{competitor.name}</div>
                  <div className="text-xs text-zinc-500 truncate max-w-[180px] mt-1" title={competitor.sellerId}>
                    ID: {competitor.sellerId}
                  </div>
                  {competitor.sellerAmpUrl && (
                    <a 
                      href={competitor.sellerAmpUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-green-500 hover:text-green-400 mt-2 inline-flex items-center gap-1 transition-colors"
                    >
                      SellerAmp
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </td>
                
                {uniqueTimestamps.map(ts => {
                  const scan = scans.find(s => s.competitorId === competitor.id && s.timestamp === ts);
                  
                  if (!scan) {
                    return (
                      <td key={`${competitor.id}-${ts}`} className="border-b border-zinc-800/50 p-4 text-zinc-600 text-sm">
                        -
                      </td>
                    );
                  }
                  
                  return (
                    <td key={scan.id} className="border-b border-zinc-800/50 p-4 align-top">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-zinc-300 bg-zinc-800/50 px-2 py-1 rounded-md border border-zinc-700/50">
                          {scan.asins.length} ASINs
                        </span>
                        {scan.newAsinsDetected.length > 0 && (
                          <span className="text-xs font-semibold text-green-400 bg-green-900/30 border border-green-800/50 px-2 py-1 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                            +{scan.newAsinsDetected.length} New
                          </span>
                        )}
                      </div>
                      
                      {scan.newAsinsDetected.length > 0 && (
                        <div className="mt-3">
                          <div className="text-xs text-zinc-500 mb-1">Detected ASINs:</div>
                          <div className="flex flex-wrap gap-1">
                            {scan.newAsinsDetected.slice(0, 5).map(asin => (
                              <span key={asin} className="text-[10px] font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">
                                {asin}
                              </span>
                            ))}
                            {scan.newAsinsDetected.length > 5 && (
                              <span className="text-[10px] text-zinc-500 px-1.5 py-0.5">
                                +{scan.newAsinsDetected.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </td>
                  );
                })}
                {uniqueTimestamps.length === 0 && (
                  <td className="border-b border-zinc-800/50 p-4"></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
