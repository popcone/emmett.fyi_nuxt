export default defineEventHandler((event) => {

    const config = useRuntimeConfig()

    const apiBase = config.apiBaseDev
    const portfolioUrl = `${apiBase}/portfolio/index.json`

    return (async function() {
        try {
            const portfolio = await fetch(portfolioUrl)
            
            return portfolio.json()
        }
        catch (err) {
            const errorMessage = 'Error fetching portfolio.'
            return console.error(errorMessage, err)
        }
    })()


})