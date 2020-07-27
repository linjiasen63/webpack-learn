
### 1. webpack是什么？

答：模块打包工具（module builder）。


### 2. 模块打包工具是什么？

答：

### 3. webpack安装方式

```bash
#全局安装（强烈禁止）
npm install -g webpack webpack-cli

#局部安装（强烈推荐）
#在具体工程目录下安装，不同项目可安装不同版本且不会造成影响
#打开工程目录
cd projectDir
#安装内容
npm install webpack webpack-cli
```

### 4. 基本配置文件

**webpack.confg.js**
```js
// 默认配置
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  }
}
```

### 5. 打包输出内容

**dist目录下**
```js
// main.js
```

## # 6. 其它注意内容

```bash
# 指定配置文件
webpack --config webpack.config.js

#可以pakage.json中配置scripts然后使用npm run 命令名称，以简化运行
npm run build
```