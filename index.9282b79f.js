!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire7309;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7309=a);var r=a("bpxeT"),c=a("2TvXO");a("i8Q71");r=a("bpxeT");var i=a("8nrFW"),s=(c=a("2TvXO"),"A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw");function l(){return d.apply(this,arguments)}function d(){return(d=e(r)(e(c).mark((function t(){var n,o,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=".concat(s));case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,a=o.results,e.abrupt("return",a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=e(r)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,window.innerWidth<768&&l().then((function(e){p(e,n)})),window.innerWidth>=768&&window.innerWidth<1280&&(n=4,l().then((function(e){p(e,n)}))),window.innerWidth>=1280&&(n=6,l().then((function(e){p(e,n)})));case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var p=function(e,t){var n=e.slice(0,t),o=e.slice(t,-1),a=[];(a=n.map((function(e){return"<button data-section=".concat(e.section,' class="btn">').concat(e.display_name,"</button>")}))).push('\n    <div class="btn show-more">\n\n  <div class="text-icon_block">\n  <span class="show-more_btn">'.concat(window.innerWidth<768?"Categories":"Others","</span>\n    ").concat('<svg class = "show-more__icon" width="14" height="14">\n    <g clip-path="url(#a)">\n        <path d="M1.645 4 0 5.522 7 12l7-6.478L12.355 4 7 8.945 1.645 4Z" />\n    </g>\n    <defs>\n        <clipPath id="a">\n            <path fill="#fff" d="M0 0h14v14H0z" />\n        </clipPath>\n    </defs>\n</svg>','\n  </div>\n  <div class="show-more__categories">\n  ').concat(o.map((function(e){return'<button class="show-more__category" data-section='.concat(e.section,">").concat(e.display_name,"</button>")})).join(""),"\n  </div>\n</div>\n  ")),document.getElementById("buttons-container").insertAdjacentHTML("beforeend",a.join(""));var r,c,i=document.querySelector(".show-more"),s=document.querySelector(".show-more__categories");i.addEventListener("click",(function(e){e.stopPropagation(),s.classList.toggle("show-more__categories--open")})),document.addEventListener("click",(function(){s.classList.contains("show-more__categories--open")&&s.classList.remove("show-more__categories--open")})),r=document.querySelectorAll(".btn"),c=null,r.forEach((function(e){e.addEventListener("click",(function(t){null!==c&&c.classList.remove("active"),e.classList.add("active"),c=e}))}))};!function(){u.apply(this,arguments)}();window.addEventListener("resize",(function(){var e=document.querySelector(".show-more_btn"),t=window.innerWidth;e.textContent=t<768?"Categories":"Others"}));var m,f=document.querySelector(".days"),v=document.querySelector(".current-date"),h=document.querySelectorAll(".calendar-icons span"),g=new Date,w=(g.getDate(),g.getMonth()),y=g.getFullYear();(m={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")}).openModalBtn.addEventListener("click",(function(){m.modal.classList.toggle("is-hidden"),m.input.classList.toggle("isActive"),m.arrow.classList.toggle("switched"),m.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(e){document.getElementById("input-picker").value,e.target.closest(".calendar-form")||m.input.classList.contains("isActive")&&(m.modal.classList.add("is-hidden"),m.input.classList.remove("isActive"),m.arrow.classList.remove("switched"),m.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}));var L=["January","February","March","April","May","June","July","August","September","October","November","December"],S=function(t){for(var n=new Date(y,w,1).getDay(),o=new Date(y,w+1,0).getDate(),a=new Date(y,w,o).getDay(),r=new Date(y,w,0).getDate(),c="",s=n;s>0;s--)c+='<li class="inactive">'.concat(r-s+1,"</li>");for(var l=1;l<=o;l++){var d=l===g.getDate()&&w===(new Date).getMonth()&&y===(new Date).getFullYear();c+='<li class="'.concat(d,'">').concat(l,"</li>")}for(var u=a;u<6;u++)c+='<li class="inactive">'.concat(u-a+1,"</li>");v.innerText="".concat(L[w]," ").concat(y),f.innerHTML=c,document.querySelector(".days").addEventListener("click",(function(t){e(i)(t.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active");var n=t.target.textContent;if(!(t.target.textContent.length>10)){var o=(w+1).toString();document.getElementById("input-picker").value=n.padStart(2,"0")+"/"+o.padStart(2,"0")+"/"+y,localStorage.setItem("VALUE",JSON.stringify(n));var a=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(a)),document.querySelector("[data-modal]").classList.add("is-hidden"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}}))};S();document.querySelector(".days");h.forEach((function(e){e.addEventListener("click",(function(){(w="prev"===e.id?w-1:w+1)<0||w>11?(g=new Date(y,w,(new Date).getDate()),y=g.getFullYear(),w=g.getMonth()):g=new Date,S();var t=JSON.parse(localStorage.getItem("VALUE"));f.childNodes.forEach((function(e){e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date"),a("1KhuP"),a("0Vwwd");var b=a("2a0iR"),_=a("779U1");a("7XbyU");var E=new(0,b.default),q=new(0,_.default);function D(){return(D=e(r)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.latitude=n.coords.latitude,E.longitude=n.coords.longitude,e.abrupt("return",E.fetchWidthLocation().then((function(e){E.createWeatherMarkup(e)})));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}navigator.geolocation.getCurrentPosition((function(e){return D.apply(this,arguments)}),(function(){E.standartFetch().then((function(e){return E.createWeatherMarkup(e)}))})),q.popularNews().then((function(e){}))}();
//# sourceMappingURL=index.9282b79f.js.map