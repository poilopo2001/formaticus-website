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
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#a8a8a8',
          400: '#787878',
          500: '#505050',
          600: '#282828',
          700: '#181818',
          800: '#0f0f0f',
          900: '#0a0a0a', // Noir profond élégant
        },
        accent: {
          50: '#fffef5',
          100: '#fffde7',
          200: '#fff9c4',
          300: '#fff59d',
          400: '#fff176',
          500: '#ffeb3b',
          600: '#E4C590', // Or élégant principal
          700: '#d4b67f',
          800: '#c4a66f',
          900: '#b4965f',
        },
        gold: {
          light: '#f4e5c2',
          DEFAULT: '#E4C590',
          dark: '#d4b67f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        elegant: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'gentle-float': 'gentleFloat 8s ease-in-out infinite',
        'warm-glow': 'warmGlow 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        warmGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(217, 119, 6, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(217, 119, 6, 0.6)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
