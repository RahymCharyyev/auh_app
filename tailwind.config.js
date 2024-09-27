/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  important: true,
  theme: {
    colors: {
      primary: '#2CA93B',
      white: '#ffffff',
      black: '#111111',
      dark: '#252525',
      blue: '#081CD4',
      green: {
        100: '#97FAC7',
        200: '#2CA93B',
        300: '#1B6624',
        400: '#97FAC7',
      },
      grey: {
        100: '#999999',
        200: '#CCCCCC',
        300: '#808080',
        400: '#C7C2C2',
      },
      red: {
        100: '#BF0202',
      },
      yellow: {
        100: '#ECAA00',
      },
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/kassir/images/hero_bg.webp')",
        'trips-hero-bg': "url('/kassir/images/trips_hero_bg.webp')",
      },
    },
  },
  plugins: [],
};
