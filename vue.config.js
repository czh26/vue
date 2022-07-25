const path = require('path');
const { defineConfig } = require("@vue/cli-service");
const { config } = require('process');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  outputDir:'dist',
  assetsDir:'',
  indexPath:'index.html',
  devServer: {
    // open: true,
    hot:true,
    host: 'localhost',
    port: 8080,
    proxy: ''
  },
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.josn', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  },
  lintOnSave: false,//关闭eslint代码检查
});
