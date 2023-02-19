const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw'; 

export default async function getCategoryList() {
  const fetchApi = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${KEY}`);
  const response = await fetchApi.json();
  const  categoriesAray  = response.results;
  
    return categoriesAray;
}

renderCategoryList()

async function renderCategoryList() {
    let buttonsQuantity = 0;
    // мобілка
    if (window.innerWidth < 768) {
        getCategoryList().then(categoryList => { renderMarkupFilter(categoryList, buttonsQuantity)})
    }
    // планшет
     if (window.innerWidth >= 768 && window.innerWidth < 1280) {
         quantityButton = 4;
        getCategoryList().then(categoryList => { renderMarkupFilter(categoryList, buttonsQuantity) })
    }
    // десктоп 
    if (window.innerWidth >= 1280) {
        quantityButton = 6;
        getCategoryList().then(categoryList => { renderMarkupFilter(categoryList, buttonsQuantity)})
    }
}