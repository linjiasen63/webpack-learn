
## enrty

```js
module.exports = {
  entry: {
    main: './src/index.js'
  },
};
```

## output

```js
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
```