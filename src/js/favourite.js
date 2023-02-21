// -- underline current menu item in header -- //
import './header';
const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');
if (window.location.pathname.indexOf('/favourite.html') === 0) {
    home.classList.remove('current');
    read.classList.remove('current');
    favourite.classList.add('current');
} else if (window.location.pathname.indexOf('/read.html') === 0) {
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