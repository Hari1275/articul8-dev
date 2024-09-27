/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#2563eb', // You can adjust this to match Articul8's exact blue
        }
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
}