<script setup>

  import AsideMain from './Components/AsideMain.vue';
  import Configurator from './Components/Configurator.vue';
  import Footer from './Components/Footer.vue';
  import NavBar from './Components/NavBar.vue';

  useHead({
    link:[
      {
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
        rel:'stylesheet'
      }
      ,
      {
        href: '_nuxt/assets/admin/css/nucleo-icons.css',
        rel:'stylesheet'
      }
      ,
      {
        href: '_nuxt/assets/admin/css/nucleo-svg.css',
        rel:'stylesheet'
      },
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        rel:'stylesheet'
      },
      {
        href: '_nuxt/assets/admin/css/soft-ui-dashboard-tailwind.css',
        rel:'stylesheet'
    }],
    script :[
      {
        src: '_nuxt/assets/admin/js/soft-ui-dashboard-tailwind.js',
        body: true,
      },
      {
        src: 'https://unpkg.com/@popperjs/core@2',
        body: false,
      },
      {
        src: '_nuxt/assets/admin/js/plugins/chartjs.min.js',
        body: true,
        async: true,
      },
      {
        src: '_nuxt/assets/admin/js/plugins/perfect-scrollbar.min.js',
        body: true,
        async: true,
      },
      
      {
        src: '_nuxt/assets/admin/js/soft-ui-dashboard-tailwind.js?v=1.0.5',
        body: true,
        async: true,
      },
      
    ]
  });

  const loading = ref(true);
  const config = ref(false);

  onMounted( () => {

    if (process.client)
    {

      setTimeout(() => {
          
        const paragraph = document.querySelector('body');
        paragraph.classList.add('m-0');
        paragraph.classList.add('font-sans');
        
        paragraph.classList.add('text-base');
        paragraph.classList.add('antialiased');
        paragraph.classList.add('font-normal');
        paragraph.classList.add('leading-default');
        paragraph.classList.add('bg-gray-50');
        // paragraph.classList.add('text-slate-500');

      }, 333);
      
      setTimeout(() => {
        loading.value = false;
      }, 1111);
  
      // const userTheme = localStorage.getItem('theme');
      // userTheme == 'dark' ? modeDark(true) : modeDark(false);

    }

  });

  const openConfig = ( val ) => {
    config.value = val; 
  };

</script>

<template>

  <Loader v-show="loading" />

  <AsideMain v-show="!loading"/>  

  <main v-show="!loading" style="position: relative; top: 10px;" class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
    
    <NavBar @open-config="openConfig(true)">
      <slot name="breadcrumb" />
    </NavBar>

    <div id="content-main" class="w-full px-6 py-6 mx-auto">
      <slot/>

      <Footer/>

    </div>

  </main>
  
  <Configurator v-show="config" @close-config="openConfig(false)" />

</template>

<style>

  .top-120{
    position: relative;
    top: 124px;
    transition: top 0.5s;
  }

  .bg-llpyoi{
    background: linear-gradient( to right , #5860a835 , #e20e7c53 ) !important;
    margin-right: 3px !important;
    margin-left: 3px !important;
  }

</style>