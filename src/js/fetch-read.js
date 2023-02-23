import { loadRead } from './add-to-read';
const checkMark = `<svg width="18" height="18">
    <path
        d="M16.189 3.594a.6.6 0 0 0-.413.182L6.6 12.952 2.824 9.176a.6.6 0 1 0-.848.848l4.2 4.2a.6.6 0 0 0 .848 0l9.6-9.6a.6.6 0 0 0-.435-1.03Z"
         />
</svg>`;

const alreadyReadMarkup = `<div class='already-read'><div class='already-read__text'><span>Already read</span> ${checkMark}</div></div>`;

export function fetchRead() {
  const alreadyread = loadRead('read-news');
  if (alreadyread) {
    alreadyread.forEach(obj => {
      const card = document.getElementById(`${obj.id}`);
      card.insertAdjacentHTML('beforeend', alreadyReadMarkup);
    });
  }
}
