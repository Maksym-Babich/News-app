const pg = document.getElementById('pagination');
const btnNextPg = document.querySelector('button.next-page');
const btnPrevPg = document.querySelector('button.prev-page');
const newsList = document.querySelector('.list-news');
const btnNext = document.querySelector('.btn-next');
const btnPrew = document.querySelector('.btn-prev')

const currentPage = document.querySelector('.pg-item');


const refs = {
  pagination: document.querySelector('.pagin'),
};


// сюда прилетает hits c API
let totalPages = 13;

// отсюда забрать offset для fetch
export const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: totalPages,
  offset: 0,
};







pagination();

pg.addEventListener('click', e => {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePage.curPage = pageNumber;
    pagination(valuePage);
      
    handleButtonLeft();
    handleButtonRight();
    
    if (e.target.dataset.page == '1') {

      
      valuePage.offset = 0;
     
      
    } else {
      let currentPage = Number(e.target.dataset.page);
      let renderPage = currentPage -= 1;
      valuePage.offset = renderPage *= 9;
    }
    
    
  }
 
});

// DYNAMIC PAGINATION
function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePage;

  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item"><a class="pg-link">...</a></li>`;
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
  
  return ` <li class="pg-item ${active}" data-page="${index}">
        <a class="pg-link" href="#">${index}</a>
    </li>`;
  
  
}


document
  .querySelector('.pagination--container')
  .addEventListener('click', function (e) {
    
    handleButton(e.target);
   
  });

function handleButton(element) {
  if (element.classList.contains('prev-page')) {
    valuePage.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
   
  } else if (element.classList.contains('next-page')) {
    valuePage.curPage++;
    handleButtonRight();
    btnPrevPg.disabled = false;
    
  }
  pagination();
}
function handleButtonLeft() {
  
  if (valuePage.curPage === 1) {
    
    btnPrevPg.disabled = true;
   
  } else {
    btnPrevPg.disabled = false;
    
  }
}
function handleButtonRight() {
  
  if (valuePage.curPage === valuePage.totalPages) {
    
    btnNextPg.disabled = true;
   
  } else {
    btnNextPg.disabled = false;
    
  }
}
refs.pagination.addEventListener('click', e => {
  
  const ele = e.target;
  
   if (
    (e.target.classList.contains('next-page') ||
     e.target.classList.contains('btn-next'))&&
    (valuePage.curPage  !== valuePage.totalPages)
     
   ) {
     valuePage.curPage += 1;
     valuePage.offset += 9;
     
  }
  if (
    (e.target.classList.contains('prev-page') ||
      e.target.classList.contains('btn-prev')) && 
    (valuePage.curPage !== 1)
  ) {
    valuePage.curPage -= 1;
    valuePage.offset -= 9;
  }
  

}
)

