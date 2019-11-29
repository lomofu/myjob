module.exports = {
  publicPath: "/myjob",
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: true,
  pwa: {},
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: null
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/global/global.scss";`
      }
    }
  },
  pluginOptions: {},
  transpileDependencies: ["vuetify"]
};
