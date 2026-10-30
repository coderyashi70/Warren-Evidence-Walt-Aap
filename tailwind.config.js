/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          void: "#04060d",
          abyss: "#070b18",
          dark: "#0b1126",
          panel: "rgba(11, 17, 38, 0.72)",
          panelLight: "rgba(18, 27, 60, 0.55)",
          border: "rgba(124, 58, 237, 0.28)",
          borderCyan: "rgba(6, 182, 212, 0.35)",
        },
        holo: {
          cyan: "#00f0ff",
          magenta: "#ff007f",
          violet: "#9d4edd",
          gold: "#ffd166",
          glow: "#38bdf8",
        },
        threat: {
          1: "#10b981",
          2: "#06b6d4",
          3: "#f59e0b",
          4: "#f43f5e",
          5: "#a855f7",
        }
      },
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
        sub: ['Rajdhani', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'holo-glow': '0 0 25px -5px rgba(6, 182, 212, 0.35), 0 0 15px -3px rgba(168, 85, 247, 0.25)',
        'holo-card': '0 8px 32px 0 rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'ward-glow': '0 0 30px 2px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'doll-flicker': 'dollFlicker 12s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.6', filter: 'hue-rotate(0deg)' },
          '50%': { opacity: '0.9', filter: 'hue-rotate(45deg)' },
        },
        dollFlicker: {
          '0%, 92%, 100%': { opacity: '0.04', transform: 'scale(1)' },
          '93%': { opacity: '0.28', transform: 'scale(1.02) skewX(1deg)' },
          '94%': { opacity: '0.06', transform: 'scale(0.99)' },
          '95%': { opacity: '0.35', transform: 'scale(1.03) skewX(-1.5deg)' },
          '96%': { opacity: '0.03', transform: 'scale(1)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
