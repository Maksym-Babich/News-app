var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire7309;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7309=a),a("bUb57");var o=a("3huUq"),r=a("b41dZ");async function s(){const e=await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw");return(await e.json()).results}const c=(e,t)=>{const n=e.slice(0,t),a=e.slice(t,-1);let s=[];s=n.map((e=>`<button data-section=${e.section} class="btn">${e.display_name}</button>`));s.push(`\n    <div class="btn show-more">\n\n  <div class="text-icon_block">\n  <span class="show-more_btn">${window.innerWidth<768?"Categories":"Others"}</span>\n    <svg class = "show-more__icon" width="14" height="14">\n    <g clip-path="url(#a)">\n        <path d="M1.645 4 0 5.522 7 12l7-6.478L12.355 4 7 8.945 1.645 4Z" />\n    </g>\n    <defs>\n        <clipPath id="a">\n            <path fill="#fff" d="M0 0h14v14H0z" />\n        </clipPath>\n    </defs>\n</svg>\n  </div>\n  <div class="show-more__categories">\n  ${a.map((e=>`<button class="show-more__category" data-section=${e.section}>${e.display_name}</button>`)).join("")}\n  </div>\n</div>\n  `),document.getElementById("buttons-container").insertAdjacentHTML("beforeend",s.join(""));const c=document.querySelector(".show-more"),i=document.querySelector(".show-more__categories");c.addEventListener("click",(e=>{e.stopPropagation(),i.classList.toggle("show-more__categories--open")})),document.addEventListener("click",(()=>{i.classList.contains("show-more__categories--open")&&i.classList.remove("show-more__categories--open")})),function(){const e=document.querySelectorAll(".btn");let t=null;e.forEach((e=>{e.addEventListener("click",(n=>{null!==t&&t.classList.remove("active"),e.classList.add("active"),t=e}))}))}(),document.querySelectorAll(".btn").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("show-more")||e.target.classList.contains("show-more_btn")||e.target.classList.contains("show-more__icon")||async function(e){try{const t=encodeURIComponent(e),n=await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${t}.json?api-key=A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw`),a=(await n.json()).results;console.log(a),(0,r.default)((0,o.categoryNewsMarkup)(a))}catch(e){console.log(e),(0,o.pageNothingFound)()}}(e.target.textContent.toLowerCase())}))}))};!async function(){let e=0;window.innerWidth<768&&s().then((t=>{c(t,e)})),window.innerWidth>=768&&window.innerWidth<1280&&(e=4,s().then((t=>{c(t,e)}))),window.innerWidth>=1280&&(e=6,s().then((t=>{c(t,e)})))}();window.addEventListener("resize",(()=>{let e=document.querySelector(".show-more_btn");const t=window.innerWidth;e.textContent=t<768?"Categories":"Others"}));const i=document.querySelector(".days"),l=document.querySelector(".current-date"),d=document.querySelectorAll(".calendar-icons span");let u=new Date,m=(u.getDate(),u.getMonth()),g=u.getFullYear();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hidden"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(t){document.getElementById("input-picker").value;if(t.target.closest(".calendar-form"))return;e.input.classList.contains("isActive")&&(e.modal.classList.add("is-hidden"),e.input.classList.remove("isActive"),e.arrow.classList.remove("switched"),e.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}))})();const p=["January","February","March","April","May","June","July","August","September","October","November","December"],v=e=>{let t=new Date(g,m,1).getDay(),n=new Date(g,m+1,0).getDate(),a=new Date(g,m,n).getDay(),o=new Date(g,m,0).getDate(),r="";for(let e=t;e>0;e--)r+=`<li class="inactive">${o-e+1}</li>`;for(let e=1;e<=n;e++){r+=`<li class="${e===u.getDate()&&m===(new Date).getMonth()&&g===(new Date).getFullYear()}">${e}</li>`}for(let e=a;e<6;e++)r+=`<li class="inactive">${e-a+1}</li>`;l.innerText=`${p[m]} ${g}`,i.innerHTML=r;document.querySelector(".days").addEventListener("click",(e=>{[...e.currentTarget.children].forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active");let t=e.target.textContent;if(e.target.textContent.length>10)return;let n=(m+1).toString();document.getElementById("input-picker").value=t.padStart(2,"0")+"/"+n.padStart(2,"0")+"/"+g,localStorage.setItem("VALUE",JSON.stringify(t));let a=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(a)),document.querySelector("[data-modal]").classList.add("is-hidden"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}))};v();document.querySelector(".days");d.forEach((e=>{e.addEventListener("click",(()=>{m="prev"===e.id?m-1:m+1,m<0||m>11?(u=new Date(g,m,(new Date).getDate()),g=u.getFullYear(),m=u.getMonth()):u=new Date,v();let t=JSON.parse(localStorage.getItem("VALUE"));i.childNodes.forEach((e=>{e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date");o=a("3huUq"),r=a("b41dZ");a("fKrXO");var f=a("3vCWw");r=a("b41dZ"),o=a("3huUq");a("4Bs1J");const w=document.getElementById("pagination"),h=document.querySelector("button.next-page"),y=document.querySelector("button.prev-page"),L=(document.querySelector(".list-news"),document.querySelector(".btn-next"),document.querySelector(".btn-prev"),document.querySelector(".pg-item"),{pagination:document.querySelector(".pagin")});const S={curPage:1,numLinksTwoSide:1,totalPages:13,offset:0};function b(){const{totalPages:e,curPage:t,numLinksTwoSide:n}=S,a=n+4;let o="",r="",s='<li class="pg-item"><a class="pg-link">...</a></li>',c=0;const i=t-n,l=t+n;let d="";for(let n=1;n<=e;n++)d=n===t?"active":"",e>=2*a-1?i>3&&l<e-3+1?n>=i&&n<=l&&(r+=_(n,d)):t<a&&n<=a||t>e-a&&n>=e-a+1||n===e||1===n?o+=_(n,d):(c++,1===c&&(o+=s)):o+=_(n,d);r?(r=_(1)+s+r+s+_(e),w.innerHTML=r):w.innerHTML=o}function _(e,t=""){return` <li class="pg-item ${t}" data-page="${e}">\n        <a class="pg-link" href="#">${e}</a>\n    </li>`}function q(){1===S.curPage?y.disabled=!0:y.disabled=!1}function E(){S.curPage===S.totalPages?h.disabled=!0:h.disabled=!1}b(),w.addEventListener("click",(e=>{if(e.target.dataset.page){const t=parseInt(e.target.dataset.page,10);if(S.curPage=t,b(),q(),E(),"1"==e.target.dataset.page)S.offset=0;else{let t=Number(e.target.dataset.page),n=t-=1;S.offset=n*=9}}})),document.querySelector(".pagination--container").addEventListener("click",(function(e){!function(e){e.classList.contains("prev-page")?(S.curPage--,q(),h.disabled=!1):e.classList.contains("next-page")&&(S.curPage++,E(),y.disabled=!1);b()}(e.target)})),L.pagination.addEventListener("click",(e=>{e.target;(e.target.classList.contains("next-page")||e.target.classList.contains("btn-next"))&&S.curPage!==S.totalPages&&(S.curPage+=1,S.offset+=9),(e.target.classList.contains("prev-page")||e.target.classList.contains("btn-prev"))&&1!==S.curPage&&(S.curPage-=1,S.offset-=9)})),a("mPsIJ"),a("bUb57"),a("bUb57");const k=document.querySelector("#home"),x=document.querySelector("#favourite"),A=document.querySelector("#read");0===window.location.pathname.indexOf("/favourite")?(k.classList.remove("current"),A.classList.remove("current"),x.classList.add("current")):0===window.location.pathname.indexOf("/read")?(k.classList.remove("current"),x.classList.remove("current"),A.classList.add("current")):(x.classList.remove("current"),A.classList.remove("current"),k.classList.add("current"));const I=document.querySelector(".checkbox"),D=document.querySelector(".mobile-checkbox"),C=document.querySelector("body");function P(){this.checked?(C.classList.add("dark"),localStorage.setItem("dark-theme","dark")):(C.classList.remove("dark"),localStorage.setItem("dark-theme","light"))}I.addEventListener("change",P),D.addEventListener("change",P);document.querySelector(".news-card__list").addEventListener("click",(function(e){const t=e.target.closest(".news-card__btn-favorite");if(!t)return;let n=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}})("favorite-news")||[];const a=t.closest(".news-card__item"),o=a.getAttribute("id"),r=a.querySelector(".news-card__img").getAttribute("src"),s=a.querySelector(".news-card__category").textContent,c=a.querySelector(".news-card__title").textContent,i=a.querySelector(".news-card__description").textContent,l=a.querySelector(".news-card__date").textContent,d=a.querySelector(".news-card__read-more").getAttribute("href"),u={id:o,urlMedia:r,section:s,title:c,abstract:i,published_date:l,url:d};n.some((e=>u.id===e.id))||(n.push(u),M("favorite-news",n));if(t.classList.contains("remove-from-fav")){t.textContent="Add to favorite";const e=n.filter((e=>u.id!==e.id));M("favorite-news",e)}t.classList.contains("remove-from-fav")||(t.textContent="Remove from favorite");t.classList.toggle("remove-from-fav")}));const M=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}};const N=new(0,f.default);document.addEventListener("DOMContentLoaded",async function(){try{const e=await N.popularNews();(0,r.default)((0,o.popularNewsMarkup)(e))}catch(e){console.error(e)}}());
//# sourceMappingURL=index.99c4e78b.js.map
