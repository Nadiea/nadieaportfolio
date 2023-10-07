/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'Quick': ['Quicksand', 'sans-serif'],
        'Quintessential':[ 'Quintessential', 'cursive']
      }
    },
  },
  plugins: [],
}
