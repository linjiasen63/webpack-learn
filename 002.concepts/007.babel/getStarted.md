
### 1. 基本使用

前往bable官网，切换到：顶部导航“设置”，选择具体的工具，然后按照教程操作

以webpack为例

```js
// 1. 安装babel
// npm install --save-dev babel-loader @babel/core

// 2. 配置js的loader
// module: {
//   rules: [
//     { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
//   ]
// }

// 3. 配置babel
// 3.1 安装预置
// npm install @babel/preset-env --save-dev
// 3.2 新建配置：.bablerc
// {
//   "presets": ["@babel/preset-env"]
// }
```

### 2. polyfill垫片

上述操作后，babel只有将es6语法转换为es5支持的语法，但es6独有的api并不会转换，需要配置polyfill.

前往bable官网，切换到：顶部导航“文档”，然后搜索polyfill

```js
// 1. 安装
// npm install --save @babel/polyfill

// 2. 在代码声明引入（会全部引入所有polyfill，造成代码体积狂增）
import "@babel/polyfill";

// 2.1 需要配置需要兼容的浏览器：建议使用.browserslistrc

// 3. 在.bablerc配置以下内容，可省略第2步，并且只会引入需要使用到的polyfill
// {
  
//   "presets": [
//     [
//       "@babel/preset-env",
//       {
//         "useBuiltIns": "usage"
//       }
//     ]
//   ]
// }

```

### 3. library配置

如果作为第三方类库提供给他人使用时，类库在打包时不应用添加polyfill，应该留给业务代码的打包逻辑处理，此时需要进行以下操作。引入插件：plugin-transform-runtime

前往bable官网，切换到：顶部导航“文档”，然后搜索plugin-transform-runtime

```js
// 因为较少使用，请自行查看官方文档
// 1. 安装
npm install --save-dev @babel/plugin-transform-runtime
// 仅corejs的值为false时需要安装下面的包
npm install --save @babel/runtime

// 2. 在.bablerc配置以下内容
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}

// 3. 若只执行配置上述内容将不会polyfill，需要进行以下配置
// corejs相应的值修改为2
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}
// 安装另外的运行包
npm install --save @babel/runtime-corejs2
```

### 4. react配置

```js
// 1. 安装插件
npm install --save-dev @babel/preset-react

// 2， 修改.babelrc的配置
{
  "presets": [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage"
    }
  ],
  "@babel/preset-react"
]
}
```
