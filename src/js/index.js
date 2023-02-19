import './filter';
import API from './weather-api';
import NEVS_API from './news-api';

const api = new API();
const newsApi = new NEVS_API();
newsApi.fetch().then(response => {
  newsApi.createMarkup(response);
});

navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);
async function onLocationSuccess(pos) {
  this.latitude = pos.coords.latitude;
  this.longitude = pos.coords.longitude;

  return api.fetchWidthLocation().then(response => {
    return api.createMarkup(response);
  });
}
function onLocationError() {
  api.standartFetch().then(response => api.createMarkup(response));
}
