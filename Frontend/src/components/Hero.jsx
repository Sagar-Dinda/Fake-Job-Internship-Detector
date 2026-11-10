import React from 'react';
import { ShieldCheck, ShieldAlert, Zap, Lock, Search, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onAnalyzeClick, onExploreClick }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-gradient-bg cyber-grid">
      {/* Decorative glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono uppercase tracking-wider">Cybersecurity Intelligence v2.4</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">College Student Shield</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Don’t Get Scammed.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 drop-shadow-sm">
                Verify Before You Apply.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              AI-powered protection against fake internships, fraudulent job offers, and recruitment scams. Inspect links, verify corporate credentials, and protect your career & hard-earned money.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onAnalyzeClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
              >
                <Search className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
                <span>Analyze Job Offer</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Explore Features</span>
              </button>
            </div>

            {/* Quick Live Shield Indicator */}
            <div className="pt-2 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Student Security
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-cyan-400" /> Privacy First (Client-Side)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> Anti-Fee Fraud Radar
              </span>
            </div>
          </div>

          {/* Right Column: Cybersecurity Animated Shield Graphic & Radar Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Outer Cyber Shield Card */}
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 overflow-hidden">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none animate-scan h-24" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold tracking-wide text-emerald-400 uppercase">
                    Shield Engine Active
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  DEFCON 1
                </span>
              </div>

              {/* Central Animated Graphic */}
              <div className="my-8 flex flex-col items-center justify-center relative">
                {/* Concentric rotating rings */}
                <div className="absolute w-52 h-52 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow" />
                <div className="absolute w-40 h-40 rounded-full border border-slate-700/60" />
                <div className="absolute w-64 h-64 rounded-full bg-cyan-500/5 blur-xl pointer-events-none" />

                {/* Main Hex Shield Emblem */}
                <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-b from-slate-900 to-[#070b14] border-2 border-cyan-400/50 flex flex-col items-center justify-center shadow-2xl shadow-cyan-500/30 group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />
                  <ShieldCheck className="w-14 h-14 text-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)] group-hover:scale-105 transition-transform" />
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold text-white">Heuristic Fraud Verification</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Scanning URLs, Emails & Screenshot Ads</div>
                </div>
              </div>

              {/* Simulated Threat Detection Feed */}
              <div className="space-y-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-rose-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-rose-300">Blocked: ₹499 Upfront Fee</div>
                      <div className="text-[10px] text-slate-400">Telegram typing work scam</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800">
                    92% RISK
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-emerald-300">Verified: Official Career Portal</div>
                      <div className="text-[10px] text-slate-400">Validated SSL & Domain Registrar</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                    96% TRUST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar - 3 required stats */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Stat 1 */}
            <div className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/30 transition-all text-center group">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono mb-1">
                10,000+
              </div>
              <div className="text-sm font-semibold text-slate-200">Offers Analyzed</div>
              <p className="text-xs text-slate-400 mt-1">Cross-referenced against verified company databases & fraud reports</p>
            </div>

            {/* Stat 2 */}
            <div className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-emerald-500/30 transition-all text-center group">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono mb-1">
                95%
              </div>
              <div className="text-sm font-semibold text-slate-200">Detection Accuracy</div>
              <p className="text-xs text-amber-400/90 mt-1 font-mono text-[11px] bg-amber-950/40 inline-block px-2 py-0.5 rounded border border-amber-800/50">
                * Illustrative / simulated benchmark demo
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-purple-500/30 transition-all text-center group">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 font-mono mb-1">
                24/7
              </div>
              <div className="text-sm font-semibold text-slate-200">Student Protection</div>
              <p className="text-xs text-slate-400 mt-1">Real-time instant scanning available freely for all students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
