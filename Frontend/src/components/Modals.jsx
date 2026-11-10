import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Send, CheckCircle2, User, School, Sparkles, Lock, FileText, Phone } from 'lucide-react';

export function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0b1120] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">About ScamShield AI</h3>
            <span className="text-xs font-mono text-cyan-400">Computer Science & Engineering Capstone</span>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>ScamShield AI – Fake Job & Internship Detector</strong> is a specialized cybersecurity platform conceptualized to counter the rampant surge of predatory employment fraud targeting undergraduate students, fresh graduates, and junior tech aspirants.
          </p>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Academic Project Scope:
            </h4>
            <p className="text-xs text-slate-300">
              This frontend implementation serves as a functional demonstration for a 2nd-year B.Tech CSE project. It demonstrates modern UI/UX design, modular component patterns, interactive data visualization via Recharts, and simulated heuristic threat scoring.
            </p>
          </div>

          <h4 className="text-sm font-bold text-white pt-2">Future AI Backend Integration Roadmap:</h4>
          <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
            <li>FastAPI / Python asynchronous microservices backend.</li>
            <li>Optical Character Recognition (OCR) using Tesseract & Vision LLM models for scanning handwritten & stamped letters.</li>
            <li>Real-time DNS, WHOIS, and SSL certificate expiration telemetry.</li>
            <li>National Cyber Crime portal API hook for cross-referencing blacklist hashes.</li>
          </ul>

          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Report a Scam Link',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate auto-close or reset
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0b1120] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Contact & Report Incident</h3>
            <span className="text-xs font-mono text-slate-400">Student Cyber Incident Response</span>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-white">Report Submitted Successfully</h4>
            <p className="text-xs text-slate-300">
              Thank you for contributing to campus cybersecurity. Our student response desk has logged this incident report.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">College Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="student@college.edu.in"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Incident Category</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100 bg-[#0d1527]"
              >
                <option value="Report a Scam Link">Report a Scam Link / URL</option>
                <option value="Report Upfront Fee Demand">Report Upfront Fee Demand</option>
                <option value="Report WhatsApp / Telegram Recruitment">Report WhatsApp / Telegram Recruitment</option>
                <option value="General Feedback">General College Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Details / Suspicious Link</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Paste the recruiter's message, phone number, or suspicious website link..."
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Incident</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function LegalModal({ isOpen, onClose, mode = 'privacy' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0b1120] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {mode === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <span className="text-xs font-mono text-slate-400">ScamShield AI Governance</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {mode === 'privacy' ? (
            <>
              <p>
                <strong>Client-Side Processing:</strong> ScamShield AI operates primarily within your local web browser. Job offer URLs and uploaded advertisement images are processed on the client side without storing personal identification or credentials on persistent remote servers.
              </p>
              <p>
                <strong>Local Storage:</strong> Recent verification scans are cached solely in your browser's <code>localStorage</code> for your convenience. You can clear this session history at any moment via the "Clear History" button.
              </p>
              <p>
                <strong>Zero Commercial Sale:</strong> No student emails, telephone numbers, or verification submissions are ever commercialized or sold to third-party ad networks.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Educational Prototype:</strong> ScamShield AI is created for educational and academic evaluation purposes. The trust score and risk analyses are heuristic simulations intended to cultivate cyber vigilance.
              </p>
              <p>
                <strong>Independent Verification Required:</strong> Results generated by this platform do not constitute legal or financial guarantees of legitimacy or fraud. Users must independently verify all recruitment correspondences with official corporate registrars before paying any money or signing contracts.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> ScamShield AI developers are not liable for any recruitment decisions, financial transactions, or communications conducted outside this educational demonstration.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
