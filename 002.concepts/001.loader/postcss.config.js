module.exports = {
  // 配置sugarss解析器会出现css语法错误：Unnecessary curly bracket
  // parser: 'sugarss',
  plugins: {
    // 'postcss-import': {},
    // 'postcss-preset-env': {},
    // 'cssnano': {}
    autoprefixer: {
      // 谨慎：使用browsers属性配置
      // 建议：
      //  1.在package.json中使用browserslist属性配置
      //  2.创建配置文件.browserslistrc
      // 使用browserslist配置后babel、autoprefixer、postcss-normalize等会共用
      // 若一定要指定兼容浏览器，请使用 overrideBrowserslist 代替 browsers

      // browsers: [ // 谨慎使用，可能会报错
      // overrideBrowserslist: [ // 优先使用全局配置，只有需要单独指定时才使用
      //   "> 1%",
      //   "last 2 versions",
      //   "not ie <= 8",
      //   "IOS > 8",
      //   "Firefox >= 20",
      //   "Android >= 4.4",
      // ],
    },
  },
};
