// -- underline current menu item in header -- //
import { loadRead } from './add-to-read';

import './header';
import { heartSvg, activeHeartSvg, checkFavoriteStorage } from './markup';
import { textHiding } from './news-text-hiding';
import { nothingFound } from './markup';

const KEY_ALREADY_READ = 'read-news';
const arrowUpSvg = `
  <svg width="14" height="9" class="hide-button__icon">
    <g clip-path="url(#a)">
      <path d="M1.645 11 0 9.478 7 3l7 6.478L12.355 11 7 6.055 1.645 11Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
`;
const readContainer = document.querySelector('.read-by-date-list');
const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');
if (window.location.pathname.indexOf('/favourite') >= 0) {
  home.classList.remove('current');
  read.classList.remove('current');
  favourite.classList.add('current');
} else if (window.location.pathname.indexOf('/read') >= 0) {
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

const readByDateList = document.querySelector('.read-by-date-list');

const onHideButtonClick = function (event) {
  const hideBtn = event.target.closest('.hide-button');
  if (!hideBtn) {
    return;
  }
  const readByDateContainer = hideBtn.closest('.read-by-date-container');
  readByDateContainer.classList.toggle('list-hidden');
};

readByDateList.addEventListener('click', onHideButtonClick);

// перевірка на пустий сторедж
const readNews = loadRead(KEY_ALREADY_READ);
if (readNews) {
  const arrayOfDates = [];

  for (let news of readNews) {
    if (!arrayOfDates.includes(news.dateOfRead)) {
      arrayOfDates.push(news.dateOfRead);
    }
  }
  const dateLists = arrayOfDates.map(date => {
    return `<li class="read-by-date-container">
      <div class="date-wrapper">
        <button class="hide-button" type="button">
          <p class="date-of-read">${date}</p>
          ${arrowUpSvg}
        </button>
      </div>
      <ul class="news-card__list"></ul>
    </li>`;
  });
  readContainer.innerHTML = dateLists.reverse().join('');
  const cardLists = document.querySelectorAll('.news-card__list');
  cardLists.forEach(list => {
    for (let news of readNews) {
      if (
        news.dateOfRead ===
        list.closest('.read-by-date-container').querySelector('.date-of-read')
          .textContent
      ) {
        const cardMarkup = `
    <li class="news-card__item" >
      <article class="news-card__article">
        <div class="news-card__img-wrapper">
          <img class="news-card__img" src=${news.urlMedia} alt="news image" />
          <span class="news-card__category">${news.section}</span>
          <div class="news-card__btn-favorite ${
            checkFavoriteStorage(news.url) ? 'remove-from-fav' : ''
          }">
            <span>${
              checkFavoriteStorage(news.url)
                ? 'Remove from favorite'
                : 'Add to favorite'
            }</span>
            ${checkFavoriteStorage(news.url) ? activeHeartSvg : heartSvg}
            </div>
        </div>
        <div class="news-card__text">
          <h2 class="news-card__title">${textHiding(news.title, 60)}</h2>
          <p class="news-card__description">${textHiding(
            news.abstract,
            150
          )}</p>
        </div>
        <div class="news-card__info">
          <span class="news-card__date">${news.published_date.replaceAll(
            '-',
            '/'
          )}</span>
          <a class="news-card__read-more" href=${
            news.url
          } target='blank'>Read more</a>
        </div>
      </article>
    </li>
    `;
        list.insertAdjacentHTML('beforeend', cardMarkup);
      }
    }
  });
} else {
  nothingFound();
}

// додовання у favorites
const KEY_FAV_NEWS = 'favorite-news';
const list = document.querySelector('.read-by-date-list');
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

list.addEventListener('click', onFavoriteBtnClick);

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
    news => selectedNews.url === news.url
  );

  // перевірка чи є у сховищі
  if (!isAlreadyInStorage) {
    currentStorageState.push(selectedNews);
    save(KEY_FAV_NEWS, currentStorageState);
  }

  // видаляє зі сховища
  if (favBtn.classList.contains('remove-from-fav')) {
    favBtn.innerHTML = `<span>Add to favorite</span>${heartSvg}`;
    const updatedStorageState = currentStorageState.filter(
      item => selectedNews.url !== item.url
    );
    save(KEY_FAV_NEWS, updatedStorageState);
  }

  // додає до сховища
  if (!favBtn.classList.contains('remove-from-fav')) {
    favBtn.innerHTML = `<span>Remove from favorite</span>${activeHeartSvg}`;
  }

  favBtn.classList.toggle('remove-from-fav');
}
