const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dirname = path.resolve(__dirname, '../');

module.exports = {
  // 打包模式（预先写好藉此配置等优化打包结果）："development" | "production" | "none"

  // 打包入口
  entry: {
    main: path.resolve(dirname, "./src/index.js"),
  },

  module: {
    rules: [
      // ########################################
      // 图片资源

      // file-loader作用：将文件拷贝到指定位置并导出相应的url
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]', // 指定打包资源的输出名称
      //     outputPath: 'assets/images', // 指定打包资源的输出位置
      //     publicPath: 'images', // 指定资源链接的前缀路径
      //     postTransformPublicPath: function(path) { // 通常用于处理在仅运行时才能知道链接前缀
      //       console.log('postTransformPublicPath', path);
      //       // 通过用法
      //       // return `__webpack_public_path__ + ${p}`,
      //       return path;
      //     }
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          // 若文件大小在指定数值之内，将文件以base64的形式导入
          limit: 204800, // 数值的单位：Byte。为false表示禁用资源以base64的方式导入

          name: "[name].[ext]", // 指定打包资源的输出名称
          outputPath: "images", // 指定打包资源的输出位置
          publicPath: "images", // 指定资源链接的前缀路径
          postTransformPublicPath: function (path) {
            // 通常用于处理在仅运行时才能知道链接前缀
            console.log("postTransformPublicPath", path);
            // 通过用法
            // return `__webpack_public_path__ + ${p}`,
            return path;
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, './public/index.html'),
      // 模板中可以使用模板语法进行替换：<%= htmlWebpackPlugin.options.title %>
      title: 'webpack lean',
    }),
  ],
  // 输出内容
  output: {
    path: path.resolve(dirname, "dist"),
    filename: "[name].js",
    // 指明publicPath，以确保 middleware(中间件) 功能能够正确启用
    publicPath: './',
  },
};
