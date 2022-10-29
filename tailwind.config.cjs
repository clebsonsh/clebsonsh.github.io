const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        btn: "4px 4px 0px 0px #000000",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1D1D1D",
      white: "#F7F7F7",
      accent: "#FACC15",
      grey: "#798086",
    },
  },
  plugins: [],
};
