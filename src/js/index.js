import './filter';
import API from './weather-api';
let latitude = "";
let longitude = "";
const api = new API();
navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError); async function onLocationSuccess(pos) {
     this.latitude = pos.coords.latitude;
    this.longitude = pos.coords.longitude;
     
  return api.fetchWidthLocation().then((response) => {
      console.log("🚀 ~ file: index.js:11 ~ onLocationSuccess ~ response", response)
      return api.createMarkup(response)
  })
    
}
function onLocationError() {
 
    
api.standartFetch().then((response) => api.createMarkup(response));
}