import { format } from 'date-fns';
import { textHiding } from './news-text-hiding';

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
          <div class="news-card__btn-favorite">
            <span>Add to favorite</span>
            <svg class="news-card__btn-icon">
                <use href="./images/sprite.svg#heart"></use>
             </svg>
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
      urlMedia = multimedia[3].url || urlMedia;
    }
    return `
    <li class="news-card__item">
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
          <div class="news-card__btn-favorite">
            <span>Add to favorite</span>
            <svg class="news-card__btn-icon">
                <use href="./images/sprite.svg#heart"></use>
             </svg>
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
    </li>
    `;
  });
  return markup;
};
function pageNothingFound() {
  const sect = document.querySelector('.news-card');
  sect.innerHTML = `<div class="nothing">
   <h2 class = "nothing_title">We haven’t found news from this category</h2>
  <img
  srcset="
     ./images/image_1.jpg      900w,
     ./images/image_1@2x.jpg   708w,
     ./images/image_2.jpg      540w,
     ./images/image_2@2x.jpg   450w,
     ./images/image_3.jpg      354w,
     ./images/image_3@2x.jpg   270w
 "
 sizes="(min-width: 1200px) 900px,(min-width: 768px) 354px, 270px"
 src="./images/image_3@2x.jpg"
 alt="Nothing found"
 class="nothing_img"
/></div>`;
}

export {
  searchedNewsMarkup,
  popularNewsMarkup,
  categoryNewsMarkup,
  pageNothingFound,
};
