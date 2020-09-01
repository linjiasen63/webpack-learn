const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

const devpConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
};

module.exports = merge(commonConfig, devpConfig);