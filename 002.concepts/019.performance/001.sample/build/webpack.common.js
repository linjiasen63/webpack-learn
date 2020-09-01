const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fs = require("fs");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

const dir = path.resolve(__dirname, "../");

const plugins = [
  new CleanWebpackPlugin(),
  new HTMLWebpackPlugin({
    template: path.resolve(dir, "./public/index.html"),
  }),
];

// const files = fs.readdirSync(path.resolve(dir, "./dll/"));
// files.forEach((file) => {
//   if (/.*\.dll\.js$/.test(file)) {
//     plugins.push(
//       new AddAssetHtmlWebpackPlugin({
//         filepath: path.resolve(dir, "./dll/", file),
//       })
//     );
//   } else if (/.*\.mainfest\.json$/.test(file)) {
//     plugins.push(
//       new webpack.DllReferencePlugin({
//         manifest: path.resolve(dir, "./dll/", file),
//       })
//     );
//   }
// });

module.exports = {
  entry: {
    main: path.resolve(dir, "./src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(dir, "./src"),
        loader: "babel-loader",
      },
    ],
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(dir, "./dist"),
  },
};
