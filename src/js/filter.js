const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw';

export default async function getCategoryList() {
  const fetchApi = await fetch(
    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${KEY}`
  );
  const response = await fetchApi.json();
  const categoriesAray = response.results;
  return categoriesAray;
}

async function renderCategoryList() {
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
  const showMoreSvg = document.querySelector('.show-more__icon');
  const showMoreCategories = document.querySelector('.show-more__categories');
  const closeCategories = () => {
    if (showMoreCategories.classList.contains('show-more__categories--open')) {
      showMoreCategories.classList.remove('show-more__categories--open');
      showMoreButton.classList.remove('active');
      showMoreSvg.classList.remove('show-more__icon--active');
    }
  };
  showMoreButton.addEventListener('click', event => {
    event.stopPropagation();
    showMoreCategories.classList.toggle('show-more__categories--open');
  });
  document.addEventListener('click', closeCategories);
  onClickSection();
};

function onClickSection() {
  const buttons = document.querySelectorAll('.btn');
  const showMoreSvg = document.querySelector('.show-more__icon');
  let activeButton = null;
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      if (activeButton !== null) {
        activeButton.classList.remove('active');
        showMoreSvg.classList.remove('show-more__icon--active');
      }
      button.classList.add('active');
      if (button.classList.contains('show-more')) {
        showMoreSvg.classList.add('show-more__icon--active');
      }

      activeButton = button;
    });
    // window.addEventListener('click', e => activeButton.classList.remove('active') )
  });
}
renderCategoryList();

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
  prevNextIcon = document.querySelectorAll('.calendar-icons span');

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
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
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

localStorage.removeItem('VALUE');
localStorage.removeItem('date');
