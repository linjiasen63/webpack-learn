## 代码分割

```js
// 1. 原生实现：将需要拆分的内容，使用单独的入口配置，并将其挂载到全局中

// 2. 插件实现：webpack v4之后的版本已内置相应的插件，只需要在配置文件中，添加如下配置
{
  // ....
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
// 然后在业务代码中，使用第三方库，就会在将其分割到独立的chunk中
// import _ from 'lodash';

// 3. 使用import().then()异步加载
// splitChunks的配置同样会有影响
```

```js
splitChunks: {
  // async：只对异步代码起作用
  // sync：只对同步代码起作用
  // all：对所有的代码都起作用，然后同步代码需要检查cacheGroups是存在符合的配置，若存在则进行代码分割，否则忽略；异步代码一定会进行代码分割，但其命名会参考相应的配置
  chunks: 'async',
  // 引入的模块大小超过此值才进行代码分割
  minSize: 20000,
  // webpack5的新配置
  // minRemainingSize: 0,
  // 引入的模块若超过指定大小，会对其尝试二次拆分。一般使用0代表不进行二次拆分
  maxSize: 0,
  // 当一个模块被引入多少次时，才进行代码分割
  minChunks: 1,
  // 异步加载：代码分割chunk的最大数值，若超过其限制，会将超过的内容全部打包到最后一个chunk中
  maxAsyncRequests: 30,
  // 初始加载：入口文件进行代码分割时最大的chunk数
  maxInitialRequests: 30,
  // 分割后的chunk的文件名的连接符（组与库名之间的连接符）
  automaticNameDelimiter: '~',
  enforceSizeThreshold: 50000,
  cacheGroups: {
    // webpack5的配置
    // defaultVendors: {
    vendors: {
      // 引入的模块是否符合当前组的要求，若没有此项则都满足
      test: /[\\/]node_modules[\\/]/,
      // 优先级：符合要求的组谁大就使用哪个组
      priority: -10,
      // 指定生成的文件名称
      filename: 'vendors.js',
    },
    default: {
      minChunks: 2,
      priority: -20,
      // 如果一个模块在之前已经被打包过，则直接复用
      reuseExistingChunk: true
    }
  }
}
```