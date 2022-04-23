const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./*.html', './assets/js/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ['Nunito',  ...defaultTheme.fontFamily.sans]
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
