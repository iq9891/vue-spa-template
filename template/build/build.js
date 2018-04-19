require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf');
var assetsRoot = config.build.assetsRoot;
var assetsSubDirectory = config.build.assetsSubDirectory;

if(process.env.DEV_ENV === 'testing' || process.env.DEV_ENV === 'labing') {
  webpackConfig = require('./webpack.lab.conf');
  assetsRoot = config.labtest.assetsRoot;
  assetsSubDirectory = config.labtest.assetsSubDirectory;
}

var spinner = ora('📦  正在构建...')
spinner.start()

rm(path.join(assetsRoot, assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('✅  打包完成.\n'))
    console.log(chalk.yellow(
      '❗️  提示：构建的文件旨在通过HTTP服务器提供。直接打开文件访问也许不会工作哟。\n'
    ))
  })
})
