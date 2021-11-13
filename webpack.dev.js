// @ts-nocheck
var HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

var APP_DIR = path.resolve(__dirname, "src");
var BUILD_DIR = path.resolve(__dirname, "dist");
var SERVER_DIR = path.resolve(__dirname, "server");

module.exports = merge(common, {
  mode: "development",
  entry: {
    ...common.entry,
    main: SERVER_DIR + "/index.dev.js",
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.jsx?$/,
        enforce: "pre",
        include: APP_DIR,
        use: ["source-map-loader"],
      },
    ],
  },
});
