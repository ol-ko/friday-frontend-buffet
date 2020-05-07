export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Friday Frontend BuFFet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A weekly assortment of delicious frontend things to devour'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      {
        rel: 'preload',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap',
        as: 'style',
        onload: 'this.onload=null;this.rel="stylesheet"'
      },
      {
        rel: 'preload',
        href:
          'https://fonts.googleapis.com/css?family=Ultra&text=Friday%20Frontend%20BuFFet&display=swap',
        as: 'style',
        onload: 'this.onload=null;this.rel="stylesheet"'
      }
    ],
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ultra&text=Friday%20Frontend%20BuFFet&display=swap">'
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
  }
}
