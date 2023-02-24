import debounce from 'lodash.debounce';
import { categoryNewsMarkup, nothingFound } from './markup';
import renderNewsAndWeather from './render-news-and-weather';
const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw';




const pagin = document.querySelector('.pagination--container--categories');
const paginPop = document.querySelector('.pagination--container');
const pg = document.getElementById('pagination-categories');
const btnNextPg = document.querySelector('button.next-page-cat');
const btnPrevPg = document.querySelector('button.prev-page-cat');


const KEY_CATEGORIES ='categories';

import { save, load } from './favourite'

////////////////////////////
let totalPages = 0;
 

let valuePageCat = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 4,
  offset: 0,
  perPage: 0,
  nextPage: 8,
  
};


const refs = {
  pagination: document.querySelector('.pagin-categories'),
};




////////////////////////////////////////
export default async function getCategoryList() {
  const fetchApi = await fetch(
    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${KEY}`
  );
  const response = await fetchApi.json();
  const categoriesAray = response.results;
  return categoriesAray;
}

async function renderCategoryList() {
  const btnContainer = document.getElementById('buttons-container')
  btnContainer.innerHTML= ""
  let buttonsQuantity = 0;
  if (window.innerWidth < 768) {
    getCategoryList().then(categoryList => {
      renderMarkupFilter(categoryList, buttonsQuantity);
    });
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    buttonsQuantity = 4;
    getCategoryList().then(categoryList => {
      renderMarkupFilter(categoryList, buttonsQuantity);
    });
  }
  if (window.innerWidth >= 1280) {
    buttonsQuantity = 6;
    getCategoryList().then(categoryList => {
      renderMarkupFilter(categoryList, buttonsQuantity);
    });
  }
}

const renderMarkupFilter = (array, amount) => {
  const buttonsArray = array.slice(0, amount);
  const dropdownArray = array.slice(amount, -1);

  let readyMarkup = [];
  readyMarkup = buttonsArray.map(
    button =>
      `<button data-section=${button.section} class="btn">${button.display_name}</button>`
  );

  const svg = `<svg class = "show-more__icon" width="14" height="14">
    <g clip-path="url(#a)">
        <path d="M1.645 4 0 5.522 7 12l7-6.478L12.355 4 7 8.945 1.645 4Z" />
    </g>
    <defs>
        <clipPath id="a">
            <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
    </defs>
</svg>`;

  readyMarkup.push(`
    <div class="btn show-more">

  <div class="text-icon_block">
  <span class="show-more_btn">${
    window.innerWidth < 768 ? 'Categories' : 'Others'
  }</span>
    ${svg}
  </div>
  <div class="show-more__categories">
  ${dropdownArray
    .map(
      item =>
        `<button class="show-more__category" data-section=${item.section}>${item.display_name}</button>`
    )
    .join('')}
  </div>
</div>
  `);

  document
    .getElementById('buttons-container')
    .insertAdjacentHTML('beforeend', readyMarkup.join(''));
  const showMoreButton = document.querySelector('.show-more');
  const showMoreCategories = document.querySelector('.show-more__categories');
  const closeCategories = () => {
    if (showMoreCategories.classList.contains('show-more__categories--open')) {
      showMoreCategories.classList.remove('show-more__categories--open');
    }
  };
  showMoreButton.addEventListener('click', event => {
    event.stopPropagation();
    showMoreCategories.classList.toggle('show-more__categories--open');
  });
  document.addEventListener('click', closeCategories);
  onClickSection();
  onBtnFilterClick();
};

function onClickSection() {
  const buttons = document.querySelectorAll('.btn');
  let activeButton = null;
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      if (activeButton !== null) {
        activeButton.classList.remove('active');
      }
      button.classList.add('active');
      activeButton = button;
    });
  });
}

renderCategoryList();

window.addEventListener('resize', debounce(renderCategoryList, 300))

const handleResize = () => {
  let nameBtn = document.querySelector('.show-more_btn');
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    nameBtn.textContent = 'Categories';
  } else {
    nameBtn.textContent = 'Others';
  }
};

window.addEventListener('resize', handleResize);

const daysTag = document.querySelector('.days'),
  currentDate = document.querySelector('.current-date'),
  currentYear = document.querySelector('.current-year'),
  prevNextIcon = document.querySelectorAll('.calendar-icons span'),
  prevNextIconYear = document.querySelectorAll('.calendar-icons-year span');;

let date = new Date(),
  currDay = date.getDate(),
  currMonth = date.getMonth(),
  currYear = date.getFullYear();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('body'),
    modal: document.querySelector('[data-modal]'),
    input: document.querySelector('.calendar-input'),
    arrow: document.querySelector('.calendar__button-arrow'),
    calendarBtn: document.querySelector('.calendar__button-calendar'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('click', hideModals);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.input.classList.toggle('isActive');
    refs.arrow.classList.toggle('switched');
    refs.calendarBtn.classList.toggle('switchedColor');
  }

  function hideModals(evt) {
    let dataValue = document.getElementById('input-picker').value;
    if (evt.target.closest('.calendar-form')) {
      return;
    }
    if (refs.input.classList.contains('isActive')) {
      refs.modal.classList.add('is-hidden');
      refs.input.classList.remove('isActive');
      refs.arrow.classList.remove('switched');
      refs.calendarBtn.classList.remove('switchedColor');
      document.getElementById('input-picker').value = '';
      localStorage.removeItem('VALUE');
      localStorage.removeItem('date');
    }
  }
})();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const renderCalendar = number => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = '';
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear();
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]}`;
  currentYear.innerText = ` ${currYear}`;
  daysTag.innerHTML = liTag;

  const dayChange = document.querySelector('.days');

  dayChange.addEventListener('click', evt => {
    [...evt.currentTarget.children].forEach(item => {
      item.classList.remove('active');
    });

    evt.target.classList.add('active');
    let newValueDay = evt.target.textContent;
    if (evt.target.textContent.length > 10) {
      return;
    }
    let month = (currMonth + 1).toString();
    document.getElementById('input-picker').value =
      newValueDay.padStart(2, '0') +
      '/' +
      month.padStart(2, '0') +
      '/' +
      currYear;

    localStorage.setItem('VALUE', JSON.stringify(newValueDay));

    let inputDateValue = document.querySelector('.calendar-input').value;
    localStorage.setItem('date', JSON.stringify(inputDateValue));
    document.querySelector('[data-modal]').classList.add('is-hidden');
    document.querySelector('.calendar-input').classList.remove('isActive');
    document
      .querySelector('.calendar__button-arrow')
      .classList.remove('switched');
    document
      .querySelector('.calendar__button-calendar')
      .classList.remove('switchedColor');
  });
};

renderCalendar();
let findUl = document.querySelector('.days');

prevNextIcon.forEach(icon => {
  icon.addEventListener('click', () => {
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
    let test = JSON.parse(localStorage.getItem('VALUE'));
    let reachUl = daysTag.childNodes;

    reachUl.forEach(elem => {
      if (elem.textContent === test) {
        elem.classList.add('active');
      }
    });
  });
});

prevNextIconYear.forEach(icon => {
  icon.addEventListener('click', () => {
    currYear = icon.id === 'prev-year' ? currYear - 1 : currYear + 1;
    renderCalendar();
  });
});

localStorage.removeItem('VALUE');
localStorage.removeItem('date');

async function getNewsByCategory(category,perPage,nextPage) {
  try {
    const searchCategory = encodeURIComponent(category);

    const fetchApiByCategory = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/${searchCategory}.json?api-key=${KEY}&limit=30`
    );
    const response = await fetchApiByCategory.json();
    const newsByCategory = response.results;

    let totalPages = newsByCategory.length / 8;
    renderNewsAndWeather(categoryNewsMarkup(newsByCategory.slice(perPage, nextPage)));

  } catch (error) {
    console.log(error);
    nothingFound();
  }
}

function onBtnFilterClick() {
  const btnsFilter = document.querySelectorAll('.btn');
  btnsFilter.forEach(btnFilter => {
    btnFilter.addEventListener('click', event => {

      const category = event.target.dataset.section;

      if (pagin.classList.contains('pagination_categories-hidden')) {
        pagin.classList.toggle('pagination_categories-hidden')
        paginPop.classList.add('pagination-hidden')
      };

     

      
      save(KEY_CATEGORIES, category);
      getNewsByCategory(category,valuePageCat.perPage,valuePageCat.nextPage);
     

    });
  });
}






// /////////////////////////////////////////////////







pagination();

pg.addEventListener('click', e =>  {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePageCat.curPage = pageNumber;
    pagination(valuePageCat);
     
    handleButtonLeft();
    handleButtonRight();
  if (e.target.dataset.page == '1') {

      
      valuePageCat.offset = 0;
      valuePageCat.perPage = 0;
      valuePageCat.nextPage = 8;
     
      
    } else {
      let currentPage = Number(e.target.dataset.page);
      let renderPage = currentPage -= 1;
      valuePageCat.offset = renderPage * 9;
      valuePageCat.perPage = renderPage * 8;
      valuePageCat.nextPage = valuePageCat.perPage + 8;

    }
    
  }
 
}

);




  





// DYNAMIC PAGINATION
function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePageCat;

  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item-cat"><a class="pg-link-cat">...</a></li>`;
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
  return ` <li class="pg-item-cat ${active}" data-page="${index}">
        <a class="pg-link-cat" href="#">${index}</a>
    </li>`;
}

document
  .querySelector('.pagination--container--categories')
  .addEventListener('click', function (e) {
    
    handleButton(e.target);
   
  });

function handleButton(element) {
  if (element.classList.contains('prev-page-cat')) {
    valuePageCat.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
  
  } else if (element.classList.contains('next-page-cat')) {
    valuePageCat.curPage++;
    handleButtonRight();
    btnPrevPg.disabled = false;
   
  }
  pagination();
}
function handleButtonLeft() {
  
  if (valuePageCat.curPage === 1) {
    
    btnPrevPg.disabled = true;
   
  } else {
    btnPrevPg.disabled = false;
   
  }
}
function handleButtonRight() {
  
  if (valuePageCat.curPage === valuePageCat.totalPages) {
   
    btnNextPg.disabled = true;
    
  } else {
    btnNextPg.disabled = false;
   
  }
}
refs.pagination.addEventListener('click', e => {
  
  const ele = e.target;

  if (
    (e.target.classList.contains('next-page-cat') || e.target.classList.contains('btn-next-cat'))&&
    (valuePageCat.curPage  !== valuePageCat.totalPages)
     
  ) {
     valuePageCat.curPage += 1;
     valuePageCat.offset += 8;
     valuePageCat.perPage += 8;
    valuePageCat.nextPage += 8;
    window.scrollTo(0, 0);
     
  }
  if (
    (e.target.classList.contains('prev-page-cat') || e.target.classList.contains('btn-prev-cat')) && 
    (valuePageCat.curPage !== 1)
  ) {
    valuePageCat.curPage -= 1
    valuePageCat.offset -= 8;
    valuePageCat.perPage -= 8;
    valuePageCat.nextPage -= 8;
    window.scrollTo(0, 0);
  }

  getNewsByCategory(load(KEY_CATEGORIES),valuePageCat.perPage,valuePageCat.nextPage)
  console.log(valuePageCat)
})
