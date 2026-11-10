/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070b14',
          surface: '#0d1527',
          surfaceLight: '#14203a',
          card: '#0f172a',
          border: 'rgba(56, 189, 248, 0.15)',
          primary: '#38bdf8',
          secondary: '#818cf8',
          accent: '#a855f7',
          safe: '#10b981',
          danger: '#f43f5e',
          warning: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'cyber-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'cyber-purple': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'cyber-danger': '0 0 25px -5px rgba(244, 63, 94, 0.4)',
        'cyber-safe': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'scan': 'scanLine 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        scanLine: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.8' },
          '50%': { transform: 'translateY(100%)', opacity: '0.2' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
