/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'atlys': {
        'dark': "#27292d",
        'xs': "#6B6C70",
        'small': "#7F8084",
        'md': "#C5C7CA",
        'button': '#131319',
        'blue': '#4A96FF'
      }
    },
    extend: {},
  },
  plugins: [],
}