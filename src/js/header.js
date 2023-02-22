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
    localStorage.setItem('dark-theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('dark-theme', 'light');
  }
}
const searchIcon = document.querySelector('.open-search-button');
const searchBar = document.querySelector('.search-bar');
const burgerMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const checkbox = document.querySelector('.checkbox');
const mobileCheckbox = document.querySelector('.mobile-checkbox');
const body = document.querySelector('body');

const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');

const queryForm = document.querySelector('.search-bar');
let query = document.querySelector('.search-field');

searchIcon.addEventListener('click', openSearchBar);
burgerMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
checkbox.addEventListener('change', darkMode);
mobileCheckbox.addEventListener('change', darkMode);

if (window.location.pathname.indexOf('/favourite.html') === 0) {
  home.classList.remove('current');
  read.classList.remove('current');
  favourite.classList.add('current');
} else if (window.location.pathname.indexOf('/read.html') === 0) {
  home.classList.remove('current');
  favourite.classList.remove('current');
  read.classList.add('current');
} else {
  favourite.classList.remove('current');
  read.classList.remove('current');
  home.classList.add('current');
}
if (localStorage.getItem('dark-theme') === 'dark') {
  body.classList.add('dark');
  checkbox.checked = true;
  mobileCheckbox.checked = true;
} else {
  body.classList.remove('dark');
  checkbox.checked = false;
  mobileCheckbox.checked = false;
}

queryForm.addEventListener('submit', searchNews);

async function searchNews(evt) {
  evt.preventDefault();

  let newsMarkupsArray = await newsApi
    .fetchNewsByQuerry(query.value)
    .then(response => {
      return searchedNewsMarkup(response);
    });

  renderNewsAndWeather(newsMarkupsArray);
}
