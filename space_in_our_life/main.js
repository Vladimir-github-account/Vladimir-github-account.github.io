!function(e){function t(t){for(var r,s,a=t[0],l=t[1],d=t[2],h=0,u=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);u.length;)u.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={0:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var c=l;o.push([7,1]),n()}({7:function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3);const r=new Map,i=/.pdf$/;r.set("www.facebook.com",["fab","fa-facebook"]),r.set("twitter.com",["fab","fa-twitter"]),r.set("www.linkedin.com",["fab","fa-linkedin"]),r.set("www.google-plus.com",["fab","fa-google-plus"]),r.set("dribbble.com",["fab","fa-dribbble"]),r.set("www.instagram.com",["fab","fa-instagram"]),r.set("ru.wikipedia.org",["fab","fa-wikipedia-w"]);const o={lines:8,length:0,width:52,radius:84,scale:.3,corners:1,color:"#e84545",fadeColor:"rgba(0,0,0,0)",speed:.6,rotate:0,animation:"spinner-line-fade-quick",direction:1,zIndex:50,className:"spinner",top:"50%",left:"50%",shadow:"0 0 5px black",position:"absolute"},s=document.getElementById("pageHeader"),a=document.querySelector("#pageHeader .navToggle"),l=document.querySelector("#pageHeader .pageNavigation"),d=document.getElementById("scientists"),c=document.querySelectorAll(".pageNavigation a"),h=document.getElementById("slider"),u=document.querySelectorAll("#events .event"),p=document.querySelector(".openedWork"),m=document.querySelector(".openedWork .workImage"),f=document.querySelector(".openedWork .closeWorkButton"),g=document.querySelector('.btn[href="#science"]');n(4);var y=async(e,t={})=>{try{return(await fetch(e,t)).json()}catch(e){throw console.error(e),e}};var w=(e,t)=>{const n=new Image;return n.src=e,n.onerror=()=>{n.src=t},n};function v(e){const t=document.createElement("div");t.classList.add("personPhotoWrapper");const n=function(e,t,n,r){const i=w(t,r);return i.classList.add(...e),i.setAttribute("alt",n),i}(["personPhoto"],e.profilePicture,"employee photo","https://retohercules.com/images/transparent-avatars-16.png");return t.appendChild(n),t}function E(e){const t=document.createElement("li");return t.appendChild(function(e,t){const n=document.createElement("a");n.setAttribute("href",e),n.target="_blank",n.classList.add(...t);const o=document.createElement("i"),{hostname:s}=new URL(e);return r.has(s)?o.classList.add(...r.get(s)):i.test(e)?o.classList.add("fas","fa-file-pdf"):o.classList.add("fas","fa-book-open"),n.appendChild(o),n}(e,[])),t}var b=function(e){const t=document.createElement("div"),n=document.createElement("div");return n.classList.add("person"),n.appendChild(v(e)),n.appendChild(function({name:e}){const t=document.createElement("h3");return t.innerText=e||"ᅠ",t.setAttribute("title",e||"Please reload the page"),t}(e)),n.appendChild(function({position:e}){const t=document.createElement("h4");return t.innerText=e||"",t.setAttribute("title",e||""),t}(e)),n.appendChild(function({description:e}){const t=document.createElement("p");return t.innerText=e||"Wonderful employee",t.setAttribute("title",e||"Wonderful employee"),t}(e)),n.appendChild(function({contacts:e}){const t=document.createElement("ul");return e.forEach(e=>t.appendChild(E(e))),t}(e)),t.appendChild(n),t.classList.add("personWrapper"),t};n(5);var x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},C={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},S=function(){function e(e){void 0===e&&(e={}),this.opts=x(x({},C),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),_(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",r="none";!0===t.shadow?r="0 2px 4px #000":"string"==typeof t.shadow&&(r=t.shadow);for(var i=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],r=0,i=e.split(",");r<i.length;r++){var o=i[r].match(t);if(null!==o){var s=+o[2],a=+o[5],l=o[4],d=o[7];0!==s||l||(l=d),0!==a||d||(d=l),l===d&&n.push({prefix:o[1]||"",x:s,y:a,xUnits:l,yUnits:d,end:o[8]})}}return n}(r),o=0;o<t.lines;o++){var s=~~(360/t.lines*o+t.rotate),a=_(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:L(t.fadeColor,o),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+t.radius+"px)"}),l=o*t.direction/t.lines/t.speed;l-=1/t.speed;var d=_(document.createElement("div"),{width:"100%",height:"100%",background:L(t.color,o),borderRadius:n,boxShadow:I(i,s),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});a.appendChild(d),e.appendChild(a)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function _(e,t){for(var n in t)e.style[n]=t[n];return e}function L(e,t){return"string"==typeof e?e:e[t%e.length]}function I(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r],s=k(o.x,o.y,t);n.push(o.prefix+s[0]+o.xUnits+" "+s[1]+o.yUnits+o.end)}return n.join(", ")}function k(e,t,n){var r=n*Math.PI/180,i=Math.sin(r),o=Math.cos(r);return[Math.round(1e3*(e*o+t*i))/1e3,Math.round(1e3*(-e*i+t*o))/1e3]}class P{constructor(e,t){this._employeeListContainer=e,this._employees=null,this._error=null,this._isFetching=!1,this.onload=null,this._loadingElem=null,this.loadTeam(t)}get loadingElem(){return this._loadingElem}set loadingElem(e){if(!(e instanceof HTMLElement))throw new TypeError;this._loadingElem=e}get employeeListContainer(){return this._employeeListContainer}get employees(){return this._employees}set employees(e){this._employees=e}get isFetching(){return this._isFetching}set isFetching(e){if("boolean"!=typeof e)throw new TypeError;this._isFetching=e,e||this.error||"function"!=typeof this.onload||this.onload()}get error(){return this._error}set error(e){if(!(e instanceof Error))throw new TypeError;this._error=e,this.isFetching=!1,"function"==typeof this.onerror&&this.onerror(new Event("error"))}async setEmployees(e){try{const t=await y(e);if(!Array.isArray(t))throw new TypeError("Wrong data type");this.employees=t,this._error=null,this.isFetching=!1}catch(e){this.error=e,console.error(e)}}loadTeam(e){this.onload=()=>{this.render()},this.onerror=()=>{this.render()},this.isFetching=!0,this.setEmployees(e),this.render()}renderError(){this.loadingElem.remove()}renderLoading(){this.loadingElem=new S(o).spin(this.employeeListContainer).el}render(){this.isFetching?this.renderLoading():this.error?this.renderError():this.employeeListContainer.replaceChild(function(e){const t=document.createElement("div");return e.forEach(e=>{t.appendChild(b(e))}),t.classList.add("teamContainer"),t}(this.employees),this.loadingElem)}}n(6);class T{constructor(e){if(!e.length)throw new Error;this._persons=e,this._currentIndex=0,this._nextSlideIndex=null,this._interval=null,this.onClickChangeSlide=this.onClickChangeSlide.bind(this)}get interval(){return this._interval}set interval(e){this._interval=e}get nextSlideIndex(){return this._nextSlideIndex}set nextSlideIndex(e){if(e<0||e>this.persons.length-1)throw new RangeError;this._nextSlideIndex=e}get persons(){return this._persons}get currentIndex(){return this._currentIndex}set currentIndex(e){if(isNaN(e))throw new TypeError;if(e<0||e>this._persons.length-1)throw new RangeError;this._currentIndex=e}static getNextIndex(e,t){if(e<0||e>t-1)throw new RangeError;return(e+1)%t}autoChange(){this.interval=setInterval(()=>{this.nextSlideIndex=T.getNextIndex(this.currentIndex,this.persons.length),this.nextSlide(this.nextSlideIndex)},12e3)}nextSlide(e){const t=document.querySelector(`[data-slideid="${e}"]`),n=document.querySelector(".active"),r=document.querySelector(".currentSlide"),i=document.getElementById(`slide${e}`);this.changeSlide(t,n,r,i)}onClickChangeSlide(e){this.interval&&(clearInterval(this.interval),this.interval=0);const t=e.target;if(+t.dataset.slideid!==this.currentIndex){const n=document.querySelector(".active"),r=document.querySelector(".currentSlide"),i=document.getElementById(`slide${e.target.dataset.slideid}`);this.changeSlide(t,n,r,i)}}changeSlide(e,t,n,r){e.classList.add("active"),this.currentIndex=+e.dataset.slideid,t.classList.remove("active"),n.classList.remove("currentSlide"),r.classList.add("currentSlide")}static isCorrectImage(e){if(e instanceof HTMLImageElement){return 1.3*(e.width/e.height)>1.994}throw new TypeError}renderSlideMenuListItem(e){const t=document.createElement("li");return this.currentIndex===e&&t.classList.add("active"),t.setAttribute("data-slideid",e),t.addEventListener("click",this.onClickChangeSlide),t}renderSlideMenu(e){const t=document.createElement("ul");return t.classList.add("sliderMenu"),e.forEach((e,n)=>t.appendChild(this.renderSlideMenuListItem(n))),t}renderPersonCite({author:e}){const t=document.createElement("cite"),n=e.name,r=e.surname;return t.innerText=`${n?r?n+" "+r:n:""}`,t}renderPersonComment({comment:e}){const t=document.createElement("p");return t.innerText=e,t}renderPersonCommentWrapper(e){const t=document.createElement("div");return t.appendChild(this.renderPersonComment(e)),t}renderBlockquote(e){const t=document.createElement("blockquote");return t.appendChild(this.renderPersonCommentWrapper(e)),t.appendChild(this.renderPersonCite(e)),t}renderPersonPhoto({photo:e}){const t=new Image;return t.src=e,t.onload=()=>T.isCorrectImage(t)?t.classList.add("correctImage"):t.classList.add("height100"),t.alt="person photo",t}renderPersonPhotoWrapper(e){const t=document.createElement("div");return t.classList.add("clientPhotoWrapper"),t.appendChild(this.renderPersonPhoto(e)),t}renderSlide(e,t){const n=document.createElement("li");return n.setAttribute("id",`slide${t}`),n.classList.add("slide"),t===this.currentIndex&&n.classList.add("currentSlide"),n.appendChild(this.renderPersonPhotoWrapper(e)),n.appendChild(this.renderBlockquote(e)),n}renderSlideList(e){const t=document.createElement("ul");return t.classList.add("slideList"),e.forEach((e,n)=>t.appendChild(this.renderSlide(e,n))),t}render(){const e=document.createElement("div");return e.classList.add("clientsContainer"),e.appendChild(this.renderSlideList(this.persons)),e.appendChild(this.renderSlideMenu(this.persons)),e}}class A{constructor(e,t){this._sliderContainer=e,this._clients=null,this._error=null,this._isFetching=!1,this.onload=null,this._loadingElem=null,this.loadSlider(t)}get loadingElem(){return this._loadingElem}set loadingElem(e){if(!(e instanceof HTMLElement))throw new TypeError;this._loadingElem=e}get sliderContainer(){return this._sliderContainer}get clients(){return this._clients}set clients(e){this._clients=e}get isFetching(){return this._isFetching}set isFetching(e){if("boolean"!=typeof e)throw new TypeError;this._isFetching=e,e||this.error||"function"!=typeof this.onload||this.onload()}get error(){return this._error}set error(e){if(!(e instanceof Error))throw new TypeError;this._error=e,this.isFetching=!1,"function"==typeof this.onerror&&this.onerror(new Event("error"))}async setClients(e){try{const t=await y(e);if(!Array.isArray(t))throw new TypeError("Wrong data type");this.clients=t,this._error=null,this.isFetching=!1}catch(e){console.error(e),this.error=e}}loadSlider(e){this.onload=()=>{this.render()},this.onerror=()=>{this.render()},this.isFetching=!0,this.setClients(e),this.render()}renderError(){this.loadingElem.remove()}renderLoading(){this.loadingElem=new S(o).spin(this.sliderContainer).el}render(){if(this.isFetching)this.renderLoading();else if(this.error)this.renderError();else{const e=new T(this.clients);this.sliderContainer.replaceChild(e.render(),this.loadingElem),e.autoChange()}}}function F(){window.scrollY>=50?s.classList.add("fixed"):s.classList.remove("fixed")}let q=!1;function M(){q?l.classList.remove("displayed"):l.classList.add("displayed"),q=!q}function W(){p.classList.contains("opened")&&p.classList.remove("opened")}function j(e){e.preventDefault();const t=document.querySelector(e.target.getAttribute("href"));var n;n=t.offsetTop-62,window.scroll({behavior:"smooth",left:0,top:n})}function O(e){j(e),M()}function N(e){e.currentTarget.childNodes[0].naturalWidth&&(m.src=e.currentTarget.childNodes[0].src,p.classList.add("opened"))}window.onload=function(){F(),new P(d,"./data/employees.json"),new A(h,"./data/clients.json")},u.forEach(e=>e.onclick=N),p.onmouseup=function(e){e.target===p&&W()},f.onclick=W,c.forEach(e=>e.onclick=O),a.onclick=M,g.onclick=j,window.onscroll=F}});