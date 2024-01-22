// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      theme: {
        primaryColor: 'base_primary',
        secondaryColor: 'base_secondary'
      }
    }
  },

  css:[
    '~/assets/website/css/tailwind.css',
    '~/assets/website/css/mystyle.css',
    '~/assets/website/css/animate.css',
    '~/assets/website/css/swiper-bundle.min.css',
  ],

});
