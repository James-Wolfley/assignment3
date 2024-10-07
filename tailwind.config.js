/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); //1st
const defaultTheme = require("tailwindcss/defaultTheme"); // 2nd
module.exports = {
  content: ["./views/*.html"], //3rd
  theme: {
    extend: {},
  },
  plugins: [],
};
