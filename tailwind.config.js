/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.**/*.{html, css, js}'],
  // avoid purge css
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
