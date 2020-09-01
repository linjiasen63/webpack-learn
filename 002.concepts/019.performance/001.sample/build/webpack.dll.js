const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dir = path.resolve(__dirname, '../');

module.exports = {
  mode: 'production',
  entry: {
    lodash: ['lodash'],
    react: ['react', 'react-dom'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(dir, './dll/[name].manifest.json')
    })
  ],
  output: {
    path: path.resolve(dir, './dll'),
    filename: '[name].dll.js',
    library: '[name]',
  },
}