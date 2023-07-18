/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Nunito sans', 'sans-serif'],
      },
      colors:{
        'darkBlue':{
          element: '#2b3945',
          background: '#202c37',
          text: '#111517',
        },
        'gray':{
          input: '#858585',
          background: '#fafafa',
        }
      },
      boxShadow: {
        'cm': '0px 0px 14px 0px rgba(0,0,0,.1)',
      }
    },
  },
  plugins: [],
}

