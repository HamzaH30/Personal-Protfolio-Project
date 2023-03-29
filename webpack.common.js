const HtmlWebpackPlugin = require("html-webpack-plugin");

// This is common in both development and production
module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Reverse order. First, css-loader translate css into JS code. Secondly, style-loader injects this JS code into DOM
      },
    ],
  },
};
