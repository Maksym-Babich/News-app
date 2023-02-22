import { searchedNewsMarkup } from './markup';
const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw';

export default class NEWS_API {
  async fetchNewsByQuerry(query) {
    const response =
      await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${KEY}
`);
    const objectOfNews = await response.json();
    const arrayOfNews = objectOfNews.response.docs;
    return arrayOfNews;
  }

  async createNewsMarkup(arrayOfNews) {
    searchedNewsMarkup(arrayOfNews);
    console.log(searchedNewsMarkup(arrayOfNews));
  }
}
