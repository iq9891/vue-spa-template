// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var buildEnv = require('./prod.env');

if (process.env.DEV_ENV === 'testing') {
  buildEnv = require('./test.env');
} else if (process.env.DEV_ENV === 'labing') {
  buildEnv = require('./lab.env');
}

var path1 = buildEnv.CDN;
path1 = path1.replace(/"/g, '');

module.exports = {
  build: {
    env: buildEnv,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path1,
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8183,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // 这个吧表的意思就是只要连接里有/api就转为http://127.0.0.1:3000
      // '/cnodejs':{
      //   target:'https://cnodejs.org',
      //   changeOrigin:true,
      //   pathRewrite:{
          // 这里意思就是转化后不用添加/api,比如/api/1就是http://127.0.01:3000/1
          //'^/cnodejs':''
        // }
      // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
