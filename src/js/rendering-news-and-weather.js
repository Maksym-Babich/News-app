import { WEATHER_API } from './weather-api';
import { getMarkupV2 } from './markup';

const cardsContainer = document.querySelector('.news-card__list');

let newsAndWeatherMarkupArray = [];
const weatherMarkup = WEATHER_API.createWeatherMarkup();

export default function renderNewsAndWeather(newsArray) {
  newsAndWeatherMarkupArray.push(getMarkupV2(newsArray));

  if (window.matchMedia('(min-width: 768px)').matches) {
    newsAndWeatherMarkupArray.splice(1, 0, weatherMarkup);
  }
  if (window.matchMedia('(min-width: 1200px)').matches) {
    newsAndWeatherMarkupArray.splice(2, 0, weatherMarkup);
  }
  newsAndWeatherMarkupArray.splice(0, 0, weatherMarkup);

  cardsContainer.innerHTML(newsAndWeatherMarkupArray.join(''));
}
renderNewsAndWeather();
