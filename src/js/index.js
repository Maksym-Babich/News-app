import './header';

import './filter';
import './markup';
import './render-news-and-weather';

import WEATHER_API from './weather-api';

const weatherApi = new WEATHER_API();

navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);

newsApi.popularNews().then(data => {
  
});

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
