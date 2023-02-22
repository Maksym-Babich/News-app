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

const favorites = load(KEY_FAV_NEWS);

// або додає або видаляє картку зі сторінки favorites
for (const favorite of favorites) {
  const card = createFavNewsMarkUp(favorite);
  if (card.classList.contains('remove-from-fav')) {
    favoritesContainer.appendChild(card);
  }
  if (!card.classList.contains('remove-from-fav'))
    card.parentNode.removeChild(card);
}

// створює розмітку за даними з local storage
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
          <div class="news-card__btn-favorite">
            <span>Add to favorite</span>
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
