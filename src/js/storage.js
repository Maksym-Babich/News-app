import './news-api';
const btnReedmoore =  document.querySelector('.news-card__read-more');
console.log(btnReedmoore);
btnReedmoore.addEventListener('click', onStorage);
function onStorage () {



// Проверяем, есть ли уже сохраненные карточки в localStorage
const savedCards = JSON.parse(localStorage.getItem('arrayOfNews')) || [];

// Проверяем, есть ли текущая карточка среди сохраненных
const isCardSaved = savedCards.some(savedCard => savedCard.id === cardData.id);

if (!isCardSaved) {
  // Если карточка еще не сохранена, добавляем ее в список сохраненных карточек
  savedCards.push(arrayOfNews);

  // Сохраняем обновленный список карточек в localStorage
  localStorage.setItem('savedCards', JSON.stringify(savedCards));
}
   };
// Получаем сохраненные карточки из localStorage
const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

// Используем сохраненные карточки для рендеринга списка карточек
savedCards.forEach(arrayOfNews => {
  // Рендерим карточку на основе данных из объекта cardData
  // ...
});
  

