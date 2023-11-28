/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"] 
    },
    extend: {},
  },
  plugins: [],
}

