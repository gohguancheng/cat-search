/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
        display: ["Poppins", "Helvetica", "Arial", "sans-serif"],
        body: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#112156",
      },
    },
  },
  plugins: [],
};
