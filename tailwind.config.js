/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#6B9E78',
        'sage-light': '#EBF3ED',
        'sage-dark': '#4A7A57',
        terracotta: '#D4745A',
        'terracotta-light': '#FAF0EC',
        'terracotta-dark': '#B85C42',
        cream: '#F5F2EC',
        slate: '#1E2A2A',
        'slate-muted': '#4A5A5A',
        'slate-light': '#6B7A7A',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.35s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'typing-dot': 'typingDot 1.2s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typingDot: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
