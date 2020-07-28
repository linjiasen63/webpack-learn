
具体的属性请查看官方文档

## 建议配置

```js
// 开发环境
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map'
}

// 生产环境：生产上不建议使用sourceMap，除非为了查找bug，因为会增加网页的加载内容与打开速度
module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map'
}
```

## 配置简介

```js
// cheap: 若程序出错只会呈现具体的行、loader中的代码不会输出具体报错行

// module: 若程序出错是由第三方模块造成会提示具体的错误

// eval：打包后的代码以eval的形式执行

```