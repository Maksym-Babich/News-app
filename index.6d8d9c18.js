!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7309;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire7309=o);var a=o("bpxeT"),c=o("2TvXO");o("i8Q71");a=o("bpxeT");var i=o("8nrFW"),s=(c=o("2TvXO"),"A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw");function l(){return u.apply(this,arguments)}function u(){return(u=e(a)(e(c).mark((function t(){var n,r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=".concat(s));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,o=r.results,e.abrupt("return",o);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=e(a)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,window.innerWidth<768&&l().then((function(e){f(e,n)})),window.innerWidth>=768&&window.innerWidth<1280&&(n=4,l().then((function(e){f(e,n)}))),window.innerWidth>=1280&&(n=6,l().then((function(e){f(e,n)})));case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var f=function(e,t){var n=e.slice(0,t),r=e.slice(t,-1),o=[];(o=n.map((function(e){return"<button data-section=".concat(e.section,' class="btn">').concat(e.display_name,"</button>")}))).push('\n    <div class="btn show-more">\n\n  <div class="text-icon_block">\n  <span class="show-more_btn">'.concat(window.innerWidth<768?"Categories":"Others","</span>\n    ").concat('<svg class = "show-more__icon" width="14" height="14">\n    <g clip-path="url(#a)">\n        <path d="M1.645 4 0 5.522 7 12l7-6.478L12.355 4 7 8.945 1.645 4Z" />\n    </g>\n    <defs>\n        <clipPath id="a">\n            <path fill="#fff" d="M0 0h14v14H0z" />\n        </clipPath>\n    </defs>\n</svg>','\n  </div>\n  <div class="show-more__categories">\n  ').concat(r.map((function(e){return'<button class="show-more__category" data-section='.concat(e.section,">").concat(e.display_name,"</button>")})).join(""),"\n  </div>\n</div>\n  ")),document.getElementById("buttons-container").insertAdjacentHTML("beforeend",o.join(""));var a,c,i=document.querySelector(".show-more"),s=document.querySelector(".show-more__categories");i.addEventListener("click",(function(e){e.stopPropagation(),s.classList.toggle("show-more__categories--open")})),document.addEventListener("click",(function(){s.classList.contains("show-more__categories--open")&&s.classList.remove("show-more__categories--open")})),a=document.querySelectorAll(".btn"),c=null,a.forEach((function(e){e.addEventListener("click",(function(t){null!==c&&c.classList.remove("active"),e.classList.add("active"),c=e}))}))};!function(){d.apply(this,arguments)}();window.addEventListener("resize",(function(){var e=document.querySelector(".show-more_btn"),t=window.innerWidth;e.textContent=t<768?"Categories":"Others"}));var v,m=document.querySelector(".days"),p=document.querySelector(".current-date"),h=document.querySelectorAll(".calendar-icons span"),g=new Date,w=(g.getDate(),g.getMonth()),y=g.getFullYear();(v={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")}).openModalBtn.addEventListener("click",(function(){v.modal.classList.toggle("is-hidden"),v.input.classList.toggle("isActive"),v.arrow.classList.toggle("switched"),v.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(e){document.getElementById("input-picker").value,e.target.closest(".calendar-form")||v.input.classList.contains("isActive")&&(v.modal.classList.add("is-hidden"),v.input.classList.remove("isActive"),v.arrow.classList.remove("switched"),v.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}));var _=["January","February","March","April","May","June","July","August","September","October","November","December"],S=function(t){for(var n=new Date(y,w,1).getDay(),r=new Date(y,w+1,0).getDate(),o=new Date(y,w,r).getDay(),a=new Date(y,w,0).getDate(),c="",s=n;s>0;s--)c+='<li class="inactive">'.concat(a-s+1,"</li>");for(var l=1;l<=r;l++){var u=l===g.getDate()&&w===(new Date).getMonth()&&y===(new Date).getFullYear();c+='<li class="'.concat(u,'">').concat(l,"</li>")}for(var d=o;d<6;d++)c+='<li class="inactive">'.concat(d-o+1,"</li>");p.innerText="".concat(_[w]," ").concat(y),m.innerHTML=c,document.querySelector(".days").addEventListener("click",(function(t){e(i)(t.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active");var n=t.target.textContent;if(!(t.target.textContent.length>10)){var r=(w+1).toString();document.getElementById("input-picker").value=n.padStart(2,"0")+"/"+r.padStart(2,"0")+"/"+y,localStorage.setItem("VALUE",JSON.stringify(n));var o=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(o)),document.querySelector("[data-modal]").classList.add("is-hidden"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}}))};S();document.querySelector(".days");h.forEach((function(e){e.addEventListener("click",(function(){(w="prev"===e.id?w-1:w+1)<0||w>11?(g=new Date(y,w,(new Date).getDate()),y=g.getFullYear(),w=g.getMonth()):g=new Date,S();var t=JSON.parse(localStorage.getItem("VALUE"));m.childNodes.forEach((function(e){e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date");var L=o("1KhuP"),b=o("0Vwwd"),q=o("2a0iR"),x=o("779U1");b=o("0Vwwd"),L=o("1KhuP");o("7XbyU"),o("i8Q71");var E="favorite-news";document.querySelector("news-card__list").addEventListener("click",(function(e){var t=e.target.closest(".news-card__btn-favorite");if(!t)return;var n=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}}(E)||[],r=t.closest(".news-card__item"),o=r.getAttribute("id"),a=r.querySelector(".news-card__img").getAttribute("src"),c=r.querySelector(".news-card__category").textContent,i=r.querySelector(".news-card__title").textContent,s=r.querySelector(".news-card__description").textContent,l=r.querySelector(".news-card__date").textContent,u=r.querySelector(".news-card__read-more").getAttribute("href"),d={id:o,urlMedia:a,section:c,title:i,abstract:s,published_date:l,url:u};n.some((function(e){return d.id===e.id}))||(n.push(d),k(E,n));if(t.classList.contains("remove-from-fav")){t.textContent="Add to favorite";var f=n.filter((function(e){return d.id!==e.id}));k(E,f)}t.classList.contains("remove-from-fav")||(t.textContent="Remove from favorite");t.classList.toggle("remove-from-fav")}));var k=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}};var A=new(0,q.default),D=new(0,x.default);function M(){return(M=e(a)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.popularNews();case 3:n=e.sent,(0,b.default)((0,L.popularNewsMarkup)(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function C(){return(C=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A.latitude=n.coords.latitude,A.longitude=n.coords.longitude,e.abrupt("return",A.fetchWidthLocation().then((function(e){A.createWeatherMarkup(e)})));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}navigator.geolocation.getCurrentPosition((function(e){return C.apply(this,arguments)}),(function(){A.standartFetch().then((function(e){return A.createWeatherMarkup(e)}))})),document.addEventListener("DOMContentLoaded",function(){return M.apply(this,arguments)}())}();
//# sourceMappingURL=index.6d8d9c18.js.map
