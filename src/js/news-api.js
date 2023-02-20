
const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw'; 

export default class NEwS_API {
 

    async fetchNewsByQuerry(query) {
       const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${KEY}
`)
        const arrayOfNews = response.json()
        return arrayOfNews
        
    }
    async createNewsMarkup(arrayOfNews) {
       getMarkup(arrayOfNews.response.docs)
    }
}

