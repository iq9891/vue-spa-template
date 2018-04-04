# 单元测试

模板用于单元测试的工具概述：

- [Karma](https://karma-runner.github.io) ：启动浏览器的测试运行器，运行测试并将结果报告给我们。
- [Karma-webpack](https://github.com/webpack/karma-webpack) ：使用 Webpack 捆绑我们的测试的 Karma 插件。
- [Mocha](https://mochajs.org) ：我们编写测试规范的测试框架。
- [Chai](http://chaijs.com) ：提供更好的断言语法的测试断言库。
- [Sinon](http://sinonjs.org) ：提供间谍，存根和模拟的测试实用程序库。

Chai 和 Sinon 使用的是 [Karma-sinon-chai](https://github.com/kmees/karma-sinon-chai) ，因此所有的 Chai 接口（ `should` ， `expect` ， `assert` ），并 `sinon` 在测试文件全局可用。

关于文件:

- `index.js`

  > 这是用于 `karma-webpack` 捆绑所有测试代码和源代码（用于覆盖目的）的入口文件。很多时候您可以忽略它。

- `specs/`

  > 该目录是您编写实际测试的地方。您可以在测试中使用完整的 ES2015+ 和所有支持的 Webpack 加载器。

- `karma.conf.js`

  > 这是 Karma 配置文件。有关详细信息，请参阅 [Karma 文档](https://karma-runner.github.io)。

## 在更多浏览器中运行测试

您可以在多个真正的浏览器中运行测试，方法是安装更多的[浏览器](https://karma-runner.github.io/1.0/config/browsers.html)并调整 `test/unit/karma.conf.js` 中的 `browsers` 字段。

## 模拟依赖

默认情况下，模板安装了 [Inject-loader](https://github.com/plasticine/inject-loader) 。有关 `*.vue` 组件的使用，请参阅 [Vue-loader 文档](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html)进行测试。
