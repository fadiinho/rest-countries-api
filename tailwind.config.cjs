/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      // - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
        "dark-blue": "hsl(209, 23%, 22%)",

      // - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
        "very-dark-blue": "hsl(207, 26%, 17%)",
        
      // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
        "very-dark-blue-2": "hsl(200, 15%, 8%)",

      // - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
        "dark-gray": "hsl(0, 0%, 52%)",

      // - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
        "very-light-gray": "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}
