Tree Shaking又称为“树摇曳”，是基于ES模块的（由于ES模块是静态引入的）。作用是：删除模块中未被引用的代码。

```js
// 1. 需要在package.json中的sideEffects字段指明哪些内容是副作用的（即会在全局中引入对象，如polyfill中的Promise）

// 2. 在development下，webpack.config.js中需要使用optimization.usedExports字段表示需要标准模块中的内容有哪些被使用到，好方便其它插件进行处理。在production下，默认配置已帮我们处理好。

/*! exports provided: add, minus */
// development模式下，使用上述配置会添加以下注释，表示模块中的导出内容哪些被使用
/*! exports used: add */
```