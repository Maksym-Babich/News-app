import './header';

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
