import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  
  state: (): Index => ({
    currentProject: null,
    title: "Dream. Conceive. Zone. Achieve",
    intro: " I aim to influence successful projects & systems, improve unity among various disciplines, and maintain a flexible approach to innovate. Simply put, I lend my expertise to dope creations.",
      
  }),

  getters: {
    
  },

  actions: {
  },

})

interface Index {
  currentProject: number | null,
  intro: string,
  title: string,
}
  