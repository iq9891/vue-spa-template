var merge = require('webpack-merge')
var devEnv = require('./dev.env')
var constant = require('./constant.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"labing"',
  API: constant.API_LABING,
  ACCOUNT: constant.ACCOUNT_LABING,
  FORM: constant.FORM_LABING,
  MENBER: constant.MENBER_LABING,
  CDN: constant.CDN_LABING,
  GATEWAY: constant.GATEWAY_LABING,
})
