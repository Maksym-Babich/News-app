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
  <span class="show-more_btn">${window.innerWidth < 768 ? 'Categories' : 'Others'}</span>
    ${svg}
  </div>

  <span class="show-more_btn">${
    window.innerWidth < 768 ? 'Categories' : 'Others'
  }</span>


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
