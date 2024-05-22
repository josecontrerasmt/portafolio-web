/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#0B070C',
        secondaryColor:'#17d9fc'
      },
      boxShadow: {
        'boxShadow': '0 0 20px 0 #17d9fc',
      }
    },
  },
  plugins: [],
}

