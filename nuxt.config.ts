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
  app: {
    baseURL: '/mjkatweb/', // Set the base URL for the application
    buildAssetsDir: '/mjkatweb/_nuxt/' // Set the directory for build assets
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})