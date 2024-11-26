/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "m-purple": "hsl(259, 100%, 65%)",
      "m-light-red": "hsl(0, 100%, 67%)",

      // ### Neutral
      "m-white": "hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "m-light-grey": "hsl(0, 0%, 86%)",
      "m-smokey-grey": "hsl(0, 1%, 44%)",
      "m-off-black": "hsl(0, 0%, 8%)"
      }
    },
  },
  plugins: [],
}