/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pac:["Pacifico", "cursive"],
        martel:["Martel", "serif"]
      }
    },
  },
  plugins: [],
}
