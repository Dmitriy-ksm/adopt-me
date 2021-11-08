//const path = require("path");
//var BUILD_DIR = path.resolve(__dirname, "dist");
//var APP_DIR = path.resolve(__dirname, "src");
//var babelPolyfill = require("babel-polyfill");

module.exports = {
  // entry: {
  //   babel: "babel-polyfill",
  // },
  // output: {
  //   path: BUILD_DIR,
  //   filename: "[name].bundle.[hash].js",
  //   publicPath: "/",
  // },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
