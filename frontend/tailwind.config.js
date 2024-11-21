/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    'sm': '576px',
      // => @media (min-width: 576px) { ... }

    'md': '960px',
      // => @media (min-width: 960px) { ... }

    'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  theme: {
    extend: {
      colors: {
        primary: '#2BB5FF',
        secondary: '#EF863E'
      }
    },
  },
  plugins: [],
}

