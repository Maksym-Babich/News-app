const API_KEY = '94b2a12c85f4ec978a20428df76a9098';
import { format } from 'date-fns';

const container = document.querySelector('.weather');

export default class WEATHER_API {

    constructor() {
        this.latitude = '',
        this.longitude = ''
    }
    async standartFetch() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=praha&units=metric&appid=${API_KEY}`
  );
  return response.json();
    }
    async fetchWidthLocation() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );
  return response.json();
    }
    async createWeatherMarkup(response) {
 
  const weatherMarkup = `

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
  async createMarkup(response) {
    container.innerHTML = `

   <div class="weather-info">
       <span class="weather-info__degrees">${Math.floor(
         response.main.temp
       )}°</span>
        <div class="weather-info__group">
            <span class="weather-info__description">${
              response.weather[0].main
            }</span>
            <span class="weather-info__location"><svg>
    <use href="../images/sprite.svg#location"></use>
</svg>${response.name}</span>
        </div>
        
      </div>
      <img src="https://openweathermap.org/img/wn/${
        response.weather[0].icon
      }@4x.png" alt="${response.weather[0].description}" class="weather-img" />
      <span class="weather-date">${format(new Date(), 'eee')}</span>
      <span class="weather-date">${format(new Date(), 'dd LLL y')}</span>
      <a href="https://www.accuweather.com/en" class="weather-link" target="_blank" rel="noreferrer noopener">weather for week</a>`;


      return weatherMarkup
}
     

}






  }
}

