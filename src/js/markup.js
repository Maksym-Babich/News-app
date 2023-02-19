import { textHiding } from './news-text-hiding';

const getMarkup = newsArr => {
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
          <div class="news-card__btn-favorite">
            <span>Add to favorite</span>
            <svg class="news-card__btn-icon">
                <use href="./images/sprite.svg#heart"></use>
             </svg>
            </div>
        </div>
        <div class="news-card__text">
          <h2 class="news-card__title">${textHiding(title, 65)}</h2>
          <p class="news-card__description">${textHiding(abstract, 120)}</p>
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
  });
  return markup.join('');
};

export { getMarkup };
