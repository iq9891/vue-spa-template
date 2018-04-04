# 环境变量

有时根据应用程序运行的环境具有不同的配置值是很实用的。一个项目会分很多种环境，如开发环境( `development` )，测试环境( `testing` )和生产环境( `production` )。

举个例子:

```js
// config/prod.env.js
module.exports = {
  NODE_ENV: '"production"',
  DEBUG_MODE: false,
  API_KEY: '"..."' // 这在所有环境之间共享
}

// config/dev.env.js
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true // 将覆盖 prod.env 的 DEBUG_MODE 值
})

// config/test.env.js
module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
```

> **注意:**：字符串变量需要包装成单引号和双引号 `'"..."'`

所以环境变量是：
- 生产
    - NODE_ENV   = 'production',
    - DEBUG_MODE = false,
    - API_KEY    = '...'
- 发展
    - NODE_ENV   = 'development',
    - DEBUG_MODE = true,
    - API_KEY    = '...'
- 测试
    - NODE_ENV   = 'testing',
    - DEBUG_MODE = true,
    - API_KEY    = '...'

我们可以看到， `test.env` 继承 `dev.env` 和 `dev.env` 继承 `prod.env` 。

### 用法

在代码中使用环境变量很简单。例如：

```js
Vue.config.debug = process.env.DEBUG_MODE
```
