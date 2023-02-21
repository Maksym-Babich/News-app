import './header';

import './filter';
import './markup';
import './render-news-and-weather';

import WEATHER_API from './weather-api';
import NEWS_API from './news-api';
import renderNewsAndWeather from './render-news-and-weather';
import { popularNewsMarkup } from './markup';

const weatherApi = new WEATHER_API();
const newsApi = new NEWS_API();

navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);

async function createPopularNews() {
  try {
    const data = await newsApi.popularNews();
    renderNewsAndWeather(popularNewsMarkup(data));
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', createPopularNews());

async function onLocationSuccess(pos) {
  weatherApi.latitude = pos.coords.latitude;
  weatherApi.longitude = pos.coords.longitude;

  return weatherApi.fetchWidthLocation().then(response => {
    weatherApi.createWeatherMarkup(response);
  });
}
function onLocationError() {
  weatherApi
    .standartFetch()
    .then(response => weatherApi.createWeatherMarkup(response));
}

import './news-text-hiding';
