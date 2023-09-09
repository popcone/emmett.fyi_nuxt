import { defineStore } from 'pinia'

export const useHomeNavStore = defineStore('homeNav', {
  
  state: (): HomeNav => ({
      
    currentProject: null,
    showPortfolio: false,
    intro: " I aim to influence & lead successful projects, improve unity among various disciplines, and maintain a flexible approach to innovate. Simply put, I like to develop some dope stuff.",
    // Projects
    ///////
    projects: [
      {
        id: 1,
        title: 'teambeachbody.com',
        tag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        description: 'Assessments are a great way to get a baseline of your current knowledge and skills. They are also a great way to track your progress as you learn new things.',
        source: '',
        links: {
          internal: [
          ],
          external: [
            {
              title: 'Source: Pages',
              url: 'https://coach.teambeachbody.com/shop/us'
            },
            {
              title: 'Source: Pages',
              url: ''
            },
          ],
        },
        points: {
          highlights: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
          stack: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
        },
      },
      {
        id: 1,
        title: 'Assessments',
        tag: 'Brand-specific assessments, developed to assist users in making informed decisions about their nutrition plans. Refactored and remixed for my portfolio.',
        description: 'Assessments are a great way to get a baseline of your current knowledge and skills. They are also a great way to track your progress as you learn new things.',
        source: 'https://github.com/popcone/emmett.fyi_nuxt/tree/main/pages/portfolio/quiz',
        links: {
          internal: [
            {
              title: 'Brand #1',
              url: '/portfolio/quiz/xbss?locale=en_us'
            },
            {
              title: 'Brand #1',
              url: '/portfolio/quiz/xbss?locale=en_us'
            },
          ],
          external: [
            {
              title: 'Source: Pages',
              url: 'https://github.com/popcone/emmett.fyi_nuxt/tree/main/pages/portfolio/quiz'
            },
            {
              title: 'Source: Component Files',
              url: 'https://github.com/popcone/emmett.fyi_nuxt/tree/main/components/portfolio/quiz'
            },
          ],
        },
        points: {
          highlights: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
          stack: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
        },
      },
      {
        id: 2,
        title: 'Product Guides',
        tag: 'Assessments',
        description: 'Product guides are a great way to get a baseline of your current knowledge and skills. They are also a great way to track your progress as you learn new things.',
        source: '',
        links: {
          internal: [
            {
              title: '#',
              url: '#'
            },
          ],
          external: [
            {
              title: '#',
              url: '#'
            },
          ],
        },
        points: {
          highlights: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
          stack: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
        },
      },
      {
        id: 3,
        title: 'Pricing API Sheets',
        tag: 'Assessments',
        description: 'Pricing API Sheets are a great way to get a baseline of your current knowledge and skills. They are also a great way to track your progress as you learn new things.',
        source: '',
        links: {
          internal: [
            {
              title: '#',
              url: '#'
            },
          ],
          external: [
            {
              title: '#',
              url: '#'
            },
          ],
        },
        points: {
          highlights: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
          stack: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
        },
      },
      {
        id: 4,
        title: 'Event Pages',
        tag: 'Assessments',
        description: 'API Event Pages are a great way to get a baseline of your current knowledge and skills. They are also a great way to track your progress as you learn new things.',
        source: '',
        links: {
          internal: [
            {
              title: '#',
              url: '#'
            },
          ],
          external: [
            {
              title: '#',
              url: '#'
            },
          ],
        },
        points: {
          highlights: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
          stack: ["Lorem ipsum dolor sit amet, consectetur.",
            "Sit amet, consectetur adipiscing elit.", 
            "Sectetur adipiscing elit Lorem ipsum ."],
        },
      },
    ],
      
  }),
  
  getters: {
    
  },
  
  actions: {
    
  },
  
})

interface HomeNav {
  currentProject: number | null,
  intro: string,
  projects: Project[] | null,
  showPortfolio: boolean,
}

interface Project {
  id: number,
  title: string,
  tag: string,
  description: string,
  source: string,
  links: { [key: string]: any },
  points: { [key: string]: any },
}