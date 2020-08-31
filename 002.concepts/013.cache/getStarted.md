# 注意要点

在webpack.config.js中的output配置的生成文件名中使用contenthash使用文件的名称根据打包文件内容而变化，从而处理浏览器使用脚本缓存的问题。

在webpack.config.js中的performance配置为false，将不会检查打包后的文件大小是否超过性能限制。

在老版本由于业务代码中包含与vendors中的映射关系，因此没有作任何修改的两次打包内容可能不一致。可使用以下配置处理（将相应的映射关系抽取到单独的文件中）

```js
{
  "optimization: {
    "runtimeChunk" : {
      "name": "runtime"
    }
  }
}
```

在4.0以后的版本作了大优化，上述问题已解决
