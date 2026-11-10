import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Download,
  AlertOctagon,
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  HelpCircle,
  ExternalLink,
  RotateCcw,
  CheckCircle,
  Info
} from 'lucide-react';
import TrustScore from './TrustScore';
import RiskPieChart from './RiskPieChart';
import RiskAnalysis from './RiskAnalysis';
import { downloadReport } from '../utils/reportGenerator';

export default function ResultCard({ result, onReset }) {
  if (!result) return null;

  // Trigger celebratory confetti if offer looks genuine!
  useEffect(() => {
    if (result.statusColor === 'green') {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [result.id, result.statusColor]);

  const isSafe = result.statusColor === 'green';
  const isDanger = result.statusColor === 'red';

  return (
    <div className="rounded-3xl glass-card border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/30 space-y-8 animate-fadeIn">
      {/* Top Banner / Target info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-cyan-800/40 font-semibold">
              {result.inputType}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Scanned on {result.date}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span>{result.companyName}</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1 break-all max-w-3xl">
            Target: <span className="text-slate-300">{result.target}</span>
          </p>
        </div>

        {/* Action Buttons: Reset & Download Report */}
        <div className="flex items-center gap-3 self-start lg:self-center">
          <button
            onClick={() => downloadReport(result)}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Report</span>
          </button>

          <button
            onClick={onReset}
            className="px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 flex items-center gap-1.5 transition-all"
            title="Scan another job offer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>New Scan</span>
          </button>
        </div>
      </div>

      {/* Grid: Trust Score Circular Gauge & Recharts Pie Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TrustScore
          trustScore={result.trustScore}
          riskPercentage={result.riskPercentage}
          status={result.status}
          riskLevel={result.riskLevel}
          statusColor={result.statusColor}
        />

        <RiskPieChart
          chartData={result.chartData}
          trustScore={result.trustScore}
          riskPercentage={result.riskPercentage}
        />
      </div>

      {/* F. AI Analysis Explanation Section */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-slate-900/90 border border-slate-800 relative overflow-hidden">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex-shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              AI Analysis Synthesis & Explanation
            </h4>
            <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
              {result.explanation}
            </p>
          </div>
        </div>
      </div>

      {/* E. 7 Risk Analysis Categories Breakdown */}
      <RiskAnalysis categories={result.categories} />

      {/* G. Actionable Recommendations Section */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
        <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-amber-400" /> Protective Next Steps & Recommendations
        </h4>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
          {result.recommendations.map((rec, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
            >
              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{rec}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400 font-mono">
          <span>Official Indian Cyber Crime Helpline: 1930</span>
          <span>Portal: cybercrime.gov.in</span>
        </div>
      </div>

      {/* Mandatory Simulated AI Disclaimer Card */}
      <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-amber-300 text-xs flex items-start gap-3">
        <AlertOctagon className="w-4 h-4 flex-shrink-0 text-amber-400 mt-0.5" />
        <div>
          <span className="font-bold">Demonstration Notice:</span> ScamShield AI is an educational college project prototype. The heuristic checks shown above are simulated based on client-side patterns. Always conduct primary due diligence through official corporate channels before exchanging credentials or signatures.
        </div>
      </div>
    </div>
  );
}
