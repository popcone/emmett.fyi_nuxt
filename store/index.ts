import { defineStore } from 'pinia'

interface Index {
  title: string[]
}

export const useIndexStore = defineStore('index', {
    state: (): Index => {
      return {
        title: ["Dream", "Conceive", "Zone", "Achieve"],
      }
    },
    actions: {
    },
})

  