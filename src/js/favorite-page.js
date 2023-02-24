// -- underline current menu item in header -- //
import './header';
import { textHiding } from './news-text-hiding';
import { nothingFound } from './markup';

const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');
if (window.location.pathname.indexOf('/favourite.html') >= 0) {
  home.classList.remove('current');
  read.classList.remove('current');
  favourite.classList.add('current');
} else if (window.location.pathname.indexOf('/read.html') >= 0) {
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

// падінг для main
const main = document.querySelector('main');
main.classList.add('favorite_padding');

const favoritesContainer = document.querySelector('.favorite__list');
favoritesContainer.addEventListener('click', onRemoveFromFavClick);

const KEY_FAV_NEWS = 'favorite-news';

// для read
const KEY_ALREADY_READ = 'read-news';
const checkMark = `<svg width="18" height="18">
    <path
        d="M16.189 3.594a.6.6 0 0 0-.413.182L6.6 12.952 2.824 9.176a.6.6 0 1 0-.848.848l4.2 4.2a.6.6 0 0 0 .848 0l9.6-9.6a.6.6 0 0 0-.435-1.03Z"
         />
</svg>`;
const alreadyReadMarkup = `<div class='already-read'><div class='already-read__text'><span>Already read</span> ${checkMark}</div></div>`;
const checkReadStorage = url => {
  let storageState = localStorage.getItem('read-news');
  if (storageState) {
    return JSON.parse(storageState).find(item => item.url === url);
  }
};
const saveRead = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const loadRead = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(error.message);
  }
};

// для read

const loadFav = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(error.message);
  }
};
const saveRemoved = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

// перевірка на пустий сторедж
const favorites = loadFav(KEY_FAV_NEWS);
if (favorites == null || favorites.length === 0) {
  nothingFound();
  return;
}

// для кожного елемента стореджу створи розмітку
for (const favorite of favorites) {
  const card = createFavNewsMarkUp(favorite);
  favoritesContainer.insertAdjacentHTML('beforeend', card);
}

// створює розмітку
function createFavNewsMarkUp({
  id,
  urlMedia,
  section,
  title,
  abstract,
  published_date,
  url,
}) {
  return `
    <li class="news-card__item card__favorite" id=${id}>
      <article class="news-card__article">
        <div class="news-card__img-wrapper">
          <img class="news-card__img" src=${urlMedia} alt="news image" />
          <span class="news-card__category">${section}</span>
          <div class="news-card__btn-favorite remove-from-fav">
            <span>Remove from favorite</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
<path d="M3.66536 0C1.8247 0 0.332031 1.47733 0.332031 3.3C0.332031 4.77133 0.915365 8.26333 6.65736 11.7933C6.76022 11.8559 6.8783 11.889 6.9987 11.889C7.1191 11.889 7.23718 11.8559 7.34003 11.7933C13.082 8.26333 13.6654 4.77133 13.6654 3.3C13.6654 1.47733 12.1727 0 10.332 0C8.49136 0 6.9987 2 6.9987 2C6.9987 2 5.50603 0 3.66536 0Z" fill="#4B48DA"/>
</svg>
            </div>
        </div>
        <div class="news-card__text">
          <h2 class="news-card__title">${textHiding(title, 30)}</h2>
          <p class="news-card__description">${textHiding(abstract, 65)}</p>
        </div>
        <div class="news-card__info">
          <span class="news-card__date">${published_date.replaceAll(
            '-',
            '/'
          )}</span>
          <a class="news-card__read-more" href=${url} target='blank'>Read more</a>
        </div>
      </article>
        ${checkReadStorage(url) ? alreadyReadMarkup : ''}
    </li>
    `;
}

// видаляє картку зі сторінки та стореджу по кліку на кнопку
function onRemoveFromFavClick(e) {
  const removeBtn = e.target.closest('.news-card__btn-favorite');
  if (!removeBtn) return;
  const card = removeBtn.closest('.news-card__item');

  const url = card.querySelector('.news-card__read-more').getAttribute('href');
  for (let i = 0; i < favorites.length; i += 1) {
    if (favorites[i].url === url) {
      favorites.splice(i, 1);
    }
  }

  saveRemoved(KEY_FAV_NEWS, favorites);
  card.remove();

  if (favorites == null || favorites.length === 0) {
    nothingFound();
  }
}

// додавання у read
favoritesContainer.addEventListener('click', onReadMoreClick);
function onReadMoreClick(e) {
  const readMoreBtn = e.target.closest('.news-card__read-more');
  if (!readMoreBtn) return;

  let currentStorageState = loadRead(KEY_ALREADY_READ) || [];
  const card = readMoreBtn.closest('.news-card__item');

  const urlMedia = card.querySelector('.news-card__img').getAttribute('src');
  const section = card.querySelector('.news-card__category').textContent;
  const title = card.querySelector('.news-card__title').textContent;
  const abstract = card.querySelector('.news-card__description').textContent;
  const published_date = card.querySelector('.news-card__date').textContent;
  const url = card.querySelector('.news-card__read-more').getAttribute('href');

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  const dateOfRead = mm + '/' + dd + '/' + yyyy;

  // об'єкт, що зберігається у сховищі
  const readNews = {
    urlMedia,
    section,
    title,
    abstract,
    published_date,
    url,
    dateOfRead,
  };

  const isAlreadyRead = currentStorageState.some(
    news => readNews.url === news.url
  );

  // перевірка чи є у сховищі
  if (!isAlreadyRead) {
    currentStorageState.push(readNews);
    saveRead(KEY_ALREADY_READ, currentStorageState);
  }

  card.insertAdjacentHTML('beforeend', alreadyReadMarkup);
}
