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
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#4285F4',
          600: '#3070E0',
          700: '#2557C7',
          800: '#1D4ED8',
          900: '#1E40AF',
        },
        accent: {
          DEFAULT: '#34A853',
          light: '#E8F5E9',
          50: '#F0FDF4',
          100: '#DCFCE7',
          500: '#34A853',
          600: '#16A34A',
        },
        warning: {
          DEFAULT: '#FBBC04',
          light: '#FFFBEB',
          50: '#FFFBEB',
        },
        danger: {
          DEFAULT: '#EA4335',
          light: '#FEF2F2',
          50: '#FEF2F2',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          2: '#F8FAFC',
          3: '#F1F5F9',
        },
        bg: '#F4F7FE',
        muted: '#64748B',
        border: '#E2E8F0',
        sidebar: {
          bg: '#FFFFFF',
          active: '#EBF2FF',
          hover: '#F8FAFC',
          text: '#64748B',
          textActive: '#4285F4',
          border: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['10px', '14px'],
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '38px'],
        '4xl': ['36px', '44px'],
        '5xl': ['48px', '56px'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '14px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 8px 24px 0 rgb(66 133 244 / 0.14)',
        'card-lg': '0 4px 16px 0 rgb(0 0 0 / 0.08)',
        blue: '0 4px 16px rgba(66, 133, 244, 0.35)',
        'blue-lg': '0 8px 24px rgba(66, 133, 244, 0.4)',
        'sidebar': '1px 0 0 0 #F1F5F9',
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'glass': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'voice-wave': 'voice-wave 0.7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'slide-up': 'slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slide-down 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'page-enter': 'page-enter 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        'float-up': 'float-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 1.8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease infinite',
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
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'page-enter': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4285F4, #2557C7)',
        'gradient-brand': 'linear-gradient(135deg, #4285F4, #34A853)',
        'gradient-page': 'linear-gradient(135deg, #ffffff 0%, #EBF2FF 50%, #e8f5e9 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        sidebar: '240px',
        'sidebar-sm': '64px',
        header: '64px',
      },
    },
  },
  plugins: [],
}
export default config
