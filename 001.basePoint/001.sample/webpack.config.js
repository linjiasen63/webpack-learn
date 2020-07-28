const path = require('path');

module.exports = {
  // 打包模式（预先写好藉此配置等优化打包结果）："development" | "production" | "none"
  mode: 'development',
  // 打包入口
  entry: {
    main: './src/index.js'
  },
  // 输出内容
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
