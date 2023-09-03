export default defineEventHandler((event) => {
  
    // AUTH
    const config = useRuntimeConfig()
    // const headers = event.node.req.headers
    
    // URL Parameters
    const query = getQuery(event)
    const brand = String(query.brand);
    const locale = String(query.locale);

    type ClassObj = Record<string, unknown>
    class Quiz {
        meta: ClassObj; questions: ClassObj; packs: ClassObj; components: ClassObj;
        constructor() {
            this.meta = {};
            this.questions = {};
            this.packs = {};
            this.components = {};
        }
    }
    
    const quiz = new Quiz()

    async function fetchQuiz() {
        
        // API URLS
        const apiBase = await config.apiBaseDev

        const metaUrl = await `${apiBase}/quiz/brands.json`
        const questionsUrl = await `${apiBase}/quiz/questions.json`
        const packsUrl = await `${apiBase}/quiz/packs.json`
        const componentsUrl = await `${apiBase}/quiz/components.json`

        // Fetch API
        const [ metaResponse, questionsResponse, packsResponse, componentsResponse ] = await Promise.all([
            fetch(metaUrl),
            fetch(questionsUrl),
            fetch(packsUrl),
            fetch(componentsUrl)
        ])
            .then((responses) => Promise.all(responses.map((response) => response.json())))        

        // Response Data
        const meta = await metaResponse[brand]
        const questions = await questionsResponse[brand][locale]
        const packs = await packsResponse[brand][locale]
        const components = await componentsResponse[brand][locale]

        // Assign responses to Quiz class
        const responses = await { meta, questions, packs, components }
        
        await Object.keys(quiz).forEach((key) => {
                quiz[key] = responses[key]
            })
            
        return quiz
    }
    
    const errorMessage = 'Error fetching quiz data.'

    return fetchQuiz().catch(err => console.error(errorMessage, err))

})