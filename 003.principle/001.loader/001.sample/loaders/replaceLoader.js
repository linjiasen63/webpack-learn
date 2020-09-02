const loaderUtils = require("loader-utils");

module.exports = function(content) {
  const options = loaderUtils.getOptions(this);
  const result = content.replace(options.replaceStr, "艾泽拉斯");
  // return result;
  // 返回不止结果，还有sourceMap，error，meta等
  // this.callback(null, result);

  // 异步操作
  const callback = this.async();
  setTimeout(() => {
    callback(null, result);
  }, 1000);
}