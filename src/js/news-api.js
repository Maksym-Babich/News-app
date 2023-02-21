
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

    async popularNews() {
        try {
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${KEY}`);
        const data = await response.json();
            if (data.status === 404) {
                throw new Error(console.error);
            }else return data.results;
            } catch (error) {
                console.log(error);
            }
    }
}

