// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var buildEnv = require('./'+ process.env.DEV_ENV +'.env');

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
