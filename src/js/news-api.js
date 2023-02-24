import { searchedNewsMarkup } from './markup';
const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw';
const ENDPOINT = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export default class NEWS_API {
  async fetchNewsByQuerry(query) {
    if (localStorage.getItem('date')) {
      const localStorageDate = JSON.parse(localStorage.getItem('date')).split('/')
      const date = localStorageDate[2] + localStorageDate[1] + localStorageDate[0]
   
      const response =
        await fetch(`${ENDPOINT}?q=${query}&api-key=${KEY}&page=0&begin_date=${date}&end_date=${date}
`);
      const objectOfNews = await response.json();
      const arrayOfNews = objectOfNews.response.docs;
     
      return arrayOfNews;
    }
    const response = await fetch(`${ENDPOINT}?q=${query}&api-key=${KEY}
`);
    const objectOfNews = await response.json();
    const arrayOfNews = objectOfNews.response.docs;

    const totalPages = objectOfNews.response.meta;
    console.log(totalPages.hits)

    return arrayOfNews;
  }

  async createNewsMarkup(arrayOfNews) {
    searchedNewsMarkup(arrayOfNews);
    return searchedNewsMarkup(arrayOfNews);
  }

  async popularNews() {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${KEY}`
      );
      const data = await response.json();

      if (data.status === 404) {
        throw new Error(console.error);
      } else return data.results;
    } catch (error) {
      console.log(error);
    }
  }
}
