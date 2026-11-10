import React, { useState } from 'react';
import {
  AlertTriangle,
  Ban,
  KeyRound,
  MessageSquareWarning,
  Globe2,
  CreditCard,
  ShieldCheck,
  CheckSquare,
  HelpCircle
} from 'lucide-react';

export default function SafetyTips() {
  const [checkedFlags, setCheckedFlags] = useState({});

  const toggleFlag = (id) => {
    setCheckedFlags((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const warnings = [
    {
      id: 'warn-1',
      title: 'Never pay money to get an internship',
      desc: 'Legitimate employers pay you for your work. Any demand for "registration fees", "training kits", or "laptop deposits" is an unambiguous indicator of fraud.',
      icon: Ban,
      color: 'from-rose-500 to-red-600',
      tag: 'Critical Rule'
    },
    {
      id: 'warn-2',
      title: 'Never share OTPs or passwords',
      desc: 'Recruiters never need your bank OTP, email passwords, or Aadhaar authentication codes. Fraudsters use screen-sharing or spoofed portals to hijack student accounts.',
      icon: KeyRound,
      color: 'from-amber-500 to-orange-600',
      tag: 'Identity Defense'
    },
    {
      id: 'warn-3',
      title: 'Avoid suspicious WhatsApp recruitment links',
      desc: 'Be skeptical of unsolicited WhatsApp or Telegram messages offering ₹2,000–₹5,000/day for liking YouTube videos, rating hotels, or simple form filling.',
      icon: MessageSquareWarning,
      color: 'from-purple-500 to-pink-600',
      tag: 'Phishing Vector'
    },
    {
      id: 'warn-4',
      title: 'Verify company domains',
      desc: 'Check the email extension carefully. Scammers use typo-squatted domains (e.g., info@google-careers-portal.com or gmail addresses) rather than official domains.',
      icon: Globe2,
      color: 'from-cyan-500 to-blue-600',
      tag: 'DNS Verification'
    },
    {
      id: 'warn-5',
      title: 'Never share sensitive banking information',
      desc: 'Never provide UPI PINs, credit card CVVs, or blank signed cheques. Legitimate salary credit requires only standard IFSC code and Account Number after formal contract signing.',
      icon: CreditCard,
      color: 'from-rose-600 to-red-700',
      tag: 'Financial Protection'
    },
    {
      id: 'warn-6',
      title: 'Check the company’s official careers page',
      desc: 'Always cross-reference the job posting on the company’s official website (company.com/careers). If the role is missing from their official portal, treat it with caution.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      tag: 'Primary Source'
    }
  ];

  const quickChecklist = [
    'The recruiter contacted you from a free email (@gmail.com / @yahoo.com)',
    'You are offered the job immediately without any technical interview',
    'They asked for a refundable security deposit or document verification fee',
    'The communication is strictly over WhatsApp or Telegram chats',
    'The salary is unrealistically high for simple copy-paste or rating work'
  ];

  return (
    <section id="safety-tips" className="py-20 bg-[#070b14] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-400 text-xs font-semibold mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Essential Student Safety Handbook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stay Safe While Searching for Jobs
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Recruitment scams frequently target college undergraduates. Memorize these golden rules to safeguard your finances and career credentials.
          </p>
        </div>

        {/* 6 Core Warning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warnings.map((warn) => {
            const Icon = warn.icon;
            return (
              <div
                key={warn.id}
                className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${warn.color} p-[1.5px] shadow-lg`}
                    >
                      <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {warn.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {warn.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {warn.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center text-xs font-mono text-slate-400">
                  <span>Enforced by Campus Placement Cells</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Red Flag Self-Check Panel */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-card border border-rose-500/30 bg-gradient-to-br from-rose-950/20 via-slate-900/80 to-slate-900/90 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-rose-400 uppercase tracking-widest font-semibold">
                Interactive Scam Self-Check
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Does your job offer match any of these red flags?
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                If you check even one box below, there is an extremely high probability that the offer is fraudulent.
              </p>
            </div>

            <div className="space-y-2.5 flex-1 max-w-lg">
              {quickChecklist.map((flag, idx) => {
                const isChecked = checkedFlags[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleFlag(idx)}
                    className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-rose-950/60 border-rose-500/60 text-rose-200'
                        : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-all ${
                        isChecked
                          ? 'bg-rose-600 border-rose-500 text-white'
                          : 'border-slate-600 bg-slate-900'
                      }`}
                    >
                      {isChecked && <CheckSquare className="w-3.5 h-3.5" />}
                    </div>
                    <span>{flag}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
