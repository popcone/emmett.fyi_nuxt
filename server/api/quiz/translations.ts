export default defineEventHandler((event) => {

    const config = useRuntimeConfig()
        
    const query = getQuery(event)
    const locale = String(query.locale);

    async function fetchTranslations() {
            
        // API URLS
        const apiBase = await config.apiBaseDev

        const translationsUrl = await `${apiBase}/quiz/translations.json`

        // Fetch API
        const translationsResponse = await fetch(translationsUrl)
            .then((response) => response.json())

        // Response Data
        const translations = await translationsResponse[locale]

        return translations

    }

    const errorMessage = 'Error fetching translations.'

    return fetchTranslations().catch((err) => console.error(errorMessage, err))

})