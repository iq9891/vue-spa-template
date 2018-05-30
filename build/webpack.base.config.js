module.exports = function createBaseConfig (isServer) {
  const path = require('path');
  const Config = require('webpack-chain');
  const { VueLoaderPlugin } = require('vue-loader');
  const CSSExtractPlugin = require('mini-css-extract-plugin');
  const cfg = require('../config');
  const utils = require('./utils');

  const isProd = process.env.NODE_ENV === 'production';
  const libDir = path.join(__dirname, '../src');

  const config = new Config();

  const outDir = cfg[process.env.DEV_ENV].assetsRoot;
  const publicPath = cfg[process.env.DEV_ENV].assetsPublicPath;

  function resolve (dir) {
    return path.join(__dirname, '..', dir);
  }

  function createCSSRule (lang, test, loader, options) {
    const baseRule = config.module.rule(lang).test(test)
    const modulesRule = baseRule.oneOf('modules').resourceQuery(/module/)
    const normalRule = baseRule.oneOf('normal')

    applyLoaders(modulesRule, true)
    applyLoaders(normalRule, false)

    function applyLoaders (rule, modules) {
      if (!isServer) {
        if (isProd) {
          rule.use('extract-css-loader').loader(CSSExtractPlugin.loader);
        } else {
          rule.use('vue-style-loader').loader('vue-style-loader');
        }
      }

      rule.use('css-loader')
        .loader(isServer ? 'css-loader/locals' : 'css-loader')
        .options({
          modules,
          localIdentName: `[local]_[hash:base64:8]`,
          importLoaders: 1,
          sourceMap: !isProd
        })

      rule.use('postcss-loader').loader('postcss-loader').options(Object.assign({
        plugins: [require('autoprefixer')],
        sourceMap: !isProd
      }))

      if (loader) {
        rule.use(loader).loader(loader).options(options)
      }
    }
  }

  config
    .mode(isProd ? 'production' : 'development')
    .output
      .path(outDir)
      .filename(isProd ? 'assets/js/[name].[chunkhash:8].js' : 'assets/js/[name].js')
      .publicPath(publicPath)

  // config.devtool('source-map')
  config.devtool('cheap-module-eval-source-map')

  config.resolve
    .alias
      .set('vue', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .end()
    .extensions
      .merge(['.js', '.vue', '.json'])
      .end()

  config.module
    .noParse(/^(vue|vue-router|vuex|vuex-router-sync)$/)

  // js 语法检测
  config.module
    .rule('lint')
      .test(/\.(js|vue)$/)
      .pre()
      .include
        .add('src')
        .end()
      .use('eslint')
        .loader('eslint-loader')
        .options({
          rules: {
            cache: true,
            fix: true,
            formatter: require('eslint-friendly-formatter')
          }
        });

  // 检测 vue 文件
  config.module
    .rule('vue')
    .test(/\.vue$/)
    .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      }).end()
    .use('pretty-logger')
      .loader('vue-pretty-logger')
  // js
  config.module
    .rule('compile')
      .test(/\.js$/)
      .include
        .add('src')
        .end()
      .use('babel')
        .loader('babel-loader');

  // 图片处理
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      })

  // 样式处理
  createCSSRule('scss', /\.scss$/, 'sass-loader')

  config
    .plugin('vue-loader')
    .use(VueLoaderPlugin)

  if (isProd && !isServer) {
    config
      .plugin('extract-css')
      .use(CSSExtractPlugin, [{
        filename: 'assets/css/styles.[chunkhash:8].css'
      }])

    config.optimization.splitChunks({
      cacheGroups: {
        styles: {
          name: 'styles',
          test: m => /css-extract/.test(m.type),
          chunks: 'all',
          enforce: true
        }
      }
    })
  }
  // css 语法检测
  config
  .plugin('stylelint')
    .use(require('stylelint-webpack-plugin'));

  // 常量注入
  config
    .plugin('injections')
    .use(require('webpack/lib/DefinePlugin'), [{
      TITLE: cfg[process.env.DEV_ENV].env.TITLE
    }])

  return config
};
