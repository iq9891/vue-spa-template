module.exports = function createServerConfig () {
  const fs = require('fs')
  const path = require('path')
  const WebpackBar = require('webpackbar')
  const createBaseConfig = require('./webpack.base.config')
  const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
  const CopyPlugin = require('copy-webpack-plugin')

  const config = createBaseConfig(true /* isServer */)

  config
    .target('node')
    .externals([/^vue|vue-router$/])
    .devtool('source-map')

  // no need to minimize server build
  config.optimization.minimize(false)

  config
    .entry('app')
      .add(path.resolve(__dirname, '../src/entry-server.js'))

  config.output
    .filename('server-bundle.js')
    .libraryTarget('commonjs2')

  config
    .plugin('ssr-server')
    .use(VueSSRServerPlugin, [{
      filename: 'manifest/server.json'
    }])

  config
    .plugin('bar')
    .use(WebpackBar, [{
      name: 'Server',
      color: 'blue',
      compiledIn: false
    }])

  return config
}
