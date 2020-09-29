import shrinkRay from 'shrink-ray-current'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Wisam Halawi - Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Wisam Halawi Web Developer Portfolio Site',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/aos', ssr: false },
    { src: '@/plugins/lazysizes.client.js', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources', '@nuxtjs/sitemap'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },
  styleResources: {
    scss: ['~/assets/css/vars/*.scss'],
  },
  loading: { color: '#45A29E', height: '5px', throttle: 50 },
  render: {
    compressor: shrinkRay(),
  },
  pwa: {
    meta: {
      title: 'Wisam Halawi Portfolio',
      author: 'Wisam Halawi',
    },
    manifest: {
      name: 'Wisam Halawi Portfolio and Projects',
      short_name: 'Wisam Halawi Portfolio',
      lang: 'en',
    },
    icon: {
      iconFileName: 'icon.png',
      sizes: [36, 48, 72, 96, 144, 192, 256, 384, 512],
    },
  },
  sitemap: {
    hostname: 'https://www.wisamhalawi.com',
    gzip: true,
  },
  server: {
    host: '192.168.0.173',
    port: '60756', // default: 3000
  }, // other configs
}
