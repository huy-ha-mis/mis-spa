/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
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
}