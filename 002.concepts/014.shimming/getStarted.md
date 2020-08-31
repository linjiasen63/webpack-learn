# 垫片兼容

## 兼容第三方库定义的变量

```js
{
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash",
    }),
  ]
}
```

## 让模块的this指向window

```js
{
  rules: [
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      "babel-loader",
      "imports-loader?this=>window"
    ]
  ]
}
```
