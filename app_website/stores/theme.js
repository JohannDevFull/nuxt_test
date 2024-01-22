import { defineStore } from 'pinia'

export const useTheemeStore = defineStore( 'theme' , {
  state: () => ({
    count: 0,
    mode_dark:true
  }),
  getters: {
    getMode: (state) => state.count,
  },
  actions: {
    changeMode() {
      this.mode_dark = !this.mode_dark;
    },
    modeDark(mode) {
      this.mode_dark = mode;
    },
  },
  
})