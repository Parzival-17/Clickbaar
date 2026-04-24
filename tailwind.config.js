/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(15,23,42,0.07), 0 1px 2px -1px rgba(15,23,42,0.07)',
        'card-hover': '0 16px 32px -8px rgba(79,70,229,0.12), 0 4px 12px -4px rgba(15,23,42,0.08)',
        btn: '0 4px 14px 0 rgba(79,70,229,0.28)',
        'btn-hover': '0 6px 20px 0 rgba(79,70,229,0.38)',
        nav: '0 1px 3px 0 rgba(15,23,42,0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
