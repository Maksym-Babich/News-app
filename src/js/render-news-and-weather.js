import WEATHER_API from './weather-api';

const cardsContainer = document.querySelector('.news-card__list');
const weatherApi = new WEATHER_API();

let newsAndWeatherMarkupArray = [];

const weatherMarkup = weatherApi.createWeatherMarkup();

export default function renderNewsAndWeather(newsArr) {
  cardsContainer.innerHTML = '';
  newsAndWeatherMarkupArray.push(...newsArr);

  if (window.matchMedia('(max-width: 767px  )').matches) {
    newsAndWeatherMarkupArray.splice(0, 0, weatherMarkup);
  }
  if (
    window.matchMedia('(min-width: 768px)').matches &&
    window.matchMedia('(max-width: 1279px)').matches
  ) {
    newsAndWeatherMarkupArray.splice(1, 0, weatherMarkup);
  }
  if (window.matchMedia('(min-width: 1280px)').matches) {
    newsAndWeatherMarkupArray.splice(2, 0, weatherMarkup);
  }

  cardsContainer.innerHTML = newsAndWeatherMarkupArray.join('');
}



