const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  // 不引入模块，从全局查询：需要在使用本库之前引入相应的模块
  // 具体配置查看官方文档
  externals: 'lodash',
  // externals: {
  //   root: '_', // 通过script标签引入的情况下的命名规则
  //   commonjs: 'lodash', // 通过commonjs引入的命名
  // },
  
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'library.js',
    // 会在全局变量里增一个变量
    library: 'library',
    // umd支持esmodule、commonjs、amd等模块化语法
    // this、window导入相应变量（不支持模块化）
    libraryTarget: 'umd',
  }
}