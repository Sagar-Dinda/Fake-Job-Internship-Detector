import React from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Building2,
  Mail,
  FileText,
  CreditCard,
  Globe,
  PhoneCall,
  DollarSign,
  ShieldAlert,
  ShieldCheck
} from 'lucide-react';

const CATEGORY_ICONS = {
  'Company Information': Building2,
  'Recruitment Email Verification': Mail,
  'Job Description Authenticity': FileText,
  'Payment Request Detection': CreditCard,
  'Suspicious URL Detection': Globe,
  'Contact Information': PhoneCall,
  'Salary and Benefits Verification': DollarSign
};

export default function RiskAnalysis({ categories = [] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" /> Multi-Vector Heuristic Breakdown
          </h4>
          <p className="text-xs text-slate-400">
            Inspection across all 7 critical recruitment scam vectors.
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">
          7 Categories Scanned
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {categories.map((cat, index) => {
          const IconComponent = CATEGORY_ICONS[cat.name] || ShieldAlert;
          const isSafe = cat.status === 'safe';
          const isSuspicious = cat.status === 'suspicious';
          const isUncertain = cat.status === 'uncertain';

          return (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-all ${
                isSafe
                  ? 'bg-slate-900/60 border-emerald-950 hover:border-emerald-800/60 hover:bg-emerald-950/20'
                  : isSuspicious
                  ? 'bg-slate-900/60 border-rose-950 hover:border-rose-800/60 hover:bg-rose-950/20'
                  : 'bg-slate-900/60 border-amber-950 hover:border-amber-800/60 hover:bg-amber-950/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`p-2 rounded-lg ${
                      isSafe
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
                        : isSuspicious
                        ? 'bg-rose-950 text-rose-400 border border-rose-800/60'
                        : 'bg-amber-950 text-amber-400 border border-amber-800/60'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      {cat.name}
                    </span>
                    <h5
                      className={`text-sm font-bold ${
                        isSafe ? 'text-emerald-300' : isSuspicious ? 'text-rose-300' : 'text-amber-300'
                      }`}
                    >
                      {cat.title}
                    </h5>
                  </div>
                </div>

                {/* Status Indicator Icon */}
                <div className="flex-shrink-0 pt-0.5">
                  {isSafe && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                  {isSuspicious && <XCircle className="w-5 h-5 text-rose-400" />}
                  {isUncertain && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                </div>
              </div>

              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed pl-1">
                {cat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
