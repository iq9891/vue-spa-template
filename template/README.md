# {{ name }}

> {{ description }}

## 需要的环境

- node.js >= 4.0.0
- npm >= 3.0.0

## npm 淘宝镜像

[镜像](https://gist.github.com/iq9891/96441b1b01ddd4710e06cc5e52b9c10a)

## 兼容的浏览器

- 样式( CSS )部分

  - 每个浏览器的最后2个版本
  - 不支持 IE6，IE7， IE8
  - 支持iOS 7 以上，不包含7
  - Android >= 4.0


- 脚本( JavaScript ) 部分

  - 不支持 IE8 及其以下版本
  - 支持所有兼容 ECMAScript 5 的浏览器

## 常用命令 ( package.json 的 scripts 中可以找到所有命令)

``` bash
# 安装依赖( package.json 中的 dependencies 部分 ) dependencies
npm install ( npm i )

# development 环境的本地热加载服务，访问地址: localhost:8080
npm start

# testing 环境的本地热加载服务，访问地址: localhost:8080
npm run dev:test

# production 环境的本地热加载服务，访问地址: localhost:8080
npm run dev:pro

# production 环境，打包
npm run build

# testing 环境，打包
npm run build:test

# production 环境，打包并查看捆绑分析器报表
npm run build --report
{{#unit}}

# 运行 单元 测试
npm run unit
{{/unit}}
{{#e2e}}

# 运行 端对端 测试
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# 运行所有测试 ( JavaScript 的类型检查 | 端对端检查 | 单元测试 )
npm test
{{/if_or}}

# JavaScript 的代码规范监测
npm run lint
```

## 各命令所干的事情

### `npm run dev`

> ( **development** 环境的本地热加载服务，访问地址: [localhost:8080](localhost:8080))

  - Webpack2 + vue-loader 编译单个文件Vue的组件。
  - 状态保存热重新加载
  - 状态保存编译错误覆盖

### `npm run dev:test`

> ( **testing** 环境的本地热加载服务，访问地址: [localhost:8080](localhost:8080))

  - Webpack2 + vue-loader 编译单个文件Vue的组件。
  - 状态保存热重新加载
  - 状态保存编译错误覆盖

### `npm run dev:test`

> ( **production** 环境的本地热加载服务，访问地址: [localhost:8080](localhost:8080))

  - Webpack2 + vue-loader 编译单个文件Vue的组件。
  - 状态保存热重新加载
  - 状态保存编译错误覆盖

### `npm run build`

> ( **production** 环境，打包)

  - 用 [UglifyJS](https://github.com/mishoo/UglifyJS2) 缩小了JavaScript
  - HTML用 [html-minifier](https://github.com/kangax/html-minifier) 缩小
  - 将所有组件的CSS提取到单个文件中，并用 [cssnano](https://github.com/ben-eb/cssnano) 进行缩小
  - 使用版本散列编辑的所有静态资产都可以进行高效的长期缓存，并且生成index.html是通过自动生成的，适用于
    这些生成的资产。
  - 用 `npm run build --report` 带有分析功能

### `npm run build:test`

> ( **testing** 环境，打包)

  - 用 [UglifyJS](https://github.com/mishoo/UglifyJS2) 缩小了JavaScript
  - HTML用 [html-minifier](https://github.com/kangax/html-minifier) 缩小
  - 将所有组件的CSS提取到单个文件中，并用 [cssnano](https://github.com/ben-eb/cssnano) 进行缩小
  - 使用版本散列编辑的所有静态资产都可以进行高效的长期缓存，并且生成index.html是通过自动生成的，适用于
    这些生成的资产。
  - 用 `npm run build --report` 带有分析功能

### `npm run unit`

> 用 [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org) + [karma-webpack](https://github.com/webpack/karma-webpack) 运行在 PhantomJS 中的单元测试

  - 测试文件中支持 ES2015
  - 支持 Webpack 所有的 Loaders
  - 轻松模拟注入

### `npm run e2e`

> 用 [Nightwatch](http://nightwatchjs.org) 端对端测试

  - 在多个浏览器中并行运行测试
  - 与一个命令开箱即用
    - Selenium 和 Chromedriver 依赖关系自动处理
  - 自动派生的 Selenium 的服务

### `npm run lint`

>用 [eslint](http://eslint.cn) 语法规范检测

  - 在 `.eslintrc.js` 中可自定义规范
  - 在 `.eslintignore` 中可自定义不检查规范的文件及文件夹

## 修改热加载服务的端口

在 `/config/index.js` 文件中修改

## 模板包含的功能

- [SPA ( single-page application )](http://zhaoda.net/spa/docs)，需要 SEO 的项目请绕行
- 每个模块按需加载
- 每个模糊拥有缓存功能，不刷新的情况下，第二次进入不重复加载
- 页面之间切换，顶部有进度条功能
- 将 Axios 挂载到 Vue 对象上，并利用 Axios 获取数据
- 数据请求拦截，自动跳到 `/error`
- 利用 Vuex 实现购物车小例子
- 实现 currency 过滤器

## 环境及接口

- 模板的环境

  - 开发环境( **development** )
  - 测试环境( **testing** )
  - 生成环境( **production** )


- 环境及接口的添加和修改

  在 `config/constant.env.js` 中是接口和环境的常量


- 不同环境中的接口修改

  ```bash
  └── config/                      # 模板项目中的各种说明
      ├── index.js                 # 打包和开发的个性化配置
      ├── dev.env.js               # 开发 环境的接口
      ├── test.env.js              # 测试 环境的接口
      └── prod.env.js              # 生产 环境的接口
  ```

## 技术资源

- 样式( SASS )部分

  - [CSS 预处理器( SASS )](http://sass-lang.com)
  - [用JavaScript转换CSS的工具( Postcss )](http://postcss.org)
  - [允许您今天使用未来的CSS功能（包括自动补全 CSS3 的兼容浏览器前缀)](http://cssnext.io)
  - [解开嵌套( postcss-nested )](https://github.com/postcss/postcss-nested)
  - [祖先选择器解开嵌套( postcss-nested-ancestors )](https://github.com/toomuchdesign/postcss-nested-ancestors)
  - [属性解开嵌套( postcss-nested-props )](https://github.com/jedmao/postcss-nested-props)
  - [样式( sass )规范( stylelint )](https://stylelint.io)


- 脚本( JavaScript )部分

  - [JavaScript 新语法 ECMA-262( ES6 | ES2015 | ECMA2015  )](http://es6.ruanyifeng.com)
  - [框架( Vue2 )](https://vuefe.cn)
  - [路由管理( Vue-Router )](https://router.vuejs.org/zh-cn)
  - [状态管理( Vuex )](https://vuex.vuejs.org/zh-cn)
  - [Ajax请求的库( Axios )](https://github.com/mzabriskie/axios)
  - [页面切换进度插件( nprogress )](http://ricostacruz.com/nprogress)
  - [JavaScript规范( eslint )](http://eslint.cn)


- 环境搭建

  - [Node.js](https://nodejs.org/en)
  - [Webpack2](https://webpack.js.org)
