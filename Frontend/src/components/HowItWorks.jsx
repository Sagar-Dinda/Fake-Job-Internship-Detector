import React from 'react';
import { FileSearch, Cpu, Award, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onTryNow }) {
  const steps = [
    {
      step: '01',
      title: 'Submit Offer',
      subtitle: 'URL or Screenshot Upload',
      description:
        'Paste any job posting URL, internship portal link, or upload a screenshot of an advertisement received via WhatsApp, Telegram, or LinkedIn.',
      icon: FileSearch,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      step: '02',
      title: 'Analyze',
      subtitle: 'Multi-Vector Heuristic Inspection',
      description:
        'The system demonstrates a simulated scam detection process, checking upfront fee demands, disposable email domains, and spoofed company identities.',
      icon: Cpu,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      step: '03',
      title: 'Get Results',
      subtitle: 'Trust Score & Actionable Audit',
      description:
        'View the dynamic trust score, risk percentage, interactive pie chart, 7-category breakdown, and protective safety recommendations.',
      icon: Award,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#070b14] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40">
            Simplified Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            How ScamShield AI Works
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Three simple steps to verify employment legitimacy before sharing personal data or paying upfront deposits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl glass-card glass-card-hover p-8 border border-slate-800 flex flex-col justify-between group"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-6 font-mono font-extrabold text-4xl text-slate-800/60 group-hover:text-cyan-500/20 transition-colors pointer-events-none">
                  {item.step}
                </span>

                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} p-0.5 shadow-lg mb-6 group-hover:scale-105 transition-transform`}
                  >
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="text-xs font-medium text-slate-400 mb-3">{item.subtitle}</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>Explore Verification</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onTryNow}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
          >
            Ready to test an offer? Open the detector dashboard &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
