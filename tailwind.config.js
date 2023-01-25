/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'red': '#e50914'
      },
      backgroundImage:{
        'heroimg' : 'linear-gradient(0deg,rgba(0,0,0,.5) 0,transparent 40%,rgba(0,0,0,.9))'
      },
      fontFamily:{
          'Netflix': ['Netflix Sans','Helvetica Neue','Segoe UI','Roboto','Ubuntu','sans-serif']
      },
      margin:{
        'auto': "0 auto"
      },
      'boxShadow':{
        'bot':"inset 0px -426px 100px -20px rgba(0,0,0,0.64);",
      },
    },
  },
  plugins: [],
}