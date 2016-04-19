/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Copyright (c) 2008 George McGinley Smith and (c) 2001 Robert Penner
 * Open source under the BSD License. (http://www.opensource.org/licenses/bsd-license.php)
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://slideshow.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;
(function (b) {
	var m, t, u, f, D, j, E, n, z, A, q = 0,
		e = {},
		o = [],
		p = 0,
		d = {},
		l = [],
		G = null,
		v = new Image,
		J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
		W = /[^\.]\.(swf)\s*$/i,
		K, L = 1,
		y = 0,
		s = "",
		r, i, h = false,
		B = b.extend(b("<div/>")[0], {
			prop: 0
		}),
		M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest,
		N = function () {
			t.hide();
			v.onerror = v.onload = null;
			G && G.abort();
			m.empty()
		},
		O = function () {
			if (false === e.onError(o, q, e)) {
				t.hide();
				h = false
			} else {
				e.titleShow = false;
				e.width = "auto";
				e.height = "auto";
				m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
				F()
			}
		},
		I = function () {
			var a = o[q],
				c, g, k, C, P, w;
			N();
			e = b.extend({}, b.fn.slideshow.defaults, typeof b(a).data("fancybox") == "undefined" ? e : b(a).data("fancybox"));
			w = e.onStart(o, q, e);
			if (w === false) h = false;
			else {
				if (typeof w == "object") e = b.extend(e, w);
				k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || "";
				if (a.nodeName && !e.orig) e.orig = b(a).children("img:first").length ? b(a).children("img:first") : b(a);
				if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt");
				c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null;
				if (/^(?:javascript)/i.test(c) || c == "#") c = null;
				if (e.type) {
					g = e.type;
					if (!c) c = e.content
				} else if (e.content) g = "html";
				else if (c) g = c.match(J) ? "image" : c.match(W) ? "swf" : b(a).hasClass("iframe") ? "iframe" : c.indexOf("#") === 0 ? "inline" : "ajax";
				if (g) {
					if (g == "inline") {
						a = c.substr(c.indexOf("#"));
						g = b(a).length > 0 ? "inline" : "ajax"
					}
					e.type = g;
					e.href = c;
					e.title = k;
					if (e.autoDimensions) if (e.type == "html" || e.type == "inline" || e.type == "ajax") {
						e.width = "auto";
						e.height = "auto"
					} else e.autoDimensions = false;
					if (e.modal) {
						e.overlayShow = true;
						e.hideOnOverlayClick = false;
						e.hideOnContentClick = false;
						e.enableEscapeButton = false;
						e.showCloseButton = false
					}
					e.padding = parseInt(e.padding, 10);
					e.margin = parseInt(e.margin, 10);
					m.css("padding", e.padding + e.margin);
					b(".slideshow-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () {
						b(this).replaceWith(j.children())
					});
					switch (g) {
					case "html":
						m.html(e.content);
						F();
						break;
					case "inline":
						if (b(a).parent().is("#slideshow-content") === true) {
							h = false;
							break
						}
						b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup", function () {
							b(this).replaceWith(j.children())
						}).bind("fancybox-cancel", function () {
							b(this).replaceWith(m.children())
						});
						b(a).appendTo(m);
						F();
						break;
					case "image":
						h = false;
						b.slideshow.showActivity();
						v = new Image;
						v.onerror = function () {
							O()
						};
						v.onload = function () {
							h = true;
							v.onerror = v.onload = null;
							e.width = v.width;
							e.height = v.height;
							b("<img />").attr({
								id: "fancybox-img",
								src: v.src,
								alt: e.title
							}).appendTo(m);
							Q()
						};
						v.src = c;
						break;
					case "swf":
						e.scrolling = "no";
						C = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + c + '"></param>';
						P = "";
						b.each(e.swf, function (x, H) {
							C += '<param name="' + x + '" value="' + H + '"></param>';
							P += " " + x + '="' + H + '"'
						});
						C += '<embed src="' + c + '" type="application/x-shockwave-flash" width="' + e.width + '" height="' + e.height + '"' + P + "></embed></object>";
						m.html(C);
						F();
						break;
					case "ajax":
						h = false;
						b.slideshow.showActivity();
						e.ajax.win = e.ajax.success;
						G = b.ajax(b.extend({}, e.ajax, {
							url: c,
							data: e.ajax.data || {},
							error: function (x) {
								x.status > 0 && O()
							},
							success: function (x, H, R) {
								if ((typeof R == "object" ? R : G).status == 200) {
									if (typeof e.ajax.win == "function") {
										w = e.ajax.win(c, x, H, R);
										if (w === false) {
											t.hide();
											return
										} else if (typeof w == "string" || typeof w == "object") x = w
									}
									m.html(x);
									F()
								}
							}
						}));
						break;
					case "iframe":
						Q()
					}
				} else O()
			}
		},
		F = function () {
			var a = e.width,
				c = e.height;
			a = a.toString().indexOf("%") > -1 ? parseInt((b(window).width() - e.margin * 2) * parseFloat(a) / 100, 10) + "px" : a == "auto" ? "auto" : a + "px";
			c = c.toString().indexOf("%") > -1 ? parseInt((b(window).height() - e.margin * 2) * parseFloat(c) / 100, 10) + "px" : c == "auto" ? "auto" : c + "px";
			m.wrapInner('<div style="width:' + a + ";height:" + c + ";overflow: " + (e.scrolling == "auto" ? "auto" : e.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
			e.width = m.width();
			e.height = m.height();
			Q()
		},
		Q = function () {
			var a, c;
			t.hide();
			if (f.is(":visible") && false === d.onCleanup(l, p, d)) {
				b.event.trigger("fancybox-cancel");
				h = false
			} else {
				h = true;
				b(j.add(u)).unbind();
				b(window).unbind("resize.fb scroll.fb");
				b(document).unbind("keydown.fb");
				f.is(":visible") && d.titlePosition !== "outside" && f.css("height", f.height());
				l = o;
				p = q;
				d = e;
				if (d.overlayShow) {
					u.css({
						"background-color": d.overlayColor,
						opacity: d.overlayOpacity,
						cursor: d.hideOnOverlayClick ? "pointer" : "auto",
						height: b(document).height()
					});
					if (!u.is(":visible")) {
						M && b("select:not(#fancybox-tmp select)").filter(function () {
							return this.style.visibility !== "hidden"
						}).css({
							visibility: "hidden"
						}).one("fancybox-cleanup", function () {
							this.style.visibility = "inherit"
						});
						u.show()
					}
				} else u.hide();
				i = X();
				s = d.title || "";
				y = 0;
				n.empty().removeAttr("style").removeClass();
				if (d.titleShow !== false) {
					if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d);
					else a = s && s.length ? d.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + s + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + d.titlePosition + '">' + s + "</div>" : false;
					s = a;
					if (!(!s || s === "")) {
						n.addClass("fancybox-title-" + d.titlePosition).html(s).appendTo("body").show();
						switch (d.titlePosition) {
						case "inside":
							n.css({
								width: i.width - d.padding * 2,
								marginLeft: d.padding,
								marginRight: d.padding
							});
							y = n.outerHeight(true);
							n.appendTo(D);
							i.height += y;
							break;
						case "over":
							n.css({
								marginLeft: d.padding,
								width: i.width - d.padding * 2,
								bottom: d.padding
							}).appendTo(D);
							break;
						case "float":
							n.css("left", parseInt((n.width() - i.width - 40) / 2, 10) * -1).appendTo(f);
							break;
						default:
							n.css({
								width: i.width - d.padding * 2,
								paddingLeft: d.padding,
								paddingRight: d.padding
							}).appendTo(f)
						}
					}
				}
				n.hide();
				if (f.is(":visible")) {
					b(E.add(z).add(A)).hide();
					a = f.position();
					r = {
						top: a.top,
						left: a.left,
						width: f.width(),
						height: f.height()
					};
					c = r.width == i.width && r.height == i.height;
					j.fadeTo(d.changeFade, 0.3, function () {
						var g = function () {
								j.html(m.contents()).fadeTo(d.changeFade, 1, S)
							};
						b.event.trigger("fancybox-change");
						j.empty().removeAttr("filter").css({
							"border-width": d.padding,
							width: i.width - d.padding * 2,
							height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2
						});
						if (c) g();
						else {
							B.prop = 0;
							b(B).animate({
								prop: 1
							}, {
								duration: d.changeSpeed,
								easing: d.easingChange,
								step: T,
								complete: g
							})
						}
					})
				} else {
					f.removeAttr("style");
					j.css("border-width", d.padding);
					if (d.transitionIn == "elastic") {
						r = V();
						j.html(m.contents());
						f.show();
						if (d.opacity) i.opacity = 0;
						B.prop = 0;
						b(B).animate({
							prop: 1
						}, {
							duration: d.speedIn,
							easing: d.easingIn,
							step: T,
							complete: S
						})
					} else {
						d.titlePosition == "inside" && y > 0 && n.show();
						j.css({
							width: i.width - d.padding * 2,
							height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2
						}).html(m.contents());
						f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S)
					}
				}
			}
		},
		Y = function () {
			if (d.enableEscapeButton || d.enableKeyboardNav) b(document).bind("keydown.fb", function (a) {
				if (a.keyCode == 27 && d.enableEscapeButton) {
					a.preventDefault();
					b.slideshow.close()
				} else if ((a.keyCode == 37 || a.keyCode == 39) && d.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") {
					a.preventDefault();
					b.slideshow[a.keyCode == 37 ? "prev" : "next"]()
				}
			});
			if (d.showNavArrows) {
				if (d.cyclic && l.length > 1 || p !== 0) z.show();
				if (d.cyclic && l.length > 1 || p != l.length - 1) A.show()
			} else {
				z.hide();
				A.hide()
			}
		},
		S = function () {
			if (!b.support.opacity) {
				j.get(0).style.removeAttribute("filter");
				f.get(0).style.removeAttribute("filter")
			}
			e.autoDimensions && j.css("height", "auto");
			f.css("height", "auto");
			s && s.length && n.show();
			d.showCloseButton && E.show();
			Y();
			d.hideOnContentClick && j.bind("click", b.slideshow.close);
			d.hideOnOverlayClick && u.bind("click", b.slideshow.close);
			b(window).bind("resize.fb", b.slideshow.resize);
			d.centerOnScroll && b(window).bind("scroll.fb", b.slideshow.center);
			if (d.type == "iframe") b('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + e.scrolling + '" src="' + d.href + '"></iframe>').appendTo(j);
			f.show();
			h = false;
			b.slideshow.center();
			d.onComplete(l, p, d);
			var a, c;
			if (l.length - 1 > p) {
				a = l[p + 1].href;
				if (typeof a !== "undefined" && a.match(J)) {
					c = new Image;
					c.src = a
				}
			}
			if (p > 0) {
				a = l[p - 1].href;
				if (typeof a !== "undefined" && a.match(J)) {
					c = new Image;
					c.src = a
				}
			}
		},
		T = function (a) {
			var c = {
				width: parseInt(r.width + (i.width - r.width) * a, 10),
				height: parseInt(r.height + (i.height - r.height) * a, 10),
				top: parseInt(r.top + (i.top - r.top) * a, 10),
				left: parseInt(r.left + (i.left - r.left) * a, 10)
			};
			if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a;
			f.css(c);
			j.css({
				width: c.width - d.padding * 2,
				height: c.height - y * a - d.padding * 2
			})
		},
		U = function () {
			return [b(window).width() - d.margin * 2, b(window).height() - d.margin * 2, b(document).scrollLeft() + d.margin, b(document).scrollTop() + d.margin]
		},
		X = function () {
			var a = U(),
				c = {},
				g = d.autoScale,
				k = d.padding * 2;
			c.width = d.width.toString().indexOf("%") > -1 ? parseInt(a[0] * parseFloat(d.width) / 100, 10) : d.width + k;
			c.height = d.height.toString().indexOf("%") > -1 ? parseInt(a[1] * parseFloat(d.height) / 100, 10) : d.height + k;
			if (g && (c.width > a[0] || c.height > a[1])) if (e.type == "image" || e.type == "swf") {
				g = d.width / d.height;
				if (c.width > a[0]) {
					c.width = a[0];
					c.height = parseInt((c.width - k) / g + k, 10)
				}
				if (c.height > a[1]) {
					c.height = a[1];
					c.width = parseInt((c.height - k) * g + k, 10)
				}
			} else {
				c.width = Math.min(c.width, a[0]);
				c.height = Math.min(c.height, a[1])
			}
			c.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5), 10);
			c.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5), 10);
			return c
		},
		V = function () {
			var a = e.orig ? b(e.orig) : false,
				c = {};
			if (a && a.length) {
				c = a.offset();
				c.top += parseInt(a.css("paddingTop"), 10) || 0;
				c.left += parseInt(a.css("paddingLeft"), 10) || 0;
				c.top += parseInt(a.css("border-top-width"), 10) || 0;
				c.left += parseInt(a.css("border-left-width"), 10) || 0;
				c.width = a.width();
				c.height = a.height();
				c = {
					width: c.width + d.padding * 2,
					height: c.height + d.padding * 2,
					top: c.top - d.padding - 20,
					left: c.left - d.padding - 20
				}
			} else {
				a = U();
				c = {
					width: d.padding * 2,
					height: d.padding * 2,
					top: parseInt(a[3] + a[1] * 0.5, 10),
					left: parseInt(a[2] + a[0] * 0.5, 10)
				}
			}
			return c
		},
		Z = function () {
			if (t.is(":visible")) {
				b("div", t).css("top", L * -40 + "px");
				L = (L + 1) % 12
			} else clearInterval(K)
		};
	b.fn.fancybox = function (a) {
		if (!b(this).length) return this;
		b(this).data("slideshow", b.extend({}, a, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (c) {
			c.preventDefault();
			if (!h) {
				h = true;
				b(this).blur();
				o = [];
				q = 0;
				c = b(this).attr("target") || "";
				if (!c || c == "" || c === "nofollow") o.push(this);
				else {
					o = b("a[target=" + c + "], area[target=" + c + "]");
					q = o.index(this)
				}
				I()
			}
		});
		return this
	};
	b.fancybox = function (a, c) {
		var g;
		if (!h) {
			h = true;
			g = typeof c !== "undefined" ? c : {};
			o = [];
			q = parseInt(g.index, 10) || 0;
			if (b.isArray(a)) {
				for (var k = 0, C = a.length; k < C; k++) if (typeof a[k] == "object") b(a[k]).data("fancybox", b.extend({}, g, a[k]));
				else a[k] = b({}).data("fancybox", b.extend({
					content: a[k]
				}, g));
				o = jQuery.merge(o, a)
			} else {
				if (typeof a == "object") b(a).data("fancybox", b.extend({}, g, a));
				else a = b({}).data("fancybox", b.extend({
					content: a
				}, g));
				o.push(a)
			}
			if (q > o.length || q < 0) q = 0;
			I()
		}
	};
	b.fancybox.showActivity = function () {
		clearInterval(K);
		t.show();
		K = setInterval(Z, 66)
	};
	b.fancybox.hideActivity = function () {
		t.hide()
	};
	b.fancybox.next = function () {
		return b.slideshow.pos(p + 1)
	};
	b.fancybox.prev = function () {
		return b.slideshow.pos(p - 1)
	};
	b.fancybox.pos = function (a) {
		if (!h) {
			a = parseInt(a);
			o = l;
			if (a > -1 && a < l.length) {
				q = a;
				I()
			} else if (d.cyclic && l.length > 1) {
				q = a >= l.length ? 0 : l.length - 1;
				I()
			}
		}
	};
	b.fancybox.cancel = function () {
		if (!h) {
			h = true;
			b.event.trigger("fancybox-cancel");
			N();
			e.onCancel(o, q, e);
			h = false
		}
	};
	b.fancybox.close = function () {
		function a() {
			u.fadeOut("fast");
			n.empty().hide();
			f.hide();
			b.event.trigger("fancybox-cleanup");
			j.empty();
			d.onClosed(l, p, d);
			l = e = [];
			p = q = 0;
			d = e = {};
			h = false
		}
		if (!(h || f.is(":hidden"))) {
			h = true;
			if (d && false === d.onCleanup(l, p, d)) h = false;
			else {
				N();
				b(E.add(z).add(A)).hide();
				b(j.add(u)).unbind();
				b(window).unbind("resize.fb scroll.fb");
				b(document).unbind("keydown.fb");
				j.find("iframe").attr("src", M && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
				d.titlePosition !== "inside" && n.empty();
				f.stop();
				if (d.transitionOut == "elastic") {
					r = V();
					var c = f.position();
					i = {
						top: c.top,
						left: c.left,
						width: f.width(),
						height: f.height()
					};
					if (d.opacity) i.opacity = 1;
					n.empty().hide();
					B.prop = 1;
					b(B).animate({
						prop: 0
					}, {
						duration: d.speedOut,
						easing: d.easingOut,
						step: T,
						complete: a
					})
				} else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a)
			}
		}
	};
	b.fancybox.resize = function () {
		u.is(":visible") && u.css("height", b(document).height());
		b.slideshow.center(true)
	};
	b.fancybox.center = function (a) {
		var c, g;
		if (!h) {
			g = a === true ? 1 : 0;
			c = U();
			!g && (f.width() > c[0] || f.height() > c[1]) || f.stop().animate({
				top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding)),
				left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - j.width() - 40) * 0.5 - d.padding))
			}, typeof a == "number" ? a : 200)
		}
	};
	b.fancybox.init = function () {
		if (!b("#slideshow-wrap").length) {
			b("body").append(m = b('<div id="fancybox-tmp"></div>'), t = b('<div id="fancybox-loading"><div></div></div>'), u = b('<div id="slideshow-overlay"></div>'), f = b('<div id="slideshow-wrap"></div>'));
			D = b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
			D.append(j = b('<div id="slideshow-content"></div>'), E = b('<a id="fancybox-close"></a>'), n = b('<div id="fancybox-title"></div>'), z = b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), A = b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
			E.click(b.slideshow.close);
			t.click(b.slideshow.cancel);
			z.click(function (a) {
				a.preventDefault();
				b.slideshow.prev()
			});
			A.click(function (a) {
				a.preventDefault();
				b.slideshow.next()
			});
			b.fn.mousewheel && f.bind("mousewheel.fb", function (a, c) {
				if (h) a.preventDefault();
				else if (b(a.target).get(0).clientHeight == 0 || b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight) {
					a.preventDefault();
					b.slideshow[c > 0 ? "prev" : "next"]()
				}
			});
			b.support.opacity || f.addClass("fancybox-ie");
			if (M) {
				t.addClass("fancybox-ie6");
				f.addClass("fancybox-ie6");
				b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)
			}
		}
	};
	b.fn.fancybox.defaults = {
		padding: 10,
		margin: 40,
		opacity: false,
		modal: false,
		cyclic: false,
		scrolling: "auto",
		width: 560,
		height: 340,
		autoScale: true,
		autoDimensions: true,
		centerOnScroll: false,
		ajax: {},
		swf: {
			wmode: "transparent"
		},
		hideOnOverlayClick: true,
		hideOnContentClick: false,
		overlayShow: true,
		overlayOpacity: 0.7,
		overlayColor: "#000",
		titleShow: true,
		titlePosition: "float",
		titleFormat: null,
		titleFromAlt: false,
		transitionIn: "fade",
		transitionOut: "fade",
		speedIn: 300,
		speedOut: 300,
		changeSpeed: 300,
		changeFade: "fast",
		easingIn: "swing",
		easingOut: "swing",
		showCloseButton: true,
		showNavArrows: true,
		enableEscapeButton: true,
		enableKeyboardNav: true,
		onStart: function () {},
		onCancel: function () {},
		onComplete: function () {},
		onCleanup: function () {},
		onClosed: function () {},
		onError: function () {}
	};
	b(document).ready(function () {
		b.fancybox.init()
	})
})(jQuery);
/* tipsy, facebook style tooltips for jquery
* version 1.0.0a
* (c) 2008-2010 jason frame [jason@onehackoranother.com]
* released under the MIT license
*/
(function($){function maybeCall(a,b){return(typeof a=='function')?(a.call(b)):a};function Tipsy(a,b){this.$element=$(a);this.options=b;this.enabled=true;this.fixTitle()};Tipsy.prototype={show:function(){var a=this.getTitle();if(a&&this.enabled){var b=this.tip();b.find('.tipsy-inner')[this.options.html?'html':'text'](a);b[0].className='tipsy';b.remove().css({top:0,left:0,visibility:'hidden',display:'block'}).prependTo(document.body);var c=$.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var d=b[0].offsetWidth,actualHeight=b[0].offsetHeight,gravity=maybeCall(this.options.gravity,this.$element[0]);var e;switch(gravity.charAt(0)){case'n':e={top:c.top+c.height+this.options.offset,left:c.left+c.width/2-d/2};break;case's':e={top:c.top-actualHeight-this.options.offset,left:c.left+c.width/2-d/2};break;case'e':e={top:c.top+c.height/2-actualHeight/2,left:c.left-d-this.options.offset};break;case'w':e={top:c.top+c.height/2-actualHeight/2,left:c.left+c.width+this.options.offset};break}if(gravity.length==2){if(gravity.charAt(1)=='w'){e.left=c.left+c.width/2-15}else{e.left=c.left+c.width/2-d+15}}b.css(e).addClass('tipsy-'+gravity);b.find('.tipsy-arrow')[0].className='tipsy-arrow tipsy-arrow-'+gravity.charAt(0);if(this.options.className){b.addClass(maybeCall(this.options.className,this.$element[0]))}if(this.options.fade){b.stop().css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:this.options.opacity})}else{b.css({visibility:'visible',opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){$(this).remove()})}else{this.tip().remove()}},fixTitle:function(){var a=this.$element;if(a.attr('title')||typeof(a.attr('original-title'))!='string'){a.attr('original-title',a.attr('title')||'').removeAttr('title')}},getTitle:function(){var a,$e=this.$element,o=this.options;this.fixTitle();var a,o=this.options;if(typeof o.title=='string'){a=$e.attr(o.title=='title'?'original-title':o.title)}else if(typeof o.title=='function'){a=o.title.call($e[0])}a=(''+a).replace(/(^\s*|\s*$)/,"");return a||o.fallback},tip:function(){if(!this.$tip){this.$tip=$('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};$.fn.tipsy=function(c){if(c===true){return this.data('tipsy')}else if(typeof c=='string'){var d=this.data('tipsy');if(d)d[c]();return this}c=$.extend({},$.fn.tipsy.defaults,c);function get(a){var b=$.data(a,'tipsy');if(!b){b=new Tipsy(a,$.fn.tipsy.elementOptions(a,c));$.data(a,'tipsy',b)}return b}function enter(){var a=get(this);a.hoverState='in';if(c.delayIn==0){a.show()}else{a.fixTitle();setTimeout(function(){if(a.hoverState=='in')a.show()},c.delayIn)}};function leave(){var a=get(this);a.hoverState='out';if(c.delayOut==0){a.hide()}else{setTimeout(function(){if(a.hoverState=='out')a.hide()},c.delayOut)}};if(!c.live)this.each(function(){get(this)});if(c.trigger!='manual'){var e=c.live?'live':'bind',eventIn=c.trigger=='hover'?'mouseenter':'focus',eventOut=c.trigger=='hover'?'mouseleave':'blur';this[e](eventIn,enter)[e](eventOut,leave)}return this};$.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:false,fallback:'',gravity:'n',html:false,live:false,offset:0,opacity:0.8,title:'title',trigger:'hover'};$.fn.tipsy.elementOptions=function(a,b){return $.metadata?$.extend({},b,$(a).metadata()):b};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/6)?'s':'n'};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/6)?'e':'w'};$.fn.tipsy.autoBounds=function(b,c){return function(){var a={ns:c[0],ew:(c.length>1?c[1]:false)},boundTop=$(document).scrollTop()+b,boundLeft=$(document).scrollLeft()+b,$this=$(this);if($this.offset().top<boundTop)a.ns='n';if($this.offset().left<boundLeft)a.ew='w';if($(window).width()+$(document).scrollLeft()-$this.offset().left<b)a.ew='e';if($(window).height()+$(document).scrollTop()-$this.offset().top<b)a.ns='s';return a.ns+(a.ew?a.ew:'')}}})(jQuery);
jQuery(document).ready(function ($) {
    $(".fadeimg, .flickr_badge_image img").hover(function () {
        $(this).animate({
            opacity: .7
        }, 300);
    }, function () {
        $(this).animate({
            opacity: 1
        }, 200);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    var slSpeed = $(document).height() - $(window).height();
    $("#scroll-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, slSpeed);
        return false;
    });
    $(".tooltip").tipsy({
        delayIn: 200,
        delayOut: 300,
        offset: 3,
        gravity: $.fn.tipsy.autoNS
    });
    $(".toggle-title").toggle(function () {
        $(this).addClass("collapse").removeClass("expand");
        $(this).next().slideUp(300);
    }, function () {
        $(this).addClass("expand").removeClass("collapse");
        $(this).next().slideDown(300);
    });
});
(function ($) {
    $("#scroll-top").hide();
    var tall = $("#full-page").height();
    $(".sidebar").css({
        "height": tall
    });
})(jQuery);
jQuery(document).ready(function ($) {
    $(".slideshow").fancybox({
        "overlayShow": true,
        "overlayOpacity": .7,
        "overlayColor": "#000000",
        "transitionIn": "elastic",
        "transitionOut": "elastic",
        "speedIn": 300,
        "speedOut": 300,
        "changeSpeed": 300,
        "easingIn": "easeInCubic",
        "easingOut": "easeOutCubic"
    });
});
jQuery(document).ready(function ($) {
    $("#contactForm").submit(function (e) {
        contactHuman = $("#contactHuman").val();
        contactName = $("#contactName").val();
        contactEmail = $("#contactEmail").val();
        contactPhone = $("#contactPhone").val();
        contactMessage = $("#contactMessage").val();
        $("#contactName, #contactEmail, #contactPhone, #contactMessage").click(function () {
            $(".contact-error").remove();
        });
        $.ajax({
            url: "ajax_contact.php",
            type: "POST",
            data: {
                contactHuman: contactHuman,
                contactName: contactName,
                contactEmail: contactEmail,
                contactPhone: contactPhone,
                contactMessage: contactMessage,
                contactValid: "contactValidation"
            },
            dataType: "json",
            beforeSend: function () {
                $("#contactSubmit").hide();
                $("#contactSubmit").after('<span class="ajax-loading"></span>');
            },
            success: function (response) {
                if (response.success != false) {
                    $("#contactForm").fadeOut(300, function () {
                        $("#contactForm").before('<h2>Thanks! <span>' + contactName + '</span></h2><p>' + response.congrate + '</p>');
                    });
                } else {
                    $(".contact-error").remove();
                    $("#contactForm").after('<p class="contact-error">' + response.error + '</p>');
                }
            },
            complete: function () {
                $("#contactSubmit").next("span").remove();
                $("#contactSubmit").show();
            }
        });
        e.preventDefault();
    });
});
jQuery(document).ready(function ($) {
    $("#ajax-contact").submit(function (e) {
        ajaxHuman = $("#ajaxHuman").val();
        ajaxName = $("#ajaxName").val();
        ajaxEmail = $("#ajaxEmail").val();
        ajaxMessage = $("#ajaxMessage").val();
        $("#ajaxName, #ajaxEmail, #ajaxMessage").click(function () {
            $(".ajax-error").remove();
        });
        $.ajax({
            url: "ajax_contact.php",
            type: "POST",
            data: {
                ajaxHuman: ajaxHuman,
                ajaxName: ajaxName,
                ajaxEmail: ajaxEmail,
                ajaxMessage: ajaxMessage,
                ajaxValid: "pleasevalidate"
            },
            dataType: "json",
            beforeSend: function () {
                $("#ajaxQuick").hide();
                $("#ajaxQuick").after('<span class="ajax-loading"></span>');
            },
            success: function (response) {
                if (response.success != false) {
                    $("#ajax-contact").fadeOut(300, function () {
                        $("#ajax-contact").before('<h2>Thanks! <span>' + ajaxName + '</span></h2><p>' + response.congrate + '</p>');
                    });
                } else {
                    $(".ajax-error").remove();
                    $("#ajax-contact").after('<p class="ajax-error">' + response.error + '</p>');
                }
            },
            complete: function () {
                $("#ajaxQuick").next("span").remove();
                $("#ajaxQuick").show();
            }
        });
        e.preventDefault();
    });
});
/*!
 * Moving Boxes v2.3
 * by Chris Coyier
 * http://css-tricks.com/moving-boxes/
 */
;(function($){
	"use strict";
	$.slideshow = function(el, options){
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var o, base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el).addClass('slideshow-slider');
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data('slideshow', base);

		base.init = function(){
			base.options = o = $.extend({}, $.slideshow.defaultOptions, options);

			// Setup formatting (to reduce the amount of initial HTML)
			base.$el.wrap('<div class="slideshow slideshow-wrapper"><div class="slideshow-scroll" /></div>');

			// defaults
			base.$window = base.$el.parent(); // slideshow-scroll
			base.$wrap = base.$window.parent() // slideshow-wrapper
				.prepend('<a class="slideshow-scrollButtons slideshow-left"></a>')
				.append('<a class="slideshow-scrollButtons slideshow-right"></a><div class="slideshow-left-shadow"></div><div class="slideshow-right-shadow"></div>');

			base.$panels = base.$el.children().addClass('slideshow-panel');
			base.runTime = $('.slideshow-slider').index(base.$el) + 1; // Get index (run time) of this slider on the page
			base.regex = new RegExp('slider' + base.runTime + '=(\\d+)', 'i'); // hash tag regex

			base.initialized = false;
			base.currentlyMoving = false;
			base.curPanel = (o.initAnimation) ? 1 : base.getHash() || o.startPanel;
			// save original slider width
			base.width = (o.width) ? parseInt(o.width,10) : base.$el.width();
			// save panel width, o.panelWidth originally a fraction (0.5 of o.width) if defined, or get first panel width
			// now can be set after initialization to resize using fraction (value <= 2) or px (all values > 2)
			base.pWidth = (o.panelWidth) ? (o.panelWidth <=2 ? o.panelWidth * base.width : o.panelWidth) : base.$panels.eq(0).width();

			// Set up click on left/right arrows
			base.$left = base.$wrap.find('.slideshow-left').click(function(){
				base.goBack();
				return false;
			});
			base.$right = base.$wrap.find('.slideshow-right').click(function(){
				base.goForward();
				return false;
			});
			// code to run to update MovingBoxes when the number of panels change
			base.update(false);
			// set current panel
			//if (o.initAnimation) { base.change(base.curPanel, {}, false); }
			// go to clicked panel
			base.$el.delegate('.slideshow-panel', 'click', function(e){
				if (!$(this).hasClass(o.currentPanel)) {
					e.preventDefault();  // prevent non-current panel links from working
					base.change( base.$panels.index($(this)) + base.adj, {}, true );
				}
			});

			// Activate moving box on click or when an internal link obtains focus
			base.$wrap.click(function(){
				if (!base.$wrap.hasClass('mb-active-slider')) {
					base.active();
				}
			});
			base.$panels.delegate('a', 'focus' ,function(e){
				e.preventDefault();
				// focused link centered in moving box
				var loc = base.$panels.index($(this).closest('.slideshow-panel')) + base.adj;
				if (loc !== base.curPanel){
					base.change( loc, {}, true );
				}
			});

			// Add keyboard navigation
			$(document).keyup(function(e){
				// ignore arrow/space keys if inside a form element
				if (e.target.tagName.match('TEXTAREA|INPUT|SELECT')) { return; }
				switch (e.which) {
					case 39: case 32: // right arrow & space
						if (base.$wrap.is('.mb-active-slider')){
							base.goForward();
						}
						break;
					case 37: // left arrow
						if (base.$wrap.is('.mb-active-slider')){
							base.goBack();
						}
						break;
				}
			});

			// Bind Events
			$.each('preinit initialized initChange beforeAnimation completed'.split(' '), function(i,evt){
				if ($.isFunction(o[evt])){
					base.$el.bind(evt + '.slideshow', o[evt]);
				}
			});

			base.$el.trigger( 'preinit.slideshow', [ base, base.curPanel ] );

		};

		// update the panel, flag is used to prevent events from firing
		base.update = function(flag, callback){

			// Infinite loop
			base.$el.children('.cloned').remove();
			base.$panels = base.$el.children();
			base.adj = (o.wrap && base.$panels.length > 1) ? 0 : 1; // count adjustment for infinite panels

			base.width = (o.width) ? parseInt(o.width,10) : base.width;
			base.$wrap.css('width', base.width); // set wrapper width

			if (o.wrap && base.$panels.length > 1) {
				base.$el.prepend( base.$panels.filter(':last').clone().addClass('cloned') );
				base.$el.append( base.$panels.filter(':first').clone().addClass('cloned') );
				base.$el.find('.cloned').each(function(){
					// disable all focusable elements in cloned panels to prevent shifting the panels by tabbing
					$(this).find('a,input,textarea,select,button,area').removeAttr('name').attr('disabled', 'disabled');
					$(this).find('[id]').andSelf().removeAttr('id');
				});
			}

			// Set up panes & content sizes
			// defined $panels again to include cloned panels
			base.$panels = base.$el.children()
				.addClass('slideshow-panel')
				// inner wrap of each panel
				.each(function(){
					if ($(this).find('.slideshow-inside').length === 0) {
						$(this).wrapInner('<div class="slideshow-inside" />');
					}
				});
			base.totalPanels = base.$panels.filter(':not(.cloned)').length; // don't include cloned panels in total

			base.setSizes(flag);

			base.buildNav();

			base.change(base.curPanel, callback, flag); // initialize from first panel... then scroll to start panel

			// check panel height after all images load
			base.imagesLoaded(function(){
				base.setSizes(false);
				base.change(base.curPanel, {}, false);

				// animate to chosen start panel - starting from the first panel makes it look better
				if (!base.initialized){
					setTimeout(function(){
						base.change(base.getHash() || o.startPanel);
						base.initialized = true;
						base.$el.trigger( 'initialized.slideshow', [ base, base.curPanel ] );
					}, o.speed * 2 );
				}

			});

		};

		base.setSizes = function(flag){
			// include padding & margins around the panels
			base.padding = parseInt(base.$panels.css('padding-left'), 10) + parseInt(base.$panels.css('margin-left'), 10);

			// save 'cur' numbers (current larger panel size), use stored sizes if they exist
			base.curWidth = (o.panelWidth) ? (o.panelWidth <=2 ? o.panelWidth * base.width : o.panelWidth) : base.pWidth;
			// save 'reg' (reduced size) numbers
			base.regWidth = base.curWidth * o.reducedSize;
			// set image heights so base container height is correctly set
			base.$panels.css({ width: base.curWidth, fontSize: '1em' }); // make all panels big
			// save each panel height... script will resize container as needed
			// make sure current panel css is applied before measuring
			base.$panels.eq(base.curPanel - base.adj).addClass(o.currentPanel);
			base.heights = base.$panels.css('height','auto').map(function(i,e){ return $(e).outerHeight(true); }).get();

			base.returnToNormal(base.curPanel, 0); // resize new panel, animation time
			base.growBigger(base.curPanel, 0, flag);
			base.updateArrows(base.curPanel);

			// make base container wide enough to contain all the panels
			base.$el.css({
				position : 'absolute',
				// add a bit more width to each box (base.padding *2; then add 1/2 overall width in case only one panel exists)
				width    : (base.curWidth + base.padding * 2) * base.$panels.length + (base.width - base.curWidth) / 2,
				height   : Math.max.apply( this, base.heights ) + 10,
				// add padding so scrollLeft = 0 centers the left-most panel (needed because scrollLeft cannot be < 0)
				'padding-left' : (base.width - base.curWidth) / 2
			});
			base.$window.css({ height : (o.fixedHeight) ? Math.max.apply( this, base.heights ) : base.heights[base.curPanel - base.adj] });
		};

		// Creates the numbered navigation links
		base.buildNav = function() {
			if (base.$nav) {
				base.$nav.find('.mb-links').empty();
			} else {
				base.$nav = $('<div class="mb-controls"></span></div>').appendTo(base.$wrap);
			}
			if (o.buildNav && base.totalPanels > 1) {
				var t, j, a = '', $a;
				base.$panels.filter(':not(.cloned)').each(function(i){
					j = i + 1;
					a = '<a class="mb-link slideshow-panel' + j + '" href="#"></a>';
					$a = $(a);
					// If a formatter function is present, use it
					if ($.isFunction(o.navFormatter)) {
						t = o.navFormatter(j, $(this));
						if (typeof(t) === "string") {
							$a.html(t);
						} else {
							$a = $('<a/>', t);
						}
					} else {
						$a.html(j);
					}
					$a
					.appendTo(base.$nav.find('.mb-links'))
					.addClass('mb-link slideshow-panel' + j)
					.data('index', j);
				});
				base.$nav
					.find('a.mb-link').bind('click', function() {
						base.change( $(this).data('index') );
						return false;
					});
			}
		};

		// Resize panels to normal
		base.returnToNormal = function(num, time){
			var panels = base.$panels.not(':eq(' + (num - base.adj) + ')').removeClass(o.currentPanel);
			if (o.reducedSize === 1) {
				panels.css({ width: base.regWidth }); // excluding fontsize change to prevent video flicker
			} else {
				panels.stop(true,false).animate({ width: base.regWidth, fontSize: o.reducedSize + 'em' }, (time === 0) ? 0 : o.speed);
			}
		};

		// Zoom in on selected panel
		base.growBigger = function(num, time, flag){
			var panels = base.$panels.eq(num - base.adj);
			if (o.reducedSize === 1) {
				panels.css({ width: base.curWidth }); // excluding fontsize change to prevent video flicker
				// time delay prevents click outer panel from following links - fixes issue #67
				setTimeout(function(){
					base.completed(num, flag);
				}, (time === 0) ? 0 : o.speed);
			} else {
				panels.stop(true,false).animate({ width: base.curWidth, fontSize: '1em' }, (time === 0) ? 0 : o.speed, function(){
					// completed event trigger
					// even though animation is not queued, trigger is here because it is the last animation to complete
					base.completed(num, flag);
				});
			}
		};

		base.setWrap = function(panel){
			base.growBigger(panel, 0, false);
			var leftValue = base.$panels.eq(panel).position().left - (base.width - base.curWidth) / 2 + base.padding;
			base.$window.scrollLeft(leftValue);
		};

		base.completed = function(num, flag){
			// add current panel class after animating in case it has sizing parameters
			var loc = base.$panels.eq(num - base.adj);
			if (!loc.hasClass('cloned')) { loc.addClass(o.currentPanel); }
			if (flag !== false) { base.$el.trigger( 'completed.slideshow', [ base, num ] ); }
		};

		// go forward/back
		base.goForward = function(callback){
			if (base.initialized) {
				base.change(base.curPanel + 1, callback);
			}
		};

		base.goBack = function(callback){
			if (base.initialized) {
				base.change(base.curPanel - 1, callback);
			}
		};

		// Change view to display selected panel
		base.change = function(curPanel, callback, flag){

			if (base.totalPanels < 1) {
				if (typeof(callback) === 'function') { callback(base); }
				return;
			}
			var ani, leftValue, t, wrapped = false;
			flag = flag !== false;
			t = (flag) ? o.speed : 0;

			// check if curPanel is an id or class name
			if (/^[#|.]/.test(curPanel) && $(curPanel).length) {
				curPanel = $(curPanel).closest('.slideshow-panel').index() + base.adj;
			} else {

				// make sure it's a number and not a string
				curPanel = parseInt(curPanel, 10);
			}

			if (base.initialized && flag) {
				// make this moving box active
				if (!base.$wrap.hasClass('mb-active-slider')) { base.active(); }
				// initChange event - has extra parameter with targeted panel (not cleaned)
				base.$el.trigger( 'initChange.slideshow', [ base, curPanel ] );
			}

			// Make infinite scrolling work
			if (o.wrap) {
				if (curPanel > base.totalPanels) {
					wrapped = true;
					curPanel = 1;
					base.returnToNormal(0, 0);
					base.setWrap(0);
				} else if (curPanel === 0) {
					wrapped = false;
					curPanel = base.totalPanels;
					base.setWrap(curPanel + 1);
				}
			}

			if ( curPanel < base.adj ) { curPanel = (o.wrap) ? base.totalPanels : 1; }
			if ( curPanel > base.totalPanels - base.adj ) { curPanel = (o.wrap) ? 1 : base.totalPanels; }

			// abort if panel is already animating
			// animation callback needed to clear this flag, but there is no animation before base.initialized is set
			if (base.curPanel !== curPanel && (!base.currentlyMoving || !base.initialized)) {
				// set animation flag; animation callback will clear this flag
				base.currentlyMoving = !o.stopAnimation;

				// center panel in scroll window
				base.$curPanel = base.$panels.eq(curPanel - base.adj);
				leftValue = base.$curPanel.position().left - (base.width - base.curWidth) / 2 + base.padding;
				// when scrolling right, add the difference of the larger current panel width
				if (curPanel > base.curPanel || wrapped) { leftValue -= ( base.curWidth - base.regWidth ); }
				ani = (o.fixedHeight) ? { scrollLeft : leftValue } : { scrollLeft: leftValue, height: base.heights[curPanel - base.adj] };
				base.curPanel = curPanel;
				// before animation trigger
				if (base.initialized && flag) { base.$el.trigger( 'beforeAnimation.slideshow', [ base, curPanel ] ); }

				if (o.delayBeforeAnimate) {
					// delay starting slide animation
					setTimeout(function(){
						base.animateBoxes(curPanel, ani, t, flag, callback);
					}, parseInt(o.delayBeforeAnimate, 10) || 0);
				} else {
					base.animateBoxes(curPanel, ani, t, flag, callback);
				}
			} else {
				base.endAnimation();
			}
		};

		base.animateBoxes = function(curPanel, ani, t, flag, callback){
			// animate the panels
			base.$window.scrollTop(0).stop(true,false).animate( ani,
				{
					queue    : false,
					duration : t,
					easing   : o.easing,
					complete : function(){
						if (base.initialized) {
							base.$window.scrollTop(0); // Opera fix - otherwise, it moves the focus link to the middle of the viewport
						}
						base.currentlyMoving = false;
						if (typeof(callback) === 'function') { callback(base); }
					}
				}
			);

			base.returnToNormal(curPanel, t);
			base.growBigger(curPanel, t, flag);
			base.updateArrows(curPanel);
			if (o.hashTags && base.initialized) { base.setHash(curPanel); }
			base.endAnimation();

		};

		base.endAnimation = function(){
			// Update navigation links
			if (o.buildNav && base.$nav.length) {
				base.$nav.find('a.mb-link')
					.removeClass(o.currentPanel)
					.eq(base.curPanel - 1).addClass(o.currentPanel);
			}
		};

		base.updateArrows = function(cur){
			base.$left.toggleClass(o.disabled, !o.wrap && cur === base.adj);
			base.$right.toggleClass(o.disabled, !o.wrap && (cur === base.totalPanels || base.totalPanels === 0));
		};

		// This method tries to find a hash that matches an ID and slider-X
		// If either found, it tries to find a matching item
		// If that is found as well, then it returns the page number
		base.getHash = function(){
			var h = window.location.hash,
				i = h.indexOf('&'),
				n = h.match(base.regex);
			// test for "/#/" or "/#!/" used by the jquery address plugin - $('#/') breaks jQuery
			if (n === null && !/^#&/.test(h) && !/#!?\//.test(h)) {
				// #quote2&panel1-3&panel3-3
				h = h.substring(0, (i >= 0 ? i : h.length));
				// ensure the element is in the same slider
				n = ($(h).length && $(h).closest('.slideshow-slider')[0] === base.el) ? $(h).closest('.slideshow-panel').index() + base.adj : null;
			} else if (n !== null) {
				// #&panel1-3&panel3-3
				n = (o.hashTags) ? parseInt(n[1],10) : null;
			}
			return n;
		};

		// set hash tags
		base.setHash = function(n){
			var s = 'slider' + base.runTime + "=",
				h = window.location.hash;
			if ( typeof h !== 'undefined' ) {
				window.location.hash = (h.indexOf(s) > 0) ? h.replace(base.regex, s + n) : h + "&" + s + n;
			}
		};

		// Make moving box active (for keyboard navigation)
		base.active = function(){
			$('.mb-active-slider').removeClass('mb-active-slider');
			base.$wrap.addClass('mb-active-slider');
		};

		// get: var currentPanel = $('.slider').data('slideshow').currentPanel();  // returns # of currently selected/enlarged panel
		// set: var currentPanel = $('.slider').data('slideshow').currentPanel(2, function(){ alert('done!'); }); // returns and scrolls to 2nd panel
		base.currentPanel = function(panel, callback){
			if (typeof(panel) !== 'undefined') {
				base.change(panel, callback); // parse in case someone sends a string
			}
			return base.curPanel;
		};

		// based on https://github.com/Mottie/imagesLoaded plugin
		base.imagesLoaded = function(callback, img) {
			var i, ic,
				c = true, // complete flag
				t = img ? $(img) : base.$panels.find('img'),
				l = t.length;
			img = img || []; // array of images that didn't complete
			for ( i = 0; i < l; i++ ) {
				if (t[i].tagName === "IMG") {
					// IE: fileSize property = -1 before image has loaded & if image load error, so if false is returned
					// 10x, then just assume it's an error & call it complete - it's what Firefox & webkit does
					ic = ('fileSize' in t[i] && t[i].fileSize < 0 && t[i].count > 10) ? true : t[i].complete;
					// complete flag, checks previous flag status, complete flag & image height
					// image height may need to be > 20 (or whatever the line-height is) because the alt text is included
					c = (c && ic && t[i].height !== 0); // complete flag
					// save non-complete images for next iteration
					if (ic === false) {
						img.push(t[i]);
						// iteration count for IE
						t[i].count = (t[i].count || 0) + 1;
					}
				}
			}
			if (c) {
				// all complete, run the callback
				if (typeof callback === "function") { callback(); }
			} else {
				// some images not loaded, rinse & repeat
				setTimeout(function(){
					base.imagesLoaded(callback, img);
				}, 200);
			}
		};

		// Run initializer
		base.init();
	};

	$.slideshow.defaultOptions = {
		// Appearance
		startPanel   : 1,         // start with this panel
		reducedSize  : 0.8,       // non-current panel size: 80% of panel size
		fixedHeight  : false,     // if true, slider height set to max panel height; if false, slider height will auto adjust.
		// width and panelWidth are now set in the css, but these options still work for backwards compatibility
		// width        : 800,       // overall width of slideshow
		// panelWidth   : 500,       // current panel width adjusted to 50% of overall width

		// Behaviour
		initAnimation: true,      // if true, slideshow will initialize, then animate into the starting slide (if not the first slide)
		stopAnimation: false,     // if true, slideshow will force the animation to complete immediately, if the user selects the next panel
		hashTags     : true,      // if true, hash tags are enabled
		wrap         : false,     // if true, the panel will "wrap" (it really rewinds/fast forwards) at the ends
		buildNav     : false,     // if true, navigation links will be added
		navFormatter : null,      // function which returns the navigation text for each panel
		easing       : 'swing',   // anything other than "linear" or "swing" requires the easing plugin

		// Times
		speed              : 500, // animation time in milliseconds
		delayBeforeAnimate : 0,   // time to delay in milliseconds before MovingBoxes animates to the selected panel

		// Selectors & classes
		currentPanel : 'current', // current panel class
		tooltipClass : 'tooltip', // added to the navigation, but the title attribute is blank unless the link text-indent is negative
		disabled     : 'disabled',// class added to arrows that are disabled (left arrow when on first panel, right arrow on last panel)

		// Callbacks
		preinit         : null,   // callback after the basic MovingBoxes structure has been built; before "initialized"
		initialized     : null,   // callback when MovingBoxes has completed initialization; all images loaded
		initChange      : null,   // callback upon change panel initialization
		beforeAnimation : null,   // callback before any animation occurs
		completed       : null    // callback after animation completes
	};

	$.fn.slideshow = function(options, callback, flag){
		var num, mb;
		return this.each(function(){
			mb = $(this).data('slideshow');
			// initialize the slider but prevent multiple initializations
			if ((typeof(options)).match('object|undefined')){
				if (mb) {
					mb.update();
				} else {
					(new $.slideshow(this, options));
				}
			} else if (/\d/.test(options) && !isNaN(options) && mb) {
				num = (typeof(options) === "number") ? options : parseInt($.trim(options),10); // accepts "  4  "
				// ignore out of bound panels
				if ( num >= 1 && num <= mb.totalPanels ) {
					// page #, autoplay, one time callback, if flag is false then no events triggered and animation time = 0
					mb.change(num, callback, flag);
				}
			}
		});
	};

	// Return the slideshow object
	$.fn.getMovingBoxes = function(){
		return this.data('slideshow');
	};

})(jQuery);
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;
(function (b) {
	var m, t, u, f, D, j, E, n, z, A, q = 0,
		e = {},
		o = [],
		p = 0,
		d = {},
		l = [],
		G = null,
		v = new Image,
		J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
		W = /[^\.]\.(swf)\s*$/i,
		K, L = 1,
		y = 0,
		s = "",
		r, i, h = false,
		B = b.extend(b("<div/>")[0], {
			prop: 0
		}),
		M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest,
		N = function () {
			t.hide();
			v.onerror = v.onload = null;
			G && G.abort();
			m.empty()
		},
		O = function () {
			if (false === e.onError(o, q, e)) {
				t.hide();
				h = false
			} else {
				e.titleShow = false;
				e.width = "auto";
				e.height = "auto";
				m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
				F()
			}
		},
		I = function () {
			var a = o[q],
				c, g, k, C, P, w;
			N();
			e = b.extend({}, b.fn.fancybox.defaults, typeof b(a).data("fancybox") == "undefined" ? e : b(a).data("fancybox"));
			w = e.onStart(o, q, e);
			if (w === false) h = false;
			else {
				if (typeof w == "object") e = b.extend(e, w);
				k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || "";
				if (a.nodeName && !e.orig) e.orig = b(a).children("img:first").length ? b(a).children("img:first") : b(a);
				if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt");
				c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null;
				if (/^(?:javascript)/i.test(c) || c == "#") c = null;
				if (e.type) {
					g = e.type;
					if (!c) c = e.content
				} else if (e.content) g = "html";
				else if (c) g = c.match(J) ? "image" : c.match(W) ? "swf" : b(a).hasClass("iframe") ? "iframe" : c.indexOf("#") === 0 ? "inline" : "ajax";
				if (g) {
					if (g == "inline") {
						a = c.substr(c.indexOf("#"));
						g = b(a).length > 0 ? "inline" : "ajax"
					}
					e.type = g;
					e.href = c;
					e.title = k;
					if (e.autoDimensions) if (e.type == "html" || e.type == "inline" || e.type == "ajax") {
						e.width = "auto";
						e.height = "auto"
					} else e.autoDimensions = false;
					if (e.modal) {
						e.overlayShow = true;
						e.hideOnOverlayClick = false;
						e.hideOnContentClick = false;
						e.enableEscapeButton = false;
						e.showCloseButton = false
					}
					e.padding = parseInt(e.padding, 10);
					e.margin = parseInt(e.margin, 10);
					m.css("padding", e.padding + e.margin);
					b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () {
						b(this).replaceWith(j.children())
					});
					switch (g) {
					case "html":
						m.html(e.content);
						F();
						break;
					case "inline":
						if (b(a).parent().is("#slideshow-content") === true) {
							h = false;
							break
						}
						b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup", function () {
							b(this).replaceWith(j.children())
						}).bind("fancybox-cancel", function () {
							b(this).replaceWith(m.children())
						});
						b(a).appendTo(m);
						F();
						break;
					case "image":
						h = false;
						b.fancybox.showActivity();
						v = new Image;
						v.onerror = function () {
							O()
						};
						v.onload = function () {
							h = true;
							v.onerror = v.onload = null;
							e.width = v.width;
							e.height = v.height;
							b("<img />").attr({
								id: "fancybox-img",
								src: v.src,
								alt: e.title
							}).appendTo(m);
							Q()
						};
						v.src = c;
						break;
					case "swf":
						e.scrolling = "no";
						C = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + c + '"></param>';
						P = "";
						b.each(e.swf, function (x, H) {
							C += '<param name="' + x + '" value="' + H + '"></param>';
							P += " " + x + '="' + H + '"'
						});
						C += '<embed src="' + c + '" type="application/x-shockwave-flash" width="' + e.width + '" height="' + e.height + '"' + P + "></embed></object>";
						m.html(C);
						F();
						break;
					case "ajax":
						h = false;
						b.fancybox.showActivity();
						e.ajax.win = e.ajax.success;
						G = b.ajax(b.extend({}, e.ajax, {
							url: c,
							data: e.ajax.data || {},
							error: function (x) {
								x.status > 0 && O()
							},
							success: function (x, H, R) {
								if ((typeof R == "object" ? R : G).status == 200) {
									if (typeof e.ajax.win == "function") {
										w = e.ajax.win(c, x, H, R);
										if (w === false) {
											t.hide();
											return
										} else if (typeof w == "string" || typeof w == "object") x = w
									}
									m.html(x);
									F()
								}
							}
						}));
						break;
					case "iframe":
						Q()
					}
				} else O()
			}
		},
		F = function () {
			var a = e.width,
				c = e.height;
			a = a.toString().indexOf("%") > -1 ? parseInt((b(window).width() - e.margin * 2) * parseFloat(a) / 100, 10) + "px" : a == "auto" ? "auto" : a + "px";
			c = c.toString().indexOf("%") > -1 ? parseInt((b(window).height() - e.margin * 2) * parseFloat(c) / 100, 10) + "px" : c == "auto" ? "auto" : c + "px";
			m.wrapInner('<div style="width:' + a + ";height:" + c + ";overflow: " + (e.scrolling == "auto" ? "auto" : e.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
			e.width = m.width();
			e.height = m.height();
			Q()
		},
		Q = function () {
			var a, c;
			t.hide();
			if (f.is(":visible") && false === d.onCleanup(l, p, d)) {
				b.event.trigger("fancybox-cancel");
				h = false
			} else {
				h = true;
				b(j.add(u)).unbind();
				b(window).unbind("resize.fb scroll.fb");
				b(document).unbind("keydown.fb");
				f.is(":visible") && d.titlePosition !== "outside" && f.css("height", f.height());
				l = o;
				p = q;
				d = e;
				if (d.overlayShow) {
					u.css({
						"background-color": d.overlayColor,
						opacity: d.overlayOpacity,
						cursor: d.hideOnOverlayClick ? "pointer" : "auto",
						height: b(document).height()
					});
					if (!u.is(":visible")) {
						M && b("select:not(#fancybox-tmp select)").filter(function () {
							return this.style.visibility !== "hidden"
						}).css({
							visibility: "hidden"
						}).one("fancybox-cleanup", function () {
							this.style.visibility = "inherit"
						});
						u.show()
					}
				} else u.hide();
				i = X();
				s = d.title || "";
				y = 0;
				n.empty().removeAttr("style").removeClass();
				if (d.titleShow !== false) {
					if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d);
					else a = s && s.length ? d.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + s + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + d.titlePosition + '">' + s + "</div>" : false;
					s = a;
					if (!(!s || s === "")) {
						n.addClass("fancybox-title-" + d.titlePosition).html(s).appendTo("body").show();
						switch (d.titlePosition) {
						case "inside":
							n.css({
								width: i.width - d.padding * 2,
								marginLeft: d.padding,
								marginRight: d.padding
							});
							y = n.outerHeight(true);
							n.appendTo(D);
							i.height += y;
							break;
						case "over":
							n.css({
								marginLeft: d.padding,
								width: i.width - d.padding * 2,
								bottom: d.padding
							}).appendTo(D);
							break;
						case "float":
							n.css("left", parseInt((n.width() - i.width - 40) / 2, 10) * -1).appendTo(f);
							break;
						default:
							n.css({
								width: i.width - d.padding * 2,
								paddingLeft: d.padding,
								paddingRight: d.padding
							}).appendTo(f)
						}
					}
				}
				n.hide();
				if (f.is(":visible")) {
					b(E.add(z).add(A)).hide();
					a = f.position();
					r = {
						top: a.top,
						left: a.left,
						width: f.width(),
						height: f.height()
					};
					c = r.width == i.width && r.height == i.height;
					j.fadeTo(d.changeFade, 0.3, function () {
						var g = function () {
								j.html(m.contents()).fadeTo(d.changeFade, 1, S)
							};
						b.event.trigger("fancybox-change");
						j.empty().removeAttr("filter").css({
							"border-width": d.padding,
							width: i.width - d.padding * 2,
							height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2
						});
						if (c) g();
						else {
							B.prop = 0;
							b(B).animate({
								prop: 1
							}, {
								duration: d.changeSpeed,
								easing: d.easingChange,
								step: T,
								complete: g
							})
						}
					})
				} else {
					f.removeAttr("style");
					j.css("border-width", d.padding);
					if (d.transitionIn == "elastic") {
						r = V();
						j.html(m.contents());
						f.show();
						if (d.opacity) i.opacity = 0;
						B.prop = 0;
						b(B).animate({
							prop: 1
						}, {
							duration: d.speedIn,
							easing: d.easingIn,
							step: T,
							complete: S
						})
					} else {
						d.titlePosition == "inside" && y > 0 && n.show();
						j.css({
							width: i.width - d.padding * 2,
							height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2
						}).html(m.contents());
						f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S)
					}
				}
			}
		},
		Y = function () {
			if (d.enableEscapeButton || d.enableKeyboardNav) b(document).bind("keydown.fb", function (a) {
				if (a.keyCode == 27 && d.enableEscapeButton) {
					a.preventDefault();
					b.fancybox.close()
				} else if ((a.keyCode == 37 || a.keyCode == 39) && d.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") {
					a.preventDefault();
					b.fancybox[a.keyCode == 37 ? "prev" : "next"]()
				}
			});
			if (d.showNavArrows) {
				if (d.cyclic && l.length > 1 || p !== 0) z.show();
				if (d.cyclic && l.length > 1 || p != l.length - 1) A.show()
			} else {
				z.hide();
				A.hide()
			}
		},
		S = function () {
			if (!b.support.opacity) {
				j.get(0).style.removeAttribute("filter");
				f.get(0).style.removeAttribute("filter")
			}
			e.autoDimensions && j.css("height", "auto");
			f.css("height", "auto");
			s && s.length && n.show();
			d.showCloseButton && E.show();
			Y();
			d.hideOnContentClick && j.bind("click", b.fancybox.close);
			d.hideOnOverlayClick && u.bind("click", b.fancybox.close);
			b(window).bind("resize.fb", b.fancybox.resize);
			d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center);
			if (d.type == "iframe") b('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + e.scrolling + '" src="' + d.href + '"></iframe>').appendTo(j);
			f.show();
			h = false;
			b.fancybox.center();
			d.onComplete(l, p, d);
			var a, c;
			if (l.length - 1 > p) {
				a = l[p + 1].href;
				if (typeof a !== "undefined" && a.match(J)) {
					c = new Image;
					c.src = a
				}
			}
			if (p > 0) {
				a = l[p - 1].href;
				if (typeof a !== "undefined" && a.match(J)) {
					c = new Image;
					c.src = a
				}
			}
		},
		T = function (a) {
			var c = {
				width: parseInt(r.width + (i.width - r.width) * a, 10),
				height: parseInt(r.height + (i.height - r.height) * a, 10),
				top: parseInt(r.top + (i.top - r.top) * a, 10),
				left: parseInt(r.left + (i.left - r.left) * a, 10)
			};
			if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a;
			f.css(c);
			j.css({
				width: c.width - d.padding * 2,
				height: c.height - y * a - d.padding * 2
			})
		},
		U = function () {
			return [b(window).width() - d.margin * 2, b(window).height() - d.margin * 2, b(document).scrollLeft() + d.margin, b(document).scrollTop() + d.margin]
		},
		X = function () {
			var a = U(),
				c = {},
				g = d.autoScale,
				k = d.padding * 2;
			c.width = d.width.toString().indexOf("%") > -1 ? parseInt(a[0] * parseFloat(d.width) / 100, 10) : d.width + k;
			c.height = d.height.toString().indexOf("%") > -1 ? parseInt(a[1] * parseFloat(d.height) / 100, 10) : d.height + k;
			if (g && (c.width > a[0] || c.height > a[1])) if (e.type == "image" || e.type == "swf") {
				g = d.width / d.height;
				if (c.width > a[0]) {
					c.width = a[0];
					c.height = parseInt((c.width - k) / g + k, 10)
				}
				if (c.height > a[1]) {
					c.height = a[1];
					c.width = parseInt((c.height - k) * g + k, 10)
				}
			} else {
				c.width = Math.min(c.width, a[0]);
				c.height = Math.min(c.height, a[1])
			}
			c.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5), 10);
			c.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5), 10);
			return c
		},
		V = function () {
			var a = e.orig ? b(e.orig) : false,
				c = {};
			if (a && a.length) {
				c = a.offset();
				c.top += parseInt(a.css("paddingTop"), 10) || 0;
				c.left += parseInt(a.css("paddingLeft"), 10) || 0;
				c.top += parseInt(a.css("border-top-width"), 10) || 0;
				c.left += parseInt(a.css("border-left-width"), 10) || 0;
				c.width = a.width();
				c.height = a.height();
				c = {
					width: c.width + d.padding * 2,
					height: c.height + d.padding * 2,
					top: c.top - d.padding - 20,
					left: c.left - d.padding - 20
				}
			} else {
				a = U();
				c = {
					width: d.padding * 2,
					height: d.padding * 2,
					top: parseInt(a[3] + a[1] * 0.5, 10),
					left: parseInt(a[2] + a[0] * 0.5, 10)
				}
			}
			return c
		},
		Z = function () {
			if (t.is(":visible")) {
				b("div", t).css("top", L * -40 + "px");
				L = (L + 1) % 12
			} else clearInterval(K)
		};
	b.fn.fancybox = function (a) {
		if (!b(this).length) return this;
		b(this).data("fancybox", b.extend({}, a, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (c) {
			c.preventDefault();
			if (!h) {
				h = true;
				b(this).blur();
				o = [];
				q = 0;
				c = b(this).attr("target") || "";
				if (!c || c == "" || c === "nofollow") o.push(this);
				else {
					o = b("a[target=" + c + "], area[target=" + c + "]");
					q = o.index(this)
				}
				I()
			}
		});
		return this
	};
	b.fancybox = function (a, c) {
		var g;
		if (!h) {
			h = true;
			g = typeof c !== "undefined" ? c : {};
			o = [];
			q = parseInt(g.index, 10) || 0;
			if (b.isArray(a)) {
				for (var k = 0, C = a.length; k < C; k++) if (typeof a[k] == "object") b(a[k]).data("fancybox", b.extend({}, g, a[k]));
				else a[k] = b({}).data("fancybox", b.extend({
					content: a[k]
				}, g));
				o = jQuery.merge(o, a)
			} else {
				if (typeof a == "object") b(a).data("fancybox", b.extend({}, g, a));
				else a = b({}).data("fancybox", b.extend({
					content: a
				}, g));
				o.push(a)
			}
			if (q > o.length || q < 0) q = 0;
			I()
		}
	};
	b.fancybox.showActivity = function () {
		clearInterval(K);
		t.show();
		K = setInterval(Z, 66)
	};
	b.fancybox.hideActivity = function () {
		t.hide()
	};
	b.fancybox.next = function () {
		return b.fancybox.pos(p + 1)
	};
	b.fancybox.prev = function () {
		return b.fancybox.pos(p - 1)
	};
	b.fancybox.pos = function (a) {
		if (!h) {
			a = parseInt(a);
			o = l;
			if (a > -1 && a < l.length) {
				q = a;
				I()
			} else if (d.cyclic && l.length > 1) {
				q = a >= l.length ? 0 : l.length - 1;
				I()
			}
		}
	};
	b.fancybox.cancel = function () {
		if (!h) {
			h = true;
			b.event.trigger("fancybox-cancel");
			N();
			e.onCancel(o, q, e);
			h = false
		}
	};
	b.fancybox.close = function () {
		function a() {
			u.fadeOut("fast");
			n.empty().hide();
			f.hide();
			b.event.trigger("fancybox-cleanup");
			j.empty();
			d.onClosed(l, p, d);
			l = e = [];
			p = q = 0;
			d = e = {};
			h = false
		}
		if (!(h || f.is(":hidden"))) {
			h = true;
			if (d && false === d.onCleanup(l, p, d)) h = false;
			else {
				N();
				b(E.add(z).add(A)).hide();
				b(j.add(u)).unbind();
				b(window).unbind("resize.fb scroll.fb");
				b(document).unbind("keydown.fb");
				j.find("iframe").attr("src", M && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
				d.titlePosition !== "inside" && n.empty();
				f.stop();
				if (d.transitionOut == "elastic") {
					r = V();
					var c = f.position();
					i = {
						top: c.top,
						left: c.left,
						width: f.width(),
						height: f.height()
					};
					if (d.opacity) i.opacity = 1;
					n.empty().hide();
					B.prop = 1;
					b(B).animate({
						prop: 0
					}, {
						duration: d.speedOut,
						easing: d.easingOut,
						step: T,
						complete: a
					})
				} else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a)
			}
		}
	};
	b.fancybox.resize = function () {
		u.is(":visible") && u.css("height", b(document).height());
		b.fancybox.center(true)
	};
	b.fancybox.center = function (a) {
		var c, g;
		if (!h) {
			g = a === true ? 1 : 0;
			c = U();
			!g && (f.width() > c[0] || f.height() > c[1]) || f.stop().animate({
				top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding)),
				left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - j.width() - 40) * 0.5 - d.padding))
			}, typeof a == "number" ? a : 200)
		}
	};
	b.fancybox.init = function () {
		if (!b("#slideshow-wrap").length) {
			b("body").append(m = b('<div id="fancybox-tmp"></div>'), t = b('<div id="fancybox-loading"><div></div></div>'), u = b('<div id="slideshow-overlay"></div>'), f = b('<div id="slideshow-wrap"></div>'));
			D = b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
			D.append(j = b('<div id="slideshow-content"></div>'), E = b('<a id="fancybox-close"></a>'), n = b('<div id="fancybox-title"></div>'), z = b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), A = b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
			E.click(b.fancybox.close);
			t.click(b.fancybox.cancel);
			z.click(function (a) {
				a.preventDefault();
				b.fancybox.prev()
			});
			A.click(function (a) {
				a.preventDefault();
				b.fancybox.next()
			});
			b.fn.mousewheel && f.bind("mousewheel.fb", function (a, c) {
				if (h) a.preventDefault();
				else if (b(a.target).get(0).clientHeight == 0 || b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight) {
					a.preventDefault();
					b.fancybox[c > 0 ? "prev" : "next"]()
				}
			});
			b.support.opacity || f.addClass("fancybox-ie");
			if (M) {
				t.addClass("fancybox-ie6");
				f.addClass("fancybox-ie6");
				b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)
			}
		}
	};
	b.fn.fancybox.defaults = {
		padding: 10,
		margin: 40,
		opacity: false,
		modal: false,
		cyclic: false,
		scrolling: "auto",
		width: 560,
		height: 340,
		autoScale: true,
		autoDimensions: true,
		centerOnScroll: false,
		ajax: {},
		swf: {
			wmode: "transparent"
		},
		hideOnOverlayClick: true,
		hideOnContentClick: false,
		overlayShow: true,
		overlayOpacity: 0.7,
		overlayColor: "#000",
		titleShow: true,
		titlePosition: "float",
		titleFormat: null,
		titleFromAlt: false,
		transitionIn: "fade",
		transitionOut: "fade",
		speedIn: 300,
		speedOut: 300,
		changeSpeed: 300,
		changeFade: "fast",
		easingIn: "swing",
		easingOut: "swing",
		showCloseButton: true,
		showNavArrows: true,
		enableEscapeButton: true,
		enableKeyboardNav: true,
		onStart: function () {},
		onCancel: function () {},
		onComplete: function () {},
		onCleanup: function () {},
		onClosed: function () {},
		onError: function () {}
	};
	b(document).ready(function () {
		b.fancybox.init()
	})
})(jQuery);