// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  extends: [
    './app_admin',
    './app_website'
  ],

  modules: [
    '@pinia/nuxt', // needed
    '@pinia-plugin-persistedstate/nuxt',
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },


})
