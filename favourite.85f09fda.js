function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire7309;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7309=a),a.register("bUb57",(function(e,t){var n=a("3vCWw"),r=a("3huUq"),i=a("b41dZ");const o=new(0,n.default);function u(){this.checked?g.classList.add("dark"):g.classList.remove("dark")}const s=document.querySelector(".open-search-button"),d=document.querySelector(".search-bar"),l=(document.querySelector(".submit-button"),document.querySelector(".open-menu-button")),c=document.querySelector(".close-menu-button"),f=document.querySelector(".mobile-menu"),h=document.querySelector(".checkbox"),m=document.querySelector(".mobile-checkbox"),g=document.querySelector("body"),v=document.querySelector(".search-bar");let w=document.querySelector(".search-field");s.addEventListener("click",(function(){d.classList.add("visible"),s.classList.add("hidden")})),l.addEventListener("click",(function(){f.classList.remove("hidden")})),c.addEventListener("click",(function(){f.classList.add("hidden")})),h.addEventListener("change",u),m.addEventListener("change",u),v.addEventListener("submit",(async function(e){e.preventDefault();let t=await o.fetchNewsByQuerry(w.value).then((e=>(0,r.searchedNewsMarkup)(e)));(0,i.default)(t)}))})),a.register("3vCWw",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("3huUq");const i="A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw";class o{async fetchNewsByQuerry(e){const t=await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${e}&api-key=${i}\n`);return(await t.json()).response.docs}async createNewsMarkup(e){return(0,r.searchedNewsMarkup)(e),(0,r.searchedNewsMarkup)(e)}async popularNews(){try{const e=await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${i}`),t=await e.json();if(404===t.status)throw new Error(console.error);return t.results}catch(e){console.log(e)}}}})),a.register("3huUq",(function(t,n){e(t.exports,"searchedNewsMarkup",(function(){return o}));var r=a("k0Sb0"),i=a("mPsIJ");const o=e=>e.map((e=>{const{web_url:t,_id:n,pub_date:a,section_name:o,headline:u,abstract:s,multimedia:d}=e;let l="https://joadre.com/wp-content/uploads/2019/02/no-image.jpg";return d.length&&(l=`https://static01.nyt.com/${d[1].url}`),`\n    <li class="news-card__item" id=${n}>\n      <article class="news-card__article">\n        <div class="news-card__img-wrapper">\n          <img class="news-card__img" src=${l} alt="news image" />\n          <span class="news-card__category">${o}</span>\n          <div class="news-card__btn-favorite">\n            <span>Add to favorite</span>\n            <svg class="news-card__btn-icon">\n                <use href="./images/sprite.svg#heart"></use>\n             </svg>\n            </div>\n        </div>\n        <div class="news-card__text">\n        <h2 class="news-card__title">${(0,i.textHiding)(u.main,60)}</h2>\n          <p class="news-card__description">${(0,i.textHiding)(s,150)}</p>\n        </div>\n        <div class="news-card__info">\n        <span class="news-card__date">${(0,r.default)(new Date(a),"dd/MM/yyyy")}</span>\n          <a class="news-card__read-more" href=${t}>Read more</a>\n        </div>\n      </article>\n    </li>\n    `}))})),a.register("k0Sb0",(function(t,n){e(t.exports,"default",(function(){return y}));var r=a("7pQzR"),i=a("cfoI5"),o=a("le96L"),u=a("3rsJw"),s=a("dmQbx"),d=a("8zxzx"),l=a("xRN1E"),c=a("8d3vD"),f=a("6RzIO"),h=a("dCCOX"),m=a("fhQJu"),g=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,v=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,w=/^'([^]*?)'?$/,p=/''/g,b=/[a-zA-Z]/;function y(e,t,n){var a,w,p,y,T,M,C,k,D,S,U,O,P,Y,W,E,_,N;(0,f.default)(2,arguments);var j=String(t),q=(0,h.getDefaultOptions)(),z=null!==(a=null!==(w=null==n?void 0:n.locale)&&void 0!==w?w:q.locale)&&void 0!==a?a:m.default,L=(0,c.default)(null!==(p=null!==(y=null!==(T=null!==(M=null==n?void 0:n.firstWeekContainsDate)&&void 0!==M?M:null==n||null===(C=n.locale)||void 0===C||null===(k=C.options)||void 0===k?void 0:k.firstWeekContainsDate)&&void 0!==T?T:q.firstWeekContainsDate)&&void 0!==y?y:null===(D=q.locale)||void 0===D||null===(S=D.options)||void 0===S?void 0:S.firstWeekContainsDate)&&void 0!==p?p:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=(0,c.default)(null!==(U=null!==(O=null!==(P=null!==(Y=null==n?void 0:n.weekStartsOn)&&void 0!==Y?Y:null==n||null===(W=n.locale)||void 0===W||null===(E=W.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==P?P:q.weekStartsOn)&&void 0!==O?O:null===(_=q.locale)||void 0===_||null===(N=_.options)||void 0===N?void 0:N.weekStartsOn)&&void 0!==U?U:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!z.localize)throw new RangeError("locale must contain localize property");if(!z.formatLong)throw new RangeError("locale must contain formatLong property");var H=(0,o.default)(e);if(!(0,r.default)(H))throw new RangeError("Invalid time value");var I=(0,d.default)(H),F=(0,i.default)(H,I),Q={firstWeekContainsDate:L,weekStartsOn:R,locale:z,_originalDate:H},A=j.match(v).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,s.default[t])(e,z.formatLong):e})).join("").match(g).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return x(r);var i=u.default[a];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!(0,l.isProtectedWeekYearToken)(r)||(0,l.throwProtectedError)(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!(0,l.isProtectedDayOfYearToken)(r)||(0,l.throwProtectedError)(r,t,String(e)),i(F,r,z.localize,Q);if(a.match(b))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return A}function x(e){var t=e.match(w);return t?t[1].replace(p,"'"):e}})),a.register("7pQzR",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("cmc1k"),i=a("le96L"),o=a("6RzIO");function u(e){if((0,o.default)(1,arguments),!(0,r.default)(e)&&"number"!=typeof e)return!1;var t=(0,i.default)(e);return!isNaN(Number(t))}})),a.register("cmc1k",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("6RzIO");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(0,r.default)(1,arguments),e instanceof Date||"object"===i(e)&&"[object Date]"===Object.prototype.toString.call(e)}})),a.register("6RzIO",(function(t,n){function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}e(t.exports,"default",(function(){return r}))})),a.register("le96L",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("6RzIO");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===i(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}})),a.register("cfoI5",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("egwKS"),i=a("6RzIO"),o=a("8d3vD");function u(e,t){(0,i.default)(2,arguments);var n=(0,o.default)(t);return(0,r.default)(e,-n)}})),a.register("egwKS",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("8d3vD"),i=a("le96L"),o=a("6RzIO");function u(e,t){(0,o.default)(2,arguments);var n=(0,i.default)(e).getTime(),a=(0,r.default)(t);return new Date(n+a)}})),a.register("8d3vD",(function(t,n){function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}e(t.exports,"default",(function(){return r}))})),a.register("3rsJw",(function(t,n){e(t.exports,"default",(function(){return y}));var r=a("iUfDY"),i=a("9rMx7"),o=a("iymSi"),u=a("bCYgf"),s=a("e0HMe"),d=a("jOrUI"),l=a("bDYa5"),c="midnight",f="noon",h="morning",m="afternoon",g="evening",v="night";function w(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+(0,d.default)(i,2)}function p(e,t){return e%60==0?(e>0?"-":"+")+(0,d.default)(Math.abs(e)/60,2):b(e,t)}function b(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+(0,d.default)(Math.floor(a/60),2)+n+(0,d.default)(a%60,2)}var y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return l.default.y(e,t)},Y:function(e,t,n,r){var a=(0,s.default)(e,r),i=a>0?a:1-a;if("YY"===t){var o=i%100;return(0,d.default)(o,2)}return"Yo"===t?n.ordinalNumber(i,{unit:"year"}):(0,d.default)(i,t.length)},R:function(e,t){var n=(0,o.default)(e);return(0,d.default)(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return(0,d.default)(n,t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return(0,d.default)(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return(0,d.default)(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return l.default.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return(0,d.default)(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=(0,u.default)(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):(0,d.default)(a,t.length)},I:function(e,t,n){var r=(0,i.default)(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):(0,d.default)(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):l.default.d(e,t)},D:function(e,t,n){var a=(0,r.default)(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):(0,d.default)(a,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return(0,d.default)(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return(0,d.default)(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return(0,d.default)(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?f:0===a?c:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?g:a>=12?m:a>=4?h:v,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return l.default.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):l.default.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):(0,d.default)(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):(0,d.default)(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):l.default.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):l.default.s(e,t)},S:function(e,t){return l.default.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return p(a);case"XXXX":case"XX":return b(a);default:return b(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return p(a);case"xxxx":case"xx":return b(a);default:return b(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+w(a,":");default:return"GMT"+b(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+w(a,":");default:return"GMT"+b(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e,i=Math.floor(a.getTime()/1e3);return(0,d.default)(i,t.length)},T:function(e,t,n,r){var a=(r._originalDate||e).getTime();return(0,d.default)(a,t.length)}}})),a.register("iUfDY",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("le96L"),i=a("6RzIO"),o=864e5;function u(e){(0,i.default)(1,arguments);var t=(0,r.default)(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),u=n-a;return Math.floor(u/o)+1}})),a.register("9rMx7",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("le96L"),i=a("byvVj"),o=a("60OYk"),u=a("6RzIO"),s=6048e5;function d(e){(0,u.default)(1,arguments);var t=(0,r.default)(e),n=(0,i.default)(t).getTime()-(0,o.default)(t).getTime();return Math.round(n/s)+1}})),a.register("byvVj",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("le96L"),i=a("6RzIO");function o(e){(0,i.default)(1,arguments);var t=1,n=(0,r.default)(e),a=n.getUTCDay(),o=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}})),a.register("60OYk",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("iymSi"),i=a("byvVj"),o=a("6RzIO");function u(e){(0,o.default)(1,arguments);var t=(0,r.default)(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=(0,i.default)(n);return a}})),a.register("iymSi",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("le96L"),i=a("6RzIO"),o=a("byvVj");function u(e){(0,i.default)(1,arguments);var t=(0,r.default)(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var u=(0,o.default)(a),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var d=(0,o.default)(s);return t.getTime()>=u.getTime()?n+1:t.getTime()>=d.getTime()?n:n-1}})),a.register("bCYgf",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("le96L"),i=a("j1YKz"),o=a("2yvSN"),u=a("6RzIO"),s=6048e5;function d(e,t){(0,u.default)(1,arguments);var n=(0,r.default)(e),a=(0,i.default)(n,t).getTime()-(0,o.default)(n,t).getTime();return Math.round(a/s)+1}})),a.register("j1YKz",(function(t,n){e(t.exports,"default",(function(){return s}));var r=a("le96L"),i=a("6RzIO"),o=a("8d3vD"),u=a("dCCOX");function s(e,t){var n,a,s,d,l,c,f,h;(0,i.default)(1,arguments);var m=(0,u.getDefaultOptions)(),g=(0,o.default)(null!==(n=null!==(a=null!==(s=null!==(d=null==t?void 0:t.weekStartsOn)&&void 0!==d?d:null==t||null===(l=t.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==s?s:m.weekStartsOn)&&void 0!==a?a:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=(0,r.default)(e),w=v.getUTCDay(),p=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-p),v.setUTCHours(0,0,0,0),v}})),a.register("dCCOX",(function(t,n){e(t.exports,"getDefaultOptions",(function(){return a}));var r={};function a(){return r}})),a.register("2yvSN",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("e0HMe"),i=a("6RzIO"),o=a("j1YKz"),u=a("8d3vD"),s=a("dCCOX");function d(e,t){var n,a,d,l,c,f,h,m;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),v=(0,u.default)(null!==(n=null!==(a=null!==(d=null!==(l=null==t?void 0:t.firstWeekContainsDate)&&void 0!==l?l:null==t||null===(c=t.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==d?d:g.firstWeekContainsDate)&&void 0!==a?a:null===(h=g.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1),w=(0,r.default)(e,t),p=new Date(0);p.setUTCFullYear(w,0,v),p.setUTCHours(0,0,0,0);var b=(0,o.default)(p,t);return b}})),a.register("e0HMe",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("le96L"),i=a("6RzIO"),o=a("j1YKz"),u=a("8d3vD"),s=a("dCCOX");function d(e,t){var n,a,d,l,c,f,h,m;(0,i.default)(1,arguments);var g=(0,r.default)(e),v=g.getUTCFullYear(),w=(0,s.getDefaultOptions)(),p=(0,u.default)(null!==(n=null!==(a=null!==(d=null!==(l=null==t?void 0:t.firstWeekContainsDate)&&void 0!==l?l:null==t||null===(c=t.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==d?d:w.firstWeekContainsDate)&&void 0!==a?a:null===(h=w.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,p),b.setUTCHours(0,0,0,0);var y=(0,o.default)(b,t),x=new Date(0);x.setUTCFullYear(v,0,p),x.setUTCHours(0,0,0,0);var T=(0,o.default)(x,t);return g.getTime()>=y.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}})),a.register("jOrUI",(function(t,n){function r(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}e(t.exports,"default",(function(){return r}))})),a.register("bDYa5",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("jOrUI"),i={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return(0,r.default)("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):(0,r.default)(n+1,2)},d:function(e,t){return(0,r.default)(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return(0,r.default)(e.getUTCHours()%12||12,t.length)},H:function(e,t){return(0,r.default)(e.getUTCHours(),t.length)},m:function(e,t){return(0,r.default)(e.getUTCMinutes(),t.length)},s:function(e,t){return(0,r.default)(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,n-3));return(0,r.default)(i,t.length)}}})),a.register("dmQbx",(function(t,n){e(t.exports,"default",(function(){return i}));var r=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},a=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},i={p:a,P:function(e,t){var n,i=e.match(/(P+)(p+)?/)||[],o=i[1],u=i[2];if(!u)return r(e,t);switch(o){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",r(o,t)).replace("{{time}}",a(u,t))}}})),a.register("8zxzx",(function(t,n){function r(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}e(t.exports,"default",(function(){return r}))})),a.register("xRN1E",(function(t,n){e(t.exports,"isProtectedDayOfYearToken",(function(){return i})),e(t.exports,"isProtectedWeekYearToken",(function(){return o})),e(t.exports,"throwProtectedError",(function(){return u}));var r=["D","DD"],a=["YY","YYYY"];function i(e){return-1!==r.indexOf(e)}function o(e){return-1!==a.indexOf(e)}function u(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}})),a.register("fhQJu",(function(t,n){e(t.exports,"default",(function(){return r}));var r=a("eG059").default})),a.register("eG059",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("bvM2P"),i=a("haCAZ"),o=a("AVlzc"),u=a("eiIUR"),s=a("8rsbS"),d={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:u.default,match:s.default,options:{weekStartsOn:0,firstWeekContainsDate:1}}})),a.register("bvM2P",(function(t,n){e(t.exports,"default",(function(){return a}));var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},a=function(e,t,n){var a,i=r[e];return a="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a}})),a.register("haCAZ",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("lbh04"),i={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}})),a.register("lbh04",(function(t,n){function r(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}e(t.exports,"default",(function(){return r}))})),a.register("AVlzc",(function(t,n){e(t.exports,"default",(function(){return a}));var r={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},a=function(e,t,n,a){return r[e]}})),a.register("eiIUR",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("jZkn4"),i={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:(0,r.default)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})}})),a.register("jZkn4",(function(t,n){function r(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}e(t.exports,"default",(function(){return r}))})),a.register("8rsbS",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("gcy5I"),i={ordinalNumber:(0,a("jChsd").default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})}})),a.register("gcy5I",(function(t,n){function r(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=t.match(o);if(!u)return null;var s,d=u[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?i(l,(function(e){return e.test(d)})):a(l,(function(e){return e.test(d)}));s=e.valueCallback?e.valueCallback(c):c,s=n.valueCallback?n.valueCallback(s):s;var f=t.slice(d.length);return{value:s,rest:f}}}function a(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function i(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}e(t.exports,"default",(function(){return r}))})),a.register("jChsd",(function(t,n){function r(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var u=t.slice(a.length);return{value:o,rest:u}}}e(t.exports,"default",(function(){return r}))})),a.register("mPsIJ",(function(t,n){function r(e,t){if(e.length>t){let n=e.trim().substring(0,t),r=n.lastIndexOf(" ");return n.substring(0,r)+"..."}return e}e(t.exports,"textHiding",(function(){return r}))})),a.register("b41dZ",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("6HjFw");const i=document.querySelector(".news-card__list"),o=new(0,r.default);let u=[];const s=o.createWeatherMarkup();function d(e){u.push(...e),window.matchMedia("(max-width: 767px  )").matches&&u.splice(0,0,s),window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1279px)").matches&&u.splice(1,0,s),window.matchMedia("(min-width: 1280px)").matches&&u.splice(2,0,s),i.innerHTML=u.join("")}})),a.register("6HjFw",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("k0Sb0");class i{async standartFetch(){return(await fetch("https://api.openweathermap.org/data/2.5/weather?q=praha&units=metric&appid=94b2a12c85f4ec978a20428df76a9098")).json()}async fetchWidthLocation(){return(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=94b2a12c85f4ec978a20428df76a9098`)).json()}createWeatherMarkup(e){return`\n   <li class="weather-info weather news-card__item " \n       <span class="weather-info__degrees">${Math.floor()}°</span>\n        <div class="weather-info__group">\n            <span class="weather-info__description">\n         \n            </span>\n            <span class="weather-info__location"><svg>\n    <use href="../images/sprite.svg#location"></use>\n</svg>  </span>\n        </div>\n        \n      </li>\n      \n      <span class="weather-date">${(0,r.default)(new Date,"eee")}</span>\n      <span class="weather-date">${(0,r.default)(new Date,"dd LLL y")}</span>\n      <a href="https://www.accuweather.com/en" class="weather-link" target="_blank" rel="noreferrer noopener">weather for week</a>`}constructor(){this.latitude="",this.longitude=""}}}));
//# sourceMappingURL=favourite.85f09fda.js.map
