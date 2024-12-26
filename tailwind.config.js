/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff4500',
          600: '#cc3700',
          700: '#992900',
        },
      },
    },
  },
  plugins: [],
};