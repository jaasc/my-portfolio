/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ['Open Sans', 'sans-serif'],
        'oswald' : ['Oswald', 'sans-serif'],
        'satisfy': ['Satisfy', 'cursive']
      },
      screens: {
        'hid': {'max': '300px'},
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
