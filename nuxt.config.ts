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
    baseURL: process.env.NODE_ENV === 'production' ? '/mjkatweb/' : '/', // Set the base URL for the application
    cdnURL: process.env.NODE_ENV === 'production' ? '/mjkatweb/_nuxt/' : '/' // Set the CDN URL for static assets
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})