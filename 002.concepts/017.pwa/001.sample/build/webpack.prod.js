const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const WorkBoxWebpackPlugin = require("workbox-webpack-plugin");

const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      // ########################################
      // 样式资源
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // 是否在模块的样式文件中后面配置的预处理器
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 1,
              // 是否使用ES模块语法生成相应的JS模块，默认为true
              esModule: true,
              // 1. Boolean: true 将所有css引入都转换为esMoule，不会引入全局样式
              // 2. 将文件名类似于xxx.module.xxx的内容转换
              // Object: { auto: true } Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
              // 3. String: "local" | "global" | "pure" 具体请查看文档
              modules: { auto: true },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new WorkBoxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);