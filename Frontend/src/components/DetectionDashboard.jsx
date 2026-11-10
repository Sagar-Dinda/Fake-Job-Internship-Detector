import React, { useState, useRef } from 'react';
import { Link2, Image as ImageIcon, ShieldAlert, Sparkles, Loader2, Info } from 'lucide-react';
import URLAnalyzer from './URLAnalyzer';
import ImageAnalyzer from './ImageAnalyzer';
import ResultCard from './ResultCard';
import { analyzeOffer } from '../utils/analyzer';

export default function DetectionDashboard({ onAnalysisComplete }) {
  const [activeTab, setActiveTab] = useState('url'); // 'url' | 'image'
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState('');
  const [currentResult, setCurrentResult] = useState(null);
  const dashboardRef = useRef(null);

  const runSimulatedScan = async (params) => {
    setIsAnalyzing(true);
    setCurrentResult(null);

    // Dynamic scanning steps for cyber dashboard authenticity
    const steps = [
      'Initializing heuristic neural scanner...',
      'Verifying domain certificates & DNS registry...',
      'Analyzing text for upfront fee demands...',
      'Cross-checking recruiter contact channels...',
      'Synthesizing multi-vector risk index...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setAnalysisStep(steps[i]);
      await new Promise((r) => setTimeout(r, 350));
    }

    const result = analyzeOffer(params);
    setCurrentResult(result);
    setIsAnalyzing(false);
    setAnalysisStep('');

    if (onAnalysisComplete) {
      onAnalysisComplete(result);
    }

    // Scroll slightly to reveal result
    setTimeout(() => {
      const resultElem = document.getElementById('detection-results');
      if (resultElem) {
        resultElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleReset = () => {
    setCurrentResult(null);
  };

  return (
    <section id="detection" ref={dashboardRef} className="py-20 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Scam Detection Console</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Verify Any Job or Internship Offer
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mt-4">
            Inspect suspicious recruitment links or upload posters and WhatsApp messages. Get an instant, multi-factor authenticity audit.
          </p>

          {/* Prominent Simulated AI Disclaimer Banner */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-400 text-left">
            <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>
              <strong>Note:</strong> Analysis is simulated client-side for demonstration until a live AI/OCR backend model is hooked.
            </span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-1.5 shadow-xl max-w-md w-full">
            <button
              onClick={() => setActiveTab('url')}
              disabled={isAnalyzing}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'url'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Link2 className="w-4 h-4" />
              <span>URL Analysis</span>
            </button>

            <button
              onClick={() => setActiveTab('image')}
              disabled={isAnalyzing}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'image'
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Image Analysis</span>
            </button>
          </div>
        </div>

        {/* Input Card Container */}
        <div className="rounded-3xl glass-card border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

          {activeTab === 'url' ? (
            <URLAnalyzer onAnalyze={runSimulatedScan} isAnalyzing={isAnalyzing} />
          ) : (
            <ImageAnalyzer onAnalyze={runSimulatedScan} isAnalyzing={isAnalyzing} />
          )}

          {/* Active Scanning Animation Overlay Bar */}
          {isAnalyzing && (
            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center gap-3 animate-fadeIn">
              <Loader2 className="w-5 h-5 text-cyan-400 animate-spin flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-mono text-cyan-300 font-semibold">{analysisStep}</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse w-3/4 rounded-full" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Result Output Card */}
        {currentResult && (
          <div id="detection-results" className="mt-12">
            <ResultCard result={currentResult} onReset={handleReset} />
          </div>
        )}
      </div>
    </section>
  );
}
