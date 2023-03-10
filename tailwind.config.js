/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      lightRed: '#ff7b54',
      lightOrange: '#ffb26b',
      yellow: '#ffd56f',
      oliveGreen: '#939b62',
      gray: '#565656',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
};
