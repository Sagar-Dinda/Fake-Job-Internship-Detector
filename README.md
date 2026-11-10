# ScamShield AI – Fake Job & Internship Detector

> **Cybersecurity Capstone Platform for College Students & Early-Career Jobseekers**

![React](https://img.shields.io/badge/React-18.3-61dafb.svg?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg?style=flat-square&logo=tailwind-css)
![Recharts](https://img.shields.io/badge/Recharts-2.12-22c55e.svg?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.4-8b5cf6.svg?style=flat-square&logo=vite)
![Status](https://img.shields.io/badge/Frontend-Production%20Ready-10b981.svg?style=flat-square)

---

## 🎯 1. Project Objective & Overview
**ScamShield AI** is a modern, responsive cybersecurity web application engineered to protect college students from predatory recruitment scams, fraudulent internships, deposit fraud, and WhatsApp/Telegram fake job advertisements.

### Key Capabilities:
1. **Option A: URL Verification** — Inspects job posting links, domain reputation, and SSL validity.
2. **Option B: Image / Screenshot Analysis** — Drag-and-drop screenshots of WhatsApp recruitment chats, Instagram flyers, and offer letters.
3. **Simulated Threat Detection Engine** — Evaluates offers against 7 critical recruitment scam categories.
4. **Dynamic Trust Score Gauge** — Circular SVG gauge rendering the authenticity index (0–100%).
5. **Interactive Recharts Pie Chart** — Visualizing the ratio between genuine safety indicators and detected risk vectors.
6. **Actionable Recommendations & Security Handbook** — Direct prevention tips and Indian Cyber Crime helpline (1930) links.
7. **Exportable Security Audit Reports** — Generates and downloads a clean, styled HTML report with one click.
8. **Client-Side History** — Cached in `localStorage` with full clear/reload controls.

---

## 💻 2. Technology Stack
- **Frontend Framework:** React 18 (Functional components, Hooks)
- **Build Tool:** Vite 5 (Ultra-fast HMR)
- **Styling:** Tailwind CSS with custom glassmorphism and cybersecurity neon gradients
- **Icons:** Lucide React
- **Data Visualization:** Recharts (Responsive PieChart, Tooltips, Custom Legend)
- **Effects:** Canvas Confetti (delightful celebration on verified safe offers)
- **Local Persistence:** Browser `localStorage` API

---

## 🚀 3. Quick Start (How to Run)

### Method 1: Double-Click (Windows)
Double-click `run-dev.bat` in this directory to start the server immediately.

### Method 2: Via Terminal
```bash
cd Frontend
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### To Create a Production Build:
```bash
cd Frontend
npm run build
```

---

## 📁 4. Project Directory Structure
```
College project2/
├── .tools/node/                  # Embedded Node.js runtime environment
├── Frontend/                     # React Application Root
│   ├── index.html                # Cyber-themed HTML5 entry
│   ├── vite.config.js            # Optimized chunk-splitting configuration
│   ├── tailwind.config.js        # Custom cyber palette & animations
│   ├── postcss.config.js
│   ├── package.json
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx            # Responsive navigation & mobile drawer
│       │   ├── Hero.jsx              # Cyber headline, radar stats & animated shield
│       │   ├── DetectionDashboard.jsx# Primary tabbed detection console
│       │   ├── URLAnalyzer.jsx       # Option A: URL input & preset chips
│       │   ├── ImageAnalyzer.jsx     # Option B: Drag-drop & sample screenshot ads
│       │   ├── ResultCard.jsx        # Complete audit card with report export
│       │   ├── TrustScore.jsx        # Circular progress meter & risk status
│       │   ├── RiskPieChart.jsx      # Recharts indicator distribution chart
│       │   ├── RiskAnalysis.jsx      # 7-vector heuristic evaluation breakdown
│       │   ├── History.jsx           # LocalStorage recent audit records
│       │   ├── Features.jsx          # 6 feature capability cards
│       │   ├── HowItWorks.jsx        # 3-step intuitive workflow cards
│       │   ├── SafetyTips.jsx        # Student safety rules & interactive checklist
│       │   ├── Footer.jsx            # Disclaimer, legal links & emergency helplines
│       │   └── Modals.jsx            # About, Contact Report & Legal modals
│       ├── utils/
│       │   ├── analyzer.js           # Multi-scenario heuristic scoring simulation
│       │   └── reportGenerator.js    # One-click downloadable HTML audit reports
│       ├── App.jsx                   # Central application state & coordinator
│       ├── main.jsx                  # React DOM root mounting
│       └── index.css                 # Tailwind directives & cyber aesthetics
├── Backend/                      # Reserved for future Python/FastAPI AI integration
├── package.json                  # Root proxy scripts
├── run-dev.bat                   # 1-Click development launcher
└── README.md
```

---

## 🛡️ 5. Seven Scanned Risk Categories
Each submission is evaluated against:
1. **Company Information:** Corporate registry verification & active SSL identity.
2. **Recruitment Email Verification:** Flagging free webmail (`@gmail.com`) vs official domains.
3. **Job Description Authenticity:** Checking for unrealistic "no interview needed" claims.
4. **Payment Request Detection:** Detecting upfront registration, laptop deposit, or training fees.
5. **Suspicious URL Detection:** Identifying high-risk link shorteners (`bit.ly`, `wa.me`, `t.me`).
6. **Contact Information:** Detecting anonymous WhatsApp/Telegram-only communication channels.
7. **Salary and Benefits Verification:** Benchmarking compensation realism against industry norms.

---

## 🧪 6. Testing & Demo Scenarios
The dashboard comes with built-in 1-click test presets:
- **Test Case 1 (Likely Genuine - Green):** Official Google / Microsoft Careers internship link.
- **Test Case 2 (Potential Scam Detected - Red):** Telegram typing job with ₹499 upfront fee demand.
- **Test Case 3 (Needs Manual Verification - Yellow):** Early-stage stealth startup with unverified online footprint.
- **Screenshot Samples:** Pre-loaded WhatsApp job fraud screenshot & Microsoft official letter.

---

## ⚖️ Disclaimer
*ScamShield AI is an educational demonstration project developed for academic evaluation. Results are simulated client-side heuristic audits and do not constitute financial or legal advice. Always independently verify offers through official corporate portals before sharing sensitive information or paying funds.*
