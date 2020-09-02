const path = require("path");
const fs = require("fs");
const parser = require("@babel/parser");
const { default: traverse } = require("@babel/traverse");
const babel = require("@babel/core");

let moduleId = 0;

function moduleAnalysis(filename) {
  const content = fs.readFileSync(filename, "utf-8");

  const ast = parser.parse(content, {
    sourceType: "module",
  });
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration({ node }) {
      dependencies.push(node.source.value);
    },
  });
  const { code } = babel.transformFromAstSync(ast, null, {
    presets: [ "@babel/preset-env" ],
  });

  const id = moduleId++;
  return {
    id,
    filename,
    code,
    dependencies,
  };
}

function createGraph(entry) {
  const entryModule = moduleAnalysis(entry);
  const moduleQueue = [entryModule];
  for (let i = 0; i < moduleQueue.length; i++) {
    const module = moduleQueue[i];
    const dir = path.dirname(module.filename);
    module.mapping = {};
    module.dependencies.forEach((relativePath) => {
      const absolutePath = path.resolve(dir, relativePath);
      const childModule = moduleAnalysis(absolutePath);

      module.mapping[relativePath] = childModule.id;
      moduleQueue.push(childModule);
    });
  }
  return moduleQueue;
}

function generateCode(graph) {
  let modules = '';
  graph.forEach((item) => {
    modules += `
      ${item.id}: [
        function(require, module, exports) {
          ${item.code}
        },
        ${JSON.stringify(item.mapping)}
      ],
    `
  });
  modules = `{${modules}}`;
  
  return `(function(modules){
    function require(moduleId) {
      const [ fn, mapping ] = modules[moduleId];
      function localRequire(relativePath) {
        return require(mapping[relativePath]);
      }
      const module = {
        exports: {},
      };
      fn(localRequire, module, module.exports);
      return module.exports;
    }
    require(0);
  }(${modules}))`
}

const graph = createGraph('./src/index.js');
console.log('graph', graph);
const code = generateCode(graph);
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
fs.writeFileSync('./dist/main.js', code);
// console.log('##########');
// eval(code);
