/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
         fontFamily: {
        aka: ['Aka-AcidGR-Compa', 'sans-serif'], // aka is a custom name you choose
      },
      },
    },
    plugins: [],
  } 