/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1289px',
      '2xl': '1536px'
    },
    fontFamily: {
      stretched: ['Stretch Pro', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

