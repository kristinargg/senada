/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#062647',
        secondary: '#ff7f32',
        info: '#CCCCCC',
        info1: '#AFD1E3',
        jobfair: '#6E86A1',
      },
      fontFamily: {
        sen: 'Sen',
        poppins: 'Poppins',
      },
    },
  },
  plugins: [],
}
