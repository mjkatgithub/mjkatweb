// https://nuxt.com/docs/api/configuration/nuxt-config
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
  // Base URL für GitHub Pages
  router: {
    base: '/mjkatweb/' // Passe dies an den Namen deines Repositories an
  },
  // Optional: Output Directory für statische Dateien
  generate: {
    dir: 'dist' // Standard ist 'dist', aber du kannst es anpassen
  }
})
