!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire7309;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequire7309=a),a.register("9T6VY",(function(e,t){a("i8Q71");var r=a("7XbyU"),n=a("1KhuP"),c=document.querySelector("#home"),o=document.querySelector("#favourite"),s=document.querySelector("#read");window.location.pathname.indexOf("/favourite.html")>=0?(c.classList.remove("current"),s.classList.remove("current"),o.classList.add("current")):window.location.pathname.indexOf("/read.html")>=0?(c.classList.remove("current"),o.classList.remove("current"),s.classList.add("current")):(o.classList.remove("current"),s.classList.remove("current"),c.classList.add("current"));var i=document.querySelector(".checkbox"),l=document.querySelector(".mobile-checkbox");function d(){this.checked?(body.classList.add("dark"),localStorage.setItem("dark-theme","dark")):(body.classList.remove("dark"),localStorage.setItem("dark-theme","light"))}i.addEventListener("change",d),l.addEventListener("change",d),document.querySelector("main").classList.add("favorite_padding");var u=document.querySelector(".favorite__list");u.addEventListener("click",(function(e){var t=e.target.closest(".news-card__btn-favorite");if(!t)return;for(var r=t.closest(".news-card__item"),a=r.querySelector(".news-card__read-more").getAttribute("href"),c=0;c<_.length;c+=1)_[c].url===a&&_.splice(c,1);(function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}})(v,_),r.remove(),(null==_||0===_.length)&&(0,n.nothingFound)()}));var v="favorite-news",f="read-news",g="<div class='already-read'><div class='already-read__text'><span>Already read</span> ".concat('<svg width="18" height="18">\n    <path\n        d="M16.189 3.594a.6.6 0 0 0-.413.182L6.6 12.952 2.824 9.176a.6.6 0 1 0-.848.848l4.2 4.2a.6.6 0 0 0 .848 0l9.6-9.6a.6.6 0 0 0-.435-1.03Z"\n         />\n</svg>',"</div></div>"),_=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}}(v);if(null!=_&&0!==_.length){var m,h,w,p,y,S,b,x,L=!0,q=!1,C=void 0;try{for(var k,O=_[Symbol.iterator]();!(L=(k=O.next()).done);L=!0){var A=k.value,M=(h=void 0,w=void 0,p=void 0,y=void 0,S=void 0,b=void 0,x=void 0,h=(m=A).id,w=m.urlMedia,p=m.section,y=m.title,S=m.abstract,b=m.published_date,x=m.url,'\n    <li class="news-card__item card__favorite" id='.concat(h,'>\n      <article class="news-card__article">\n        <div class="news-card__img-wrapper">\n          <img class="news-card__img" src=').concat(w,' alt="news image" />\n          <span class="news-card__category">').concat(p,'</span>\n          <div class="news-card__btn-favorite remove-from-fav">\n            <span>Remove from favorite</span>\n           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">\n<path d="M3.66536 0C1.8247 0 0.332031 1.47733 0.332031 3.3C0.332031 4.77133 0.915365 8.26333 6.65736 11.7933C6.76022 11.8559 6.8783 11.889 6.9987 11.889C7.1191 11.889 7.23718 11.8559 7.34003 11.7933C13.082 8.26333 13.6654 4.77133 13.6654 3.3C13.6654 1.47733 12.1727 0 10.332 0C8.49136 0 6.9987 2 6.9987 2C6.9987 2 5.50603 0 3.66536 0Z" fill="#4B48DA"/>\n</svg>\n            </div>\n        </div>\n        <div class="news-card__text">\n          <h2 class="news-card__title">').concat((0,r.textHiding)(y,30),'</h2>\n          <p class="news-card__description">').concat((0,r.textHiding)(S,65),'</p>\n        </div>\n        <div class="news-card__info">\n          <span class="news-card__date">').concat(b.replaceAll("-","/"),'</span>\n          <a class="news-card__read-more" href=').concat(x," target='blank'>Read more</a>\n        </div>\n      </article>\n        ").concat(function(e){var t=localStorage.getItem("read-news");if(t)return JSON.parse(t).find((function(t){return t.url===e}))}(x)?g:"","\n    </li>\n    "));u.insertAdjacentHTML("beforeend",M)}}catch(e){q=!0,C=e}finally{try{L||null==O.return||O.return()}finally{if(q)throw C}}u.addEventListener("click",(function(e){var t=e.target.closest(".news-card__read-more");if(!t)return;var r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}}(f)||[],a=t.closest(".news-card__item"),n=a.querySelector(".news-card__img").getAttribute("src"),c=a.querySelector(".news-card__category").textContent,o=a.querySelector(".news-card__title").textContent,s=a.querySelector(".news-card__description").textContent,i=a.querySelector(".news-card__date").textContent,l=a.querySelector(".news-card__read-more").getAttribute("href"),d=new Date,u=String(d.getDate()).padStart(2,"0"),v=String(d.getMonth()+1).padStart(2,"0"),_=d.getFullYear(),m={urlMedia:n,section:c,title:o,abstract:s,published_date:i,url:l,dateOfRead:v+"/"+u+"/"+_};r.some((function(e){return m.url===e.url}))||(r.push(m),function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}(f,r));a.insertAdjacentHTML("beforeend",g)}))}else(0,n.nothingFound)()})),a("9T6VY")}();
//# sourceMappingURL=favourite.17914b01.js.map
