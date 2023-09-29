/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors:{
        primary: '#3b82f6',
        dark: '#0f172a'
      }
    },
  },
  plugins: [],
}

