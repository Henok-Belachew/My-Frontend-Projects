/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  


  
  theme: {
    extend: {
      colors: {
        // This how you add colors to use in tailwind css
        'white': 'hsl(0, 0%, 100%)',
        'vlight-blue': 'hsl(210, 60%, 98%)', // Very light grayish blue
        'light-blue1': 'hsl(211, 68%, 94%)', // Light grayish blue 1
        'light-blue2': 'hsl(205, 33%, 90%)', // Light grayish blue 2
        'gray-blue': 'hsl(219, 14%, 63%)',   // Grayish blue
        'dgray-blue': 'hsl(219, 12%, 42%)',  // Dark grayish blue
        'vdark-blue': 'hsl(224, 21%, 14%)',  // Very dark blue
      },
    }
  },
  plugins: [],
}


// Starter Command: npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
