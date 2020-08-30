## 代码懒加载

```js
import("lodash").then({ default: _ } => {
  console.log(_.join([1, 2, 3], '__'));
});
```

## chunk是什么？

最终结果打包生成的文件就是一个chunk

## 打包分析

### 官方工具

[工具说明]（https://github.com/webpack/analyse）

```js
// 修改package.json中的scripts配置的打包命令，添加相应的参数
webpack --profile --json > stats.json
// 执行打包命令后会生成相应的分析文件，再将此文件使用官方分析网站打开，就可以知道相应的打开内容
```

### 社区支持

查看官方文档

Guides > Code Splitting > Bundle Analysis

## 提高性能（代码使用率）

在加载时尽量使用异步加载，减少首屏加载的文件大小，提高加载页面的速度。

### 网站js脚本利用率检测

* 打开控制台：option + command + i
* 打开搜索栏：command + shift + p 然后输入 coverage
* 点击刷新控制就可以知道当前页面加载脚本的利用率

### Preloading

与页面的必须脚本一同加载。

**存在问题，按照配置不起作用**

```js
import(
  /* webpackPreload: true */
  lodash
).then({ default: _ } => {

})
```

### Prefetching

等页面的必须脚本加载完成，页面空闲时再进行加载 

```js
import(
  /* webpackPrefetch: true */
  lodash
).then({ default: _ } => {

})
```