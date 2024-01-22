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

  // css:[
  //   '~/assets/admin/css/soft-ui-dashboard-tailwind.css',
  //   '~/assets/admin/css/nucleo-icons.css',
  //   '~/assets/admin/css/nucleo-svg.css',
  //   '~/assets/admin/css/soft-ui-dashboard-tailwind.css',
  // ],

  // tailwindcss: {
  //   layouts: {
  //     publicLayout: 'tailwind.public.config.js',
  //     adminLayout: 'tailwind.admin.config.js',
  //   },
  //   // ...
  // },

});
