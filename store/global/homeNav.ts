import { defineStore } from 'pinia'

export const useHomeNavStore = defineStore('homeNav', {
  
  state: (): HomeNav => ({
      
    currentProject: null,
    showPortfolio: false,
    intro: " I aim to influence successful projects, improve unity among various disciplines, and maintain a flexible approach to innovate. Simply put, I lend my expertise to dope creations.",
    // Projects
    ///////
    projects: [
      {
        id: 1,
        title: 'teambeachbody.com',
        tag: '',
        description: 'Interactive widgets for',
        links: {
          source: '',
          production: 'https://www.teambeachbody.com/shop/us',
        },
        bullets: [
          {
            title: 'Problem: Real-time data not accessible due to technical constraints. accessible due to technical constraints.',
            url: '#',
            description: 'This approach not only provided a pragmatic solution to a complex problem, but also allowed for a more flexible approach to future development.'
          },
        ],
      },
      {
        id: 1,
        title: 'Assessments',
        tag: '',
        description: 'Brand-specific assessments, developed to assist users in making informed decisions about their nutrition plans. Refactored and remixed for my portfolio.',
        links: {
          source: 'https://github.com/popcone/emmett.fyi_nuxt/tree/main/pages/portfolio/quiz',
          production: '/portfolio/quiz/xbss?locale=en_us',
        },
        bullets: [
          {
            title: 'Problem: Real-time data not accessible due to technical constraints. accessible due to technical constraints.',
            url: '#',
            description: 'This approach not only provided a pragmatic solution to a complex problem, but also allowed for a more flexible approach to future development.'
          },
        ],
      },
      {
        id: 2,
        title: 'Product Guides',
        tag: '',
        description: 'CMS managed guides',
        links: {
          source: '',
          production: '',
          
        },
        bullets: [
          {
            title: 'Problem: Real-time data not accessible due to technical constraints. accessible due to technical constraints.',
            url: '#',
            description: 'This approach not only provided a pragmatic solution to a complex problem, but also allowed for a more flexible approach to future development.'
          },
        ],
      },
      {
        id: 3,
        title: 'Product Data Sheets',
        tag: '',
        description: 'API driven pages for displaying product data. Single Page Applications.',
        links: {
          source: '',
          production: 'https://tbbcoachtools.com/product-directory/us/all',
        },
        bullets: [
            {
              title: 'Problem: Real-time data not accessible due to technical constraints. accessible due to technical constraints.',
              url: '#',
              description: 'This approach not only provided a pragmatic solution to a complex problem, but also allowed for a more flexible approach to future development.'
            },
            {
              title: 'Solution: This approach not only provided a pragmatic solution to a complex problem',
              url: '#',
              description: 'To address this issue, I devised a solution involving the retrieval of weekly data sheets, which were then seamlessly integrated into a database.'
            },
            {
              title: 'Process: Single Page Applications. MySQL database. CMS for Client Data Management.',
              url: '#',
              description: 'This approach not only provided a pragmatic solution to a complex problem, but also allowed for a more flexible approach to future development.'
            },
            {
              title: 'Process: Single Page Applications. MySQL database. CMS for Client Data Management.',
              url: '#',
              description: 'This approach not only provided a pragmatic solution to a complex problem, but also allowed for a more flexible approach to future development.'
            },
          ],
      },
      {
        id: 4,
        title: 'Event Pages',
        tag: 'Assessments',
        description: 'API Event Pages are a great way to get a baseline of your current knowledge and skills. They are also a great way to track your progress as you learn new things.',
        links: {
          source: '',
          production: '',
        },
        bullets: [
          {
            title: 'Problem: Real-time data not accessible due to technical constraints. accessible due to technical constraints.',
            url: '#',
            description: 'This approach not only provided a pragmatic solution to a complex problem, but also allowed for a more flexible approach to future development.'
          },
        ],
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
  links: { [key: string]: string }
  bullets: Array<{ [key: string]: string }>,
}