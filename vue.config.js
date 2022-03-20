const path = require('path');
const { defineConfig } = require("@vue/cli-service");
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
});
