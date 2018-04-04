# 语法规则配置

这个模板使用 [ESLint](http://eslint.org/) 作为语法规则，并使用[标准](https://github.com/feross/standard/blob/master/RULES.md)预设与一些小的定制。

如果您对默认的语法规则不满意，您可以选择以下几种：

1. 覆盖单个规则 `.eslintrc.js` 。例如，您可以添加以下规则来强制执行分号，而不是省略它们：

  ``` js
  // .eslintrc.js
  "semi": [2, "always"]
  ```

2. 目前只支持 [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) 规则。

3. 在生成项目并定义自己的规则时，为 ESLint 预设选择“无”。有关详细信息，请参阅 [ESLint 文档](http://eslint.org/docs/rules/)。
