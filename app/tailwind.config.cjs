/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B99FF',
        primaryHover: '#5eb5f3',
        textWhite: '#FFFFFF',
        black: '#111'
      }
    }
  },
  plugins: []
}
