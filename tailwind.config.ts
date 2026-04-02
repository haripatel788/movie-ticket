import type { Config } from 'tailwindcss';

const colors = {
  accent: {
    primary: '#F5A623',
    warm: '#E8891A',
    soft: '#FFC85C'
  },
  bg: {
    void: '#080708',
    surface: '#111013',
    elevated: '#1A181D',
    overlay: '#221F26'
  },
  text: {
    primary: '#F5F0E8',
    secondary: '#A89F94',
    muted: '#5C5650'
  },
  seat: {
    available: '#2A2730',
    selected: '#F5A623',
    taken: '#1A181D'
  }
};

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        accentGlow: 'rgba(245, 166, 35, 0.15)',
        seatBorder: 'rgba(245, 240, 232, 0.12)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.4), 0 0 1px rgba(0,0,0,0.2)',
        glow: '0 0 20px rgba(245, 166, 35, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
