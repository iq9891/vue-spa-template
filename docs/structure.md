# 项目结构

``` bash
.
├── build/                      # webpack 配置文件
│   └── ...
├── config/
│   ├── index.js                # 主要项目配置( development | production )
│   └── ...
├── src/
│   ├── main.js                 # 应用的入口文件
│   ├── App.vue                 # 主应用程序组件
│   ├── components/             # 功能组件
│   │   └── ...
│   ├── views/                  # 页面组件
│   │   └── ...
│   └── assets/                 # 模块资产 (用 webpack 处理)
│   │   ├── images/             # 应用的所有图片
│       └── styles/             # 应用的所有样式
├── static/                     # 纯静态资产（直接复制）
├── test/
│   └── unit/                   # 单元测试
│   │   ├── specs/              # 测试的 spec 文件
│   │   ├── index.js            # 测试构建的入口文件
│   │   └── karma.conf.js       # 测试运行的配置文件
│   └── e2e/                    # 端对端测试
│   │   ├── specs/              # 测试的 spec 文件
│   │   ├── custom-assertions/  # 端对端测试的自定义断言
│   │   ├── runner.js           # 测试运行脚本
│   │   └── nightwatch.conf.js  # 测试运行的配置文件
├── .babelrc                    # Babel 配置
├── .editorconfig               # Editor 配置
├── .eslintignore               # 如果您不想被 Eslint 检测，那么请您在这里把它加上
├── .eslintrc.js                # Eslint 配置
├── .flowconfig                 # Flow 配置
├── .flowlibdefs.js             # 如果您的应用中引用了 node_modules 中的模块，那么一定要在这里配
                                # 置一下，不然 JavaScript 检查的时候会报错
├── .gitignore                  # 如果您不想被 Git 控制，那么请您在这里把它加上
├── .postcssrc.js               # Postcss 配置
├── .stylelintrc                # Stylelint 配置
├── index.html                  # index.html 模板
└── package.json                # 启动项目的命令和依赖包等信息聚集地
```

### `build/`

此目录包含开发服务器和生产 Webpack 构建的实际配置。通常，您不需要触摸这些文件，除非您要自定义 Webpack 加载器，或者修改热加载的端口号，那么您应该看看 `build/webpack.base.conf.js`.

### `config/index.js`

这是主要的配置文件，它暴露了构建设置的一些最常见的配置选项。有关详细信息，请参阅开发过程中的 [API 代理](proxy.md)和[后端框架集成](backend.md)。

### `src/`

这是你的大部分应用程序代码所在的位置。如何构建此目录中的所有内容，主要取决于您。模板中还为您添加了 [Vuex](https://vuex.vuejs.org) 和 [Vue-router](https://router.vuejs.org/)

### `static/`

此目录是您不想使用 Webpack 进行处理的静态资产的一个逃生舱口。它们将直接复制到生成 Webpack 建立的资产的同一个目录中。

有关详细信息，请参阅[处理静态资产](static.md)。

### `test/unit`

包含单元测试相关文件。有关详细信息，请参阅[单元测试](unit.md)

### `test/e2e`

包含端对端测试相关文件。有关详细信息，请参阅[端到端测试](e2e.md)。

### `index.html`

这是我们的单页面应用程序的**模板** `index.html`。在开发和构建期间，Webpack 将生成资产，并将生成的资产的 URL 自动注入到此模板中以呈现最终的 HTML。

### `package.json`

包含所有构建依赖项和[构建命令](commands.md)的 NPM 软件包元文件。
