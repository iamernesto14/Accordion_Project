/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-pink': 'hsl(275, 100%, 97%)',
        'white': 'hsl(0, 0%, 100%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)'
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'], // Add Work Sans as the default sans font
      },
    },
  },
  plugins: [],
}