# 提高打包速度的要点

## 跟进技术迭代

尽量保持node、npm、yarn的版本更新

## 减少loader的作用域

使用exclude或include，减少loader的作用范围。如第三方类库中的js不需要使用babel-loader进行处理，因为类库已进行相关的代码转译。

## 减少plugin的使用

尽量减少不必要的plugin或使用官方推荐的plugin(稳定性与性能更好)。如：在development下样式文件不需要抽取成独立的文件，因此可以不使用MiniCssExtractPlugin与OptimizeCssAssetPlugin进行处理。

## 合理配置resolve参数

```js
module.exports = {
  resolve: {
    // 引入模块的缺省后缀名配置
    // 要尽量减少extensions的配置，因为文件查找会耗费性能。一般只配置与逻辑相关的文件后缀名列表。
    extensions: [ '.js', '.jsx' ],
    // 引入目录的缺省模块名称配置
    mainFiles: ['index', 'child'],
    // 引入模块的别名简写
    alias: {
      #: path.resolve(__dirname, '../../platforms/'),
    },
  },
}
```

## 使用DllPlugin将第三方类库单独处理

## 控制包文件大小

使用tree-shaking等工具

## 多进程打包

thread-loader、parallel-webpack（多页面打包）、happypack等工具

## 合理使用source-map

## 通过打包分析优化

## 开发环境内存编译

## 开发环境无用插件剔除（如不需要压缩代码）

## 等等
