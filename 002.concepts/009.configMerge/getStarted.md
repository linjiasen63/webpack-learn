## 抽取公有配置

```js
// 1. 安装 webpack-merge 用于合并公用配置与指定版本的独有配置
npm install -D webpack-merge

// 2. 拆分配置
// 公用配置：webpack.common.js
// 开发配置：webpack.devp.js
// 生产配置：webpack.prod.js
const { merge } = require('webpack-merge');

// 注意：如果将相关的配置文件存放到新的目录下相关路径配置需要修改
// 建议：使用绝对路径处理以减少类似的错误（path.resolve)
```