const PLUGIN_NAME = 'CopyrightWebpackPlugin'; 

class CopyrightWebpackPlugin {
  constructor() {

  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, (compilation, cb) => {
      console.log(compilation);
      debugger
      const copyrightStr = '# copyright by JasonLin\n';
      compilation.assets['copyright.md'] = {
        source: function() {
          return copyrightStr;
        },
        size: function() {
          return [...copyrightStr].length;
        },
      }
      cb();
    });
  }
}

module.exports = CopyrightWebpackPlugin;