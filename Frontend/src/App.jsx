import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DetectionDashboard from './components/DetectionDashboard';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import History from './components/History';
import SafetyTips from './components/SafetyTips';
import Footer from './components/Footer';
import { AboutModal, ContactModal, LegalModal } from './components/Modals';
import { INITIAL_HISTORY } from './utils/analyzer';

const STORAGE_KEY = 'scamshield_analysis_history';

export default function App() {
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return INITIAL_HISTORY;
  });

  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ open: false, mode: 'privacy' });

  // Save history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  }, [history]);

  const handleAnalysisComplete = (newResult) => {
    setHistory((prev) => {
      // Add new record at the top, max 10
      const updated = [newResult, ...prev.filter((item) => item.target !== newResult.target)].slice(0, 10);
      return updated;
    });
  };

  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // silent
    }
  };

  const scrollToDetection = () => {
    const el = document.getElementById('detection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenAbout={() => setAboutOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onStartDetection={scrollToDetection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onAnalyzeClick={scrollToDetection}
          onExploreClick={scrollToFeatures}
        />

        {/* Main Detection Dashboard (Option A: URL & Option B: Image) */}
        <DetectionDashboard onAnalysisComplete={handleAnalysisComplete} />

        {/* How It Works Section */}
        <HowItWorks onTryNow={scrollToDetection} />

        {/* Features Section (6 Cards with Lucide Icons) */}
        <Features />

        {/* Recent Analysis History (localStorage-backed) */}
        <History
          history={history}
          onClearHistory={handleClearHistory}
          onSelectHistoryItem={(item) => {
            scrollToDetection();
          }}
        />

        {/* Safety Awareness Handbook Section */}
        <SafetyTips />
      </main>

      {/* Footer with Disclaimer & Links */}
      <Footer
        onOpenAbout={() => setAboutOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onOpenPrivacy={() => setLegalModal({ open: true, mode: 'privacy' })}
        onOpenTerms={() => setLegalModal({ open: true, mode: 'terms' })}
      />

      {/* Interactive Dialog Modals */}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <LegalModal
        isOpen={legalModal.open}
        mode={legalModal.mode}
        onClose={() => setLegalModal({ open: false, mode: 'privacy' })}
      />
    </div>
  );
}
