const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/index.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        btn: "4px 4px 0px 0px #000000",
      },
    },
  },
  plugins: [],
};
