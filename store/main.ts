import { defineStore } from 'pinia'

interface Main {
  theme: string
}

export const useMainStore = defineStore('main', {
    state: (): Main => {
      return {
        theme: 'dark',
      }
    },
    actions: {
      toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark'
      }
    },
  })
  