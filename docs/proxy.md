# 开发期间的 API 代理

当将此样板与现有后端集成时，通常需要在使用 Dev 服务器时访问后端 API 。为了实现这一点，我们可以并行（或远程）运行 Dev 服务器和 API 后端，并让 Dev 服务器将所有 API 请求代理到实际的后端。

要配置代理规则，请在其中编辑 `config/index.js` 中的 `dev.proxyTable` 选项 。 Dev 服务器正在使用 [HTTP 代理中间件](https://github.com/chimurai/http-proxy-middleware)进行代理，因此您应参考其文档以获取详细的用法。但这是一个简单的例子：

``` js
// config/index.js
module.exports = {
  // ...
  dev: {
    proxyTable: {
      // 代理请求用 /cnodejs 开头
      '/cnodejs': {
        // 这里的 target 必须是主域名，带有路径的域名( https://cnodejs.org/cnodejs )不起作用
        target: 'https://cnodejs.org',
        changeOrigin: true, // 是否跨域
        pathRewrite: { // 是否改写
          '^/cnodejs': ''
        }
      }
    }
  }
}
```

上面的示例将代理请求 `/cnodejs/api/v1/topics` 到 `https://cnodejs.org/api/v1/topics` 。

## 网址匹配

除了静态网址之外，您还可以使用 glob 模式来匹配 URL ，例如： `/api/**` 。有关[详细信息](https://github.com/chimurai/http-proxy-middleware)，请参阅[上下文匹配](https://github.com/chimurai/http-proxy-middleware#context-matching)。此外，您可以提供一个 `filter` 可以是自定义函数的选项，以确定请求是否应被代理：

``` js
proxyTable: {
  '*': {
    target: 'https://cnodejs.org',
    filter: function (pathname, req) {
      return pathname.match('^/api') && req.method === 'GET'
    }
  }
}
```
