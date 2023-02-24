// -- underline current menu item in header -- //
import { loadRead } from './add-to-read';
import './header';
import { heartSvg, activeHeartSvg, checkFavoriteStorage } from './markup';
import { textHiding } from './news-text-hiding';
import { pageNothingFound } from './markup';

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
  pageNothingFound();
}
