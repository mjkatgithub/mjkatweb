export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  router: {
    base: '/mjkatweb/' // Passe dies an den Namen deines Repositories an
  },
  build: {
    publicPath: '/mjkatweb/_nuxt/'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})