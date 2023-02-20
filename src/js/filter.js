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
  readyMarkup.push(`
    <div class="btn show-more">
  <span class="show-more_btn">Others</span>
  
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
  document
    .querySelector('.show-more')
    .addEventListener('click', () =>
      document
        .querySelector('.show-more__categories')
        .classList.toggle('show-more__categories--open')
    );
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
  });
}
renderCategoryList();
