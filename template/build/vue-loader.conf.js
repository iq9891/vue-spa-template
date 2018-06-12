var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.DEV_ENV === 'production';

if (!process.env.DEV_ENV) {
  process.env.DEV_ENV = 'development';
}

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config[process.env.DEV_ENV].productionSourceMap,
    extract: isProduction
  })
}
