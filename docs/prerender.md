# 提前渲染和有关 SEO

如果您想在某个特定路由下渲染固定的内容，请使用此 Webpack 插件： [Prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin)，它已经过 Vue 测试。对于网页也经常变化， [Prerender.io](https://prerender.io) 和 [Netlify](https://www.netlify.com/pricing) 都提供计划定期重新预渲染的搜索引擎的内容。

## 运用 `Prerender-spa-plugin`

1. 安装，并存入 `package.json` :

  ```bash
  npm install --save-dev prerender-spa-plugin
  ```

2. 在 **`build/webpack.prod.conf.js`** 中:

  ```js
  // 引入 prerender-spa-plugin
  var PrerenderSpaPlugin = require('prerender-spa-plugin')
  ```

3. 在 `plugins` 中配置 (也在 **`build/webpack.prod.conf.js`** 中):

  ```js
  new PrerenderSpaPlugin(
    // 编译应用的路径
    path.join(__dirname, '../dist'),
    // 您希望预先渲染的端点列表，目前渲染 `/` 目录
    [ '/' ]
  )
  ```

如果你也想预渲染 `/about` 和 `/contact` ，那么数组会是 `[ '/', '/about', '/contact' ]` 。

4. 在 `vue-router` 中使用历史模式:

  ```js
  const router = new VueRouter({
    mode: 'history',
    routes: [...]
  })
  ```
