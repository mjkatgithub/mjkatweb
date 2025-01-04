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
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/', // Set the base URL for the application
    cdnURL: process.env.NUXT_APP_CDN_URL || '/' // Set the CDN URL for static assets
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})