import React, { useState } from 'react';
import { Link2, Search, XCircle, AlertCircle, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { PRESET_SAMPLES } from '../utils/analyzer';

export default function URLAnalyzer({ onAnalyze, isAnalyzing }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateAndSubmit = (urlToAnalyze) => {
    const targetUrl = (urlToAnalyze || url).trim();

    if (!targetUrl) {
      setError('Please enter a job or internship URL to analyze.');
      return;
    }

    // Basic URL validation
    const hasProtocol = /^https?:\/\//i.test(targetUrl);
    const validUrlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i;

    if (!hasProtocol && !validUrlPattern.test(targetUrl)) {
      setError('Please provide a valid website address (e.g., https://careers.company.com/job).');
      return;
    }

    setError('');
    const formattedUrl = hasProtocol ? targetUrl : `https://${targetUrl}`;
    onAnalyze({ type: 'url', input: formattedUrl });
  };

  const handleClear = () => {
    setUrl('');
    setError('');
  };

  const handlePresetClick = (sample) => {
    setUrl(sample.url);
    setError('');
    validateAndSubmit(sample.url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Link2 className="w-5 h-5 text-cyan-400" /> Option A: Job & Internship URL Analysis
          </h3>
          <p className="text-sm text-slate-400">
            Paste any application link, careers page, Google Form, or LinkedIn job posting.
          </p>
        </div>

        {/* Status indicator */}
        <span className="self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-400 border border-cyan-800/60">
          SSL / Domain Heuristics
        </span>
      </div>

      {/* Input container */}
      <div className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-4 text-slate-400 pointer-events-none">
            <Link2 className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (error) setError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') validateAndSubmit();
            }}
            placeholder="Paste job or internship offer URL here..."
            disabled={isAnalyzing}
            className="w-full pl-12 pr-12 py-4 rounded-xl glass-input text-slate-100 placeholder-slate-500 text-sm sm:text-base transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />

          {url && !isAnalyzing && (
            <button
              onClick={handleClear}
              className="absolute right-4 text-slate-400 hover:text-slate-200 transition-colors"
              title="Clear input"
            >
              <XCircle className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Validation Error Message */}
        {error && (
          <div className="flex items-center gap-2 text-rose-400 text-xs sm:text-sm mt-2.5 px-1 animate-fadeIn">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Button Row */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => validateAndSubmit()}
          disabled={isAnalyzing}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Analyzing Security Signals...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4 text-cyan-200" />
              <span>Analyze URL</span>
            </>
          )}
        </button>

        <button
          onClick={handleClear}
          disabled={!url || isAnalyzing}
          className="px-5 py-3 rounded-xl font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Clear
        </button>
      </div>

      {/* Demo Preset Chips for quick testing */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Quick Demo Test Cases (Click to populate & run):</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESET_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handlePresetClick(sample)}
              disabled={isAnalyzing}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all text-left flex items-center gap-2 ${
                sample.color === 'emerald'
                  ? 'bg-emerald-950/30 text-emerald-300 border-emerald-800/60 hover:bg-emerald-900/40'
                  : sample.color === 'rose'
                  ? 'bg-rose-950/30 text-rose-300 border-rose-800/60 hover:bg-rose-900/40'
                  : 'bg-amber-950/30 text-amber-300 border-amber-800/60 hover:bg-amber-900/40'
              }`}
            >
              <span className="font-medium">{sample.label}</span>
              <span className="text-[10px] opacity-75 font-mono">[{sample.tag}]</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
