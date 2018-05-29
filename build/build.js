const build = async () => {
  require('./check-versions')()

  const fs = require('fs-extra')
  var path = require('path')
  var chalk = require('chalk')
  var webpack = require('webpack')
  const { createBundleRenderer } = require('vue-server-renderer')
  var cfg = require('../config')
  var serverConfig = require('./webpack.server.config');
  var clientConfig = require('./webpack.client.config');
  var assetsRoot = cfg[process.env.DEV_ENV].assetsRoot;
  var assetsSubDirectory = cfg[process.env.DEV_ENV].assetsSubDirectory;

  function compile (config) {
    return new Promise((resolve, reject) => {
      webpack(config, (err, stats) => {
        if (err) {
          return reject(err)
        }
        if (stats.hasErrors()) {
          stats.toJson().errors.forEach(err => {
            console.error(err)
          })
          reject(new Error(`Failed to com111pile with errors.`))
          return
        }
        resolve(stats.toJson({ modules: false }))
      })
    })
  }

  function renderPage() {
    const routerTemps = [];
    routerFile.replace(/path:\s'(.*)'/g, ($1, $2) => {
      routerTemps.push($2);
    });
    routerTemps.forEach((routerPath) => {
      renderer.renderToString({
        title: cfg[process.env.DEV_ENV].env.TITLE, // default title
        url: routerPath
      }, (error, html) => {
        fs.writeFile(assetsRoot + `${routerPath.replace(/\'/g, '').replace(/\/$/, '/index')}.html`, html)
      });
    });
  }

  async function workaroundEmptyStyleChunk () {
    const styleChunk = stats.children[0].assets.find(a => {
      return /styles\.\w{8}\.js$/.test(a.name)
    })
    if (!styleChunk) return
    const styleChunkPath = path.resolve(assetsRoot, styleChunk.name)
    const styleChunkContent = await fs.readFile(styleChunkPath, 'utf-8')
    await fs.remove(styleChunkPath)
    // prepend it to app.js.
    // this is necessary for the webpack runtime to work properly.
    const appChunk = stats.children[0].assets.find(a => {
      return /app\.\w{8}\.js$/.test(a.name)
    })
    const appChunkPath = path.resolve(assetsRoot, appChunk.name)
    const appChunkContent = await fs.readFile(appChunkPath, 'utf-8')
    await fs.writeFile(appChunkPath, styleChunkContent + appChunkContent)
  }

  await fs.remove(assetsRoot)

  let clientWebpack = clientConfig().toConfig()
  let serverWebpack = serverConfig().toConfig()
  // compile!
  const stats = await compile([clientWebpack, serverWebpack])
  // 获取资源镜像
  const serverBundle = require(path.resolve(assetsRoot, 'manifest/server.json'))
  const clientManifest = require(path.resolve(assetsRoot, 'manifest/client.json'))
  // 加载完了就删掉
  await fs.remove(path.resolve(assetsRoot, 'manifest'))
  // find and remove empty style chunk caused by
  // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/85
  // TODO remove when it's fixed
  await workaroundEmptyStyleChunk()
  // 配置 ssr
  const renderer = createBundleRenderer(serverBundle, {
    clientManifest,
    runInNewContext: false,
    inject: false,
    template: await fs.readFile(path.resolve(__dirname, '../index.ssr.html'), 'utf-8'),
  });
  // 读取路由
  const routerFile = await fs.readFile(path.resolve(__dirname, '../src/routers/site.js'), 'utf-8');
  // 按配置的路由渲染页面
  renderPage();
}

build();
