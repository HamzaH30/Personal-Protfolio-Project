// Webpack uses this to work with directories
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/about.html",
      filename: "about.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/projects.html",
      filename: "projects.html",
      chunks: ["main"],
    }),
  ],
};
