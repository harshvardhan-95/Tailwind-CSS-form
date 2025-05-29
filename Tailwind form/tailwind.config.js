/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#EE670080',
        secondary:'#FFF50469',
        themecolor:'#EE6700',
        blackcol:'#000000'
      }
    },
  },
  plugins: [],
}

