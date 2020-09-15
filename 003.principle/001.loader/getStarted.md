# 自定义loader

更多功能，请到官网的Config

## 基础使用

```js
// loader本质上是function
// 不能使用箭头函数。因为function中的this会指向特定内容
const loaderUtils = require("loader-utils");

module.exports = function(content) {
  // content是通过模块引入的内容

  // 配置文件中loader指定的options，可以通过以下方式获取
  const options = loaderUtils.getOptions(this);

  const result = content.replace('Hello', '你好');
  // 1. 同步操作
  // 1.1 通过return
  // return result;
  // 1.2 通过回调函数
  // this.callback(null, result);

  // 2. 异步操作
  const callback = this.async;
  setTimeout(() => {
    callback(null, result);
  }, 1000);
}
```

## 使用场景

* jquery等library的异常捕获
* 国际化
* 还有其它...
