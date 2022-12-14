(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(88),n.b),u=i()(o()),d=s()(l);u.push([e.id,":root {\r\n    --active-tab-background-color: rgba(200, 200, 200, 0.95);\r\n    --tab-footer-background-color: rgba(50, 50, 50, 0.8);\r\n}\r\nhtml,\r\nbody {\r\n    margin: 0px;\r\n    height: 100%;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    background: url("+d+") no-repeat center/cover;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* All Tabs */\r\n.tab-active {\r\n    background: var(--active-tab-background-color) !important;\r\n}\r\n.content {\r\n    display: none;\r\n}\r\n.content-active {\r\n    display: flex;\r\n    background: var(--active-tab-background-color);\r\n}\r\n#content {\r\n    display: flex;\r\n    height: 100%;\r\n\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.tabContainer > .tab {\r\n    height: 60px;\r\n    width: 120px;\r\n    font-size: 15px;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--tab-footer-background-color);\r\n    color: white;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n}\r\n.content {\r\n    flex-grow: 1;\r\n}\r\n.container {\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 35%;\r\n    padding: 50px 200px 50px 200px;\r\n}\r\n\r\n/* Footer */\r\n.footer-container {\r\n    width: 100%;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: var(--tab-footer-background-color);\r\n    color: white;\r\n}\r\n\r\n/* Home Tab */\r\n.home-title {\r\n    font-size: 30px;\r\n    font-weight: 550;\r\n}\r\n.review-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.customer-name {\r\n    align-self: flex-end;\r\n}\r\n.hours-title {\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n}\r\n.location-title {\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n}\r\n\r\n/* Menu Tab */\r\n.mobil-image {\r\n    height: 500px;\r\n    width: auto;\r\n}\r\n.supertech-image {\r\n    height: 500px;\r\n    width: auto;\r\n}",""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},88:(e,t,n)=>{e.exports=n.p+"1e93634e19b068846bb2.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=(e,t,n,r,o)=>{let a=document.createElement(e);return"class"==t&&a.classList.add(n),a.innerHTML=r,o.appendChild(a),a},t=n.p+"3860b6187c2f696a5a0a.jpg",r=n.p+"030e229b65cf1b37b725.jpg",o=document.getElementById("content"),a=e("div","class","tabContainer","",o),i=(t,n,r,o,a,i)=>{const c=e("div","class",t,"",i);return{container:c,firstElement:e("div","class",n,r,c),secondElement:e("div","class",o,a,c)}},c=()=>{e("button","class","tab","Home",a).classList.add("tab-active");const t=e("div","class","content","",o);t.classList.add("container"),t.classList.add("home"),t.classList.add("content-active"),e("div","class","home-title","Welcome to the Scrap Yard!",t),i("review-container","customer-comment","I had a truly delightful dining experience at this restaurant, thanks to the fantastic food and top-notch service. The atmosphere was cozy and inviting, and I felt right at home. I would highly recommend this restaurant to anyone, and I'll definitely be coming back! Thank you for a memorable evening.","customer-name"," - Local Scrapper",t),(()=>{const n=i("restaurantHours-container","hours-title","Hours","hours-container","",t);["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].forEach((t=>{e("div","class","days-time-open",t+": 9am - 10pm",n.secondElement)}))})(),i("location-container","location-title","Location","location-address","123 Acme Drive, Corporation, CA",t)},s=()=>{e("button","class","tab","Menu",a);const n=e("div","class","content","",o);n.classList.add("container"),n.classList.add("menu"),(()=>{const o=i("beverage-container","beverage-title","Beverages","beverage-content","",n);i("mobil-Container","mobil-title","Mobil 1 Extended Performance Full Synthetic Motor Oil 5W-30","mobil-content","",o.secondElement),e("img","class","mobil-image","",o.secondElement).src=t,i("mobil-Container","supertech-title","Super Tech Full Synthetic SAE 5W-30 Motor Oil","supertech-content","",o.secondElement),e("img","class","supertech-image","",o.secondElement).src=r})()},l=()=>{e("button","class","tab","Contact",a);const t=e("div","class","content","Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis erat sed elit scelerisque cursus. Fusce dignissim volutpat justo, in pretium lectus viverra a. Suspendisse potenti. Morbi vitae enim accumsan, euismod tellus at, facilisis tortor. Duis rutrum turpis sed velit volutpat, sed pellentesque quam euismod. Proin quis erat quis erat auctor fermentum at quis orci. Nam dignissim leo at urna bibendum, quis tincidunt arcu lobortis. In hac habitasse platea dictumst. Sed in nunc quis nunc imperdiet aliquet.",o);t.classList.add("container"),t.classList.add("contact")};var u=n(379),d=n.n(u),p=n(795),m=n.n(p),f=n(569),h=n.n(f),v=n(565),b=n.n(v),g=n(216),y=n.n(g),x=n(589),w=n.n(x),E=n(426),L={};L.styleTagTransform=w(),L.setAttributes=b(),L.insert=h().bind(null,"head"),L.domAPI=m(),L.insertStyleElement=y(),d()(E.Z,L),E.Z&&E.Z.locals&&E.Z.locals,(()=>{const t=document.getElementById("content");c(),s(),l(),(()=>{const e=document.querySelectorAll(".tab"),t=document.querySelectorAll(".content");e.forEach(((n,r)=>{n.addEventListener("click",(()=>{t.forEach((e=>{e.classList.remove("content-active")})),e.forEach((e=>{e.classList.remove("tab-active")})),e[r].classList.add("tab-active"),t[r].classList.add("content-active")}))}))})(),(()=>{const n=e("div","class","footer-container","",t);e("div","class","footer-copyright","Copyright 2022 Acme Corporation. All rights reserved",n),e("div","class","footer-contact","Contact us at info@acme.com or 1-800-555-1212",n),e("div","class","footer-help","Need help? Visit our support page for assistance",n)})()})()})()})();