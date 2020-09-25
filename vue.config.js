const WebpackBar=require('WebpackBar')
const  ProgressBarPlugin = require("progress-bar-webpack-plugin")
const  chalk = require("chalk")
const  webpack = require("webpack")
// resolve  一开始有报错 加这个就好了
const path = require('path');
function resolve (dir) {
  //此处使用path.resolve 或path.join 可自行调整
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true, 
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false, 
  //文件hash
  filenameHashing: true, 

  // webpack-dev-server 相关配置
  devServer: {
    // 默认打开浏览器
    open: true,
    // 端口号
    port: 8080,
  },

  // chainWebpack 这个库提供了一个 webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则
  // 和具名插件，可以通过其提供的一些方法链式调用，在cli-service中就使用了这个插件
  chainWebpack: (config) => {
    // 第一 增加打包文件大小分析
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }

    config.resolve.alias
      // key,value自行定义，比如.set('@assets', resolve('src/assets'))
      .set('@', resolve('src'))
      .set('api',resolve('src/api'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('static',resolve('src/static'))
      .set('element',resolve('src/element'))
      .set('store',resolve('src/store'))
      .set('server',resolve('src/server'))
      .set('router',resolve('src/router'))
  },

  /* 
    configureWebpack是调整webpack配置最简单的一种方式，可以新增也可以覆盖cli中的配置。
    可以是一个对象：被 webpack-merge 合并到webpack 的设置中去
    也可以是一个函数：如果你需要基于环境有条件地配置行为，就可以进行一些逻辑处理，可以直接修改或
    新增配置，(该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。
    在函数内，你可以直接修改配置，或者返回一个将会被合并的对象。
  */
  configureWebpack: config => {
      //警告 webpack 的性能提示
      config.performance = {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        }
      },

      // 打包忽略
      config.externals = {
        // 'vue': 'Vue',
        // 'vue-router': 'VueRouter',
        // 'element-ui': 'ELEMENT'
        },

      // 添加进度条
      // config.plugins = [...config.plugins, new WebpackBar()]
      config.plugins = [
        ...config.plugins,
        new webpack.ProgressPlugin(function handler(percentage, msg) {
        })
        // new WebpackBar(), 
        // new ProgressBarPlugin({
        //   format:  ' build [:bar] '  + chalk.green.bold( ':percent' ) + ' (:elapsed seconds)',
        //   clear:false
        // }),
        // new webpack.ProgressPlugin(function handler(percentage, msg) {
        //   console.log((percentage.toFixed(2) * 100) + '%', msg);
        // })
      ]
        
  }
}