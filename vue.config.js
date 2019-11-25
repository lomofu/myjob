module.exports = {
  publicPath: "/myjob",
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: true,
  productionSourceMap: true,
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
  pluginOptions: {},
  transpileDependencies: ["vuetify"]
};
