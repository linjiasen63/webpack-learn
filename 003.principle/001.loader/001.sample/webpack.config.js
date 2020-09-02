const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js")
  },
  resolveLoader: {
    modules: [ "node_modules", "./loaders" ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            // loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            loader: 'replaceLoader',
            options: {
              replaceStr: '你好',
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].js'
  },
}