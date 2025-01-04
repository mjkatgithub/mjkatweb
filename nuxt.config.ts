export default defineNuxtConfig({
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
    cdnURL: process.env.NUXT_APP_BASE_URL ? `${process.env.NUXT_APP_BASE_URL}_nuxt/` : '/' // Set the CDN URL for static assets
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  compatibilityDate: '2025-01-04'
})