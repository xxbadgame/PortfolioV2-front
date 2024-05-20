/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customBg: '#E3EDF7',
        customGrey: '#333333',
        customPurple: '#8A4FFF',
      },
    },
  },
  plugins: [],
}

