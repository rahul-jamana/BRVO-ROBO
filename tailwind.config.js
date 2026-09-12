/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#030712',
          900: '#060B18',
          850: '#0B132B',
          800: '#111C3A',
          700: '#1C2E5E',
          blue: '#00F0FF',
          cyan: '#38BDF8',
          neon: '#00FFFF',
          accent: '#3B82F6',
          red: '#EF4444',
          emerald: '#10B981',
          silver: '#E2E8F0',
          metal: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -3px rgba(0, 240, 255, 0.45)',
        'glow-blue': '0 0 30px -4px rgba(59, 130, 246, 0.5)',
        'glow-red': '0 0 25px -3px rgba(239, 68, 68, 0.5)',
        'glow-white': '0 0 20px -2px rgba(255, 255, 255, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float-slow': 'floating 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
