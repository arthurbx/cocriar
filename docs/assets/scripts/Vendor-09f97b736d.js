!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(8),n(9),n(10)},,,,,,,,function(e,t){!function(e,t,n){function r(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function o(e,n,r,s){var o,c,u,l,f="modernizr",d=i("div"),p=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=s?s[r]:f+(r+1),d.appendChild(u);return o=i("style"),o.type="text/css",o.id="s"+f,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=z.style.overflow,z.style.overflow="hidden",z.appendChild(p)),c=n(d,e),p.fake?(p.parentNode.removeChild(p),z.style.overflow=l,z.offsetHeight):d.parentNode.removeChild(d),!!c}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(t[s])+":"+r+")");return i=i.join(" or "),o("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t,a,o){function c(){d&&(delete x.style,delete x.modElem)}if(o=!r(o,"undefined")&&o,!r(a,"undefined")){var f=u(e,a);if(!r(f,"undefined"))return f}for(var d,p,m,h,g,A=["modernizr","tspan"];!x.style;)d=!0,x.modElem=i(A.shift()),x.style=x.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=x.style[h],s(h,"-")&&(h=l(h)),x.style[h]!==n){if(o||r(a,"undefined"))return c(),"pfx"!=t||h;try{x.style[h]=a}catch(e){}if(x.style[h]!=g)return c(),"pfx"!=t||h}return c(),!1}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var s;for(var i in e)if(e[i]in t)return!1===n?e[i]:(s=t[e[i]],r(s,"function")?d(s,n||t):s);return!1}function m(e,t,n,s,i){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?f(o,t,s,i):(o=(e+" "+S.join(a+" ")+a).split(" "),p(o,t,n))}function h(e,t,r){return m(e,n,n,t,r)}var g=[],A={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},v=function(){};v.prototype=A,v=new v;var y=[],z=t.documentElement,w="svg"===z.nodeName.toLowerCase(),b="Moz O ms Webkit",C=A._config.usePrefixes?b.split(" "):[];A._cssomPrefixes=C;var E={elem:i("modernizr")};v._q.push(function(){delete E.elem});var x={style:E.elem.style};v._q.unshift(function(){delete x.style});var S=A._config.usePrefixes?b.toLowerCase().split(" "):[];A._domPrefixes=S,A.testAllProps=m,A.testAllProps=h,v.addTest("flexbox",h("flexBasis","1px",!0)),v.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,s,i,a,o;for(var c in g)if(g.hasOwnProperty(c)){if(e=[],t=g[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],o=a.split("."),1===o.length?v[o[0]]=s:(!v[o[0]]||v[o[0]]instanceof Boolean||(v[o[0]]=new Boolean(v[o[0]])),v[o[0]][o[1]]=s),y.push((s?"":"no-")+o.join("-"))}}(),function(e){var t=z.className,n=v._config.classPrefix||"";if(w&&(t=t.baseVal),v._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}v._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?z.className.baseVal=t:z.className=t)}(y),delete A.addTest,delete A.addAsyncTest;for(var T=0;T<v._q.length;T++)v._q[T]();e.Modernizr=v}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(s,i,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(){W=!1,U=s.devicePixelRatio,D={},I={},z.DPR=U||1,O.width=Math.max(s.innerWidth||0,T.clientWidth),O.height=Math.max(s.innerHeight||0,T.clientHeight),O.vw=O.width/100,O.vh=O.height/100,y=[O.height,O.width,U].join("-"),O.em=z.getEmValue(),O.rem=O.em}function u(e,t,n,r){var s,i,a,o;return"saveData"===M.algorithm?e>2.7?o=n+1:(i=t-n,s=Math.pow(e-.6,1.5),a=i*s,r&&(a+=.1*s),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function l(e){var t,n=z.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=z.setRes(n),z.applySetCandidate(t,e))),e[z.ns].evaled=r}function f(e,t){return e.res-t.res}function d(e,t,n){var r;return!n&&t&&(n=e[z.ns].sets,n=n&&n[n.length-1]),r=p(t,n),r&&(t=z.makeUrl(t),e[z.ns].curSrc=t,e[z.ns].curCan=r,r.res||Y(r,r.set.sizes)),r}function p(e,t){var n,r,s;if(e&&t)for(s=z.parseSet(t),e=z.makeUrl(e),n=0;n<s.length;n++)if(e===z.makeUrl(s[n].url)){r=s[n];break}return r}function m(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)s=a[n],s[z.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function h(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,a,o,c,u,l,f,p=!1,m={};for(a=0;a<i.length;a++)o=i[a],c=o[o.length-1],u=o.substring(0,o.length-1),l=parseInt(u,10),f=parseFloat(u),V.test(u)&&"w"===c?((e||n)&&(p=!0),0===l?p=!0:e=l):J.test(u)&&"x"===c?((e||n||r)&&(p=!0),f<0?p=!0:n=f):V.test(u)&&"h"===c?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,d.push(m))}for(var s,i,a,c,u,l=e.length,f=0,d=[];;){if(n(q),f>=l)return d;s=n(Q),i=[],","===s.slice(-1)?(s=s.replace(G,""),r()):function(){for(n(j),a="",c="in descriptor";;){if(u=e.charAt(f),"in descriptor"===c)if(o(u))a&&(i.push(a),a="",c="after descriptor");else{if(","===u)return f+=1,a&&i.push(a),void r();if("("===u)a+=u,c="in parens";else{if(""===u)return a&&i.push(a),void r();a+=u}}else if("in parens"===c)if(")"===u)a+=u,c="in descriptor";else{if(""===u)return i.push(a),void r();a+=u}else if("after descriptor"===c)if(o(u));else{if(""===u)return void r();c="in descriptor",f-=1}f+=1}}()}}function g(e){var t,n,r,s,i,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){s&&(i.push(s),s="")}function n(){i[0]&&(a.push(i),i=[])}for(var r,s="",i=[],a=[],c=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(o(r)){if(e.charAt(u-1)&&o(e.charAt(u-1))||!s){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=r,u+=1}}}(e),r=n.length,t=0;t<r;t++)if(s=n[t],i=s[s.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(i)){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),z.matchesMedia(s))return a}return"100vw"}i.createElement("picture");var A,v,y,z={},w=!1,b=function(){},C=i.createElement("img"),E=C.getAttribute,x=C.setAttribute,S=C.removeAttribute,T=i.documentElement,L={},M={algorithm:""},R=navigator.userAgent,P=/rident/.test(R)||/ecko/.test(R)&&R.match(/rv\:(\d+)/)&&RegExp.$1>35,N="currentSrc",_=/\s+\+?\d+(e\d+)?w/,B=/(\([^)]+\))?\s*(.+)/,k=s.picturefillCFG,$="font-size:100%!important;",W=!0,D={},I={},U=s.devicePixelRatio,O={px:1,in:96},F=i.createElement("a"),H=!1,j=/^[ \t\n\r\u000c]+/,q=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var s;if(!(t in D))if(D[t]=!1,r&&(s=t.match(e)))D[t]=s[1]*O[s[2]];else try{D[t]=new Function("e",n(t))(O)}catch(e){}return D[t]}}(),Y=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){if(w){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||z.qsa(s.context||i,s.reevaluate||s.reselect?z.sel:z.selShort),r=t.length){for(z.setupRun(s),H=!0,n=0;n<r;n++)z.fillImg(t[n],s);z.teardownRun(s)}}};s.console&&console.warn,N in C||(N="src"),L["image/jpeg"]=!0,L["image/gif"]=!0,L["image/png"]=!0,L["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in C,z.supSizes="sizes"in C,z.supPicture=!!s.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&function(e){C.srcset="data:,a",e.src="data:,a",z.supSrcset=C.complete===e.complete,z.supPicture=z.supSrcset&&z.supPicture}(i.createElement("img")),z.supSrcset&&!z.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=i.createElement("img"),n=function(){2===t.width&&(z.supSizes=!0),v=z.supSrcset&&!z.supSizes,w=!0,setTimeout(ee)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():w=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=M,z.DPR=U||1,z.u=O,z.types=L,z.setSize=b,z.makeUrl=X(function(e){return F.href=e,F.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||Z(e)},z.calcLength=function(e){var t=Z(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||L[e]},z.parseSize=X(function(e){var t=(e||"").match(B);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=h(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!A&&(e=i.body)){var t=i.createElement("div"),n=T.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",T.style.cssText=$,e.style.cssText=$,e.appendChild(t),A=t.offsetWidth,e.removeChild(t),A=parseFloat(A,10),T.style.cssText=n,e.style.cssText=r}return A||16},z.calcListLength=function(e){if(!(e in I)||M.uT){var t=z.calcLength(g(e));I[e]=t||O.width}return I[e]},z.setRes=function(e){var t;if(e){t=z.parseSet(e);for(var n=0,r=t.length;n<r;n++)Y(t[n],e.sizes)}return t},z.setRes.res=Y,z.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,p,m=t[z.ns],h=z.DPR;if(o=m.curSrc||t[N],c=m.curCan||d(t,o,e[0].set),c&&c.set===e[0].set&&((p=P&&!t.complete&&c.res-.1>h)||(c.cached=!0,c.res>=h&&(a=c))),!a)for(e.sort(f),i=e.length,a=e[i-1],r=0;r<i;r++)if(n=e[r],n.res>=h){s=r-1,a=e[s]&&(p||o!==z.makeUrl(n.url))&&u(e[s].res,n.res,h,e[s].cached)?e[s]:n;break}a&&(l=z.makeUrl(a.url),m.curSrc=l,m.curCan=a,l!==o&&z.setSrc(t,a),z.setSize(t))}},z.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},z.getSet=function(e){var t,n,r,s=!1,i=e[z.ns].sets;for(t=0;t<i.length&&!s;t++)if(n=i[t],n.srcset&&z.matchesMedia(n.media)&&(r=z.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},z.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[z.ns];(void 0===c.src||n.src)&&(c.src=E.call(e,"src"),c.src?x.call(e,"data-pfsrc",c.src):S.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!z.supSrcset||e.srcset)&&(r=E.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,m(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:E.call(e,"sizes")},c.sets.push(s),(i=(v||c.src)&&_.test(c.srcset||""))||!c.src||p(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!z.supSrcset||i&&!z.supSizes),a&&z.supSrcset&&!c.supported&&(r?(x.call(e,"data-pfsrcset",r),e.srcset=""):S.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==z.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},z.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[z.ns]||(e[z.ns]={}),n=e[z.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||z.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:l(e))},z.setupRun=function(){H&&!W&&U===s.devicePixelRatio||c()},z.supPicture?(ee=b,z.fillImg=b):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var s=i.readyState||"";r=setTimeout(n,"loading"===s?200:999),i.body&&(z.fillImgs(),(e=e||t.test(s))&&clearTimeout(r))},r=setTimeout(n,i.body?9:99),a=T.clientHeight,o=function(){W=Math.max(s.innerWidth||0,T.clientWidth)!==O.width||T.clientHeight!==a,a=T.clientHeight,W&&z.fillImgs()};K(s,"resize",function(e,t){var n,r,s=function(){var i=new Date-r;i<t?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}}(o,99)),K(i,"readystatechange",n)}(),z.picturefill=ee,z.fillImgs=ee,z.teardownRun=b,ee._=z,s.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(M[t]=e[0],H&&z.fillImgs({reselect:!0}))}};for(;k&&k.length;)s.picturefillCFG.push(k.shift());s.picturefill=ee,"object"==typeof e&&"object"==typeof e.exports?e.exports=ee:void 0!==(r=function(){return ee}.call(t,n,t,e))&&(e.exports=r),z.supPicture||(L["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){L[e]=!1,ee()},n.onload=function(){L[e]=1===n.width,ee()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(t.getElementsByClassName){var n,r=t.documentElement,s=e.Date,i=e.HTMLPictureElement,a=e.addEventListener,o=e.setTimeout,c=e.requestAnimationFrame||o,u=e.requestIdleCallback,l=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],d={},p=Array.prototype.forEach,m=function(e,t){return d[t]||(d[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),d[t].test(e.getAttribute("class")||"")&&d[t]},h=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},A=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&A(e,t),f.forEach(function(n){e[r](n,t)})},v=function(e,n,r,s,i){var a=t.createEvent("CustomEvent");return a.initCustomEvent(n,!s,!i,r||{}),e.dispatchEvent(a),a},y=function(t,r){var s;!i&&(s=e.picturefill||n.pf)?s({reevaluate:!0,elements:[t]}):r&&r.src&&(t.src=r.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},b=function(){var e,n,r=[],s=function(){var t;for(e=!0,n=!1;r.length;)t=r.shift(),t[0].apply(t[1],t[2]);e=!1};return function(i){e?i.apply(this,arguments):(r.push([i,this,arguments]),n||(n=!0,(t.hidden?o:c)(s)))}}(),C=function(e,t){return t?function(){b(e)}:function(){var t=this,n=arguments;b(function(){e.apply(t,n)})}},E=function(e){var t,n=0,r=999,i=function(){t=!1,n=s.now(),e()},a=u?function(){u(i,{timeout:r}),999!==r&&(r=999)}:C(function(){o(i)},!0);return function(e){var i;(e=!0===e)&&(r=66),t||(t=!0,i=125-(s.now()-n),i<0&&(i=0),e||i<9&&u?a():o(a,i))}},x=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?o(i,99-e):(u||r)(r)};return function(){n=s.now(),t||(t=o(i,99))}},S=function(){var i,c,u,f,d,w,S,L,M,R,P,N,_,B,k,$=/^img$/i,W=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,U=0,O=0,F=function(e){U--,e&&e.target&&A(e.target,F),(!e||U<0||!e.target)&&(U=0)},H=function(e,n){var s,i=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(M-=n,N+=n,R-=n,P+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(a=(z(i,"opacity")||1)>0)&&"visible"!=z(i,"overflow")&&(s=i.getBoundingClientRect(),a=P>s.left&&R<s.right&&N>s.top-1&&M<s.bottom+1);return a},j=function(){var e,t,s,a,o,l,f,p,m;if((d=n.loadMode)&&U<8&&(e=i.length)){t=0,O++,null==B&&("expand"in n||(n.expand=r.clientHeight>500?500:400),_=n.expand,B=_*n.expFactor),I<B&&U<1&&O>3&&d>2?(I=B,O=0):I=d>1&&O>2&&U<6?_:0;for(;t<e;t++)if(i[t]&&!i[t]._lazyRace)if(D)if((p=i[t].getAttribute("data-expand"))&&(l=1*p)||(l=I),m!==l&&(S=innerWidth+l*k,L=innerHeight+l,f=-1*l,m=l),s=i[t].getBoundingClientRect(),(N=s.bottom)>=f&&(M=s.top)<=L&&(P=s.right)>=f*k&&(R=s.left)<=S&&(N||P||R||M)&&(u&&U<3&&!p&&(d<3||O<4)||H(i[t],l))){if(Z(i[t]),o=!0,U>9)break}else!o&&u&&!a&&U<4&&O<4&&d>2&&(c[0]||n.preloadAfterLoad)&&(c[0]||!p&&(N||P||R||M||"auto"!=i[t].getAttribute(n.sizesAttr)))&&(a=c[0]||i[t]);else Z(i[t]);a&&!o&&Z(a)}},q=E(j),Q=function(e){h(e.target,n.loadedClass),g(e.target,n.loadingClass),A(e.target,V)},G=C(Q),V=function(e){G({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,r,s=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),s&&e.setAttribute("srcset",s),t&&(r=e.parentNode,r.insertBefore(e.cloneNode(),e),r.removeChild(e))},X=C(function(e,t,r,s,i){var a,c,u,d,m,z;(m=v(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(r?h(e,n.autosizesClass):e.setAttribute("sizes",s)),c=e.getAttribute(n.srcsetAttr),a=e.getAttribute(n.srcAttr),i&&(u=e.parentNode,d=u&&l.test(u.nodeName||"")),z=t.firesLoad||"src"in e&&(c||a||d),m={target:e},z&&(A(e,F,!0),clearTimeout(f),f=o(F,2500),h(e,n.loadingClass),A(e,V,!0)),d&&p.call(u.getElementsByTagName("source"),K),c?e.setAttribute("srcset",c):a&&!d&&(W.test(e.nodeName)?J(e,a):e.src=a),(c||d)&&y(e,{src:a})),b(function(){e._lazyRace&&delete e._lazyRace,g(e,n.lazyClass),z&&!e.complete||(z?F(m):U--,Q(m))})}),Z=function(e){var t,r=$.test(e.nodeName),s=r&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),i="auto"==s;(!i&&u||!r||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=v(e,"lazyunveilread").detail,i&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,U++,X(e,t,i,s,r))},Y=function(){if(!u){if(s.now()-w<999)return void o(Y,999);var e=x(function(){n.loadMode=3,q()});u=!0,n.loadMode=3,q(),a("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){w=s.now(),i=t.getElementsByClassName(n.lazyClass),c=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),k=n.hFac,a("scroll",q,!0),a("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",q,!0),r.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),a("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?Y():(a("load",Y),t.addEventListener("DOMContentLoaded",q),o(Y,2e4)),q(i.length>0)},checkElems:q,unveil:Z}}(),T=function(){var e,r=C(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),l.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||y(e,n.detail)}),s=function(e,t,n){var s,i=e.parentNode;i&&(n=w(e,i,n),s=v(e,"lazybeforesizes",{width:n,dataAttr:!!t}),s.defaultPrevented||(n=s.detail.width)&&n!==e._lazysizesWidth&&r(e,i,s,n))},i=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)s(e[t])},o=x(i);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),a("resize",o)},checkElems:o,updateElem:s}}(),L=function(){L.i||(L.i=!0,T._(),S._())};return function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,o(function(){n.init&&L()})}(),{cfg:n,autoSizer:T,loader:S,init:L,uP:y,aC:h,rC:g,hC:m,fire:v,gW:w,rAF:b}}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)}]);