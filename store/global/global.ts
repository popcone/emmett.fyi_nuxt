import { defineStore } from 'pinia'
import { useRuntimeConfig as config } from 'nuxt/app'

export const useGlobalStore = defineStore('global', {
  
  state: (): GlobalStore => ({
  }),

  getters: {
    imgBase(): string { 
      return `${config().public.cdnImgBase}/_global/`
    }
  },

  actions: {
  },

})

interface GlobalStore {
}
  