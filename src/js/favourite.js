// -- underline current menu item in header -- //
import './header';
const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');

if (window.location.pathname.indexOf('/favourite') === 0) {
    home.classList.remove('current');
    read.classList.remove('current');
    favourite.classList.add('current');
} else if (window.location.pathname.indexOf('/read') === 0) {
    home.classList.remove('current');
    favourite.classList.remove('current');
    read.classList.add('current');

} else {
  favourite.classList.remove('current');
  read.classList.remove('current');
  home.classList.add('current');
}

const checkbox = document.querySelector('.checkbox');
const mobileCheckbox = document.querySelector('.mobile-checkbox');
const body = document.querySelector('body');
checkbox.addEventListener('change', darkMode);
mobileCheckbox.addEventListener('change', darkMode);
function darkMode() {
  if (this.checked) {
    body.classList.add('dark');
    localStorage.setItem('dark-theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('dark-theme', 'light');
  }
}

import './header';
const KEY_FAV_NEWS = 'favorite-news';

const newsList = document.querySelector('.news-card__list');
newsList.addEventListener('click', onFavoriteBtnClick);

// функції для роботи з local storage
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(error.message);
  }
};

// додавання та видалення новин до storage по кліку на кнопку
function onFavoriteBtnClick(e) {
  const favBtn = e.target.closest('.news-card__btn-favorite');
  if (!favBtn) return;

  // перемикає додатковий клас

  let currentStorageState = load(KEY_FAV_NEWS) || [];
  const card = favBtn.closest('.news-card__item');

  const id = card.getAttribute('id');
  const urlMedia = card.querySelector('.news-card__img').getAttribute('src');
  const section = card.querySelector('.news-card__category').textContent;
  const title = card.querySelector('.news-card__title').textContent;
  const abstract = card.querySelector('.news-card__description').textContent;
  const published_date = card.querySelector('.news-card__date').textContent;
  const url = card.querySelector('.news-card__read-more').getAttribute('href');

  // об'єкт, що зберігається у сховищі
  const selectedNews = {
    id,
    urlMedia,
    section,
    title,
    abstract,
    published_date,
    url,
  };

  const isAlreadyInStorage = currentStorageState.some(
    news => selectedNews.id === news.id
  );

  // перевірка чи є у сховищі
  if (!isAlreadyInStorage) {
    currentStorageState.push(selectedNews);
    save(KEY_FAV_NEWS, currentStorageState);
  }

  // видаляє зі сховища
  if (favBtn.classList.contains('remove-from-fav')) {
    favBtn.textContent = 'Add to favorite';
    const updatedStorageState = currentStorageState.filter(
      item => selectedNews.id !== item.id
    );
    save(KEY_FAV_NEWS, updatedStorageState);
  }

  // додає до сховища
  if (!favBtn.classList.contains('remove-from-fav')) {
    favBtn.textContent = 'Remove from favorite';
  }

  favBtn.classList.toggle('remove-from-fav');
}
