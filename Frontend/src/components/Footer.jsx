import React from 'react';
import { ShieldCheck, Heart, Github, ExternalLink, Mail, Phone, ShieldAlert, Award } from 'lucide-react';

export default function Footer({ onOpenAbout, onOpenContact, onOpenPrivacy, onOpenTerms }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#070b14] rounded-[9px] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                ScamShield <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">AI</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              An intelligent cybersecurity prototype created to defend college students and early-career jobseekers from predatory recruitment fraud, fake internships, and deposit scams.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Second-Year CSE Capstone Showcase</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('detection')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Detect Scam
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('features')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('safety-tips')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Safety Handbook
                </button>
              </li>
            </ul>
          </div>

          {/* Project & Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Project
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency Helplines */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Cyber Incident Desk
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-400">National Cyber Crime Reporting Helpline:</p>
              <div className="font-mono text-cyan-400 font-bold text-sm bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                Toll Free: 1930
              </div>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 text-xs mt-1"
              >
                <span>cybercrime.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Mandatory Project Disclaimer Notice */}
        <div className="my-8 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> ScamShield AI is an educational demonstration project. Results are simulated and should not be considered a guarantee of authenticity or fraud detection. Always independently verify job offers before sharing personal information or making payments.
          </p>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <div>
            &copy; {new Date().getFullYear()} ScamShield AI. Developed for Student Career Safety. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono">
            Built with React, Tailwind CSS & Recharts
          </div>
        </div>
      </div>
    </footer>
  );
}
