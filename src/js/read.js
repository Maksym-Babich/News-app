
// -- underline current menu item in header -- //
import './header';
const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');
if (window.location.pathname.indexOf('/favourite') === 0) {
    home.classList.remove('current');
    read.classList.remove('current');
    favourite.classList.add('current');
} else if (window.location.pathname.indexOf('/read') === 0) {
    home.classList.remove('current');
    favourite.classList.remove('current');
    read.classList.add('current');
} else {
    favourite.classList.remove('current');
    read.classList.remove('current');
    home.classList.add('current');
};

const checkbox = document.querySelector('.checkbox');
const mobileCheckbox = document.querySelector('.mobile-checkbox');
const body = document.querySelector('body');
checkbox.addEventListener('change', darkMode);
mobileCheckbox.addEventListener('change', darkMode);
function darkMode() {
  if (this.checked) {
      body.classList.add('dark');
      localStorage.setItem('dark-theme', 'dark');
  } else {
      body.classList.remove('dark');
      localStorage.setItem('dark-theme', 'light');
  }
};



const readByDateList = document.querySelector('.read-by-date-list');

const onHideButtonClick = function (event) {
  const hideBtn = event.target.closest('.hide-button');
  if (!hideBtn) {
    return;
  }
  const readByDateContainer = hideBtn.closest('.read-by-date-container');
  readByDateContainer.classList.toggle('list-hidden');
};

readByDateList.addEventListener('click', onHideButtonClick);

