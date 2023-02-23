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
const mobileHome = document.querySelector('#mobile-home');
const favourite = document.querySelector('#favourite');
const mobileFavourite = document.querySelector('#mobile-favourite');
const read = document.querySelector('#read');
const mobileRead = document.querySelector('#mobile-read');

const queryForm = document.querySelector('.search-bar');
let query = document.querySelector('.search-field');

searchIcon.addEventListener('click', openSearchBar);
burgerMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
checkbox.addEventListener('change', darkMode);
mobileCheckbox.addEventListener('change', darkMode);

if (window.location.pathname.indexOf('/favourite') >= 0) {
  home.classList.remove('current');
  mobileHome.classList.remove('mobile-current');
  read.classList.remove('current');
  mobileRead.classList.remove('mobile-current');
  favourite.classList.add('current');
  mobileFavourite.classList.add('mobile-current');
} else if (window.location.pathname.indexOf('/read') >= 0) {
  home.classList.remove('current');
  mobileHome.classList.remove('mobile-current');
  favourite.classList.remove('current');
  mobileFavourite.classList.remove('mobile-current');
  read.classList.add('current');
  mobileRead.classList.add('mobile-current');
} else if (window.location.pathname.indexOf('/index') >= 0) {
  favourite.classList.remove('current');
  mobileFavourite.classList.remove('mobile-current');
  read.classList.remove('current');
  mobileRead.classList.remove('mobile-current');
  home.classList.add('current');
  mobileHome.classList.add('mobile-current');
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
