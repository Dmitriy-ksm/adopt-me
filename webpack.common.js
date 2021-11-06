const path = require("path");
var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.resolve(__dirname, "src");
//var babelPolyfill = require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", APP_DIR + "/index.js"],
  output: {
    path: BUILD_DIR,
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
