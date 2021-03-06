module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nolan-movies',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#181818' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css' }
    ]
  },

  //Customize the progress bar color
  loading: { color: '#FFE57B' },

  // Router
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Global CSS
  css: [
    { src: '~/assets/fonts/Bellefair/Bellefair.css' },
    { src: '~/assets/fonts/Barlow/Barlow.css' }
  ],

  // Modules
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/scss/main.scss'],
  ],

  // Render
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
