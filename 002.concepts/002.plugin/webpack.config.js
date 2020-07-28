const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 打包模式（预先写好藉此配置等优化打包结果）："development" | "production" | "none"
  mode: "development",
  // 打包入口
  entry: {
    main: "./src/index.js",
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

      // ########################################
      // 样式资源
      {
        test: /\.css$/,
        use: [
          "style-loader",
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
          "style-loader",
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      // 模板中可以使用模板语法进行替换：<%= htmlWebpackPlugin.options.title %>
      title: 'webpack lean',
    }),
  ],
  // 输出内容
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
