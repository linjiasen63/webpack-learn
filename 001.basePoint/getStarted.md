
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

**dist目录下main.js**
```js
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/   // Check if module is in cache
/******/   if(installedModules[moduleId]) {
/******/    return installedModules[moduleId].exports;
/******/   }
/******/   // Create a new module (and put it into the cache)
/******/   var module = installedModules[moduleId] = {
/******/    i: moduleId,
/******/    l: false,
/******/    exports: {}
/******/   };
/******/
/******/   // Execute the module function
/******/   modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/   // Flag the module as loaded
/******/   module.l = true;
/******/
/******/   // Return the exports of the module
/******/   return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/   if(!__webpack_require__.o(exports, name)) {
/******/    Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/   }
/******/  };
/******/
/******/  // define __esModule on exports
/******/  __webpack_require__.r = function(exports) {
/******/   if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/   }
/******/   Object.defineProperty(exports, '__esModule', { value: true });
/******/  };
/******/
/******/  // create a fake namespace object
/******/  // mode & 1: value is a module id, require it
/******/  // mode & 2: merge all properties of value into the ns
/******/  // mode & 4: return value when already ns object
/******/  // mode & 8|1: behave like require
/******/  __webpack_require__.t = function(value, mode) {
/******/   if(mode & 1) value = __webpack_require__(value);
/******/   if(mode & 8) return value;
/******/   if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/   var ns = Object.create(null);
/******/   __webpack_require__.r(ns);
/******/   Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/   if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/   return ns;
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/   var getter = module && module.__esModule ?
/******/    function getDefault() { return module['default']; } :
/******/    function getModuleExports() { return module; };
/******/   __webpack_require__.d(getter, 'a', getter);
/******/   return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('你好，世界！');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
```

## # 6. 其它注意内容

```bash
# 指定配置文件
webpack --config webpack.config.js

#可以pakage.json中配置scripts然后使用npm run 命令名称，以简化运行
npm run build
```