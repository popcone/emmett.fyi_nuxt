import { defineStore } from 'pinia'

export const useHomeNavStore = defineStore('homeNav', {
  
  state: (): HomeNav => ({
      
    currentProject: null,
    showPortfolio: false,
    intro: " I aim to influence successful projects & systems, improve unity among various disciplines, and maintain a flexible approach to innovate. Simply put, I lend my expertise to dope creations.",
    // Projects
    ///////
    projects: [
      {
        id: 3,
        title: 'Product Data Sheets',
        tag: '',
        description: 'API-driven, Single Page Application, providing partners with public access to member pricing, discounts, and bonuses in an easy-to-read table format.',
        links: {
          source: '',
          production: 'https://tbbcoachtools.com/product-directory/us/all',
        },
        bullets: [
            {
              title: 'Project Role: Lead Developer',
              description: 'I served as the Lead Developer, developing the front-end, desigining the CMS & database structure, while also advising & working with brand managers, the data team, the UI/UX designer and backend engineers.'
            },
            {
              title: 'Problem: Partners needed public real-time data access in an easy to read table format',
              description: 'The easy-to-read table format enabled partners to quickly view and understand member pricing, discounts, and bonuses, helping them to efficiently build packages and focus more on sales strategies.'
            },
            {
              title: 'Challenge #1: Unable to get access to real-time data',
              description: 'Due to technical constraints, real-time data API was not available for public consumption.'
            },
            {
              title: 'Solution #1: Get as close to "real-time" as possible',
              description: 'To address this issue, I devised a solution involving the retrieval of weekly data sheets from the data team, which I would then dumped into a database for consumption.'
            },
            {
              title: 'Challenge #2: The more steps involved, the higher the likelihood of errors',
              description: 'This was a major concern for the brand managers, as they would be responsible for the data sheets. They needed a way to easily manage the data sheets, with accuracy, without having to worry about getting lost in the pipeline.'
            },
            {
              title: 'Solution #2: Empower the product owner with a level of control over this process',
              description: 'I developed a system allowing the brand managers to export csv sheets to easily upload & manage to self-hosted CMS to be consumed on the front-end through an API.'
            },
          ],
      },
      {
        id: 1,
        title: 'Team Beachbody',
        tag: '',
        description: 'Enhancing the experience of an enterprise-sized legacy application, improving the performance of existing features and contributing to new features.',
        links: {
          source: '',
          production: 'https://www.teambeachbody.com/shop/us',
        },
        bullets: [
          {
            title: 'Role: Front End Developer',
            description: 'I leveraged vanilla JS, CSS, and HTML expertise, along with my proficiency in Virtual DOM and component driven development, to transition between codebases to contribute to both frontend development in React and CMS development in WordPress.'
          },
          {
            title: 'Contribution: Migrate public components into the members only section',
            description: 'Transitioned components initially introduced on public marketing pages, such as table modules and info panels, into the members-only section for a cohesive experience.'
          },
          {
            title: 'Contributions: Code design and implementation of new features',
            description: 'Participated in code reviews and coding sessions to identify opportunities within 2 launches (BODi rebrand & BODgroups).'
          },
          {
            title: 'Contributions: Improving existing component performance',
            description: 'Fine-tuned existing component integrations to fit within the application\'s visual design system.'
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
            title: "Role: Lead Developer & UI Designer",
            description: "My responsibilities involved crafting the user interface, design system, data structure and the overall functional backbone for over 12 assessments."
          },
          {
            title: 'Problem #1: Brand managers require, customizable, yet easy to replicate assessments for benchmarking',
            description: 'Create brand-specific assessments with comparable functionality for benchmarking. Ensure easy, consistent replication for speed of launch.'
          },
          {
            title: 'Solution #1: Provide a visual design system and data structure',
            description: 'I delivered a simple visual design system and established a structured data framework for guiding the submission of new assessments. This not only ensured a uniform user experience across different brands and a foundation for future development.'
          },
          {
            title: 'Problem #2: Simplify the grading system',
            description: 'Each assessment had a unique set of questions, with a unique grading formula. The grading formula was based on a series of calculations, which needed to be transformed into an intuitive, user-friendly assessment tool.'
          },
          {
            title: 'Solution #2: Collaborative sessions and lots of testing',
            description: 'Working alongside the brand manager, we developed a grading system to align with response submissions. Our collaborative sessions involved extensive testing and iterations, including the development of a live prototype.'
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
            title: 'Role #1: Lead Developer',
            description: 'I served as the Lead Developer, handling development, participating in research and design discussions, conducting testing, assisting in requirement gathering, and presenting review environments.'
          },
          {
            title: 'Problem #1: Partners were dissatisfied with lack of a search feature and navigation',
            description: 'Partners were experiencing issues navigating the current & newly launched product information guides. Their key areas of concern were the lack of a search feature and the inability to easily navigate between guides. This impacted their engagement, which in turn impacted education opportunities when recommending fitness pacakages.'
          },
          {
            title: 'Solution #1: Develop an eCommerce-like experience',
            description: 'Working closely with brand managers and a dedicated UI/UX designer, I contributed to research and design iterations tailored to offer partners an experience similar to that of an eCommerce platform. This involved integrating critical elements like a search feature, a left panel filter/navigation menu, and a product grid presentation.'
          },
          {
            title: 'Problem #2: Legacy Wordpress frustrated Brand managers',
            description: 'Brand managers felt restrained by the WordPress CMS. The instance would break so often, it created a sense of frustration and a strain on their workload, resulting in slower content updates.'
          },
          {
            title: 'Solution #3: Update Legacy code or develop a new, more user-friendly solution',
            description: 'I opted for a headless solution, seamlessly integrating it into the backend alongside other products. This involved setting up and customizing a Directus CMS instance, implementing Nuxt for the frontend, and collaborating with backend engineers to integrate MySQL database and facilitate deployment.'
          },
        ],
      },
      
      
      // {
      //   id: 3,
      //   title: 'More Projects',
      //   tag: '',
      //   description: '',
      //   links: {
      //     source: '',
      //     production: 'http://daprogers.com',
      //   },
      //   bullets: [
      //       {
      //         title: 'Project Role: Lead Developer',
      //         description: ''
      //       },
      //       {
      //         title: 'Problem: ',
      //         description: ''
      //       },
      //       {
      //         title: 'Challenge #1: ',
      //         description: ''
      //       },
      //       {
      //         title: 'Solution #1: ',
      //         description: ''
      //       },
      //     ],
      // },
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