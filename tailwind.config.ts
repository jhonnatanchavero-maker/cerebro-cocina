import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4285F4',
          dark: '#2557C7',
          light: '#EBF2FF',
          50: '#F0F6FF',
          100: '#EBF2FF',
          500: '#4285F4',
          600: '#3070E0',
          700: '#2557C7',
        },
        accent: {
          DEFAULT: '#34A853',
          light: '#E8F5E9',
        },
        warning: '#FBBC04',
        danger: '#EA4335',
        surface: '#FFFFFF',
        bg: '#F8FAFF',
        muted: '#6B7280',
        border: '#E5EAF2',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 12px 0 rgb(66 133 244 / 0.15)',
      },
      animation: {
        'voice-wave': 'voice-wave 0.7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
      },
      keyframes: {
        'voice-wave': {
          '0%, 100%': { height: '6px' },
          '50%': { height: '22px' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(66, 133, 244, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(66, 133, 244, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(66, 133, 244, 0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
