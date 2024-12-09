/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily:{
        Heavitas: ['Heavitas', 'sans-serif'],
        Helvetica: ['Helvetica', 'sans-serif'],
        HelveticaBold: ['Helvetica-Bold', 'sans-serif'],
        HelveticaBoldOblique: ['Helvetica-BoldOblique', 'sans-serif'],
      },

      colors :{
        green :{
          50 : '#36805b',
          100: '#117c47',
          150: '#08572f',
          200: '#04351c'
        }
      }

    },
  },
  plugins: [],
}

