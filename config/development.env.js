var merge = require('webpack-merge')
var prodEnv = require('./production.env')
var constant = require('./constant.env')
var cdn = '';
var api = '';
var title = '';

switch (process.env.DEV_ENV) {
  case 'testing':
    api = constant.API_TESTING;
    cdn = constant.CDN_TESTING;
    title = constant.TITLE_TESTING;
    break;
  case 'labing':
    api = constant.API_LABING;
    cdn = constant.CDN_LABING;
    title = constant.TITLE_LABING;
    break;
  case 'production':
    api = constant.API_PRODUCTION;
    cdn = constant.CDN_PRODUCTION;
    title = constant.TITLE_PRODUCTION;
    break;
  default:
    api = constant.API_DEVELOPMENT;
    cdn = constant.CDN_DEVELOPMENT;
    title = constant.TITLE_DEVELOPMENT;
}

module.exports = merge(prodEnv, {
  NODE_ENV: constant.NODE_ENV_DEVELOPMENT,
  API: api,
  CDN: cdn,
  TITLE: title,
})
