import { pageNothingFound, removePageNothingFound } from './markup';

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
            <span class="weather-information__location"><svg width="25" height="25" viewBox="-4 0 27 27">
<path d="M9.50001 0.6875C7.03936 0.690403 4.68032 1.66918 2.94038 3.40912C1.20044 5.14906 0.221663 7.5081 0.21876 9.96875C0.215813 11.9796 0.87265 13.9359 2.08851 15.5375C2.08851 15.5375 2.34163 15.8708 2.38298 15.9189L9.50001 24.3125L16.6204 15.9147C16.6575 15.8699 16.9115 15.5375 16.9115 15.5375L16.9124 15.535C18.1276 13.934 18.7841 11.9787 18.7813 9.96875C18.7784 7.5081 17.7996 5.14906 16.0596 3.40912C14.3197 1.66918 11.9607 0.690403 9.50001 0.6875ZM9.50001 13.3438C8.8325 13.3438 8.17998 13.1458 7.62496 12.775C7.06994 12.4041 6.63736 11.877 6.38192 11.2603C6.12647 10.6436 6.05963 9.96501 6.18986 9.31032C6.32008 8.65563 6.64152 8.05427 7.11352 7.58226C7.58553 7.11026 8.18689 6.78882 8.84158 6.6586C9.49627 6.52837 10.1749 6.59521 10.7916 6.85066C11.4083 7.1061 11.9354 7.53868 12.3062 8.0937C12.6771 8.64872 12.875 9.30124 12.875 9.96875C12.8739 10.8635 12.518 11.7213 11.8853 12.354C11.2526 12.9867 10.3948 13.3426 9.50001 13.3438Z" fill="white"/>
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

  return `
   <li class="weather-info weather news-card__item " >
   <div class="weather-information">
       
       <span class="weather-information__degrees">${Math.floor(
         weatherResponse.main.temp
       )}°</span>
        <div class="weather-information__group">
            <span class="weather-information__description">
         ${weatherResponse.weather[0].main}
            </span>
            <span class="weather-information__location"><svg width="27" height="27" viewBox="-4 0 27 27">
<path d="M9.50001 0.6875C7.03936 0.690403 4.68032 1.66918 2.94038 3.40912C1.20044 5.14906 0.221663 7.5081 0.21876 9.96875C0.215813 11.9796 0.87265 13.9359 2.08851 15.5375C2.08851 15.5375 2.34163 15.8708 2.38298 15.9189L9.50001 24.3125L16.6204 15.9147C16.6575 15.8699 16.9115 15.5375 16.9115 15.5375L16.9124 15.535C18.1276 13.934 18.7841 11.9787 18.7813 9.96875C18.7784 7.5081 17.7996 5.14906 16.0596 3.40912C14.3197 1.66918 11.9607 0.690403 9.50001 0.6875ZM9.50001 13.3438C8.8325 13.3438 8.17998 13.1458 7.62496 12.775C7.06994 12.4041 6.63736 11.877 6.38192 11.2603C6.12647 10.6436 6.05963 9.96501 6.18986 9.31032C6.32008 8.65563 6.64152 8.05427 7.11352 7.58226C7.58553 7.11026 8.18689 6.78882 8.84158 6.6586C9.49627 6.52837 10.1749 6.59521 10.7916 6.85066C11.4083 7.1061 11.9354 7.53868 12.3062 8.0937C12.6771 8.64872 12.875 9.30124 12.875 9.96875C12.8739 10.8635 12.518 11.7213 11.8853 12.354C11.2526 12.9867 10.3948 13.3426 9.50001 13.3438Z" fill="white"/>
</svg>  ${weatherResponse.name} </span>
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
}

function getCoordinates() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export default async function renderNewsAndWeather(markupsArr) {
  if (!markupsArr.length) {
    cardsContainer.innerHTML = '';
    pageNothingFound();
    return;
  }
  removePageNothingFound();
  newsAndWeatherMarkupArray = [];

  newsAndWeatherMarkupArray.push(...markupsArr);

  const weatherMarkup = await getCoordinates()
    .then(widthLocation)
    .catch(noLocation);

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
