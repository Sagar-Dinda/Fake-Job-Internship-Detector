import React from 'react';
import {
  Globe,
  Camera,
  Gauge,
  Activity,
  PieChart,
  ShieldAlert,
  CheckCircle2,
  Lock,
  Layers,
  Cpu
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'URL Scam Detection',
      tag: 'Domain Intel',
      desc: 'Parses job posting URLs, unmasks shortlinks, evaluates domain age, and validates SSL certificates against phishing databases.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Screenshot Analysis',
      tag: 'Visual OCR',
      desc: 'Analyzes screenshots of chat messages, job posters, and offer letters to identify suspicious wording and payment requests.',
      icon: Camera,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Trust Score Calculation',
      tag: 'Weighted Scoring',
      desc: 'Aggregates indicators into an intuitive 0-100% authenticity rating with a circular cybersecurity gauge.',
      icon: Gauge,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Risk Percentage Visualization',
      tag: 'Threat Level',
      desc: 'Instantly categorizes listings into Low Risk, Medium Risk, or High Scam Risk with automated danger badges.',
      icon: Activity,
      color: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Visual Pie Chart',
      tag: 'Interactive Graphic',
      desc: 'Renders dynamic Recharts diagrams illustrating the proportion of genuine corporate signals versus detected red flags.',
      icon: PieChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Security Recommendations',
      tag: 'Actionable Advice',
      desc: 'Provides tailored preventive measures, official verification steps, and direct cybercrime reporting guidance.',
      icon: ShieldAlert,
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#070b14] relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Engineered to Protect Every Student
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Explore the core heuristic modules that make ScamShield AI a dependable shield for college placements and internship hunting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-slate-800/80 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feat.color} p-[1.5px] shadow-md`}
                    >
                      <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{feat.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Architecture Module</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
