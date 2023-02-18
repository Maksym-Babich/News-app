
const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw'; 

export default class NEVS_API {
    constructor() {
this.value = ''
    }

    async fetch() {
       const fetchNews = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.value}&api-key=${KEY}
`)
        const response = fetchNews.json()
        return response
        
    }
    async createMarkup(response) {
        console.log(response)
    }
}

