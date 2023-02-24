const pg = document.getElementById('pagination-categories');
const btnNextPg = document.querySelector('button.next-page-cat');
const btnPrevPg = document.querySelector('button.prev-page-cat');






const refs = {
  pagination: document.querySelector('.pagin-categories'),
};


// 

let valuePageCat = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 4,
  offset: 0,
  perPage: 0,
  nextPage: 8,
  
};





async function getNewsByCategory(category) {
  try {
    const searchCategory = encodeURIComponent(category);

    const fetchApiByCategory = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/${searchCategory}.json?api-key=${KEY}&limit=30`
    );
    const response = await fetchApiByCategory.json();
    const newsByCategory = response.results;
    console.log(newsByCategory);
    renderNewsAndWeather(categoryNewsMarkup(newsByCategory));
  } catch (error) {
    console.log(error);
  }
}






pagination();

pg.addEventListener('click', e =>  {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePageCat.curPage = pageNumber;
    pagination(valuePageCat);
     
    handleButtonLeft();
    handleButtonRight();
  if (e.target.dataset.page == '1') {

      
      valuePageCat.offset = 0;
      valuePageCat.perPage = 0;
      valuePageCat.nextPage = 8;
     
      
    } else {
      let currentPage = Number(e.target.dataset.page);
      let renderPage = currentPage -= 1;
      valuePageCat.offset = renderPage * 9;
      valuePageCat.perPage = renderPage * 8;
      valuePageCat.nextPage = valuePageCat.perPage + 8;

    }
    
  }
 
}

);




  





// DYNAMIC PAGINATION
function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePageCat;

  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item-cat"><a class="pg-link-cat">...</a></li>`;
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
  return ` <li class="pg-item-cat ${active}" data-page="${index}">
        <a class="pg-link-cat" href="#">${index}</a>
    </li>`;
}

document
  .querySelector('.pagination--container--categories')
  .addEventListener('click', function (e) {
    
    handleButton(e.target);
   
  });

function handleButton(element) {
  if (element.classList.contains('prev-page-cat')) {
    valuePageCat.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
  
  } else if (element.classList.contains('next-page-cat')) {
    valuePageCat.curPage++;
    handleButtonRight();
    btnPrevPg.disabled = false;
   
  }
  pagination();
}
function handleButtonLeft() {
  
  if (valuePageCat.curPage === 1) {
    
    btnPrevPg.disabled = true;
   
  } else {
    btnPrevPg.disabled = false;
   
  }
}
function handleButtonRight() {
  
  if (valuePageCat.curPage === valuePageCat.totalPages) {
   
    btnNextPg.disabled = true;
    
  } else {
    btnNextPg.disabled = false;
   
  }
}
refs.pagination.addEventListener('click', e => {
  
  const ele = e.target;

  if (
    (e.target.classList.contains('next-page-cat') || e.target.classList.contains('btn-next-cat'))&&
    (valuePageCat.curPage  !== valuePageCat.totalPages)
     
  ) {
     valuePageCat.curPage += 1;
     valuePageCat.offset += 8;
     valuePageCat.perPage += 8;
    valuePageCat.nextPage += 8;
    window.scrollTo(0, 0);
     
  }
  if (
    (e.target.classList.contains('prev-page-cat') || e.target.classList.contains('btn-prev-cat')) && 
    (valuePageCat.curPage !== 1)
  ) {
    valuePageCat.curPage -= 1
    valuePageCat.offset -= 8;
    valuePageCat.perPage -= 8;
    valuePageCat.nextPage -= 8;
    window.scrollTo(0, 0);
  }

  
  console.log(valuePageCat.curPage)
})
