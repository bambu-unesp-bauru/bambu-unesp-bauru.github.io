module.exports = {
  baseUrl: "/",
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/projetobambu',
        '/especies',
        '/extensao',
        '/produtos',
        '/publicacoes',
        '/depoimentos',
        '/videos',
        '/glossario',
        '/quem-somos',
        '/contato'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
