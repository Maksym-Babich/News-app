!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire7309;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire7309=r);var o=r("bpxeT"),c=r("2TvXO");r("i8Q71");o=r("bpxeT");var i,s=r("8nrFW"),l=(c=r("2TvXO"),{});Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,p=/^0o[0-7]+$/i,f=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,y=v||m||Function("return this")(),w=Object.prototype.toString,h=Math.max,b=Math.min,S=function(){return y.Date.now()};function L(t){var n=void 0===t?"undefined":e(l)(t);return!!t&&("object"==n||"function"==n)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==w.call(t)}(t))return NaN;if(L(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=L(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var a=g.test(t);return a||p.test(t)?f(t.slice(2),a?2:8):d.test(t)?NaN:+t}i=function(e,t,n){var a,r,o,c,i,s,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=a,o=r;return a=r=void 0,l=t,c=e.apply(o,n)}function f(e){return l=e,i=setTimeout(m,t),u?p(e):c}function v(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=o}function m(){var e=S();if(v(e))return y(e);i=setTimeout(m,function(e){var n=t-(e-s);return d?b(n,o-(e-l)):n}(e))}function y(e){return i=void 0,g&&a?p(e):(a=r=void 0,c)}function w(){var e=S(),n=v(e);if(a=arguments,r=this,s=e,n){if(void 0===i)return f(s);if(d)return i=setTimeout(m,t),p(s)}return void 0===i&&(i=setTimeout(m,t)),c}return t=_(t)||0,L(n)&&(u=!!n.leading,o=(d="maxWait"in n)?h(_(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==i&&clearTimeout(i),l=0,a=s=r=i=void 0},w.flush=function(){return void 0===i?c:y(S())},w};var P=r("1KhuP"),x=r("0Vwwd"),q=(P=r("1KhuP"),"favorite-news");document.querySelector(".news-card__list").addEventListener("click",(function(e){var t=e.target.closest(".news-card__btn-favorite");if(!t)return;var n=k(q)||[],a=t.closest(".news-card__item"),r=a.getAttribute("id"),o=a.querySelector(".news-card__img").getAttribute("src"),c=a.querySelector(".news-card__category").textContent,i=a.querySelector(".news-card__title").textContent,s=a.querySelector(".news-card__description").textContent,l=a.querySelector(".news-card__date").textContent,u=a.querySelector(".news-card__read-more").getAttribute("href"),d={id:r,urlMedia:o,section:c,title:i,abstract:s,published_date:l,url:u};n.some((function(e){return d.url===e.url}))||(n.push(d),E(q,n));if(t.classList.contains("remove-from-fav")){t.innerHTML="<span>Add to favorite</span>".concat(P.heartSvg);var g=n.filter((function(e){return d.url!==e.url}));E(q,g)}t.classList.contains("remove-from-fav")||(t.innerHTML="<span>Remove from favorite</span>".concat(P.activeHeartSvg));t.classList.toggle("remove-from-fav")}));var E=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},k=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}};var T="A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw",M=document.querySelector(".pagination--container--categories"),A=document.querySelector(".pagination--container"),O=document.getElementById("pagination-categories"),D=document.querySelector("button.next-page-cat"),I=document.querySelector("button.prev-page-cat"),N="categories",C={curPage:1,numLinksTwoSide:1,totalPages:4,offset:0,perPage:0,nextPage:8},j={pagination:document.querySelector(".pagin-categories")};function B(){return H.apply(this,arguments)}function H(){return(H=e(o)(e(c).mark((function t(){var n,a,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=".concat(T));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.results,e.abrupt("return",r);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function J(){return F.apply(this,arguments)}function F(){return(F=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById("buttons-container").innerHTML="",n=0,window.innerWidth<768&&B().then((function(e){U(e,n)})),window.innerWidth>=768&&window.innerWidth<1280&&(n=4,B().then((function(e){U(e,n)}))),window.innerWidth>=1280&&(n=6,B().then((function(e){U(e,n)})));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var U=function(e,t){var n=e.slice(0,t),a=e.slice(t,-1),r=[];(r=n.map((function(e){return"<button data-section=".concat(e.section,' class="btn">').concat(e.display_name,"</button>")}))).push('\n    <div class="btn show-more">\n\n  <div class="text-icon_block">\n  <span class="show-more_btn">'.concat(window.innerWidth<768?"Categories":"Others","</span>\n    ").concat('<svg class = "show-more__icon" width="14" height="14">\n    <g clip-path="url(#a)">\n        <path d="M1.645 4 0 5.522 7 12l7-6.478L12.355 4 7 8.945 1.645 4Z" />\n    </g>\n    <defs>\n        <clipPath id="a">\n            <path fill="#fff" d="M0 0h14v14H0z" />\n        </clipPath>\n    </defs>\n</svg>','\n  </div>\n  <div class="show-more__categories">\n  ').concat(a.map((function(e){return'<button class="show-more__category" data-section='.concat(e.section,">").concat(e.display_name,"</button>")})).join(""),"\n  </div>\n</div>\n  ")),document.getElementById("buttons-container").insertAdjacentHTML("beforeend",r.join(""));var o,c,i=document.querySelector(".show-more"),s=document.querySelector(".show-more__categories");i.addEventListener("click",(function(e){e.stopPropagation(),s.classList.toggle("show-more__categories--open")})),document.addEventListener("click",(function(){s.classList.contains("show-more__categories--open")&&s.classList.remove("show-more__categories--open")})),o=document.querySelectorAll(".btn"),c=null,o.forEach((function(e){e.addEventListener("click",(function(t){null!==c&&c.classList.remove("active"),e.classList.add("active"),c=e}))})),document.querySelectorAll(".btn").forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.dataset.section;M.classList.contains("pagination_categories-hidden")&&(M.classList.toggle("pagination_categories-hidden"),A.classList.add("pagination-hidden")),E(N,t),ee(t,C.perPage,C.nextPage)}))}))};J(),window.addEventListener("resize",e(i)(J,300));window.addEventListener("resize",(function(){var e=document.querySelector(".show-more_btn"),t=window.innerWidth;e.textContent=t<768?"Categories":"Others"}));var W,V=document.querySelector(".days"),X=document.querySelector(".current-date"),K=document.querySelector(".current-year"),R=document.querySelectorAll(".calendar-icons span"),z=document.querySelectorAll(".calendar-icons-year span"),Y=new Date,$=(Y.getDate(),Y.getMonth()),G=Y.getFullYear();(W={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")}).openModalBtn.addEventListener("click",(function(){W.modal.classList.toggle("is-hidden"),W.input.classList.toggle("isActive"),W.arrow.classList.toggle("switched"),W.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(e){document.getElementById("input-picker").value,e.target.closest(".calendar-form")||W.input.classList.contains("isActive")&&(W.modal.classList.add("is-hidden"),W.input.classList.remove("isActive"),W.arrow.classList.remove("switched"),W.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}));var Q=["January","February","March","April","May","June","July","August","September","October","November","December"],Z=function(t){for(var n=new Date(G,$,1).getDay(),a=new Date(G,$+1,0).getDate(),r=new Date(G,$,a).getDay(),o=new Date(G,$,0).getDate(),c="",i=n;i>0;i--)c+='<li class="inactive">'.concat(o-i+1,"</li>");for(var l=1;l<=a;l++){var u=l===Y.getDate()&&$===(new Date).getMonth()&&G===(new Date).getFullYear();c+='<li class="'.concat(u,'">').concat(l,"</li>")}for(var d=r;d<6;d++)c+='<li class="inactive">'.concat(d-r+1,"</li>");X.innerText="".concat(Q[$]),K.innerText=" ".concat(G),V.innerHTML=c,document.querySelector(".days").addEventListener("click",(function(t){e(s)(t.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active");var n=t.target.textContent;if(!(t.target.textContent.length>10)){var a=($+1).toString();document.getElementById("input-picker").value=n.padStart(2,"0")+"/"+a.padStart(2,"0")+"/"+G,localStorage.setItem("VALUE",JSON.stringify(n));var r=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(r)),document.querySelector("[data-modal]").classList.add("is-hidden"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}}))};Z();document.querySelector(".days");function ee(e,t,n){return te.apply(this,arguments)}function te(){return(te=e(o)(e(c).mark((function t(n,a,r){var o,i,s,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=encodeURIComponent(n),e.next=4,fetch("https://api.nytimes.com/svc/news/v3/content/all/".concat(o,".json?api-key=").concat(T,"&limit=30"));case 4:return i=e.sent,e.next=7,i.json();case 7:s=e.sent,l=s.results,l.length/8,(0,x.default)((0,P.categoryNewsMarkup)(l.slice(a,r))),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),(0,P.nothingFound)();case 17:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function ne(){for(var e=C.totalPages,t=C.curPage,n=C.numLinksTwoSide,a=n+4,r="",o="",c='<li class="pg-item-cat"><a class="pg-link-cat">...</a></li>',i=0,s=t-n,l=t+n,u="",d=1;d<=e;d++)u=d===t?"active":"",e>=2*a-1?s>3&&l<e-3+1?d>=s&&d<=l&&(o+=ae(d,u)):t<a&&d<=a||t>e-a&&d>=e-a+1||d===e||1===d?r+=ae(d,u):1===++i&&(r+=c):r+=ae(d,u);o?(o=ae(1)+c+o+c+ae(e),O.innerHTML=o):O.innerHTML=r}function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return' <li class="pg-item-cat '.concat(t,'" data-page="').concat(e,'">\n        <a class="pg-link-cat" href="#">').concat(e,"</a>\n    </li>")}function re(){1===C.curPage?I.disabled=!0:I.disabled=!1}function oe(){C.curPage===C.totalPages?D.disabled=!0:D.disabled=!1}R.forEach((function(e){e.addEventListener("click",(function(){($="prev"===e.id?$-1:$+1)<0||$>11?(Y=new Date(G,$,(new Date).getDate()),G=Y.getFullYear(),$=Y.getMonth()):Y=new Date,Z();var t=JSON.parse(localStorage.getItem("VALUE"));V.childNodes.forEach((function(e){e.textContent===t&&e.classList.add("active")}))}))})),z.forEach((function(e){e.addEventListener("click",(function(){G="prev-year"===e.id?G-1:G+1,Z()}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date"),ne(),O.addEventListener("click",(function(e){if(e.target.dataset.page){var t=parseInt(e.target.dataset.page,10);if(C.curPage=t,ne(),re(),oe(),"1"==e.target.dataset.page)C.offset=0,C.perPage=0,C.nextPage=8;else{var n=Number(e.target.dataset.page),a=n-=1;C.offset=9*a,C.perPage=8*a,C.nextPage=C.perPage+8}}})),document.querySelector(".pagination--container--categories").addEventListener("click",(function(e){!function(e){e.classList.contains("prev-page-cat")?(C.curPage--,re(),D.disabled=!1):e.classList.contains("next-page-cat")&&(C.curPage++,oe(),I.disabled=!1);ne()}(e.target)})),j.pagination.addEventListener("click",(function(e){e.target;(e.target.classList.contains("next-page-cat")||e.target.classList.contains("btn-next-cat"))&&C.curPage!==C.totalPages&&(C.curPage+=1,C.offset+=8,C.perPage+=8,C.nextPage+=8,window.scrollTo(0,0)),(e.target.classList.contains("prev-page-cat")||e.target.classList.contains("btn-prev-cat"))&&1!==C.curPage&&(C.curPage-=1,C.offset-=8,C.perPage-=8,C.nextPage-=8,window.scrollTo(0,0)),ee(k(N),C.perPage,C.nextPage),console.log(C)}));P=r("1KhuP"),x=r("0Vwwd");var ce="read-news",ie=document.querySelectorAll(".news-card__list"),se="<div class='already-read'><div class='already-read__text'><span>Already read</span> ".concat('<svg width="18" height="18">\n    <path\n        d="M16.189 3.594a.6.6 0 0 0-.413.182L6.6 12.952 2.824 9.176a.6.6 0 1 0-.848.848l4.2 4.2a.6.6 0 0 0 .848 0l9.6-9.6a.6.6 0 0 0-.435-1.03Z"\n         />\n</svg>',"</div></div>");function le(e){var t=e.target.closest(".news-card__read-more");if(t){var n=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}}(ce)||[],a=t.closest(".news-card__item"),r=a.querySelector(".news-card__img").getAttribute("src"),o=a.querySelector(".news-card__category").textContent,c=a.querySelector(".news-card__title").textContent,i=a.querySelector(".news-card__description").textContent,s=a.querySelector(".news-card__date").textContent,l=a.querySelector(".news-card__read-more").getAttribute("href"),u=new Date,d=String(u.getDate()).padStart(2,"0"),g={urlMedia:r,section:o,title:c,abstract:i,published_date:s,url:l,dateOfRead:String(u.getMonth()+1).padStart(2,"0")+"/"+d+"/"+u.getFullYear()};n.some((function(e){return g.url===e.url}))||(n.push(g),function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}(ce,n)),a.insertAdjacentHTML("beforeend",se)}}ie.forEach((function(e){e.addEventListener("click",le)}));o=r("bpxeT"),c=r("2TvXO");var ue=r("779U1"),de=(x=r("0Vwwd"),P=r("1KhuP"),document.getElementById("pagination")),ge=document.querySelector(".btn-next"),pe=document.querySelector(".btn-prev"),fe=new(0,ue.default),ve={pagination:document.querySelector(".pagin")},me={curPage:1,numLinksTwoSide:1,totalPages:3,offset:0,perPage:0,nextPage:8};function ye(){return(ye=e(o)(e(c).mark((function t(n,a){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe.popularNews();case 3:r=e.sent,(0,x.default)((0,P.popularNewsMarkup)(r.slice(n,a))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function we(){for(var e=me.totalPages,t=me.curPage,n=me.numLinksTwoSide,a=n+4,r="",o="",c='<li class="pg-item"><a class="pg-link">...</a></li>',i=0,s=t-n,l=t+n,u="",d=1;d<=e;d++)u=d===t?"active":"",e>=2*a-1?s>3&&l<e-3+1?d>=s&&d<=l&&(o+=he(d,u)):t<a&&d<=a||t>e-a&&d>=e-a+1||d===e||1===d?r+=he(d,u):1===++i&&(r+=c):r+=he(d,u);o?(o=he(1)+c+o+c+he(e),de.innerHTML=o):de.innerHTML=r}function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return' <li class="pg-item '.concat(t,'" data-page="').concat(e,'">\n        <a class="pg-link" href="#">').concat(e,"</a>\n    </li>")}function be(){1===me.curPage?pe.disabled=!0:pe.disabled=!1}function Se(){me.curPage===me.totalPages?ge.disabled=!0:ge.disabled=!1}we(),de.addEventListener("click",(function(e){if(e.target.dataset.page){var t=parseInt(e.target.dataset.page,10);if(me.curPage=t,we(),be(),Se(),"1"==e.target.dataset.page)me.offset=0,me.perPage=0,me.nextPage=8;else{var n=Number(e.target.dataset.page),a=n-=1;me.offset=9*a,me.perPage=8*a,me.nextPage=me.perPage+8}}})),document.querySelector(".pagination--container").addEventListener("click",(function(e){!function(e){e.classList.contains("prev-page")?(me.curPage--,be(),ge.disabled=!1):e.classList.contains("next-page")&&(me.curPage++,Se(),pe.disabled=!1);we()}(e.target)})),ve.pagination.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("next-page")||t.classList.contains("btn-next"))&&me.curPage!==me.totalPages&&(me.curPage+=1,me.offset+=8,me.perPage+=8,me.nextPage+=8),(t.classList.contains("prev-page")||t.classList.contains("btn-prev"))&&1!==me.curPage&&(me.curPage-=1,me.offset-=8,me.perPage-=8,me.nextPage-=8),function(e,t){ye.apply(this,arguments)}(me.perPage,me.nextPage),window.scrollTo(0,0)}));ue=r("779U1"),x=r("0Vwwd"),P=r("1KhuP");r("7XbyU");var Le=document.querySelector(".pagination--container"),_e=new(0,ue.default);function Pe(){return(Pe=e(o)(e(c).mark((function t(n,a){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_e.popularNews();case 3:r=e.sent,Le.classList.contains("pagination-hidden")&&Le.classList.toggle("pagination-hidden"),(0,x.default)((0,P.popularNewsMarkup)(r.slice(n,a))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",function(e,t){return Pe.apply(this,arguments)}(0,8))}();
//# sourceMappingURL=index.099b58b5.js.map