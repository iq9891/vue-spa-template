module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "项目名称"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "项目描述",
      "default": "一个 Vue.js 项目"
    },
    "author": {
      "type": "string",
      "message": "作者"
    },
    "build": {
      "type": "list",
      "message": "Vue 构建",
      "choices": [
        {
          "name": "Runtime(运行时) + Compiler(编译): 推荐用于大多数用户",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: 约 6KB 轻量 的打包机(min+gzip)，但模板（或任何 Vue 特定的HTML）只允许在 .vue 文件中 - 渲染功能需要在其他地方",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "vueversion": {
      "type": "string",
      "required": true,
      "message": "Vue 版本",
      "default": "2.3.4"
    },
    "router": {
      "type": "confirm",
      "message": "安装 vue-router?"
    },
    "lint": {
      "type": "confirm",
      "message": "用 ESLint 进行语法检测吗?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "选择一个 ESLint 预设",
      "choices": [
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
      ]
    },
    "stylelint": {
      "type": "confirm",
      "message": "样式部分是否需要规范语法检测?"
    },
    "ui": {
      "type": "confirm",
      "message": "用 ui 库吗?"
    },
    "uiConfig": {
      "when": "ui",
      "type": "list",
      "message": "选择一个 ui 库",
      "choices": [
        {
          "name": "em-fe (https://github.com/em-fe/EM-FE)",
          "value": "em-fe",
          "short": "em-fe"
        },
        {
          "name": "iview (https://www.iviewui.com)",
          "value": "iview",
          "short": "iview"
        },
        {
          "name": "element (http://element.eleme.io)",
          "value": "element",
          "short": "element"
        },
        {
          "name": "none (自己配置)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "jsonp": {
      "type": "confirm",
      "message": "用 jsonp 进行跨域吗?"
    },
    "unit": {
      "type": "confirm",
      "message": "使用 Karma + Mocha 进行设置单元测试?"
    },
    "e2e": {
      "type": "confirm",
      "message": "用 Nightwatch 设置 e2e 测试?"
    }
  },
  "filters": {
    ".stylelintrc": "stylelint",
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
  },
  "completeMessage": "请退出该进程，重新进入{{destDirName}}进行操作:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm start\n\nDocumentation can be found at https://github.com/eventmosh/vui-boilerplate/wiki"
};
