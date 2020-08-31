# 基本使用

## 安装插件

```bash
npm install workbox-webpack-plugin --save-dev
```

## 在配置文件中使用插件

```js
{
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  ]
}
```

## 在入口中配置

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('----- window load');
    navigator.serviceWorker.register('./service-worker.js').then(() => {
      console.log('service work register success');
    }).catch(() => {
      console.error('service work register fail');
    });
  })
}
```
