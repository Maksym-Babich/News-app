const KEY = 'A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw'; 

export default async function getCategoryList() {
  const fetchApi = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${KEY}`);
  const response = await fetchApi.json();
  const  categoriesAray  = response.results;

//лишаю console.log щоб можна було подивитись що приходить в результаті роботи функції
 console.log(categoriesAray);    

return categoriesAray;
}
// лишаю виклик фунції щоб було видно як вона працює
getCategoryList()