import './header';
import './pagination/pagination'
import './filter';
import './markup';
import './render-news-and-weather';
import './add-to-read';



import NEWS_API from './news-api';
import renderNewsAndWeather from './render-news-and-weather';
import { popularNewsMarkup } from './markup';
import { fetchRead } from './fetch-read';


const newsApi = new NEWS_API();

async function createPopularNews(perPage, nextPage) {
  
  try {
    
    const data = await newsApi.popularNews();
    renderNewsAndWeather(popularNewsMarkup(data.slice(perPage,nextPage)));
    
  } catch (error) {
    console.error(error);
  }
}
document.addEventListener('DOMContentLoaded', createPopularNews(0, 8));


import './news-text-hiding';
import './favourite';
