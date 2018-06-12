// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var env = process.env.DEV_ENV || 'development'; // 处理 window 设置不上环境变量
var buildEnv = require('./'+ env +'.env');

var path1 = buildEnv.CDN;
path1 = path1.replace(/"/g, '');

module.exports = {
  production: {
    env: buildEnv,
    port: 8183,
    autoOpenBrowser: true,
    index: path.resolve(__dirname, '../out/index.html'),
    assetsRoot: path.resolve(__dirname, '../out'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path1,
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  labing: {
    env: buildEnv,
    port: 8183,
    autoOpenBrowser: true,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path1,
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  testing: {
    env: buildEnv,
    port: 8183,
    autoOpenBrowser: true,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path1,
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  development: {
    env: buildEnv,
    port: 8183,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    proxyTable: {},
  }
}
