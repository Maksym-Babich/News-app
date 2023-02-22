// -- underline current menu item in header -- //
import './header';
import { textHiding } from './news-text-hiding';

const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');
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

const favoritesContainer = document.querySelector('.favorite__list');
favoritesContainer.addEventListener('click', onRemoveFromFavClick);

const KEY_FAV_NEWS = 'favorite-news';

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
if (favorites == null) {
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
           <svg class=favorite__svg id="liked" viewBox="0 0 32 32" width=16 height=16>
            <path fill="#4b48da" style="fill:var(--color6, #4b48da)"
                d="M9.333 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987a1.316 1.316 0 0 0 1.366 0c11.484-7.06 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6S16 8 16 8s-2.985-4-6.667-4z" />
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
          <a class="news-card__read-more" href=${url}>Read more</a>
        </div>
      </article>
    </li>
    `;
}

// видаляє картку зі сторінки та стореджу по кліку на кнопку
function onRemoveFromFavClick(e) {
  const removeBtn = e.target.closest('.news-card__btn-favorite');
  if (!removeBtn) return;
  const card = removeBtn.closest('.news-card__item');

  const id = card.getAttribute('id');
  for (let i = 0; i < favorites.length; i += 1) {
    if (favorites[i].id === id || favorites[i].id == null) {
      favorites.splice(i, 1);
    }
  }

  saveRemoved(KEY_FAV_NEWS, favorites);
  card.remove();
}
