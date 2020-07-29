const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-middleware');

const config = require('./webpack.config');
const compiler = webpack(config);

const app = express();

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(9001, () => {
  console.log('express app listen on port 9001!\n');
});