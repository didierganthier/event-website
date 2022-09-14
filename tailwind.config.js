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
      backgroundImage: {
        'background-pattern': "url('https://didierganthier.github.io/event-website/images/backgroundPattern.png')",
        'header-texture': "url('https://didierganthier.github.io/event-website/images/header.png')",
        'pattern-bg': "url('https://didierganthier.github.io/event-website/images/pattern.jpeg')",
        'past-first': "url('https://didierganthier.github.io/event-website/images/past.jpg')",
        'past-second': "url('https://didierganthier.github.io/event-website/images/past2.jpg')",
      },
    },
  },
  plugins: [],
};
