import NEWS_API from './news-api';

import { searchedNewsMarkup } from './markup';
import renderNewsAndWeather from './render-news-and-weather';
const newsApi = new NEWS_API();

function openSearchBar() {
  searchBar.classList.add('visible');
  searchIcon.classList.add('hidden');
}
function openMenu() {
  mobileMenu.classList.remove('hidden');
}
function closeMenu() {
  mobileMenu.classList.add('hidden');
}
function darkMode() {
  if (this.checked) {
    body.classList.add('dark');
    localStorage.setItem('dark-theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('dark-theme', 'light');
  }
}
const searchIcon = document.querySelector('.open-search-button');
const searchBar = document.querySelector('.search-bar');
const burgerMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const checkbox = document.querySelector('.checkbox');
const mobileCheckbox = document.querySelector('.mobile-checkbox');
const body = document.querySelector('body');

const home = document.querySelector('#home');
const mobileHome = document.querySelector('#mobile-home');
const favourite = document.querySelector('#favourite');
const mobileFavourite = document.querySelector('#mobile-favourite');
const read = document.querySelector('#read');
const mobileRead = document.querySelector('#mobile-read');

const queryForm = document.querySelector('.search-bar');
let query = document.querySelector('.search-field');

/////////// revers для ПАГИНАТОРА

const paginPop = document.querySelector('.pagination--container');
const paginCat = document.querySelector('.pagination--container--categories');
const paginSearc = document.querySelector('.pagination-container-search');

let totalPages = 0;
const pg = document.getElementById('pagination-search');
const btnNextPg = document.querySelector('button.next-page-search');
const btnPrevPg = document.querySelector('button.prev-page-search');







/////////

searchIcon.addEventListener('click', openSearchBar);
burgerMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
checkbox.addEventListener('change', darkMode);
mobileCheckbox.addEventListener('change', darkMode);

if (window.location.pathname.indexOf('/favourite') >= 0) {
  home.classList.remove('current');
  mobileHome.classList.remove('mobile-current');
  read.classList.remove('current');
  mobileRead.classList.remove('mobile-current');
  favourite.classList.add('current');
  mobileFavourite.classList.add('mobile-current');
} else if (window.location.pathname.indexOf('/read') >= 0) {
  home.classList.remove('current');
  mobileHome.classList.remove('mobile-current');
  favourite.classList.remove('current');
  mobileFavourite.classList.remove('mobile-current');
  read.classList.add('current');
  mobileRead.classList.add('mobile-current');
} else if (window.location.pathname.indexOf('/index') >= 0) {
  favourite.classList.remove('current');
  mobileFavourite.classList.remove('mobile-current');
  read.classList.remove('current');
  mobileRead.classList.remove('mobile-current');
  home.classList.add('current');
  mobileHome.classList.add('mobile-current');
}

if (localStorage.getItem('dark-theme') === 'dark') {
  body.classList.add('dark');
  checkbox.checked = true;
  mobileCheckbox.checked = true;
} else {
  body.classList.remove('dark');
  checkbox.checked = false;
  mobileCheckbox.checked = false;
}

queryForm.addEventListener('submit', searchNews);


  








async function searchNews(evt) {
  evt.preventDefault();
  
let valuePageSearch = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 5,
  pageSerch: 0 ,
  perPage: 0,
  nextPage: 8,
  
  };


  let newsMarkupsArray = await newsApi
    .fetchNewsByQuerry(query.value,valuePageSearch.pageSerch)
    .then(response => {

// Формула что бы из APi брать количесвто новостей и делать максимальное количество
      // let PAGES = 0;
      // if (response.totalPages > 100) {
      //   PAGES = 100;
      // }
      // else {
      //   PAGES = Math.round(response.totalPages / 10);
      // }
      
      // const returEVO = {
      //   serchMarkup: searchedNewsMarkup(response.arrayOfNews),
      //   totalPage: PAGES,
      // };
      
      return searchedNewsMarkup(response.arrayOfNews);
    });
    
   
  
  if (paginSearc.classList.contains('pagination_search-hidden')) {
    paginPop.classList.add('pagination-hidden')
    paginCat.classList.add('pagination_categories-hidden')
    paginSearc.classList.remove('pagination_search-hidden')
  } 





 



///////////////////////////////////////////////////////////
  
 



const refs = {
  pagination: document.querySelector('.pagination_search'),
};

pagination();

pg.addEventListener('click', e =>  {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePageSearch.curPage = pageNumber;
    pagination(valuePageSearch);
     
    handleButtonLeft();
    handleButtonRight();
  if (e.target.dataset.page == '1') {

      valuePageSearch.pageSerch = 0;

      
    } else {
      let currentPage = Number(e.target.dataset.page);
       let renderPage = currentPage - 1;
        valuePageSearch.pageSerch = renderPage;
   

    }
    
  }
 
}

);




  





// DYNAMIC PAGINATION
function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePageSearch;

  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item-dot"><a class="pg-link-search">...</a></li>`;
  let countTruncate = 0; // use for ellipsis - truncate left side or right side

  // use for truncate two side
  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = '';
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? 'active' : '';

    // truncate
    if (totalPages >= 2 * range - 1) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        // truncate 2 side
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {
        // truncate left side or right side
        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      // not truncate
      render += renderPage(pos, active);
    }
  }

  if (renderTwoSide) {
    renderTwoSide =
      renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
    pg.innerHTML = renderTwoSide;
  } else {
    pg.innerHTML = render;
  }
}

function renderPage(index, active = '') {
  return ` <li class="pg-item-search ${active}" data-page="${index}">
        <a class="pg-link-search" href="#">${index}</a>
    </li>`;
}

document
  .querySelector('.pagination-container-search')
  .addEventListener('click', function (e) {
    
    handleButton(e.target);
   console.log("значение page которое надо отправить в новом fetch запросе",valuePageSearch.pageSerch)
  });

function handleButton(element) {
  if (element.classList.contains('prev-page-search')) {
    valuePageSearch.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
  
  } else if (element.classList.contains('next-page-search')) {
    valuePageSearch.curPage++;
    handleButtonRight();
    btnPrevPg.disabled = false;
   
  }
  pagination();
}
function handleButtonLeft() {
  
  if (valuePageSearch.curPage === 1) {
    
    btnPrevPg.disabled = true;
   
  } else {
    btnPrevPg.disabled = false;
   
  }
}
function handleButtonRight() {
  
  if (valuePageSearch.curPage === valuePageSearch.totalPages) {
   
    btnNextPg.disabled = true;
    
  } else {
    btnNextPg.disabled = false;
   
  }
}
refs.pagination.addEventListener('click', e => {
  
  const ele = e.target;

  if (
    (e.target.classList.contains('next-page-search') || e.target.classList.contains('btn-next-search'))&&
    (valuePageSearch.curPage  !== valuePageSearch.totalPages)
     
  ) {
    valuePageSearch.curPage += 1;
    valuePageSearch.pageSerch += 1;


  
    window.scrollTo(0, 0);
     
  }
  if (
    (e.target.classList.contains('prev-page-search') || e.target.classList.contains('btn-prev-search')) && 
    (valuePageSearch.curPage !== 1)
  ) {
    valuePageSearch.curPage -= 1;
    valuePageSearch.pageSerch -= 1;


    
    window.scrollTo(0, 0);
  }
window.scrollTo(0, 0);
})
// ///////////////////////////////////////////////


  renderNewsAndWeather(newsMarkupsArray);


}
 