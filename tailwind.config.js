/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#737373',
        'ig-hover-overlay': 'rgba(0, 0, 0, .05)'
      },
      width: {
        'nav-narrow': '72px',
        'nav-medium': '244px',
        'nav-wide': '335px',
      }
    },
  },
  plugins: [],
}

