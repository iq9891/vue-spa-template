# 端到端测试

模板使用 [Nightwatch.js](http://nightwatchjs.org) 进行端到端测试。 Nightwatch.js 是一个高度集成的端到端测试跑步机，构建在 Selenium 上。模板附带了 Selenium 服务器和 Chromedriver 二进制文件，为您预先配置，因此您不必自己弄乱这些。

我们来看看 `test/e2e` 目录中的文件：

- `runner.js`

  > 启动开发服务器的 Node.js 脚本，然后启动 Nightwatch 以对其执行测试。这是运行时运行的脚本 `npm run e2e` 。

- `nightwatch.conf.js`

  > Nightwatch 配置文件。有关详细信息，请参阅 [Nightwatch 的配置文档](http://nightwatchjs.org/guide#settings-file)。

- `custom-assertions/`

  > 可在 Nightwatch 测试中使用的自定义断言。有关详细信息，请参阅 [Nightwatch 的文档编写自定义声明](http://nightwatchjs.org/guide#writing-custom-assertions)。

- `specs/`

  > 你实际测试！有关详细信息，请参阅 [Nightwatch 的文档测试](http://nightwatchjs.org/guide#writing-tests)和 [API参考](http://nightwatchjs.org/api)。

### 在更多浏览器中运行测试

要配置哪些浏览器运行测试，请在 `test/e2e/nightwatch.conf.js` 文件的 `test_settings` 中添加一个条目，并在其中添加 `--env` 标志 [`test/e2e/runner.js`](https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/runner.js#L15) 。如果您希望在诸如 SauceLabs 之类的服务上配置远程测试，您可以根据环境变量使 Nightwatch 配置有条件，或者完全使用单独的配置文件。有关详细信息，请参阅 [Nightwatch 在 Selenium 上的文档](http://nightwatchjs.org/guide#selenium-settings)。
