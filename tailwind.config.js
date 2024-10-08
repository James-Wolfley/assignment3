/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); //1st
const defaultTheme = require("tailwindcss/defaultTheme"); // 2nd
module.exports = {
  content: ["./views/*.html"], //3rd
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
