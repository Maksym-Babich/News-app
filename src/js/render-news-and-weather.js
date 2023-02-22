import { pageNothingFound } from './markup';
import WEATHER_API from './weather-api';
import { format } from 'date-fns';
const API_KEY = '05383c6978b3bc81d3b473e0eed83dd7';
const cardsContainer = document.querySelector('.news-card__list');

let newsAndWeatherMarkupArray = [];

let latitude = '';
let longitude = '';

async function noLocation() {
  const fetchWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=${API_KEY}`
  );
  const weatherResponse = await fetchWeather.json();
  const weatherMarkup = `
   <li class="weather-info weather news-card__item " >
   <div class="weather-information">
       
       <span class="weather-information__degrees">${Math.floor(
         weatherResponse.main.temp
       )}°</span>
        <div class="weather-information__group">
            <span class="weather-information__description">
         ${weatherResponse.weather[0].main}
            </span>
            <span class="weather-information__location"><svg>
    <use href="../images/sprite.svg#location"></use>
</svg> ${weatherResponse.name} </span>
        </div>
        </div>
        
      <img src="https://openweathermap.org/img/wn/${
        weatherResponse.weather[0].icon
      }@4x.png" alt="${
    weatherResponse.weather[0].description
  }" class="weather-img" />
      
      <span class="weather-date">${format(new Date(), 'eee')}</span>
      <span class="weather-date">${format(new Date(), 'dd LLL y')}</span>
      <a href="https://www.accuweather.com/en" class="weather-link" target="_blank" rel="noreferrer noopener">weather for week</a></li>`;
  return weatherMarkup;
}

async function widthLocation(pos) {
  latitude = pos.coords.latitude;
  longitude = pos.coords.longitude;

  const fetchWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );
  const weatherResponse = await fetchWeather.json();

  const weatherMarkup = `
   <li class="weather-info weather news-card__item " >
   <div class="weather-information">
       
       <span class="weather-information__degrees">${Math.floor(
         weatherResponse.main.temp
       )}°</span>
        <div class="weather-information__group">
            <span class="weather-information__description">
         ${weatherResponse.weather[0].main}
            </span>
            <span class="weather-information__location"><svg>
    <use href="../images/sprite.svg#location"></use>
</svg> ${weatherResponse.name} </span>
        </div>
        </div>
        
      <img src="https://openweathermap.org/img/wn/${
        weatherResponse.weather[0].icon
      }@4x.png" alt="${
    weatherResponse.weather[0].description
  }" class="weather-img" />
      
      <span class="weather-date">${format(new Date(), 'eee')}</span>
      <span class="weather-date">${format(new Date(), 'dd LLL y')}</span>
      <a href="https://www.accuweather.com/en" class="weather-link" target="_blank" rel="noreferrer noopener">weather for week</a></li>`;

  if (window.matchMedia('(max-width: 767px  )').matches) {
    newsAndWeatherMarkupArray.splice(0, 1, weatherMarkup);
  }
  if (
    window.matchMedia('(min-width: 768px)').matches &&
    window.matchMedia('(max-width: 1279px)').matches
  ) {
    newsAndWeatherMarkupArray.splice(1, 1, weatherMarkup);
  }
  if (window.matchMedia('(min-width: 1280px)').matches) {
    newsAndWeatherMarkupArray.splice(2, 1, weatherMarkup);
  }

  cardsContainer.innerHTML = newsAndWeatherMarkupArray.join('');
}

navigator.geolocation.getCurrentPosition(widthLocation, noLocation);

export default async function renderNewsAndWeather(markupsArr) {
  if (!markupsArr.length) {
    cardsContainer.innerHTML = '';
    pageNothingFound();
  }
newsAndWeatherMarkupArray = [];
  newsAndWeatherMarkupArray.push(...markupsArr);
  const weatherMarkup = await noLocation();

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
