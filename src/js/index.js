import './header';

import './filter';
import './markup';
import './render-news-and-weather';
import './add-to-read';

import './pagination/pagination';
// import './pagination/paginator-cat';
// import './pagination/paginator-serch';


import NEWS_API from './news-api';
import renderNewsAndWeather from './render-news-and-weather';
import { popularNewsMarkup } from './markup';

const paginPop = document.querySelector('.pagination--container')



const newsApi = new NEWS_API();

async function createPopularNews(perPage, nextPage) {
  
  try {
    
    const data = await newsApi.popularNews();
    if (paginPop.classList.contains('pagination-hidden')) {
      paginPop.classList.toggle('pagination-hidden')};
          
    renderNewsAndWeather(popularNewsMarkup(data.slice(perPage, nextPage)));
    
    
  } catch (error) {
    console.error(error);
  }
}
document.addEventListener('DOMContentLoaded', createPopularNews(0, 8));


import './pagination/pagination';

import './news-text-hiding';
import './favourite';
