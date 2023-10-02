/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
theme: {
    extend: {
      colors: {
        'communicator-blue' : '#13cac9',
        'communicator-red'  : '#ff3239',
        'communicator-white': '#e4eff0'
      },
      spacing: {
        '9.5': '2.33rem',
        '5.5': '1.33rem'
      },
      fontFamily: {
        'SpaceMono': 'Space Grotesk',
        'ChalkFont': 'SqueakyChalkSound'
      },
      fontSize: {
        'vs'  : '1rem',
        '10xl': '11rem' 
      },
      borderWidth: {
        '9' : '30px',
        '10': '40px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

