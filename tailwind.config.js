/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    colors: {
      'purple': '#5452C5',
      'purple-shade': '#9D8DF1',
      'dark': '#1E152A',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to bottom, ${theme('colors.purple-shade')}, ${theme('colors.purple')})`,
      }),
    },
  },
  plugins: [],
}

