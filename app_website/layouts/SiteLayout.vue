<script setup>
  import SiteNavBar from './Components/SiteNavBar.vue';
  import SiteFooter from './Components/SiteFooter.vue';

  import { useTheemeStore } from '@/stores/theme'
  const store_theme = useTheemeStore();
  const { modeDark } = store_theme

  const pageHead = useHead();
  
  onMounted( () => {

    if (process.client)
    {
      const userTheme = localStorage.getItem('theme');
      userTheme == 'dark' ? modeDark(true) : modeDark(false);

      useHead({
        script :[{
            src: '_nuxt/assets/js/wow.min.js',
            body: false,
          },
          {
            src: '_nuxt/assets/js/swiper-bundle.min.js',
            body: true,
          },
          {
            src: '_nuxt/assets/js/main.js',
            body: true,
          },
          {
            src: '_nuxt/assets/js/myscript.js',
            body: true,
        }]
      });
    }
    
  });

</script>
<template>

  <SiteNavBar/>

    <slot/>

  <SiteFooter/>

  <a href="javascript:void(0)" class="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark">
    <span  class="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white" ></span>
  </a>

  <!-- ====== Made With Button Start -->
  <a
    target="_blank"
    rel="nofollow noopener"
    class="fixed bottom-8 left-4 z-[999] inline-flex items-center gap-[10px] rounded-lg bg-white px-[14px] py-2 shadow-2 dark:bg-dark-2 sm:left-9"
    href="https://tailgrids.com/"
  >
    <span class="text-base font-medium text-dark-3 dark:text-dark-6">
      Made with
    </span>
    <span class="block h-4 w-px bg-stroke dark:bg-dark-3"></span>
    <span class="block w-full max-w-[88px]">
      <img
        src="assets/website/images/brands/tailgrids.svg"
        alt="tailgrids"
        class="dark:hidden"
      />
      <img
        src="assets/website/images/brands/tailgrids-white.svg"
        alt="tailgrids"
        class="hidden dark:block"
      />
    </span>
  </a>
  <!-- ====== Made With Button End -->

</template>