/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  
  
  theme: {
    extend: {
      colors: {
        'sky-blue': '#6abecd',
        'sunflower-yellow': '#f1b604',
        'orange': '#f48925',
        'lime-green': '#aad742',
        'red': '#ed2c49',
        'royal-blue': '#3e54a3',
        'pink': '#cf6390',
        'on-surface-light': '#737373',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],
      },
    }
  },
  plugins: [],
}


// Starter Command: npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
