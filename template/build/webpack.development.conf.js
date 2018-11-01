var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
{{#stylelint}}
var StyleLintPlugin = require('stylelint-webpack-plugin')
{{/stylelint}}

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var env = config[process.env.DEV_ENV].env;

const rules = utils.styleLoaders({ sourceMap: config[process.env.DEV_ENV].cssSourceMap });

baseWebpackConfig.module.rules[0].use.push({
  loader: 'vue-pretty-logger',
});

module.exports = merge(baseWebpackConfig, {
  module: {
    rules,
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  mode: 'development',
  plugins: [
    {{#stylelint}}
    // https://stylelint.io
    new StyleLintPlugin(),
    {{/stylelint}}
    new webpack.DefinePlugin({
      'process.env': config[process.env.DEV_ENV].env,
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
