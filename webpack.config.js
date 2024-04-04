const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
