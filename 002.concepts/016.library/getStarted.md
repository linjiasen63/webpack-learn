# 入门

## 修改打包配置

```js
module.exports = {
  // 使用全局引入的模块
  externals: "lodash",

  output: {
    library: "library",
    libraryTarget: "umd",
  }
}
```

## 修改package.json

将main字段对应的值修改为打包后生成的文件链接

## 发布

1. 在npm官网上注册一个帐号
2. npm adduser在本地命令行上输入相应账号信息
3. npm publish
