/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        mutedGold: "#C6A85A",
        charcoal: "#0b0b0b",
      },
      fontFamily: {
        display: ["Playfair Display SC", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
