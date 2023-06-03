/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],

  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    
    extend: {
      fontSize: {
        sm: '15px'
      },
      colors: {
        'purple': '#5452C5',
        'purple-shade': '#9D8DF1',
        'dark': '#1E152A',
        'white': '#FFFFFF'
      },
      boxShadow: {
        sm: '0 0 25px #00000010',
        md: '0 0 50px #00000010'
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to bottom, ${theme('colors.purple-shade')}, ${theme('colors.purple')})`,
      }),
    },
  },
  plugins: [],
}

