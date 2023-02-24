const KEY_ALREADY_READ = 'read-news';
const newsLists = document.querySelectorAll('.news-card__list');

const checkMark = `<svg width="18" height="18">
    <path
        d="M16.189 3.594a.6.6 0 0 0-.413.182L6.6 12.952 2.824 9.176a.6.6 0 1 0-.848.848l4.2 4.2a.6.6 0 0 0 .848 0l9.6-9.6a.6.6 0 0 0-.435-1.03Z"
         />
</svg>`;

const alreadyReadMarkup = `<div class='already-read'><div class='already-read__text'><span>Already read</span> ${checkMark}</div></div>`;

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

newsLists.forEach(list => {
  list.addEventListener('click', onReadMoreClick);
});

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

// рендер карток
// function renderFavorites() {
//   const favoritesContainer = document.querySelector('.favorites-list');

//   favoritesContainer.innerHTML = '';

//   const favorites = loadRead(KEY_ALREADY_READ);

//   for (const favorite of favorites) {
//     const card = createNewsCard(favorite);
//     favoritesContainer.appendChild(card);
//   }
// }

// написати функцію createNewsCard
