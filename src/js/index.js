import './header';

import './filter';
import './markup';

import WEATHER_API from './weather-api';
import NEWS_API from './news-api';
import {popularNewsMarkup} from './markup';

const weatherApi = new WEATHER_API();
const newsApi = new NEWS_API();
let query = document.querySelector('input');

newsApi.popularNews().then(data => {
  
});

newsApi.fetchNewsByQuerry(query).then(response => {
  newsApi.createNewsMarkup(response);
});

navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);

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
