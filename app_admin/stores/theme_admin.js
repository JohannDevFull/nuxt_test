import { defineStore } from 'pinia'

export const useThemeAdminStore = defineStore( 'theme' , {

  state: () => ({
    
    count: 0,
    mode_dark:true,
    navbar_fixed:true,

    test:'Hola mundo',

  }),

  persist: true,
  
})