import { defineStore } from 'pinia'

export const usePortfolioNavStore = defineStore('portfolioNav', {
  
  state: (): PortfolioNav => ({
      
      currentProject: 0,
      projects: [
        {
          title: 'Portfolio',
          description: 'This is a description of project 1',
          link: '#',
        },
        {
          title: 'Source Code',
          description: 'This is a description of project 2',
          link: 'https://github.com/popcone/emmett.fyi_nuxt',
        },
      ],
      
  }),
  
  getters: {
    
  },
  
  actions: {
    
  },
  
})

interface PortfolioNav {
  currentProject: number,
  projects: Project[],
}

interface Project {
  title: string,
  description: string,
  link: string | undefined,
}