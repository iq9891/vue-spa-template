# 处理静态资产

在项目中您会注意到，我们有两个目录静态资产注意： `src/assets` 和 `static/` 。他们有什么区别？

### Webpack 的资产

为了回答这个问题，我们首先需要了解 Webpack 如何处理静态资产。在 `*.vue` 组件中，您的所有模板和 CSS 都被解析 `Vue-template-compiler` 并 `Css-loader` 查找资产 URL。例如，in `<img src="./logo.png">` 和 `background: url(./logo.png)` ，`"./logo.png"` 是相对的资产路径，将**由 Webpack 解析为模块依赖关系**。

因为 `logo.png` 不是 JavaScript，当被视为模块依赖关系时，我们需要使用 `Url-loader` 并 `File-loader` 处理它。这个模板已经为您配置了这些加载程序，因此您可以免费获得文件名指纹和条件 base64 内联等功能，同时可以使用相对/模块路径，而不必担心部署。

由于这些资源可能在构建过程中被内联/复制/重命名，所以它们基本上是您的源代码的一部分。这就是为什么建议将 Webpack 处理的静态资源放在 `/src` 其他源文件的旁边。事实上，你甚至不必把它们全部放在 `/src/assets` ：你可以根据使用它们的模块/组件来组织它们。例如，您可以将每个组件放在自己的目录中，其静态资产就在其旁边。

### 资产解决规则

- **相对 URL** ，例如： `./assets/logo.png` 将被解释为模块依赖。它们将被基于 Webpack 输出配置的自动生成的 URL 替换。

- **非前缀 URL** ，例如： `assets/logo.png` 将被视为与相对URL相同并被翻译成 `./assets/logo.png` 。

- **前缀的 URL~** 被视为模块请求，类似于 `require('some-module/image.png')` 。如果要使用 Webpack 的模块解析配置，则需要使用此前缀。例如，如果您有一个解决别名 assets ，则需要使用 `<img src="~assets/logo.png">` 以确保别名得到尊重。

- **根本相关的 URL** ，例如： `/assets/logo.png` 根本不处理。

### 在 JavaScript 中获取资源路径

为了使 Webpack 返回正确的资源路径，您需要使用 `require('./relative/path/to/file.jpg')` ，将被处理 `File-loader` 并返回已解析的 URL。例如：

``` js
computed: {
  background () {
    return require('./bgs/' + this.id + '.jpg')
  }
}
```

**注意上面的例子将包括 `./bgs/` 最终构建中的每个图像**。这是因为 Webpack 无法猜测其中哪些将在运行时被使用，所以它包括它们。

### “真实”静态资产

相比之下，Webpack `static/` 并不会处理这些文件：它们直接以相同的文件名复制到最终目的地。您必须使用绝对路径引用这些文件，这是通过在 `./config/index.js` 中的 `build.assetsPublicPath` 和 `build.assetsSubDirectory` 来确定的。

例如，使用以下默认值：

``` js
// config/index.js
module.exports = {
  // ...
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
```

`static/` 应使用绝对 URL 引用任何放置的文件 `/static/[filename]` 。如果您更改 `assetSubDirectory` 为 `assets` ，那么这些 URL 将需要更改 `/assets/[filename]` 。

我们将在[后端集成](backend.md)部分中详细了解配置文件。
