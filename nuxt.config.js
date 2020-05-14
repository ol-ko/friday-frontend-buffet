export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Friday Frontend BuFFet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A weekly assortment of delicious frontend things to devour'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  buildModules: ['@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-TGVDVGB',
    pageTracking: true
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'Home',
        path: '/',
        redirect: '/2020-05-15'
      })
      routes.push({
        path: '/:date',
        component: resolve(__dirname, 'components/Edition.vue')
      })
    }
  },
  generate: {
    routes: ['/2020-05-15', '/2020-05-08', '/2020-04-30', '/2020-04-03']
  }
}
