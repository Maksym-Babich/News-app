function e(e,t){if(e.length>t){let r=e.trim().substring(0,t),n=r.lastIndexOf(" ");return r.substring(0,n)+"..."}return e}const t=document.querySelector(".favorite__list");t.innerHTML="";const r=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}},n=r("favorite-news");for(const e of n){const r=s(e);t.insertAdjacentHTML("beforeend",r)}function s({id:t,urlMedia:r,section:n,title:s,abstract:a,published_date:c,url:i}){return`\n    <li class="news-card__item" id=${t}>\n      <article class="news-card__article">\n        <div class="news-card__img-wrapper">\n          <img class="news-card__img" src=${r} alt="news image" />\n          <span class="news-card__category">${n}</span>\n          <div class="news-card__btn-favorite remove-from-fav">\n            <span>Remove from favorite</span>\n            <svg class="news-card__btn-icon">\n                <use href="./images/sprite.svg#heart"></use>\n             </svg>\n            </div>\n        </div>\n        <div class="news-card__text">\n          <h2 class="news-card__title">${e(s,30)}</h2>\n          <p class="news-card__description">${e(a,65)}</p>\n        </div>\n        <div class="news-card__info">\n          <span class="news-card__date">${c.replaceAll("-","/")}</span>\n          <a class="news-card__read-more" href=${i}>Read more</a>\n        </div>\n      </article>\n    </li>\n    `}t.addEventListener("click",(function(e){const n=e.target.closest(".news-card__btn-favorite");if(!n)return;let s=r("favorite-news");const a=n.closest(".news-card__item"),c=a.getAttribute("id"),i=a.querySelector(".news-card__img").getAttribute("src"),o=a.querySelector(".news-card__category").textContent,d=a.querySelector(".news-card__title").textContent,l=a.querySelector(".news-card__description").textContent,_=a.querySelector(".news-card__date").textContent,u=a.querySelector(".news-card__read-more").getAttribute("href"),f={id:c,urlMedia:i,section:o,title:d,abstract:l,published_date:_,url:u};if(s.some((e=>f.id===e.id))){((e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}})("favorite-news",s.filter((e=>f.id===e.id))),t.removeChild(a)}}));
//# sourceMappingURL=favourite.6b94297e.js.map
