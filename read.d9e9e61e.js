!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire7309;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequire7309=a);var n="read-news",c=document.querySelectorAll(".news-card__list"),o="<div class='already-read'><div class='already-read__text'><span>Already read</span> ".concat('<svg width="18" height="18">\n    <path\n        d="M16.189 3.594a.6.6 0 0 0-.413.182L6.6 12.952 2.824 9.176a.6.6 0 1 0-.848.848l4.2 4.2a.6.6 0 0 0 .848 0l9.6-9.6a.6.6 0 0 0-.435-1.03Z"\n         />\n</svg>',"</div></div>"),s=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}};function i(e){var t=e.target.closest(".news-card__read-more");if(t){var r=s(n)||[],a=t.closest(".news-card__item"),c=a.querySelector(".news-card__img").getAttribute("src"),i=a.querySelector(".news-card__category").textContent,l=a.querySelector(".news-card__title").textContent,d=a.querySelector(".news-card__description").textContent,u=a.querySelector(".news-card__date").textContent,v=a.querySelector(".news-card__read-more").getAttribute("href"),f=new Date,_=String(f.getDate()).padStart(2,"0"),g={urlMedia:c,section:i,title:l,abstract:d,published_date:u,url:v,dateOfRead:String(f.getMonth()+1).padStart(2,"0")+"/"+_+"/"+f.getFullYear()};r.some((function(e){return g.url===e.url}))||(r.push(g),function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}(n,r)),a.insertAdjacentHTML("beforeend",o)}}c.forEach((function(e){e.addEventListener("click",i)})),a("i8Q71");var l=a("1KhuP"),d=a("7XbyU"),u=(l=a("1KhuP"),document.querySelector(".read-by-date-list")),v=document.querySelector("#home"),f=document.querySelector("#favourite"),_=document.querySelector("#read");window.location.pathname.indexOf("/favourite")>=0?(v.classList.remove("current"),_.classList.remove("current"),f.classList.add("current")):window.location.pathname.indexOf("/read")>=0?(v.classList.remove("current"),f.classList.remove("current"),_.classList.add("current")):(f.classList.remove("current"),_.classList.remove("current"),v.classList.add("current"));var g=document.querySelector(".checkbox"),m=document.querySelector(".mobile-checkbox"),h=document.querySelector("body");function y(){this.checked?(h.classList.add("dark"),localStorage.setItem("dark-theme","dark")):(h.classList.remove("dark"),localStorage.setItem("dark-theme","light"))}g.addEventListener("change",y),m.addEventListener("change",y);document.querySelector(".read-by-date-list").addEventListener("click",(function(e){var t=e.target.closest(".hide-button");t&&t.closest(".read-by-date-container").classList.toggle("list-hidden")}));var p=s("read-news");if(p){var w=[],S=!0,b=!1,L=void 0;try{for(var q,x=p[Symbol.iterator]();!(S=(q=x.next()).done);S=!0){var k=q.value;w.includes(k.dateOfRead)||w.push(k.dateOfRead)}}catch(e){b=!0,L=e}finally{try{S||null==x.return||x.return()}finally{if(b)throw L}}var A=w.map((function(e){return'<li class="read-by-date-container">\n      <div class="date-wrapper">\n        <button class="hide-button" type="button">\n          <p class="date-of-read">'.concat(e,"</p>\n          ").concat('\n  <svg width="14" height="9" class="hide-button__icon">\n    <g clip-path="url(#a)">\n      <path d="M1.645 11 0 9.478 7 3l7 6.478L12.355 11 7 6.055 1.645 11Z" />\n    </g>\n    <defs>\n      <clipPath id="a">\n        <path fill="#fff" d="M0 0h14v14H0z" />\n      </clipPath>\n    </defs>\n  </svg>\n','\n        </button>\n      </div>\n      <ul class="news-card__list"></ul>\n    </li>')}));u.innerHTML=A.reverse().join(""),document.querySelectorAll(".news-card__list").forEach((function(e){var t=!0,r=!1,a=void 0;try{for(var n,c=p[Symbol.iterator]();!(t=(n=c.next()).done);t=!0){var o=n.value;if(o.dateOfRead===e.closest(".read-by-date-container").querySelector(".date-of-read").textContent){var s='\n    <li class="news-card__item" >\n      <article class="news-card__article">\n        <div class="news-card__img-wrapper">\n          <img class="news-card__img" src='.concat(o.urlMedia,' alt="news image" />\n          <span class="news-card__category">').concat(o.section,'</span>\n          <div class="news-card__btn-favorite ').concat((0,l.checkFavoriteStorage)(o.url)?"remove-from-fav":"",'">\n            <span>').concat((0,l.checkFavoriteStorage)(o.url)?"Remove from favorite":"Add to favorite","</span>\n            ").concat((0,l.checkFavoriteStorage)(o.url)?l.activeHeartSvg:l.heartSvg,'\n            </div>\n        </div>\n        <div class="news-card__text">\n          <h2 class="news-card__title">').concat((0,d.textHiding)(o.title,60),'</h2>\n          <p class="news-card__description">').concat((0,d.textHiding)(o.abstract,150),'</p>\n        </div>\n        <div class="news-card__info">\n          <span class="news-card__date">').concat(o.published_date.replaceAll("-","/"),'</span>\n          <a class="news-card__read-more" href=').concat(o.url," target='blank'>Read more</a>\n        </div>\n      </article>\n    </li>\n    ");e.insertAdjacentHTML("beforeend",s)}}}catch(e){r=!0,a=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw a}}}))}else(0,l.nothingFound)();var M="favorite-news",O=document.querySelector(".read-by-date-list"),C=function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}};O.addEventListener("click",(function(e){var t=e.target.closest(".news-card__btn-favorite");if(!t)return;var r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}}(M)||[],a=t.closest(".news-card__item"),n=a.getAttribute("id"),c=a.querySelector(".news-card__img").getAttribute("src"),o=a.querySelector(".news-card__category").textContent,s=a.querySelector(".news-card__title").textContent,i=a.querySelector(".news-card__description").textContent,d=a.querySelector(".news-card__date").textContent,u=a.querySelector(".news-card__read-more").getAttribute("href"),v={id:n,urlMedia:c,section:o,title:s,abstract:i,published_date:d,url:u};r.some((function(e){return v.url===e.url}))||(r.push(v),C(M,r));if(t.classList.contains("remove-from-fav")){t.innerHTML="<span>Add to favorite</span>".concat(l.heartSvg);var f=r.filter((function(e){return v.url!==e.url}));C(M,f)}t.classList.contains("remove-from-fav")||(t.innerHTML="<span>Remove from favorite</span>".concat(l.activeHeartSvg));t.classList.toggle("remove-from-fav")}))}();
//# sourceMappingURL=read.d9e9e61e.js.map