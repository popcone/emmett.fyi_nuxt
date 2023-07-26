import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  
  state: (): Index => ({
      title: ["Dream", "Conceive", "Zone", "Achieve"],
  }),

  actions: {
  },

})

interface Index {
  title: string[]
}
  