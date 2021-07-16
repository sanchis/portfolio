export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio Adrián Sanchis Gallego',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Portfolio de Adrian Sanchis Gallego' },
      { hid: 'description', name: 'description', content: 'Portfolio de Adrian Sanchis Gallego' },
      { property: 'og:description', content: 'Portfolio de Adrian Sanchis Gallego' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/og.png' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#89decd' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss',
    'devicon/devicon.min.css'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/content'

  ],
  styleResources: {
    scss: './assets/styles/variables.scss'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-buefy', { css: false, materialDesignIcons: false }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
