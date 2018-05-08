var merge = require('webpack-merge')
var devEnv = require('./development.env')
var constant = require('./constant.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API: constant.API_TESTING,
  CDN: constant.CDN_TESTING,
})
