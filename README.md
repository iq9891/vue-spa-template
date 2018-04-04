# vue-spa-template
> 中大型应用，甚至重型应用的首选。一个全功能的vue2全家桶，包括安装、热刷新、js语法检测、单元测试、端对端测试等……

## 使用

这是一个 SPA ( Single-page application ) 模板项目。用 [Vue-cli](https://github.com/vuejs/vue-cli) 来构建。由于是私有项目，所以必须用配置一下 [SSH](http://blog.csdn.net/so_geili/article/details/62041664) 。**建议使用 npm 3+**

``` bash
$ npm install -g vue-cli
$ vue init eventmosh/vui-boilerplate my-project --clone
$ cd my-project
$ npm install
$ npm run dev
```

默认是 8080 端口。如果端口 8080 已在您的计算机上使用，您必须更改端口号( `/config/index.js` )。否则 `npm run dev` 会失败。

## 安装特定版本

Vue-cli 使用该工具 [Download-git-repo](https://github.com/flipxfx/download-git-repo) 下载使用的官方模板。该 `Download-git-repo` 工具允许您通过在井号（ `#` ）之后提供所需的分支名称来指定给定存储库的特定分支。

1. 私有模板或者线上模板

特定官方模板所需的格式为：
``` bash
$ vue init '<template-name>#<branch-name>' <project-name>
```
例：

安装 `Vui-boilerplate` 模板的 `feature-spa-template` 分支：
``` bash
vue init eventmosh/vui-boilerplate#feature-spa-template test1 --clone
```

2. 本地模板

把 [vui-boilerplate](https://github.com/eventmosh/vui-boilerplate) 克隆到本地的 url/path 文件夹下。创建 `test1` 项目。

``` bash
vue init url/path/vui-boilerplate test1
```

## npm 淘宝镜像

[镜像](https://gist.github.com/iq9891/96441b1b01ddd4710e06cc5e52b9c10a)

## 目录结构

``` bash
.
├── docs/                      # 模板项目中的各种说明
│   └── ...
├── template/                  # 模板文件夹
│   └── ...
├── .gitignore                 # git管理控制，文件里面的都不受git控制
├── meta.js                    # vue init 之后的一些问题配置
└── package.json               # 包管理，包括各种依赖，模板生成之后的运行命令……
```

#### `docs/`

这里面关于模板项目的一些说明，包括目录结构，常见问题，线上测试部署。在命令行中运行 `npm i -g gitbook` ，然后运行 `npm run docs` ，就可以直接访问 <http://localhost:4000> 查看文档说明。

#### `template/`

这个文件是未来生成出来的模板，里面有很多配置变量。若想fork修改，[请参见](https://github.com/vuejs/vue-cli)。


### 本地调试

`npm test`

- 自动生成名为 **tpltest** 的项目
- 安装需要的依赖 ( `npm install` )
- 语法检测 ( `npm run lint` )
- 测试，包括端对端测试和单元测试 ( `npm test` )
- 进行构建 ( `npm run build` )
