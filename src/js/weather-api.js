const API_KEY = '94b2a12c85f4ec978a20428df76a9098';
import { format } from 'date-fns';

export default class WEATHER_API {
  constructor() {
    (this.latitude = ''), (this.longitude = '');
  }
  async standartFetch() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=praha&units=metric&appid=${API_KEY}`
    );
    return response.json();
  }
  async fetchWidthLocation() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${API_KEY}`
    );
    return response.json();
  }
  async createWeatherMarkup(response) {
  const weatherMarkup = `
   <li class="weather-info" class="news-card__item">
       <span class="weather-info__degrees">${Math
         .floor
         //  response.main.temp
         ()}°</span>
        <div class="weather-info__group">
            <span class="weather-info__description">
         
            </span>
            <span class="weather-info__location"><svg>
    <use href="../images/sprite.svg#location"></use>
</svg>  </span>
        </div>
        
      </li>
      
      <span class="weather-date">${format(new Date(), 'eee')}</span>
      <span class="weather-date">${format(new Date(), 'dd LLL y')}</span>
      <a href="https://www.accuweather.com/en" class="weather-link" target="_blank" rel="noreferrer noopener">weather for week</a>`;
    return weatherMarkup;
  }
}
//  ${response.weather[0].main} 29-та строка
// ${response.name} 33- тя
// /* <img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png" alt="${response.weather[0].description}" class="weather-img" /> */ 37 строка
