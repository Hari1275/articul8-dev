/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
        },
      },
      fontSize: {
        '7xl': '5rem',
        xl: '2rem',
        '4xl': '3rem',
        '5xl': '4rem',
        lg: '1.4rem',
        sm: '1rem',
      },

      fontWeight: {
        bold: '700',
        medium: '500',
        normal: '400',
        light: '300',
      },
      keyframes: {
        dropdown: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        dropdown: 'dropdown 0.5s ease-out',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
