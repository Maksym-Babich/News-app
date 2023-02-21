import { loadRead } from './add-to-read';

export function fetchRead() {
  const alreadyread = loadRead('read-news');

  alreadyread.forEach(obj => {
    const card = document.querySelector(`#${obj.id}`);
    card.classList.add('already-read');
  });
}
