var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var constant = require('./constant.env')
var account = '';
var form = '';
var cdn = '';
var member = '';
var gateway = '';

var api = '';

switch (process.env.DEV_ENV) {
  case 'testing':
    api = constant.API_TESTING;
    account = constant.ACCOUNT_TESTING;
    form = constant.FORM_TESTING;
    cdn = constant.CDN_TESTING;
    member = constant.MENBER_TESTING;
    gateway = constant.GATEWAY_TESTING;
    break;
  case 'labing':
    api = constant.API_LABING;
    account = constant.ACCOUNT_LABING;
    form = constant.FORM_LABING;
    cdn = constant.CDN_LABING;
    gateway = constant.GATEWAY_LABING;
    member = constant.MENBER_LABING;
    break;
  case 'production':
    api = constant.API_PRODUCTION;
    account = constant.ACCOUNT_PRODUCTION;
    form = constant.FORM_PRODUCTION;
    cdn = constant.CDN_PRODUCTION;
    member = constant.MENBER_PRODUCTION;
    gateway = constant.GATEWAY_PRODUCTION;
    break;
  default:
    api = constant.API_DEVELOPMENT;
    account = constant.ACCOUNT_DEVELOPMENT;
    form = constant.FORM_DEVELOPMENT;
    cdn = constant.CDN_DEVELOPMENT;
    member = constant.MENBER_DEVELOPMENT;
    gateway = constant.GATEWAY_DEVELOPMENT;
}

module.exports = merge(prodEnv, {
  NODE_ENV: constant.NODE_ENV_DEVELOPMENT,
  API: api,
  GATEWAY: gateway,
  ACCOUNT: account,
  FORM: form,
  MENBER: member,
  CDN: cdn,
})
