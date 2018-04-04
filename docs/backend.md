# 与后端框架集成

如果您正在构建纯静态应用程序（与后端API分开部署的应用程序），则可能甚至不需要编辑 `config/index.js` 。但是，如果要将此模板与现有的后端框架集成，例如 Rails / Django / Laravel ，它们自带的项目结构可以编辑 `config/index.js` ，以将前端资产直接生成到后端项目中。

我们来看看默认值 `config/index.js` ：

``` js
// config/index.js
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
```

在 `build` 的对象里，我们有以下选项：

### `build.index`

> 必须是本地文件系统上的绝对路径。

这就是 `index.html`（注入资产 URL ）将被生成的地方。

如果您使用这个模板与后端框架结合，您可以相应地进行编辑 `index.html` ，并将此路径指向由后台应用程序呈现的视图文件，例如： Rails 应用中的 `app/views/layouts/application.html.erb` 或 Laravel 应用中的 `resources/views/index.blade.php`。

### `build.assetsRoot`

> 必须是本地文件系统上的绝对路径。

这应该指包含应用程序的所有静态资源的根目录。例如： `public/` 对于 Rails / Laravel。

### `build.assetsSubDirectory`

在此目录下嵌入 Webpack 生成的资源 `build.assetsRoot` ，以便它们与您可能拥有的其他文件不混合 `build.assetsRoot` 。例如：如果 `build.assetsRoot` 是 `/path/to/dist` ，然后 `build.assetsSubDirectory` 是 `static` 所有 Webpack 资产将被生成 `path/to/dist/static` 。

此目录将在每次构建之前进行清理，因此只应包含生成生成的资源。

内部文件 `static/` 将在构建期间按原样复制到此目录中。这意味着如果您更改此前缀，则所有您引用文件的绝对路径中的 `static/` 也将需要更改。有关详细信息，请参阅[处理静态资产](static.md)。

### `build.assetsPublicPath`

这应该是您 `build.assetsRoot` 通过 HTTP 提供服务的 URL 路径。在大多数情况下，这将是根目录（ `/` ）。只有当您的后端框架提供具有路径前缀的静态资产时，才可以更改此选项。在内部，这被传递给 Webpack `output.publicPath` 。

### `build.productionSourceMap`

是否生成用于生产构建的源映射。

### `dev.port`

指定要监听的服务器的端口。

### `dev.proxyTable`

定义开发人员服务器的代理规则。有关详细信息，请参阅[开发期间的API代理](proxy.md)。
