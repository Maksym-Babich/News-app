!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=e.parcelRequire7309;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,a.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){t[e]=r},e.parcelRequire7309=a),a.register("9T6VY",(function(e,r){a("i8Q71");var t=a("7XbyU"),n=document.querySelector("#home"),c=document.querySelector("#favourite"),s=document.querySelector("#read");0===window.location.pathname.indexOf("/favourite.html")?(n.classList.remove("current"),s.classList.remove("current"),c.classList.add("current")):0===window.location.pathname.indexOf("/read.html")?(n.classList.remove("current"),c.classList.remove("current"),s.classList.add("current")):(c.classList.remove("current"),s.classList.remove("current"),n.classList.add("current"));var i=document.querySelector(".checkbox"),o=document.querySelector(".mobile-checkbox");function l(){this.checked?(body.classList.add("dark"),localStorage.setItem("dark-theme","dark")):(body.classList.remove("dark"),localStorage.setItem("dark-theme","light"))}i.addEventListener("change",l),o.addEventListener("change",l);var d=document.querySelector(".favorite__list");d.addEventListener("click",(function(e){var r=e.target.closest(".news-card__btn-favorite");if(!r)return;for(var t=r.closest(".news-card__item"),a=t.getAttribute("id"),n=0;n<u.length;n+=1)u[n].id!==a&&null!=u[n].id||u.splice(n,1);(function(e,r){try{var t=JSON.stringify(r);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}})(v,u),t.remove()}));var v="favorite-news",u=function(e){try{var r=localStorage.getItem(e);return null===r?void 0:JSON.parse(r)}catch(e){console.error(e.message)}}(v);if(null!=u){var f,m,_,g,h,w,p,y,b=!0,L=!1,S=void 0;try{for(var x,k=u[Symbol.iterator]();!(b=(x=k.next()).done);b=!0){var q=x.value,O=(m=void 0,_=void 0,g=void 0,h=void 0,w=void 0,p=void 0,y=void 0,m=(f=q).id,_=f.urlMedia,g=f.section,h=f.title,w=f.abstract,p=f.published_date,y=f.url,'\n    <li class="news-card__item card__favorite" id='.concat(m,'>\n      <article class="news-card__article">\n        <div class="news-card__img-wrapper">\n          <img class="news-card__img" src=').concat(_,' alt="news image" />\n          <span class="news-card__category">').concat(g,'</span>\n          <div class="news-card__btn-favorite remove-from-fav">\n            <span>Remove from favorite</span>\n           <svg class=favorite__svg id="liked" viewBox="0 0 32 32" width=16 height=16>\n            <path fill="#4b48da" style="fill:var(--color6, #4b48da)"\n                d="M9.333 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987a1.316 1.316 0 0 0 1.366 0c11.484-7.06 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6S16 8 16 8s-2.985-4-6.667-4z" />\n        </svg>\n            </div>\n        </div>\n        <div class="news-card__text">\n          <h2 class="news-card__title">').concat((0,t.textHiding)(h,30),'</h2>\n          <p class="news-card__description">').concat((0,t.textHiding)(w,65),'</p>\n        </div>\n        <div class="news-card__info">\n          <span class="news-card__date">').concat(p.replaceAll("-","/"),'</span>\n          <a class="news-card__read-more" href=').concat(y,">Read more</a>\n        </div>\n      </article>\n    </li>\n    "));d.insertAdjacentHTML("beforeend",O)}}catch(e){L=!0,S=e}finally{try{b||null==k.return||k.return()}finally{if(L)throw S}}}})),a("9T6VY")}();
//# sourceMappingURL=favourite.d1bc9aa8.js.map
