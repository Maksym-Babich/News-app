import './filter';


import WEATHER_API from './weather-api';
import NEWS_API from './news-api';

const weatherApi = new WEATHER_API();
const newsApi = new NEWS_API();
let query = document.querySelector('input')

newsApi.fetchNewsByQuerry(query).then(response => {
  newsApi.createMarkup(response);
});

navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);

async function onLocationSuccess(pos) {
  this.latitude = pos.coords.latitude;
  this.longitude = pos.coords.longitude;

  return weatherApi.fetchWidthLocation().then(response => {
    weatherApi.createWeatherMarkup(response);
  });
}
function onLocationError() {
  weatherApi.standartFetch().then(response => weatherApi.createWeatherMarkup(response));
}

import './news-text-hiding';

