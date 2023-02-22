import './header';

import './filter';
import './markup';
import './render-news-and-weather';
import './pagination/pagination'


import NEWS_API from './news-api';
import renderNewsAndWeather from './render-news-and-weather';
import { popularNewsMarkup } from './markup';


const newsApi = new NEWS_API();



async function createPopularNews() {
  try {
    const data = await newsApi.popularNews();
    renderNewsAndWeather(popularNewsMarkup(data));
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', createPopularNews());



import './news-text-hiding';
import './favourite';
