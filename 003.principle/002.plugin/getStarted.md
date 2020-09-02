# 自定plugin

## 基础使用

```js
// plugin本质上是一个拥有apply方法的Class类
const PLUGIN_NAME = 'CopyrightWebpackPlugin'; 

class CopyrightWebpackPlugin {
  constructor() {

  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, (compilation, cb) => {
      console.log(compilation);
      const copyrightStr = '# copyright by JasonLin\n';

      compilation.assets['copyright.md'] = {
        source: function() {
          return copyrightStr;
        },
        size: function() {
          return [...copyrightStr].length;
        },
      };

      cb();
    });
  }
}

module.exports = CopyrightWebpackPlugin;
```


##  使用node调度工具

```js
// 修改package.json配置文件中的script
"debug": "node --inspect --inspect-brk node_modules/webpack/bin/webpack.js",
// 打开浏览器 > 控制台 > NODE图标，可以调度打包过程中的变量
```