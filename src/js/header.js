import NEWS_API from './news-api';
import { searchedNewsMarkup } from './markup';
import renderNewsAndWeather from './render-news-and-weather';
const newsApi = new NEWS_API();

function openSearchBar() {
  searchBar.classList.add('visible');
  searchIcon.classList.add('hidden');
}
function openMenu() {
  mobileMenu.classList.remove('hidden');
}
function closeMenu() {
  mobileMenu.classList.add('hidden');
}
function darkMode() {
  if (this.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}
const searchIcon = document.querySelector('.open-search-button');
const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.submit-button');
const burgerMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const checkbox = document.querySelector('.checkbox');
const mobileCheckbox = document.querySelector('.mobile-checkbox');
const body = document.querySelector('body');
const queryForm = document.querySelector('.search-bar');
let query = document.querySelector('.search-field');
searchIcon.addEventListener('click', openSearchBar);
burgerMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
checkbox.addEventListener('change', darkMode);
mobileCheckbox.addEventListener('change', darkMode);

queryForm.addEventListener('submit', searchNews);

function searchNews(evt) {
  evt.preventDefault();

  let newsMarkupsArray = newsApi
    .fetchNewsByQuerry(query.value)
    .then(response => {
      return searchedNewsMarkup(response);
    });

  newsMarkupsArray.then(response => {
    renderNewsAndWeather(response);
  });
}
