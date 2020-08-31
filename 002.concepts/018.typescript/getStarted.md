# 入门

安装相应的插件

```bash
npm install --save typescript ts-loader
```

创建tsconfig.js配置文件

```js
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "es6",
    "target": "es5",
    "allowJs": true,
  }
}
```

第三方类库，若想使用ts的类型检查功能，需要安装@types/xxx，下面以lodash为例

```bash
npm install --save-dev lodash @types/lodash
```

引入lodash时需要将`import _ from "lodash"`修改为`import * as _ from "lodash"`

可通过[TypeSearch](https://microsoft.github.io/TypeSearch/)（需要科学上网才能访问）查找第三方类库的ts类型声明
