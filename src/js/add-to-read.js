const KEY_ALREADY_READ = 'read-news';
const newsLists = document.querySelectorAll('news-card__list');

const saveReadRead = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadReadRead = key => {
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

  let currentStorageState = loadReadRead(KEY_ALREADY_READ) || [];
  const card = readMoreBtn.closest('.news-card__item');
  card.classList.add('already-read');

  const id = card.getAttribute('id');
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
    id,
    urlMedia,
    section,
    title,
    abstract,
    published_date,
    url,
    dateOfRead,
  };

  const isAlreadyRead = currentStorageState.some(
    news => readNews.id === news.id
  );

  // перевірка чи є у сховищі
  if (!isAlreadyRead) {
    currentStorageState.push(readNews);
    saveRead(KEY_ALREADY_READ, currentStorageState);
  }
}

// рендер карток
function renderFavorites() {
  const favoritesContainer = document.querySelector('.favorites-list');

  favoritesContainer.innerHTML = '';

  const favorites = loadRead(KEY_ALREADY_READ);

  for (const favorite of favorites) {
    const card = createNewsCard(favorite);
    favoritesContainer.appendChild(card);
  }
}

// написати функцію createNewsCard
