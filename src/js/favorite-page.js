import { textHiding } from './news-text-hiding';

const favoritesContainer = document.querySelector('.favorite__list');

const KEY_FAV_NEWS = 'favorite-news';

favoritesContainer.innerHTML = '';

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(error.message);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const favorites = load(KEY_FAV_NEWS);

for (const favorite of favorites) {
  const card = createFavNewsMarkUp(favorite);
  favoritesContainer.insertAdjacentHTML('beforeend', card);
}

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
    <li class="news-card__item" id=${id}>
      <article class="news-card__article">
        <div class="news-card__img-wrapper">
          <img class="news-card__img" src=${urlMedia} alt="news image" />
          <span class="news-card__category">${section}</span>
          <div class="news-card__btn-favorite remove-from-fav">
            <span>Remove from favorite</span>
            <svg class="news-card__btn-icon">
                <use href="./images/sprite.svg#heart"></use>
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

favoritesContainer.addEventListener('click', onFavoriteBtnClick);
function onFavoriteBtnClick(e) {
  const favBtn = e.target.closest('.news-card__btn-favorite');
  if (!favBtn) return;
  let currentStorageState = load(KEY_FAV_NEWS);
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
  if (isAlreadyInStorage) {
    const updatedStorageState = currentStorageState.filter(
      item => selectedNews.id === item.id
    );
    save(KEY_FAV_NEWS, updatedStorageState);
    favoritesContainer.removeChild(card);
  }
}
