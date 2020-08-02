require("./scripts/.babelrc/development");

module.exports = {
  plugins: [
    [
      "@babel/plugin-proposal-optional-chaining",
      {
        loose: true
      }
    ],
    ["@babel/plugin-proposal-numeric-separator"]
  ]
};
