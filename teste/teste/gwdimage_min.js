(function(){'use strict';var c=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},f=function(a){if(c(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&c(a))return a;return null},g=function(a,b,d){var e=e||b;a.hasAttribute(b)?(a=a.getAttribute(b),d.setAttribute(e,a)):d.removeAttribute(e)};var h=["height","width","alt"];var k=function(){};goog.inherits(k,HTMLElement);
k.prototype.createdCallback=function(){for(var a;a=this.firstChild;)this.removeChild(a);this.a=document.createElement("img");this.g=this.h.bind(this);this.b=0;this.c=this.f=-1;Object.defineProperty(this,"assetWidth",{enumerable:!0,get:function(){return this.f}});Object.defineProperty(this,"assetHeight",{enumerable:!0,get:function(){return this.c}});Object.defineProperty(this,"naturalWidth",{enumerable:!0,get:function(){return this.a.naturalWidth}});Object.defineProperty(this,"naturalHeight",{enumerable:!0,
get:function(){return this.a.naturalHeight}});Object.defineProperty(this,"height",{enumerable:!0,get:function(){return this.a.height},set:function(a){this.a.height=a}});Object.defineProperty(this,"width",{enumerable:!0,get:function(){return this.a.width},set:function(a){this.a.width=a}});Object.defineProperty(this,"alt",{enumerable:!0,get:function(){return this.a.alt},set:function(a){this.a.alt=a}});Object.defineProperty(this,"src",{enumerable:!0,get:function(){return this.a.src}});this.appendChild(this.a);
if(a=this.getAttribute("src"))this.setAttribute("source",a),this.removeAttribute("src");this.a.addEventListener("load",this.g,!1);this.a.addEventListener("error",this.g,!1);this.a.style.width="100%";this.a.style.height="100%";this.style.display="inline-block";for(a=0;a<h.length;a++)g(this,h[a],this.a)};
k.prototype.attachedCallback=function(){if("function"==typeof this.gwdLoad&&"function"==typeof this.gwdIsLoaded&&!this.gwdIsLoaded()){var a=f(this),b=a&&"function"==typeof a.gwdIsLoaded;(!a||b&&a.gwdIsLoaded())&&this.gwdLoad()}};k.prototype.gwdIsLoaded=function(){return 2==this.b||3==this.b};k.prototype.gwdLoad=function(){this.b=1;this.c=this.f=-1;var a=this.getAttribute("source")||"data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";this.a.setAttribute("src",a)};
k.prototype.h=function(a){2!=this.b&&(a&&"error"==a.type?(this.b=3,this.c=this.f=-1,this.a.style.backgroundImage=""):(-1!=this.f&&-1!=this.c||!this.getAttribute("source")||(this.f=this.naturalWidth,this.c=this.naturalHeight),this.b=2),l(this),m(this),a=document.createEvent("Event"),a.initEvent("ready",!0,!0),this.dispatchEvent(a))};
var m=function(a){if(2==a.b){var b=a.getAttribute("source"),d=a.getAttribute("scaling")||"stretch";"stretch"==d?(a.classList.remove("scaled-proportionally"),a.a.style.backgroundImage="",a=a.a,b=b||"data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",b!=a.getAttribute("src")&&a.setAttribute("src",b)):(a.classList.add("scaled-proportionally"),a.a.style.backgroundImage=b?"url("+JSON.stringify(b)+")":"",a.a.style.backgroundSize="none"!=d?d:"auto",b=a.a,"data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="!=
b.getAttribute("src")&&b.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="))}},l=function(a){var b=a.getAttribute("alignment")||"center";a.a.style.backgroundPosition=b};k.prototype.attributeChangedCallback=function(a){"source"==a?0!==this.b&&this.gwdLoad():"scaling"==a?m(this):"alignment"==a?l(this):"alt"==a&&g(this,a,this.a)};document.registerElement("gwd-image",{prototype:k.prototype});}).call(this);
