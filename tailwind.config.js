/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './config/customers/*.liquid',
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif' ],
    },
    extend: {
      /** use this for desktop first approach */
      screens: {
        'xs-m': {'max': '479px'},
        'sm-d': {'max': '639px'},
        'md-d': {'max': '767px'},
        'lg-d': {'max': '1023px'},
        'xl-d': {'max': '1279px'},
        '2xl-d': {'max': '1535px'},
      },
      /** Custom colors */
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'bright-orange': '#FE5200',
        'dark-cyan': '#119DA4',
        'cerulean': '#0C7489',
        'midnight-green': '#13505B',
        'timberwolf': '#D7D9CE',
        'mdew': '#DBF40C',
        'mdew2': '#b1c410',
        'mdew3': '#D2D5C1',
        'dark': '#1F1F21'
      },
    },
  },
  plugins: [],
}

   