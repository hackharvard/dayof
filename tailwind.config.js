/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Lexend', 'sans-serif'],
      body: ['Exo', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      purple: colors.purple,
      yellow: colors.yellow,
      primary: {
        DEFAULT: '#FCFCFC',
        100: '#FCFCFC',
        200: '#F5F5F5',
        300: '#E6E6E6',
        400: '#CECECE',
        500: '#B6B6B6'
      },
      secondary: {
        DEFAULT: '#170440',
        100: '#250666',
        200: '#1E0553',
        300: '#170440',
        400: '#110133',
        500: '#0F0327'
      },
      blue: {
        100: '#6FEEFF',
        200: '#4E75FF'
      },
      red: '#D80034'
    },
    extend: {
      backgroundImage: {
        // 'welcome-dark': "url('/sections/welcome-dark.jpg')",
        'welcome-light': "url('/sections/welcome-light.jpg')",
        'faq-light': "url('/sections/faq-light.jpg')",
        'faq-dark': "url('/sections/faq-dark.jpg')"
      }
    }
  },
  plugins: []
}
