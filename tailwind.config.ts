import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        // Terminal UI Design System - Dark Mode
        primary: {
          DEFAULT: '#d99178',
          foreground: '#0a0a0a',
          dark: '#c57f66',
          light: '#e5a890',
        },
        background: '#0a0a0a',
        surface: '#111',
        'surface-hover': '#1f1f23',
        border: {
          DEFAULT: '#27272a',
          hover: '#3f3f46',
        },
        muted: {
          DEFAULT: '#262626',
          foreground: '#a3a3a3',
        },
        foreground: '#ededed',
        'text-primary': '#ededed',
        'text-secondary': '#a3a3a3',
        'text-muted': '#71717a',
        // macOS window dots
        'dot-red': '#ff5f57',
        'dot-yellow': '#febc2e',
        'dot-green': '#28c840',
        // Status colors
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        // Syntax highlighting
        'syntax-keyword': '#d99178',
        'syntax-string': '#22c55e',
        'syntax-comment': '#6a9955',
        'fluorescent-green': '#39ff14',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blink': 'blink 1s infinite',
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        pulseBorder: {
          '0%, 100%': { borderColor: 'rgba(217, 145, 120, 0.5)' },
          '50%': { borderColor: '#d99178' },
        },
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.3)',
        'md': '0 4px 6px rgba(0,0,0,0.4)',
        'lg': '0 10px 25px rgba(0,0,0,0.5)',
        'glow': '0 0 20px rgba(217, 145, 120, 0.3)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
