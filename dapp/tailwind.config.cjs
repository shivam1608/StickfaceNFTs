/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "dark" : "#111827"
      },
      fontFamily : {
        "primary" : ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}