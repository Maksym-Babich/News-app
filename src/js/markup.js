import { format } from 'date-fns';
import { textHiding } from './news-text-hiding';

const heartSvg = `<svg class="news-card__btn-icon xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
<path d="M4.66683 1C2.82616 1 1.3335 2.47733 1.3335 4.3C1.3335 5.77133 1.91683 9.26333 7.65883 12.7933C7.76168 12.8559 7.87976 12.889 8.00016 12.889C8.12056 12.889 8.23864 12.8559 8.3415 12.7933C14.0835 9.26333 14.6668 5.77133 14.6668 4.3C14.6668 2.47733 13.1742 1 11.3335 1C9.49283 1 8.00016 3 8.00016 3C8.00016 3 6.5075 1 4.66683 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const activeHeartSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
<path d="M3.66536 0C1.8247 0 0.332031 1.47733 0.332031 3.3C0.332031 4.77133 0.915365 8.26333 6.65736 11.7933C6.76022 11.8559 6.8783 11.889 6.9987 11.889C7.1191 11.889 7.23718 11.8559 7.34003 11.7933C13.082 8.26333 13.6654 4.77133 13.6654 3.3C13.6654 1.47733 12.1727 0 10.332 0C8.49136 0 6.9987 2 6.9987 2C6.9987 2 5.50603 0 3.66536 0Z" fill="#4B48DA"/>
</svg>`;
const checkMark = `<svg width="18" height="18">
    <path
        d="M16.189 3.594a.6.6 0 0 0-.413.182L6.6 12.952 2.824 9.176a.6.6 0 1 0-.848.848l4.2 4.2a.6.6 0 0 0 .848 0l9.6-9.6a.6.6 0 0 0-.435-1.03Z"
         />
</svg>`;

const alreadyReadMarkup = `<div class='already-read'><div class='already-read__text'><span>Already read</span> ${checkMark}</div></div>`;

const checkFavoriteStorage = url => {
  let storageState = localStorage.getItem('favorite-news');
  if (storageState) {
    return JSON.parse(storageState).find(item => item.url === url);
  }
};

const checkReadStorage = url => {
  let storageState = localStorage.getItem('read-news');
  if (storageState) {
    return JSON.parse(storageState).find(item => item.url === url);
  }
};

const popularNewsMarkup = newsArr => {
  const markup = newsArr.map(newsItem => {
    const { url, id, published_date, section, title, abstract, media } =
      newsItem;
    let urlMedia = 'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg';
    if (media.length) {
      urlMedia = media[0]['media-metadata'][2].url;
    }
    return `
    <li class="news-card__item" id=${id}>
      <article class="news-card__article">
        <div class="news-card__img-wrapper">
          <img class="news-card__img" src=${urlMedia} alt="news image" />
          <span class="news-card__category">${section}</span>
          <div class="news-card__btn-favorite ${
            checkFavoriteStorage(url) ? 'remove-from-fav' : ''
          }">
            <span>${
              checkFavoriteStorage(url)
                ? 'Remove from favorite'
                : 'Add to favorite'
            }</span>
            ${checkFavoriteStorage(url) ? activeHeartSvg : heartSvg}
            </div>
        </div>
        <div class="news-card__text">
          <h2 class="news-card__title">${textHiding(title, 60)}</h2>
          <p class="news-card__description">${textHiding(abstract, 150)}</p>
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
  });
  return markup;
};
const categoryNewsMarkup = newsArr => {
  const markup = newsArr.map(newsItem => {
    const { url, published_date, section, title, abstract, multimedia } =
      newsItem;
    let urlMedia = 'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg';
    if (multimedia !== null) {
      urlMedia = multimedia[2].url || urlMedia;
    }
    return `
    <li class="news-card__item">
      <article class="news-card__article">
        <div class="news-card__img-wrapper">
          <img class="news-card__img" src=${urlMedia} alt="news image" />
          <span class="news-card__category">${section}</span>
          <div class="news-card__btn-favorite ${
            checkFavoriteStorage(url) ? 'remove-from-fav' : ''
          }">
            <span>${
              checkFavoriteStorage(url)
                ? 'Remove from favorite'
                : 'Add to favorite'
            }</span>
            ${checkFavoriteStorage(url) ? activeHeartSvg : heartSvg}
            </div>
        </div>
        <div class="news-card__text">
          <h2 class="news-card__title">${textHiding(title, 60)}</h2>
          <p class="news-card__description">${textHiding(abstract, 150)}</p>
        </div>
        <div class="news-card__info">
          <span class="news-card__date">${format(
            new Date(published_date),
            'dd/MM/yyyy'
          )}</span>
          <a class="news-card__read-more" target="_blank" href=${url}>Read more</a>
        </div>
      </article>
      ${checkReadStorage(url) ? alreadyReadMarkup : ''}
    </li>
    `;
  });
  return markup;
};
const searchedNewsMarkup = newsArr => {
  const markup = newsArr.map(newsItem => {
    const {
      web_url,
      _id,
      pub_date,
      section_name,
      headline,
      abstract,
      multimedia,
    } = newsItem;

    let urlMedia = 'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg';
    if (multimedia.length) {
      urlMedia = `https://static01.nyt.com/${multimedia[1].url}`;
    }
    return `
    <li class="news-card__item" id=${_id}>
      <article class="news-card__article">
        <div class="news-card__img-wrapper">
          <img class="news-card__img" src=${urlMedia} alt="news image" />
          <span class="news-card__category">${section_name}</span>
          <div class="news-card__btn-favorite  ${
            checkFavoriteStorage(web_url) ? 'remove-from-fav' : ''
          }">
            <span>${
              checkFavoriteStorage(web_url)
                ? 'Remove from favorite'
                : 'Add to favorite'
            }</span>
            ${checkFavoriteStorage(web_url) ? activeHeartSvg : heartSvg}
            </div>
        </div>
        <div class="news-card__text">
        <h2 class="news-card__title">${textHiding(headline.main, 60)}</h2>
          <p class="news-card__description">${textHiding(abstract, 150)}</p>
        </div>
        <div class="news-card__info">
        <span class="news-card__date">${format(
          new Date(pub_date),
          'dd/MM/yyyy'
        )}</span>
          <a class="news-card__read-more" href=${web_url} target='blank'>Read more</a>
        </div>
      </article>
      ${checkReadStorage(web_url) ? alreadyReadMarkup : ''}
    </li>
    `;
  });
  return markup;
};
function pageNothingFound() {
  const nothing = document.querySelector('.nothing');
  const card = document.querySelector('.news-card__list');
  card.classList.add("none");
  nothing.classList.add('not-none');
}
function removePageNothingFound() {
  const nothing = document.querySelector('.nothing');
  const card = document.querySelector('.news-card__list');
  card.classList.remove("none");
  nothing.classList.remove("not-none");
}
function nothingFound() {
  const nothing = document.querySelector('.nothing');
  nothing.classList.add('not-none');
}
export {
  searchedNewsMarkup,
  popularNewsMarkup,
  categoryNewsMarkup,
  pageNothingFound,
  removePageNothingFound,
  nothingFound,
  heartSvg,
  activeHeartSvg,
  checkFavoriteStorage,
};
