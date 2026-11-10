import React from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle, Activity } from 'lucide-react';

export default function TrustScore({ trustScore, riskPercentage, status, riskLevel, statusColor }) {
  // SVG Circular progress math
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (trustScore / 100) * circumference;

  const isSafe = statusColor === 'green';
  const isDanger = statusColor === 'red';

  const strokeColor = isSafe ? '#10b981' : isDanger ? '#ef4444' : '#f59e0b';
  const glowColor = isSafe
    ? 'rgba(16, 185, 129, 0.4)'
    : isDanger
    ? 'rgba(239, 68, 68, 0.4)'
    : 'rgba(245, 158, 11, 0.4)';

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div
        className="absolute w-44 h-44 rounded-full blur-3xl pointer-events-none -z-10 opacity-30"
        style={{ backgroundColor: strokeColor }}
      />

      {/* Detection Status Pill Badge */}
      <div className="mb-4">
        {isSafe && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-950/40 animate-fadeIn">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Likely Genuine • Low Risk</span>
          </div>
        )}
        {isDanger && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/50 text-rose-400 text-xs font-semibold shadow-lg shadow-rose-950/40 animate-fadeIn">
            <ShieldAlert className="w-4 h-4 text-rose-400 animate-bounce" />
            <span>Potential Scam Detected • High Risk</span>
          </div>
        )}
        {!isSafe && !isDanger && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-400 text-xs font-semibold shadow-lg shadow-amber-950/40 animate-fadeIn">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Needs Manual Verification • Medium Risk</span>
          </div>
        )}
      </div>

      {/* Circular Progress Gauge */}
      <div className="relative w-48 h-48 flex items-center justify-center my-2">
        <svg className="w-48 h-48 -rotate-90 transform" viewBox="0 0 200 200">
          {/* Background circle track */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#1e293b"
            strokeWidth="14"
            fill="transparent"
          />
          {/* Animated Value Stroke */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke={strokeColor}
            strokeWidth="14"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            style={{
              transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: `drop-shadow(0 0 8px ${glowColor})`
            }}
          />
        </svg>

        {/* Inner Score Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Trust Score
          </span>
          <span
            className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight my-0.5"
            style={{ color: strokeColor }}
          >
            {trustScore}%
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Authenticity Index
          </span>
        </div>
      </div>

      {/* Secondary Metrics Bar */}
      <div className="w-full grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800 text-center">
        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="text-[11px] font-mono text-slate-400 uppercase">Trust Level</div>
          <div className={`text-base font-bold font-mono mt-0.5 ${isSafe ? 'text-emerald-400' : isDanger ? 'text-rose-400' : 'text-amber-400'}`}>
            {trustScore}%
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="text-[11px] font-mono text-slate-400 uppercase">Risk Level</div>
          <div className={`text-base font-bold font-mono mt-0.5 ${riskPercentage > 40 ? 'text-rose-400' : 'text-emerald-400'}`}>
            {riskPercentage}%
          </div>
        </div>
      </div>
    </div>
  );
}
