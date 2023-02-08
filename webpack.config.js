const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app:"./src/js/main.js"
    },
    output: {
        clean: true,
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: 'development',
    devServer: {
        static: "./src",
        compress: true,
        port: 4200
    },
    module: {
        rules: [
          {
            test: /\.(s[ac]ss|css)$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: "Paintings",
          template: "src/index.html",
        }),
    ],
};