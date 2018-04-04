# 预处理器

这个模板为大多数流行的 CSS 预处理器（包括 LESS， SASS， Stylus 和 PostCSS ）预先配置了 CSS 提取。要使用预处理器，您需要做的就是为其安装适当的 Webpack 加载器。例如，要使用 SASS：

``` bash
npm install sass-loader node-sass --save-dev
```

请注意，您还需要安装 `node-sass`，因为 Sass-loader 它依赖于它作为对等依赖。

### 在组件内使用预处理器

一旦安装，您就可以在组件( `*.vue` )中的 `<style>` 标签加上 `lang` 的属性，并写上 `scss`。之后就编写 SASS 了:

``` html
<style lang="scss">
/* 写 SASS! */
</style>
```

### 关于 SASS 语法的注释

- `lang="scss"`  对应于 CSS-superset 语法（带大括号和分号）。
- `lang="sass"`  对应于基于缩进的语法。

### PostCSS

您可在 `.postcssrc.js` 中添加配置您所需要的插件

``` js
// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    postcss: [
      require('postcss-initial')(),
      // 允许您今天使用未来的CSS功能（包括autoprefixer） http://cssnext.io/
      require('postcss-cssnext')(),
      // 解开嵌套 https://github.com/postcss/postcss-nested
      require('postcss-nested'),
      // 祖先选择器 https://github.com/toomuchdesign/postcss-nested-ancestors
      require('postcss-nested-ancestors'),
      // 嵌套属性 https://github.com/jedmao/postcss-nested-props
      require('postcss-nested-props'),
    ],
  }
}

```

### 独立的 CSS 文件

为了确保一致的提取和处理，建议从根 `App.vue` 组件导入全局独立样式文件，例如：

``` html
<!-- App.vue -->
<style src="./styles/global.less" lang="less"></style>
```

请注意，您应该只能为自己为您的应用程序编写的样式。对于现有的库，例如 Bootstrap 或语义 UI ，您可以将它们放在里面 `/static` 并直接引用 `index.html` 。这样可以避免额外的构建时间，同时也更适合浏览器缓存。（见[静态资产处理](static.md)）
