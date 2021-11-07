var HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

var APP_DIR = path.resolve(__dirname, "src");

module.exports = merge(common, {
  mode: "development",
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
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
    ],
  },
});
