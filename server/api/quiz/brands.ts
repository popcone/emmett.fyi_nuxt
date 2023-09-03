export default defineEventHandler((event) => {
  
  const config = useRuntimeConfig()
        
  const query = getQuery(event)

  async function fetchBrands() {
    // API URLS
    const apiBase = await config.apiBaseDev

    const brandsUrl = await `${apiBase}/quiz/brands.json`

    // Fetch API
    const brandsResponse = await fetch(brandsUrl)
      .then((response) => response.json())
    
    // Response Data
    const brands = await Object.keys(brandsResponse);

    return brands
  }

  const errorMessage = 'Error fetching brands.'

  return fetchBrands().catch((err) => console.error(errorMessage, err))

})