(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),s=t(667),i=t.n(s),l=new URL(t(88),t.b),u=c()(o()),d=i()(l);u.push([n.id,"/* * {\r\n    outline: 1px dashed white;\r\n} */\r\n:root {\r\n    --active-tab-background-color: rgba(200, 200, 200, 0.95);\r\n    --tab-footer-background-color: rgba(50, 50, 50, 0.8);\r\n    --img-height-size: 300px;\r\n}\r\nhtml,\r\nbody {\r\n    margin: 0px;\r\n    height: 100%;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    background: url("+d+") repeat center/cover;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* All Tabs */\r\n.tab-active {\r\n    background: var(--active-tab-background-color) !important;\r\n}\r\n.content {\r\n    display: none;\r\n}\r\n.content-active {\r\n    display: flex;\r\n    background: var(--active-tab-background-color);\r\n}\r\n#content {\r\n    display: flex;\r\n    height: 100%;\r\n\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.tabContainer > .tab {\r\n    height: 60px;\r\n    width: 120px;\r\n    font-size: 15px;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--tab-footer-background-color);\r\n    color: white;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n}\r\n.content {\r\n    flex-grow: 1;\r\n}\r\n.container {\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 35%;\r\n    padding: 50px 200px 50px 200px;\r\n}\r\nimg {\r\n    height: 350px;\r\n    width: auto;\r\n}\r\n\r\n/* Footer */\r\n.footer-container {\r\n    width: 100%;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: var(--tab-footer-background-color);\r\n    color: white;\r\n}\r\n\r\n/* Home Tab */\r\n.home-title {\r\n    font-size: 30px;\r\n    font-weight: 550;\r\n    white-space: nowrap;\r\n}\r\n.review-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.customer-name {\r\n    align-self: flex-end;\r\n}\r\n.hours-title {\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n}\r\n.location-title {\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n}\r\n\r\n/* Menu Tab */\r\n.menu-sub-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.menu-sub-title {\r\n    font-size: 30px;\r\n    font-weight: 550;\r\n    padding: 30px;\r\n}\r\n.menu-sub2-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.menu-sub2-title {\r\n    padding: 30px;\r\n    white-space: nowrap;\r\n}",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],s=0;s<n.length;s++){var i=n[s],l=r.base?i[0]+r.base:i[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var s=t(a[c]);e[s].references--}for(var i=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=i}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},88:(n,e,t)=>{n.exports=t.p+"1e93634e19b068846bb2.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=(n,e,t,r,o)=>{const a=document.createElement(n);return"class"==e&&a.classList.add(t),a.innerHTML=r,o.appendChild(a),a},e=(n,e)=>{const t=document.createElement("img");return t.src=n,e.appendChild(t),t},r=(e,t,r,o,a,c)=>{const s=n("div","class",e,"",c);return{container:s,firstElement:n("div","class",t,r,s),secondElement:n("div","class",o,a,s)}},o=t.p+"3860b6187c2f696a5a0a.jpg",a=t.p+"030e229b65cf1b37b725.jpg",c=t.p+"1f5d2b81e1d92799a90f.jpg",s=t.p+"88c218fc5d900908b24c.jpg",i=document.getElementById("content"),l=n("div","class","tabContainer","",i),u=()=>{n("button","class","tab","Home",l);const e=n("div","class","content","",i);e.classList.add("container"),e.classList.add("home"),n("div","class","home-title","Welcome to the Scrap Yard!",e),r("review-container","customer-comment","I had a truly delightful dining experience at this restaurant, thanks to the fantastic food and top-notch service. The atmosphere was cozy and inviting, and I felt right at home. I would highly recommend this restaurant to anyone, and I'll definitely be coming back! Thank you for a memorable evening.","customer-name"," - Local Scrapper",e),(()=>{const t=r("restaurantHours-container","hours-title","Hours","hours-container","",e);["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].forEach((e=>{n("div","class","days-time-open",e+": 9am - 10pm",t.secondElement)}))})(),r("location-container","location-title","Location","location-address","123 Acme Drive, Corporation, CA",e)},d=()=>{n("button","class","tab","Menu",l);const t=n("div","class","content","",i);t.classList.add("container"),t.classList.add("menu"),(()=>{const n=r("menu-sub-container","menu-sub-title","Beverages","menu-sub-content","",t);(()=>{const t=r("menu-sub2-container","menu-sub2-title","Mobil 1 Extended Performance Full Synthetic Motor Oil 5W-30 ... $39.99","mobil-content","",n.secondElement);e(o,t.secondElement)})(),(()=>{const t=r("menu-sub2-container","menu-sub2-title","Super Tech Full Synthetic SAE 5W-30 Motor Oil ... $26.85","supertech-content","",n.secondElement);e(a,t.secondElement)})()})(),(()=>{const n=r("menu-sub-container","menu-sub-title","Sides","menu-sub-content","",t);(()=>{const t=r("menu-sub2-container","menu-sub2-title","Assorted Nuts & Bolts ... $12.00","nutsBolts-content","",n.secondElement);e(c,t.secondElement)})(),(()=>{const t=r("menu-sub2-container","menu-sub2-title","Spare Tire Salad ... $86.00","spareTire-content","",n.secondElement);e(s,t.secondElement)})()})()},p=()=>{const e=n("button","class","tab","Contact",l),t=n("div","class","content","",i);t.classList.add("container"),t.classList.add("contact"),e.classList.add("tab-active"),t.classList.add("content-active"),(()=>{const e=r("contact-sub-container","contact-sub-title","Contact Us","contact-sub-content","",t);(()=>{const t=r("contact-sub2-container","contact-sub2-info","Elon Musk","contact-sub2-img","",e.secondElement);n("img","class","mobil-image","",t.secondElement).src=o})()})()};var m=t(379),f=t.n(m),h=t(795),b=t.n(h),v=t(569),g=t.n(v),y=t(565),x=t.n(y),w=t(216),E=t.n(w),T=t(589),L=t.n(T),S=t(426),C={};C.styleTagTransform=L(),C.setAttributes=x(),C.insert=g().bind(null,"head"),C.domAPI=b(),C.insertStyleElement=E(),f()(S.Z,C),S.Z&&S.Z.locals&&S.Z.locals,(()=>{const e=document.getElementById("content");u(),d(),p(),(()=>{const n=document.querySelectorAll(".tab"),e=document.querySelectorAll(".content");n.forEach(((t,r)=>{t.addEventListener("click",(()=>{e.forEach((n=>{n.classList.remove("content-active")})),n.forEach((n=>{n.classList.remove("tab-active")})),n[r].classList.add("tab-active"),e[r].classList.add("content-active")}))}))})(),(()=>{const t=n("div","class","footer-container","",e);n("div","class","footer-copyright","Copyright 2022 Acme Corporation. All rights reserved",t),n("div","class","footer-contact","Contact us at info@acme.com or 1-800-555-1212",t),n("div","class","footer-help","Need help? Visit our support page for assistance",t)})()})()})()})();