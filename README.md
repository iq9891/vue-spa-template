# vue 2.x 官网应用模板
> 一个全功能的 vue2.x 全家桶，包括热刷新、 sass 语法检测、 js 语法检测、支持 SEO 的官网等……

[![Sauce Labs Test Status (for master branch)](https://badges.herokuapp.com/browsers?googlechrome=7&firefox=7&microsoftedge=10&iexplore=9&safari=10.10)](https://saucelabs.com/u/_wmhilton)

## 使用

这是一个 SPA ( Single-page application ) 模板项目。用 [fecli](https://github.com/fe6/fecli) 来构建。

``` bash
$ npm install -g @fe6/fecli
$ fe add
$ fe init
$ cd my-project
$ npm install
$ npm start
```

默认是 8080 端口。如果端口 8080 已在您的计算机上使用，您必须更改端口号( `/config/index.js` )。否则 `npm run dev` 会失败。

## 目录结构

``` bash
├── build/                     # 打包配置
│   └── ...
├── config/                    # 环境变量及开发配置
│   └── ...
├── src/                       # 源代码
│   └── ...
├── .gitignore                 # git管理控制，文件里面的都不受git控制
└── package.json               # 包管理，包括各种依赖，模板生成之后的运行命令……
```

### 本地调试

- `npm start` 本地开发
- `npm run build` 打包上线开发
