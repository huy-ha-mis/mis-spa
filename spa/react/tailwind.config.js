/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
      colors: {
        'dark-teal': '#02373F',
        'light-green': '#e2f0e4',
      },
      maxWidth: {
        'container': '1170px',
      },
    },
  },
  plugins: [],
};
