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
    // if (multimedia.length) {
    //   urlMedia = multimedia[0].url;
    // }
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

          <p class="news-card__description">${textHiding([abstract], 65)}</p>
        </div>
        <div class="news-card__info">

          <a class="news-card__read-more" href=${web_url}>Read more</a>
        </div>
      </article>
    </li>
    `;
  });
  return markup;
};
function pageNothingFound() {
  const sect = document.querySelector(".container");
  sect.innerHTML = `
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
/>`;
};

export { searchedNewsMarkup, popularNewsMarkup, pageNothingFound };

/* <h2 class="news-card__title">${textHiding(headline.main, 30)}</h2> */

// <span class="news-card__date">${format(
//   new Date(pub_date),
//   'dd/MM/yyyy'
// )}</span>
