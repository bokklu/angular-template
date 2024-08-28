const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.ts", "./src/**/*.js"],
      safelist: [],
    }),
  ],
};
