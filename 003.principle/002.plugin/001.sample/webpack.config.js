const path = require("path");

const CopyrihtWebpackPlugin = require('./plugins/copyrightWebpackPlugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('./src/index.js'),
  },
  module: {
    rules: []
  },
  plugins: [
    new CopyrihtWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}