const serverFn = async () => {
  require('./check-versions')()

  var config = require('../config')
  if (!process.env.DEV_ENV) {
    process.env.DEV_ENV = JSON.parse(config.development.env.DEV_ENV)
  }

  var path = require('path')
  const chalk = require('chalk')
  const convert = require('koa-connect')
  const history = require('connect-history-api-fallback')
  const chokidar = require('chokidar')
  var webpack = require('webpack')
  const serveFn = require('webpack-serve')
  var webpackConfig =  require('./webpack.client.config')();
  const sourceDir = path.join(__dirname, '..', 'src');

  webpackConfig
    .plugin('html')
    // using a fork of html-webpack-plugin to avoid it requiring webpack
    // internals from an incompatible version.
    .use(require('html-webpack-plugin'), [{
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }]);

  var port = process.env.PORT || config[process.env.DEV_ENV].port;

  const webpackClient = webpackConfig.toConfig();
  var compiler = webpack(webpackClient);
  var projectUrl = chalk.cyan(`http://localhost:${port}`);

  let isFirst = true;
  compiler.hooks.done.tap('vuepress', () => {
    if (isFirst) {
      isFirst = false;
      console.log(
        `\n  服务已开启，请访问 -> ${projectUrl}\n`
      )
    } else {
      const time = new Date().toTimeString().match(/^[\d:]+/)[0]
      console.log(`  ${chalk.gray(`[${time}]`)}  ✅  打包完成。请访问 -> ${projectUrl}`)
    }
  });

  const nonExistentDir = path.resolve(__dirname, 'non-existent')
  await serveFn({
    content: [nonExistentDir],
    compiler,
    dev: { logLevel: 'warn' },
    hot: {
      port: port + 1,
      logLevel: 'error'
    },
    logLevel: 'error',
    port,
    add: app => {
      app.use(convert(history({
        rewrites: [
          { from: /\.html$/, to: '/' }
        ]
      })))
    }
  });
};

serverFn();
