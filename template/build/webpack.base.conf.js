var path = require('path');
var chalk = require('chalk');
// 百分比进度
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

var os = require('os');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  cache: true,
  entry: {
    // 兼容 ie
    app: ['babel-polyfill', './src/main.js']
  },
  mode: 'production',
  output: {
    path: config[process.env.DEV_ENV].assetsRoot,
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: config[process.env.DEV_ENV].assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      {{#ui}}
      {{#if_eq uiConfig "em-fe"}}
      'emfe$': 'em-fe/dist/emfe.js',
      'emfe.css$': 'em-fe/dist/css/emfe.css',
      {{/if_eq}}
      {{/ui}}
      {{#jsonp}}
      'em-jsonp': 'em-jsonp/index.js',
      {{/jsonp}}
      '@': resolve('src'),
      'assets': resolve('src/assets'),
    }
  },
  performance: {
    hints: false
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue',
          options: vueLoaderConfig,
        }],
      },
      {{#lint}}
      {
        test: /\.(js|vue)$/,
        loader: 'eslint',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          cache: true,
          fix: true,
          formatter: require('eslint-friendly-formatter')
        }
      },
      {{/lint}}
      {
        test: /\.js$/,
        loader: 'babel?cacheDirectory',
        include: [resolve('src')],
        exclude: [resolve('node_modules')],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: '📦  '+ chalk.blue('构建进度:') + ' '+ chalk.redBright.bold('[:bar]') + ' ' + chalk.magentaBright.bold(':percent') + ' ' + chalk.magentaBright.bold(':elapsed seconds'),
    }),
  ],
}
