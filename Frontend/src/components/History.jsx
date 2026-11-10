import React from 'react';
import { History as HistoryIcon, Trash2, Clock, ShieldCheck, ShieldAlert, AlertTriangle, ArrowUpRight } from 'lucide-react';

export default function History({ history = [], onClearHistory, onSelectHistoryItem }) {
  return (
    <section id="history" className="py-16 bg-[#070b14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
              <HistoryIcon className="w-3.5 h-3.5" /> Client-Side Session Storage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Recent Analysis History
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Your recent verification records cached locally in your browser.
            </p>
          </div>

          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="self-start sm:self-center px-4 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/50 flex items-center gap-1.5 transition-all"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="p-12 text-center rounded-2xl glass-card border border-slate-800 text-slate-400">
            <Clock className="w-10 h-10 mx-auto text-slate-600 mb-3" />
            <p className="text-sm font-medium">No recent analysis history found.</p>
            <p className="text-xs text-slate-500 mt-1">
              Run a URL or screenshot scan in the detector above to log records here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl glass-card border border-slate-800 shadow-xl">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs font-mono uppercase bg-slate-900/90 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Company / Job Offer</th>
                  <th className="py-4 px-6">Analysis Type</th>
                  <th className="py-4 px-6 text-center">Trust Score</th>
                  <th className="py-4 px-6">Risk Status</th>
                  <th className="py-4 px-6 text-right">Date & Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {history.map((item) => {
                  const isSafe = item.statusColor === 'green';
                  const isDanger = item.statusColor === 'red';

                  return (
                    <tr
                      key={item.id}
                      onClick={() => onSelectHistoryItem && onSelectHistoryItem(item)}
                      className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-6">
                        <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                          <span>{item.companyName}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                        </div>
                        <div className="text-xs text-slate-400 truncate max-w-xs font-mono mt-0.5">
                          {item.target}
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                          {item.inputType}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-center">
                        <span
                          className={`font-mono font-bold text-sm ${
                            isSafe
                              ? 'text-emerald-400'
                              : isDanger
                              ? 'text-rose-400'
                              : 'text-amber-400'
                          }`}
                        >
                          {item.trustScore}%
                        </span>
                      </td>

                      <td className="py-4 px-6">
                        {isSafe && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/70 text-emerald-400 border border-emerald-800/50">
                            <ShieldCheck className="w-3.5 h-3.5" /> Likely Genuine
                          </span>
                        )}
                        {isDanger && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-950/70 text-rose-400 border border-rose-800/50">
                            <ShieldAlert className="w-3.5 h-3.5" /> High Risk Scam
                          </span>
                        )}
                        {!isSafe && !isDanger && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-950/70 text-amber-400 border border-amber-800/50">
                            <AlertTriangle className="w-3.5 h-3.5" /> Manual Verify
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6 text-right text-xs font-mono text-slate-400 whitespace-nowrap">
                        {item.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
