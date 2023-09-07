/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': '#FE7866',
        'yellow': '#F9D400',
        'dark-desaturated-cyan': '#24554B',
        'dark-blue': '#19526B',
        'dark-moderate-cyan': '#458C7D',

        'very-dark-desaturated-blue': '#232F3D',
        'very-dark-grayish-blue': '#5A626C',
        'dark-grayish-blue': '#808397',
        'grayish-blue': '#A7AAAE',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

