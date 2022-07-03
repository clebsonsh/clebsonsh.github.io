const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/index.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
