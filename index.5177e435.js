!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7309;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire7309=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var a=o("bpxeT"),c=o("2TvXO");o("i8Q71");a=o("bpxeT");var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return s.default(e)||u.default(e)||d.default(e)||l.default()};var s=f(o("kMC0W")),u=f(o("7AJDX")),l=f(o("8CtQK")),d=f(o("auk6i"));function f(e){return e&&e.__esModule?e:{default:e}}c=o("2TvXO");var p="A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw";function v(){return m.apply(this,arguments)}function m(){return(m=e(a)(e(c).mark((function t(){var n,r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=".concat(p));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,o=r.results,e.abrupt("return",o);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=e(a)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,window.innerWidth<768&&v().then((function(e){g(e,n)})),window.innerWidth>=768&&window.innerWidth<1280&&(n=4,v().then((function(e){g(e,n)}))),window.innerWidth>=1280&&(n=6,v().then((function(e){g(e,n)})));case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var g=function(e,t){var n=e.slice(0,t),r=e.slice(t,-1),o=[];(o=n.map((function(e){return"<button data-section=".concat(e.section,' class="btn">').concat(e.display_name,"</button>")}))).push('\n    <div class="btn show-more">\n\n  <div class="text-icon_block">\n  <span class="show-more_btn">'.concat(window.innerWidth<768?"Categories":"Others","</span>\n    ").concat('<svg class = "show-more__icon" width="14" height="14">\n    <g clip-path="url(#a)">\n        <path d="M1.645 4 0 5.522 7 12l7-6.478L12.355 4 7 8.945 1.645 4Z" />\n    </g>\n    <defs>\n        <clipPath id="a">\n            <path fill="#fff" d="M0 0h14v14H0z" />\n        </clipPath>\n    </defs>\n</svg>','\n  </div>\n  <div class="show-more__categories">\n  ').concat(r.map((function(e){return'<button class="show-more__category" data-section='.concat(e.section,">").concat(e.display_name,"</button>")})).join(""),"\n  </div>\n</div>\n  ")),document.getElementById("buttons-container").insertAdjacentHTML("beforeend",o.join(""));var a,c,i=document.querySelector(".show-more"),s=document.querySelector(".show-more__categories");i.addEventListener("click",(function(e){e.stopPropagation(),s.classList.toggle("show-more__categories--open")})),document.addEventListener("click",(function(){s.classList.contains("show-more__categories--open")&&s.classList.remove("show-more__categories--open")})),a=document.querySelectorAll(".btn"),c=null,a.forEach((function(e){e.addEventListener("click",(function(t){null!==c&&c.classList.remove("active"),e.classList.add("active"),c=e}))}))};!function(){h.apply(this,arguments)}();window.addEventListener("resize",(function(){var e=document.querySelector(".show-more_btn"),t=window.innerWidth;e.textContent=t<768?"Categories":"Others"}));var y,w=document.querySelector(".days"),_=document.querySelector(".current-date"),b=document.querySelectorAll(".calendar-icons span"),S=new Date,L=(S.getDate(),S.getMonth()),x=S.getFullYear();(y={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")}).openModalBtn.addEventListener("click",(function(){y.modal.classList.toggle("is-hidden"),y.input.classList.toggle("isActive"),y.arrow.classList.toggle("switched"),y.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(e){document.getElementById("input-picker").value,e.target.closest(".calendar-form")||y.input.classList.contains("isActive")&&(y.modal.classList.add("is-hidden"),y.input.classList.remove("isActive"),y.arrow.classList.remove("switched"),y.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}));var M=["January","February","March","April","May","June","July","August","September","October","November","December"],A=function(t){for(var n=new Date(x,L,1).getDay(),r=new Date(x,L+1,0).getDate(),o=new Date(x,L,r).getDay(),a=new Date(x,L,0).getDate(),c="",s=n;s>0;s--)c+='<li class="inactive">'.concat(a-s+1,"</li>");for(var u=1;u<=r;u++){var l=u===S.getDate()&&L===(new Date).getMonth()&&x===(new Date).getFullYear();c+='<li class="'.concat(l,'">').concat(u,"</li>")}for(var d=o;d<6;d++)c+='<li class="inactive">'.concat(d-o+1,"</li>");_.innerText="".concat(M[L]," ").concat(x),w.innerHTML=c,document.querySelector(".days").addEventListener("click",(function(t){e(i)(t.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active");var n=t.target.textContent;if(!(t.target.textContent.length>10)){var r=(L+1).toString();document.getElementById("input-picker").value=n.padStart(2,"0")+"/"+r.padStart(2,"0")+"/"+x,localStorage.setItem("VALUE",JSON.stringify(n));var o=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(o)),document.querySelector("[data-modal]").classList.add("is-hidden"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}}))};A();document.querySelector(".days");b.forEach((function(e){e.addEventListener("click",(function(){(L="prev"===e.id?L-1:L+1)<0||L>11?(S=new Date(x,L,(new Date).getDate()),x=S.getFullYear(),L=S.getMonth()):S=new Date,A();var t=JSON.parse(localStorage.getItem("VALUE"));w.childNodes.forEach((function(e){e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date"),o("1KhuP"),o("0Vwwd");var E=o("2a0iR");o("7XbyU");var k=new(0,E.default);function q(){return(q=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.latitude=n.coords.latitude,k.longitude=n.coords.longitude,e.abrupt("return",k.fetchWidthLocation().then((function(e){k.createWeatherMarkup(e)})));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}navigator.geolocation.getCurrentPosition((function(e){return q.apply(this,arguments)}),(function(){k.standartFetch().then((function(e){return k.createWeatherMarkup(e)}))})),newsApi.popularNews().then((function(e){}))}();
//# sourceMappingURL=index.5177e435.js.map
