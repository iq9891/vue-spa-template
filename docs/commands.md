# 构建命令

所有构建命令都通过 [NPM 脚本](https://docs.npmjs.com/misc/scripts)执行。

1. `npm run dev`

  > ( **development** 环境的本地热加载服务，访问地址: [localhost:8080](localhost:8080))

    - Webpack2 + Vue-loader 编译单个文件 Vue 的组件。
    - 状态保存热重新加载
    - 状态保存编译错误覆盖

2. `npm run dev:test`

  > ( **testing** 环境的本地热加载服务，访问地址: [localhost:8080](localhost:8080))

    - Webpack2 + Vue-loader 编译单个文件 Vue 的组件。
    - 状态保存热重新加载
    - 状态保存编译错误覆盖

3. `npm run dev:test`

  > ( **production** 环境的本地热加载服务，访问地址: [localhost:8080](localhost:8080))

    - Webpack2 + Vue-loader 编译单个文件 Vue 的组件。
    - 状态保存热重新加载
    - 状态保存编译错误覆盖

4. `npm run build`

  > ( **production** 环境，打包)

    - 用 [UglifyJS](https://github.com/mishoo/UglifyJS2) 缩小了JavaScript
    - HTML用 [Html-minifier](https://github.com/kangax/html-minifier) 缩小
    - 将所有组件的 CSS 提取到单个文件中，并用 [Cssnano](https://github.com/ben-eb/cssnano) 进行缩小
    - 使用版本散列编辑的所有静态资产都可以进行高效的长期缓存，并且生成 `index.html` 是通过自动生成的，适用于这些生成的资产。
    - 用 `npm run build --report` 带有分析功能

5. `npm run build:test`

  > ( **testing** 环境，打包)

    - 用 [UglifyJS](https://github.com/mishoo/UglifyJS2) 缩小了JavaScript
    - HTML用 [html-minifier](https://github.com/kangax/html-minifier) 缩小
    - 将所有组件的 CSS 提取到单个文件中，并用 [Cssnano](https://github.com/ben-eb/cssnano) 进行缩小
    - 使用版本散列编辑的所有静态资产都可以进行高效的长期缓存，并且生成 `index.html` 是通过自动生成的，适用于这些生成的资产。
    - 用 `npm run build --report` 带有分析功能

6. `npm run unit`

  > 用 [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org) + [karma-webpack](https://github.com/webpack/karma-webpack) 运行在 PhantomJS 中的单元测试

    - 测试文件中支持 ES2015
    - 支持 Webpack 所有的 Loaders
    - 轻松模拟注入

7. `npm run e2e`

  > 用 [Nightwatch](http://nightwatchjs.org) 端对端测试

    - 在多个浏览器中并行运行测试
    - 与一个命令开箱即用
      - Selenium 和 Chromedriver 依赖关系自动处理
    - 自动派生的 Selenium 的服务

8. `npm run lint`

  > 用 [Eslint](http://eslint.cn) 语法规范检测

    - 在 `.eslintrc.js` 中可自定义规范
    - 在 `.eslintignore` 中可自定义不检查规范的文件及文件夹
