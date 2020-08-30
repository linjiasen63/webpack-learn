const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const devpConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    // 指定上下文所在目录
    contentBase: 'dist',
    // 是否自动打开浏览器
    open: true,
    // 指定网页的的端口
    port: 9000,
  },
};

module.exports = merge(commonConfig, devpConfig);