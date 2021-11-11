// @ts-nocheck
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var APP_DIR = path.resolve(__dirname, "server");
var BUILD_DIR = path.resolve(__dirname, "dist-server");

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    main: APP_DIR + "/index.prod.js",
  },
  output: {
    path: BUILD_DIR,
    filename: "server.js",
    publicPath: "/",
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      // },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    //new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin(),
  ],
};
