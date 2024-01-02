/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        'NanumExBold': ['Nanum-ExBold'],
        'NanumRegular': ['Nanum-Regular'],
        'NanumBold': ['Nanum-Bold']
      },
    

    },
  },
  plugins: [],
}

