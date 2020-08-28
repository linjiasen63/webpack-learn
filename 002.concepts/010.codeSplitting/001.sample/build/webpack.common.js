const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dirname = path.resolve(__dirname, "../");

module.exports = {
  // 打包模式（预先写好藉此配置等优化打包结果）："development" | "production" | "none"

  // 打包入口
  entry: {
    // selfCodeSplitting: path.resolve(dirname, "./src/selfCodeSplitting.js"),
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
      template: path.resolve(dirname, "./public/index.html"),
      // 模板中可以使用模板语法进行替换：<%= htmlWebpackPlugin.options.title %>
      title: "webpack lean",
    }),
  ],
  optimization: {
    splitChunks: {
      // async：只对异步代码起作用
      // sync：只对同步代码起作用
      // all：对所有的代码都起作用，然后同步代码需要检查cacheGroups是存在符合的配置，若存在则进行代码分割，否则忽略；异步代码一定会进行代码分割，但其命名会参考相应的配置
      chunks: "all",
      // 引入的模块大小超过此值才进行代码分割
      minSize: 20000,
      // 引入的模块若超过指定大小，会对其尝试二次拆分。一般使用0代表不进行二次拆分
      maxSize: 0,
      // 当一个模块被引入多少次时，才进行代码分割
      minChunks: 1,
      // 异步加载：代码分割chunk的最大数值，若超过其限制，会将超过的内容全部打包到最后一个chunk中
      maxAsyncRequests: 30,
      // 初始加载：入口文件进行代码分割时最大的chunk数
      maxInitialRequests: 30,
      // 分割后的chunk的文件名的连接符（组与库名之间的连接符）
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          // 引入的模块是否符合当前组的要求，若没有此项则都满足
          test: /[\\/]node_modules[\\/]/,
          // 优先级：符合要求的组谁大就使用哪个组
          priority: -10,
          // 指定生成的文件名称
          filename: "vendors.js",
        },
        default: {
          minChunks: 2,
          priority: -20,
          // 如果一个模块在之前已经被打包过，则直接复用
          reuseExistingChunk: true,
        },
      },
    },
  },
  // 输出内容
  output: {
    path: path.resolve(dirname, "dist"),
    filename: "[name].js",
    // 指明publicPath，以确保 middleware(中间件) 功能能够正确启用
    publicPath: "./",
  },
};
