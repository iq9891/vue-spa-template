var merge = require('webpack-merge')
var devEnv = require('./dev.env')
var constant = require('./constant.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API: constant.API_TESTING,
  ACCOUNT: constant.ACCOUNT_TESTING,
  FORM: constant.FORM_TESTING,
  MENBER: constant.MENBER_TESTING,
  CDN: constant.CDN_TESTING,
  GATEWAY: constant.GATEWAY_TESTING,
})
