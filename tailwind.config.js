/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
        Tangerine:['Tangerine', 'cursive']
      },

      colors:{
          "Orange":"#EF5427"
      },
    },
  },
  plugins: [],
}

