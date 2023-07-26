import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  
  state: (): Main => ({
    theme: 'dark',
  }),
  
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
    }
  },
  
})

interface Main {
  theme: string
}