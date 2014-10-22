/*BEGIN themes/default/js/jquery.min.js */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*BEGIN themes/default/js/ui/jquery.ui.core.js */
/*!
 * jQuery UI Core 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

(function($,undefined){var uuid=0,runiqueId=/^ui-id-\d+$/;$.ui=$.ui||{};if($.ui.version){return;}
$.extend($.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});$.fn.extend({_focus:$.fn.focus,focus:function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):this._focus.apply(this,arguments);},scrollParent:function(){var scrollParent;if(($.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.css(this,"position"))&&(/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}
return(/fixed/).test(this.css("position"))||!scrollParent.length?$(document):scrollParent;},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex);}
if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
elem=elem.parent();}}
return 0;},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid);}});},removeUniqueId:function(){return this.each(function(){if(runiqueId.test(this.id)){$(this).removeAttr("id");}});}});function focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img);}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);}
function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden";}).length;}
$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")));},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);}});if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}
if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=(function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key));}else{return removeData.call(this);}};})($.fn.removeData);}
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());$.support.selectstart="onselectstart"in document.createElement("div");$.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault();});},enableSelection:function(){return this.unbind(".ui-disableSelection");}});$.extend($.ui,{plugin:{add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args){var i,set=instance.plugins[name];if(!set||!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11){return;}
for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false;}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;}});})(jQuery);

/*BEGIN ./plugins/GrumPluginClasses/js/ui.inputCheckbox.js */
(function($)
{var publicMethods={init:function(opt)
{return this.each(function()
{var $this=$(this),data=$this.data('options'),objects=$this.data('objects'),properties=$this.data('properties'),options={values:{forced:false,checked:'yes',unchecked:'no'},returnMode:'selected',change:null};$this.data('options',options).addClass('ui-inputCheckbox');if(!properties)
{$this.data('properties',{initialized:false,isValid:true,checkboxList:null,isCB:true});properties=$this.data('properties');}
if($this.get(0).tagName=='INPUT'&&$this.get(0).type=='checkbox')
{properties.checkboxList=$this;}
else
{properties.checkboxList=$this.find('input[type=checkbox]');properties.isCB=false;}
properties.checkboxList.bind('click.inputCheckbox',function(event)
{privateMethods.setValue($this,$(this).attr('id'),$(this).attr('checked')?options.values.checked:options.values.unchecked,false);});privateMethods.setOptions($this,opt);});},destroy:function()
{return this.each(function()
{var $this=$(this),properties=$this.data('properties');properties.checkboxList.unbind('.inputCheckbox');$this.unbind('.inputCheckbox').removeData().removeClass('ui-inputCheckbox');delete $this;});},options:function(value)
{return(this.each(function()
{privateMethods.setOptions($(this),value);}));},disabled:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setDisabled($(this),value);}));}
else
{return(privateMethods.getDisabled($(this)));}},values:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setValues($(this),value);}));}
else
{var options=this.data('options');return(options.values);}},value:function(id,value)
{var properties=this.data('properties');if(properties.isCB)
{value=id;id=$(this).get(0).id;}
if(value!=null||id==':all'||id==':invert'||id==':none')
{return(this.each(function()
{privateMethods.setValue($(this),id,value,true);}));}
else if(id!=null&&id!='')
{var options=this.data('options');return($(this).find('#'+id).attr('checked')?options.values.checked:options.values.unchecked);}
else
{var options=this.data('options'),returned=[];if(options.values.forced)
{$(this).find('input').each(function()
{returned.push({id:$(this).attr('id'),value:$(this).attr('checked')?options.values.checked:options.values.unchecked});});}
else
{var filter=(options.returnMode=='selected'?':checked':':not(:checked)');$(this).find('input'+filter).each(function()
{returned.push($(this).attr('value'));});}
return(returned);}},returnMode:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setReturnMode($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.returnMode);}
else
{return('selected');}}},isValid:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setIsValid($(this),value);}));}
else
{var properties=this.data('properties');return(properties.isValid);}},change:function(value)
{if(value!=null&&$.isFunction(value))
{return(this.each(function()
{privateMethods.setEventChange($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.change);}
else
{return(null);}}}};var privateMethods={setOptions:function(object,value)
{var properties=object.data('properties'),options=object.data('options');if(!$.isPlainObject(value))return(false);properties.initialized=false;privateMethods.setReturnMode(object,(value.returnMode!=null)?value.returnMode:options.returnMode);privateMethods.setValues(object,(value.values!=null)?value.values:options.values);privateMethods.setEventChange(object,(value.change!=null)?value.change:options.change);properties.initialized=true;},setIsValid:function(object,value)
{var properties=object.data('properties');if(properties.isValid!=value&&properties.initialized)
{properties.isValid=value;if(properties.isValid)
{if(properties.isCB)
{object.parent().removeClass('ui-inputCheckbox ui-error');}
else
{object.removeClass('ui-error');}}
else
{if(properties.isCB)
{object.parent().addClass('ui-inputCheckbox ui-error');}
else
{object.addClass('ui-error');}}}
return(properties.isValid);},setReturnMode:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if((!properties.initialized||options.returnMode!=value)&&(value=='selected'||value=='notSelected'))
{options.returnMode=value;}
return(options.returnMode);},setValues:function(object,value)
{var options=object.data('options');if(value.forced!=null)options.values.forced=value.forced;if(value.checked!=null)options.values.checked=value.checked;if(value.unchecked!=null)options.values.unchecked=value.unchecked;return(options.values);},setValue:function(object,id,value,apply)
{var options=object.data('options'),properties=object.data('properties');if(apply)
{if(id==':all'||id==':none'||id==':invert')
{switch(id)
{case':all':properties.checkboxList.attr('checked',true);break;case':none':properties.checkboxList.attr('checked',false);break;case':invert':properties.checkboxList.each(function()
{$(this).attr('checked',!$(this).attr('checked'));});break;}}
else if($.isArray(value)&&!properties.isCB)
{properties.checkboxList.attr('checked',false);for(var i=0;i<value.length;i++)
{if(value[i].id!=null&&value[i].value!=null)
{if($('#'+value[i].id).attr('value')==value[i].value)$('#'+value[i].id).attr('checked',true);}
else
{properties.checkboxList.filter('[value='+value[i]+']').attr('checked',true);}}}
else
{if(options.values.checked==value)
{if(properties.isCB)
{properties.checkboxList.attr('checked',true);}
else
{if(id=='')
{properties.checkboxList.attr('checked',true);}
else
{properties.checkboxList.filter('#'+id).attr('checked',true);}}}
else
{if(properties.isCB)
{properties.checkboxList.attr('checked',false);}
else
{if(id=='')
{properties.checkboxList.attr('checked',false);}
else
{properties.checkboxList.filter('#'+id).attr('checked',false);}}}}}
if(options.change)object.trigger('inputCheckboxChange',{id:id,state:value});return(true);},setEventChange:function(object,value)
{var options=object.data('options');options.change=value;object.unbind('inputCheckboxChange');if(value)object.bind('inputCheckboxChange',options.change);return(options.change);}};$.fn.inputCheckbox=function(method)
{if(publicMethods[method])
{return publicMethods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method)
{return publicMethods.init.apply(this,arguments);}
else
{$.error('Method '+method+' does not exist on jQuery.inputCheckbox');}}})(jQuery);

/*BEGIN themes/default/js/ui/jquery.ui.widget.js */
/*!
 * jQuery UI Widget 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */

(function($,undefined){var uuid=0,slice=Array.prototype.slice,_cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){try{$(elem).triggerHandler("remove");}catch(e){}}
_cleanData(elems);};$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,proxiedPrototype={},namespace=name.split(".")[0];name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element);}
if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}
proxiedPrototype[prop]=(function(){var _super=function(){return base.prototype[prop].apply(this,arguments);},_superApply=function(args){return base.prototype[prop].apply(this,args);};return function(){var __super=this._super,__superApply=this._superApply,returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?basePrototype.widgetEventPrefix:name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}
$.widget.bridge(name,constructor);};$.widget.extend=function(target){var input=slice.call(arguments,1),inputIndex=0,inputLength=input.length,key,value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}
return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.widget.extend.apply(null,[options].concat(args)):options;if(isMethodCall){this.each(function(){var methodValue,instance=$.data(this,fullName);if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}else{this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{})._init();}else{$.data(this,fullName,new object(options,this));}});}
return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=uuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this.bindings=$();this.hoverable=$();this.focusable=$();if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}
this._create();this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key,parts,curOption,i;if(arguments.length===0){return $.widget.extend({},this.options);}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
key=parts.pop();if(value===undefined){return curOption[key]===undefined?null:curOption[key];}
curOption[key]=value;}else{if(value===undefined){return this.options[key]===undefined?null:this.options[key];}
options[key]=value;}}
this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}
return this;},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!value).attr("aria-disabled",value);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");}
return this;},enable:function(){return this._setOption("disabled",false);},disable:function(){return this._setOption("disabled",true);},_on:function(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}
var match=event.match(/^(\w+)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];if(selector){delegateElement.delegate(selector,eventName,handlerProxy);}else{element.bind(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.unbind(eventName).undelegate(eventName);},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){$(event.currentTarget).addClass("ui-state-hover");},mouseleave:function(event){$(event.currentTarget).removeClass("ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){$(event.currentTarget).addClass("ui-state-focus");},focusout:function(event){$(event.currentTarget).removeClass("ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig,callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}
var hasOptions,effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}
next();});}};});})(jQuery);

/*BEGIN ./plugins/GrumPluginClasses/js/ui.inputList.js */
(function($)
{var publicMethods={init:function(opt)
{return this.each(function()
{var $this=$(this),timeStamp=new Date(),data=$this.data('options'),objects=$this.data('objects'),properties=$this.data('properties'),options={serverUrl:'',postData:{},autoLoad:true,listMaxWidth:0,listMaxHeight:0,multiple:false,downArrow:'',popupMode:'click',colsWidth:[],colsDisplayed:[],colsCss:[],disabled:false,popup:null,change:null,load:null,returnMode:'selected'};$this.data('options',options);if(!properties)
{$this.data('properties',{objectId:'il'+Math.ceil(timeStamp.getTime()*Math.random()),index:-1,initialized:false,selectorVisible:false,items:[],mouseOver:false,isValid:true,firstPopup:true});properties=$this.data('properties');}
if(!objects)
{objects={container:$('<div/>',{'class':'ui-inputList',tabindex:0,css:{width:'100%'}}).bind('click.inputList',function()
{privateMethods.displaySelector($this,!$this.data('properties').selectorVisible);}),containerValue:$('<div/>',{html:'&nbsp;','class':'ui-inputList-value',css:{overflow:'hidden'}}),containerList:null,containerArrow:$('<div/>',{html:'&dArr;','class':'ui-inputList-arrow',css:{'float':'right',cursor:'pointer'}}).bind('mousedown',function()
{$(this).addClass('ui-inputList-arrow-active');}).bind('mouseup',function()
{$(this).removeClass('ui-inputList-arrow-active');}),listContainer:$('<div/>',{html:"",'class':'ui-inputList-list',css:{overflow:"auto",display:'none',position:'absolute'}}),list:$('<ul/>',{css:{listStyle:'none',padding:'0px',margin:'0px'}})};}
$this.data('objects',objects);privateMethods.setOptions($this,opt);if($this.text()!='')
{var tmp=$.parseJSON($.trim($this.text())),selectedValues=[],values=[];if($.isArray(tmp))
{values=tmp;}
else if(tmp.values!=null)
{values=tmp.values;}
if(tmp.selected!=null)selectedValues=tmp.selected;privateMethods.setItems($this,values);privateMethods.setValue($this,selectedValues);}
$this.html('').append(objects.container.append(objects.containerArrow).append(objects.containerValue)).append(objects.listContainer.append(objects.list));});},destroy:function()
{return this.each(function()
{var $this=$(this),properties=$this.data('properties'),objects=$this.data('objects');objects.container.unbind().remove();objects.list.children().unbind();objects.listContainer.unbind().remove();$(document).unbind('focusout.'+properties.objectId+' focusin.'+properties.objectId);$this.removeData().unbind('.inputList').css({width:'',height:''});delete $this;});},options:function(value)
{return this.each(function()
{privateMethods.setOptions($(this),value);});},autoLoad:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setAutoLoad($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.autoLoad);}
else
{return(true);}}},listMaxWidth:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setListMaxWidth($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.listMaxWidth);}
else
{return(0);}}},listMaxHeight:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setListMaxHeight($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.listMaxHeight);}
else
{return(0);}}},serverUrl:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setServerUrl($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.serverUrl);}
else
{return('');}}},postData:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setPostData($(this),value,true);}));}
else
{var options=this.data('options');return(options.postData);}},cols:function()
{var options=this.data('options'),properties=this.data('properties');if(!options.multiple)
{return(properties.items[properties.index].cols);}
else
{var listCols=[];for(var i=0;i<properties.index.length;i++)
{listCols.push(properties.items[properties.index[i]].cols);}
return(listCols);}},popupMode:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setPopupMode($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.popupMode);}
else
{return(0);}}},downArrow:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setDownArrow($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.downArrow);}
else
{return('');}}},returnMode:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setReturnMode($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.returnMode);}
else
{return('selected');}}},colsWidth:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setColsWidth($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.colsWidth);}
else
{return('');}}},colsDisplayed:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setColsDisplayed($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.colsDisplayed);}
else
{return('');}}},colsCss:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setColsCss($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.colsCss);}
else
{return('');}}},items:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setItems($(this),value);});}
else
{var properties=this.data('properties');if(properties)
{return(properties.items);}
else
{return('');}}},value:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setValue($(this),value);});}
else
{var properties=this.data('properties'),options=this.data('options');if(properties&&properties.index!=null&&!options.multiple&&properties.index>-1&&properties.index<properties.items.length)
{return(properties.items[properties.index].value);}
else if(properties&&properties.index!=null&&options.multiple)
{var returned=[];if(options.returnMode=='selected')
{for(var i=0;i<properties.index.length;i++)
{if(properties.index[i]>-1&&properties.index[i]<properties.items.length)
returned.push(properties.items[properties.index[i]].value);}}
else
{for(var i=0;i<properties.items.length;i++)
{if($.inArray(i,properties.index)==-1)
returned.push(properties.items[i].value);}}
return(returned);}
else
{return(null);}}},isValid:function(value)
{if(value!=null)
{return this.each(function()
{privateMethods.setIsValid($(this),value);});}
else
{var properties=this.data('properties');return(properties.isValid);}},load:function(value)
{if(value&&$.isFunction(value))
{return this.each(function()
{privateMethods.setEventLoad($(this),value);});}
else
{privateMethods.load(this);}},popup:function(value)
{if(value&&$.isFunction(value))
{return this.each(function()
{privateMethods.setEventPopup($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.popup);}
else
{return(null);}}},change:function(value)
{if(value&&$.isFunction(value))
{return this.each(function()
{privateMethods.setEventChange($(this),value);});}
else
{var options=this.data('options');if(options)
{return(options.change);}
else
{return(null);}}},numberOfItems:function()
{var properties=this.data('properties');if(properties)
{return(properties.items.length);}
else
{return(null);}},properties:function(value)
{var properties=this.data('properties'),options=this.data('options');if(properties&&value==':first'&&properties.items.length>0)
{return(properties.items[0]);}
else if(properties&&properties.index!=null&&(value==':selected'||value==null)&&properties.items.length>0)
{if(!options.multiple&&properties.index>-1&&properties.index<properties.items.length)
{return(properties.items[properties.index]);}
else if(options.multiple)
{var returned=[];for(var i=0;i<properties.index.length;i++)
{if(properties.index[i]>-1&&properties.index<properties.items.length)
returned.push(properties.items[properties.index[i]]);}
return(returned);}
return(null);}
else if(properties&&value!=null)
{var index=privateMethods.findIndexByValue(this,value);if(index>-1)
{return(properties.items[index]);}
return(null);}
else
{return(null);}}};var privateMethods={setOptions:function(object,value)
{var properties=object.data('properties'),options=object.data('options');if(!$.isPlainObject(value))return(false);properties.initialized=false;privateMethods.setReturnMode(object,(value.returnMode!=null)?value.returnMode:options.returnMode);privateMethods.setAutoLoad(object,(value.autoLoad!=null)?value.autoLoad:options.autoLoad);privateMethods.setListMaxWidth(object,(value.listMaxWidth!=null)?value.listMaxWidth:options.listMaxWidth);privateMethods.setListMaxHeight(object,(value.listMaxHeight!=null)?value.listMaxHeight:options.listMaxHeight);privateMethods.setPostData(object,(value.postData!=null)?value.postData:options.postData);privateMethods.setServerUrl(object,(value.serverUrl!=null)?value.serverUrl:options.serverUrl);privateMethods.setPopupMode(object,(value.popupMode!=null)?value.popupMode:options.popupMode);privateMethods.setDownArrow(object,(value.downArrow!=null)?value.downArrow:options.downArrow);privateMethods.setEventPopup(object,(value.popup!=null)?value.popup:options.popup);privateMethods.setEventChange(object,(value.change!=null)?value.change:options.change);privateMethods.setEventLoad(object,(value.load!=null)?value.load:options.load);privateMethods.setColsWidth(object,(value.colsWidth!=null)?value.colsWidth:options.colsWidth);privateMethods.setColsDisplayed(object,(value.colsDisplayed!=null)?value.colsDisplayed:options.colsDisplayed);privateMethods.setColsCss(object,(value.colsCss!=null)?value.colsCss:options.colsCss);privateMethods.setItems(object,(value.items!=null)?value.items:options.items);privateMethods.setMultiple(object,(value.multiple!=null)?value.multiple:options.multiple);if(options.autoLoad&&options.serverUrl!='')
{privateMethods.load(object,(value.value!=null)?value.value:null);}
else
{privateMethods.setValue(object,(value.value!=null)?value.value:null);}
properties.initialized=true;},setIsValid:function(object,value)
{var objects=object.data('objects'),properties=object.data('properties');if(properties.isValid!=value)
{properties.isValid=value;if(properties.isValid)
{objects.container.removeClass('ui-error');}
else
{objects.container.addClass('ui-error');}}
return(properties.isValid);},setAutoLoad:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if((!properties.initialized||options.autoLoad!=value)&&(value==true||value==false))
{options.autoLoad=value;}
return(options.autoLoad);},setReturnMode:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if((!properties.initialized||options.returnMode!=value)&&(value=='selected'||value=='notSelected'))
{options.returnMode=value;}
return(options.returnMode);},setColsWidth:function(object,value)
{var options=object.data('options'),properties=object.data('properties'),width=0;if((!properties.initialized||options.colsWidth!=value)&&$.isArray(value))
{options.colsWidth=value;}
return(options.colsWidth);},setColsDisplayed:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if((!properties.initialized||options.colsDisplayed!=value)&&$.isArray(value))
{options.colsDisplayed=value;}
return(options.colsDisplayed);},setColsCss:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if((!properties.initialized||options.colsCss!=value)&&$.isArray(value))
{options.colsCss=value;}
return(options.colsCss);},setListMaxWidth:function(object,value)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects');if((!properties.initialized||options.listMaxWidth!=value)&&value>=0)
{options.listMaxWidth=value;if(options.listMaxWidth>0)
{objects.listContainer.css('max-width',options.listMaxWidth+'px');}
else
{objects.listContainer.css('max-width','');}}
return(options.listMaxWidth);},setListMaxHeight:function(object,value)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects');if((!properties.initialized||options.listMaxHeight!=value)&&value>=0)
{options.listMaxHeight=value;if(options.listMaxHeight>0)
{objects.listContainer.css('max-height',options.listMaxHeight+'px');}
else
{objects.listContainer.css('max-height','');}}
return(options.listMaxHeight);},setServerUrl:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if(!properties.initialized||options.serverUrl!=value)
{options.serverUrl=value;if(options.autoLoad&&properties.initialized)privateMethods.load(object);}
return(options.serverUrl);},setPostData:function(object,value)
{var properties=object.data('properties'),options=object.data('options');if(!properties.initialized||value!=options.postData)
{options.postData=value;}
return(options.postData);},setMultiple:function(object,value)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects');if((!properties.initialized||options.multiple!=value)&&(value==true||value==false))
{if(!value)
{properties.index=-1;if(objects.containerList!=null)
{objects.containerList.remove();objects.containerList=null;}}
else
{properties.index=[];objects.listContainer.addClass('ui-inputList-multiple');if(objects.containerList==null)
{objects.containerList=$('<ul/>',{html:'<li>&nbsp;</li>'});objects.containerValue.html('').append(objects.containerList);}}
options.multiple=value;}
return(options.multiple);},setPopupMode:function(object,value)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects');if((!properties.initialized||options.popupMode!=value)&&(value=='click'||value=='mouseout'))
{options.popupMode=value;if(value=='mouseout')
{objects.listContainer.unbind('mouseleave.inputList').unbind('mouseenter.inputList').bind('mouseleave.inputList',function()
{privateMethods.displaySelector(object,false);});}
else
{objects.listContainer.unbind('mouseleave.inputList').bind('mouseleave.inputList',function()
{properties.mouseOver=false;}).bind('mouseenter.inputList',function()
{properties.mouseOver=true;});$(document).bind('focusout.'+properties.objectId+' focusin.'+properties.objectId,function(event)
{if($.isPlainObject(properties)&&!properties.mouseOver)privateMethods.displaySelector(object,false);event.stopPropagation();});}}
return(options.popupMode);},setDownArrow:function(object,value)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects');if(!properties.initialized||options.downArrow!=value)
{options.downArrow=value;objects.containerArrow.html(options.downArrow);}
return(options.downArrow);},setItems:function(object,value)
{var properties=object.data('properties');if(value==''||value==null)
{value=[];}
else if(!$.isArray(value))
{try
{value=$.parseJSON($.trim(value));}
catch(e)
{return(false);}}
privateMethods.listClear(object);if(value.length>0)privateMethods.listAddItems(object,value);},setValue:function(object,value,trigger)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects'),index=-1;re=/^(:invert|:all|:none)(?:(=|<|>)(\d+))$/i;target=re.exec(value);if(target!=null)value=target[1];switch(value)
{case':first':if(properties.items.length>0)index=0;break;case':last':index=properties.items.length-1;break;case':invert':if(!options.multiple)return(false);properties.index=[];objects.list.find('.ui-inputList-item').each(function()
{var $this=$(this),apply=true;if(target!=null)
{switch(target[2])
{case'=':apply=($this.attr('level')==target[3]);break;case'>':apply=($this.attr('level')>=target[3]);break;case'<':apply=($this.attr('level')<=target[3]);break;}}
if(apply)
{if($this.hasClass('ui-inputList-selected-item'))
{$this.removeClass('ui-inputList-selected-item');}
else
{$this.addClass('ui-inputList-selected-item');tmp=privateMethods.findIndexByValue(object,$this.attr('idvalue'));if(tmp>-1)properties.index.push(tmp);}}});privateMethods.setValue(object,[],false);return(false);break;case':none':if(!options.multiple)return(false);properties.index=[];objects.list.find('.ui-inputList-selected-item').each(function()
{var $this=$(this),apply=true;if(target!=null)
{switch(target[2])
{case'=':apply=($this.attr('level')==target[3]);break;case'>':apply=($this.attr('level')>=target[3]);break;case'<':apply=($this.attr('level')<=target[3]);break;}}
if(apply)$this.removeClass('ui-inputList-selected-item');});privateMethods.setValue(object,[],false);return(false);break;case':all':if(!options.multiple)return(false);properties.index=[];objects.list.find('.ui-inputList-item').each(function()
{var $this=$(this),apply=true;if(target!=null)
{switch(target[2])
{case'=':apply=($this.attr('level')==target[3]);break;case'>':apply=($this.attr('level')>=target[3]);break;case'<':apply=($this.attr('level')<=target[3]);break;}}
if(apply)
{tmp=privateMethods.findIndexByValue(object,$this.attr('idvalue'));if(tmp>-1)properties.index.push(tmp);$this.addClass('ui-inputList-selected-item');}});privateMethods.setValue(object,[],false);return(false);break;default:if($.isArray(value)&&options.multiple)
{index=[];for(var i=0;i<value.length;i++)
{tmp=privateMethods.findIndexByValue(object,value[i]);if(tmp>-1)index.push(tmp);}}
else
{index=privateMethods.findIndexByValue(object,value);}
break;}
if(!options.multiple&&(!properties.initialized||properties.index!=index)&&index>-1)
{objects.list.find('.ui-inputList-selected-item').removeClass('ui-inputList-selected-item');objects.list.find('[idvalue="'+value+'"]').addClass('ui-inputList-selected-item');properties.index=index;privateMethods.setItemContent(object,index,objects.containerValue);if(trigger)object.trigger('inputListChange',[properties.items[properties.index].value]);if(properties.index>-1)return(properties.items[properties.index].value);}
else if(options.multiple)
{if(!$.isArray(index))
{if(index<0||index==null)return(-1);index=[index];}
tmp=[];for(var i=0;i<index.length;i++)
{var item=objects.list.find('[idvalue="'+properties.items[index[i]].value+'"]');tmp.push(properties.items[index[i]].value);if(item.hasClass('ui-inputList-selected-item'))
{item.removeClass('ui-inputList-selected-item');tmpIndex=$.inArray(index[i],properties.index);if(tmpIndex>-1)properties.index.splice(tmpIndex,1);}
else
{item.addClass('ui-inputList-selected-item');properties.index.push(index[i]);}}
objects.containerList.html('');objects.list.children('.ui-inputList-selected-item').each(function()
{var value=$(this).attr('idvalue'),index=privateMethods.findIndexByValue(object,value),li=$('<li/>',{'class':'ui-inputList-selected-item'});privateMethods.setItemContent(object,index,li);objects.containerList.append(li.prepend($('<span/>',{'html':'x','class':'ui-inputList-delete-item'}).bind('click.inputList',{object:object,value:value},function(event)
{event.stopPropagation();privateMethods.setValue(event.data.object,event.data.value,true);})));});if(objects.containerList.children().length==0)objects.containerList.append('<li>&nbsp;</li>');if(trigger)object.trigger('inputListChange',[tmp]);return(tmp);}
return(null);},displaySelector:function(object,value)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects'),scrollBarWidth=0;if(properties.selectorVisible!=value)
{properties.selectorVisible=value;if(properties.selectorVisible&&properties.items.length>0)
{var index=0;objects.listContainer.css({display:'block','min-width':objects.listContainer.parent().css('width')});if($.isArray(properties.index))
{if(properties.index.length>0)index=properties.index[0];}
else if(properties.index>-1)
{index=properties.index;}
scrollBarWidth=objects.listContainer.width()-objects.list.width();if(scrollBarWidth>0&&properties.firstPopup)
{objects.listContainer.width(objects.listContainer.width()+scrollBarWidth);properties.firstPopup=false;}
objects.listContainer.scrollTop(objects.listContainer.scrollTop()+objects.list.find('[idValue="'+properties.items[index].value+'"]').position().top);}
else
{objects.listContainer.css('display','none');}
if(options.popup)object.trigger('inputListPopup',[properties.selectorVisible]);}
return(properties.selectorVisible);},load:function(object,defaultValue)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects');if(options.serverUrl=='')return(false);$.ajax({type:"POST",url:options.serverUrl,data:options.postData,async:true,success:function(msg)
{privateMethods.setItems(object,msg);properties.initialized=false;if(options.multiple)
{if(defaultValue!=null)
{privateMethods.setValue(object,defaultValue);}
else
{privateMethods.setValue(object,':none');}}
else
{if(defaultValue!=null)
{privateMethods.setValue(object,defaultValue);}
else
{privateMethods.setValue(object,':first');}}
properties.initialized=true;if(options.load)object.trigger('inputListLoad');},error:function(msg)
{objects.listContainer.html('Error ! '+msg);}});},listClear:function(object)
{var objects=object.data('objects'),options=object.data('options'),properties=object.data('properties');objects.list.children().unbind();objects.list.html('');if(options.multiple)
{properties.index=[];}
else
{properties.index=-1;}
properties.items=[];properties.firstPopup=true;},listAddItems:function(object,listItems)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects'),width=0;for(var i=0;i<listItems.length;i++)
{properties.items.push({value:listItems[i].value,cols:listItems[i].cols});var content=$('<div/>',{'class':'ui-inputList-value'}),li=$('<li/>',{'class':'ui-inputList-item','idValue':listItems[i].value}).bind('click.inputList',{object:object},function(event)
{privateMethods.setValue(event.data.object,$(this).attr('idValue'),true);if(options.multiple)
{}
else
{privateMethods.displaySelector(event.data.object,false);}
if(options.multiple)objects.container.focus();});for(var j=0;j<listItems[i].cols.length;j++)
{content.append($('<span/>',{html:listItems[i].cols[j],css:{width:privateMethods.getColWidth(object,j)},'class':privateMethods.getColCss(object,j)}));}
li.append(content);if(options.multiple)
{li.children().prepend('<div class="ui-inputList-check"></div>');}
objects.list.append(li);}},findIndexByValue:function(object,value)
{var properties=object.data('properties');for(var i=0;i<properties.items.length;i++)
{if(properties.items[i].value==value)return(i);}
return(-1);},setEventPopup:function(object,value)
{var options=object.data('options');options.popup=value;object.unbind('inputListPopup');if(value)object.bind('inputListPopup',options.popup);return(options.popup);},setEventChange:function(object,value)
{var options=object.data('options');options.change=value;object.unbind('inputListChange');if(value)object.bind('inputListChange',options.change);return(options.change);},setEventLoad:function(object,value)
{var options=object.data('options');options.load=value;object.unbind('inputListLoad');if(value)object.bind('inputListLoad',options.load);return(options.load);},getColWidth:function(object,index)
{var options=object.data('options');if(index>=0&&index<options.colsWidth.length&&options.colsWidth[index]!=''&&options.colsWidth[index]!=0)
{return(options.colsWidth[index]+'px');}
return('');},getColCss:function(object,index)
{var options=object.data('options');if(index>=0&&index<options.colsCss.length)
{return(options.colsCss[index]);}
return('');},getColContent:function(object,itemIndex,index)
{var properties=object.data('properties');if(index>=0&&index<=properties.items[itemIndex].cols.length)
{return(properties.items[itemIndex].cols[index]);}
return('');},setItemContent:function(object,index,container)
{var options=object.data('options'),properties=object.data('properties'),colContent='',colsDisplayed=[];container.html('');if(options.colsDisplayed.length==0)
{for(var j=0;j<properties.items[index].cols.length;j++)
{colsDisplayed.push(j);}}
else
{colsDisplayed=options.colsDisplayed;}
for(var j=0;j<colsDisplayed.length;j++)
{colContent=privateMethods.getColContent(object,index,colsDisplayed[j]);if(colContent!=null)
{container.append($('<span/>',{'html':colContent,css:{width:privateMethods.getColWidth(object,colsDisplayed[j])},'class':privateMethods.getColCss(object,colsDisplayed[j])}));}}}};$.fn.inputList=function(method)
{if(publicMethods[method])
{return publicMethods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method)
{return publicMethods.init.apply(this,arguments);}
else
{$.error('Method '+method+' does not exist on jQuery.inputList');}}})(jQuery);

/*BEGIN ./plugins/GrumPluginClasses/js/ui.inputRadio.js */
(function($)
{var publicMethods={init:function(opt)
{return this.each(function()
{var $this=$(this),data=$this.data('options'),objects=$this.data('objects'),properties=$this.data('properties'),options={disabled:[],hidden:[],value:'',change:null};$this.data('options',options);if(!properties)
{$this.data('properties',{initialized:false,value:'',isValid:true});properties=$this.data('properties');}
if(!objects)
{objects={radio:[]};$this.data('objects',objects);}
$this.find('input[type=radio]').each(function(index,item)
{objects.radio.push($(item));$(item).attr('name','ir_'+$this.get(0).id).bind('click',function(event)
{privateMethods.setValue($this,$(this).attr('value'),false);});});privateMethods.setOptions($this,opt);});},destroy:function()
{return this.each(function()
{var $this=$(this),objects=$this.data('objects');for(var i=0;i<objects.radio.length;i++)
{objects.radio.unbind();}
objects.container.unbind().remove();$this.unbind('.inputRadio').removeData().css({width:'',height:''});delete $this;});},options:function(value)
{return(this.each(function()
{privateMethods.setOptions($(this),value);}));},disabled:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setDisabled($(this),value);}));}
else
{return(privateMethods.getDisabled($(this)));}},hidden:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setHidden($(this),value);}));}
else
{return(privateMethods.getHidden($(this)));}},value:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setValue($(this),value,true);}));}
else
{var properties=this.data('properties');return(properties.value);}},isValid:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setIsValid($(this),value);}));}
else
{var properties=this.data('properties');return(properties.isValid);}},change:function(value)
{if(value!=null&&$.isFunction(value))
{return(this.each(function()
{privateMethods.setEventChange($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.change);}
else
{return(null);}}}};var privateMethods={setOptions:function(object,value)
{var properties=object.data('properties'),options=object.data('options');if(!$.isPlainObject(value))return(false);properties.initialized=false;privateMethods.setDisabled(object,(value.disabled!=null)?value.disabled:options.disabled);privateMethods.setHidden(object,(value.hidden!=null)?value.hidden:options.hidden);privateMethods.setValue(object,(value.value!=null)?value.value:options.value,true);privateMethods.setEventChange(object,(value.change!=null)?value.change:options.change);properties.initialized=true;},setIsValid:function(object,value)
{var objects=object.data('objects'),properties=object.data('properties');if(properties.isValid!=value&&properties.initialized)
{properties.isValid=value;if(properties.isValid)
{objects.container.removeClass('ui-error');objects.input.removeClass('ui-error');}
else
{objects.container.addClass('ui-error');objects.input.addClass('ui-error');}}
return(properties.isValid);},setDisabled:function(object,value)
{var objects=object.data('objects'),index=-1;if(!$.isArray(value))value=[value];for(var i=0;i<objects.radio.length;i++)
{index=$.inArray(objects.radio[i].attr('value'),value);objects.radio[i].attr('disabled',(index>-1));}
return(privateMethods.getDisabled(object));},getDisabled:function(object)
{var objects=object.data('objects'),returned=[];for(var i=0;i<objects.radio.length;i++)
{if(objects.radio[i].attr('disabled'))returned.push(objects.radio[i].attr('value'));}
return(returned);},setHidden:function(object,value)
{var objects=object.data('objects');if(!$.isArray(value))value=[value];for(var i=0;i<objects.radio.length;i++)
{if($.inArray(objects.radio[i].attr('value'),value)>-1)
{if(objects.radio[i].parent().attr('nodeName')=='LABEL')
{objects.radio[i].parent().hide();}
else
{objects.radio[i].hide();}}
else
{if(objects.radio[i].parent().attr('nodeName')=='LABEL')
{objects.radio[i].parent().show();}
else
{objects.radio[i].show();}}}
return(privateMethods.getHidden(object));},getHidden:function(object)
{var objects=object.data('objects'),returned=[];for(var i=0;i<objects.radio.length;i++)
{if(objects.radio[i].css('display')=='none')returned.push(objects.radio[i].attr('value'));}
return(returned);},setValue:function(object,value,apply)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects'),index=privateMethods.findRadioByVal(object,value);if(index==-1)return(false);properties.value=value;if(apply)
{objects.radio[index].attr('checked',true);}
if(options.change)object.trigger('inputRadioChange',properties.value);return(true);},setEventChange:function(object,value)
{var options=object.data('options');options.change=value;object.unbind('inputRadioChange');if(value)object.bind('inputRadioChange',options.change);return(options.change);},findRadioByVal:function(object,value)
{var objects=object.data('objects');for(var i=0;i<objects.radio.length;i++)
{if(objects.radio[i].attr('value')==value)return(i);}
return(-1);}};$.fn.inputRadio=function(method)
{if(publicMethods[method])
{return publicMethods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method)
{return publicMethods.init.apply(this,arguments);}
else
{$.error('Method '+method+' does not exist on jQuery.inputRadio');}}})(jQuery);

/*BEGIN ./plugins/GrumPluginClasses/js/ui.inputText.js */
(function($)
{var publicMethods={init:function(opt)
{return this.each(function()
{var $this=$(this),data=$this.data('options'),objects=$this.data('objects'),properties=$this.data('properties'),options={languages:[],currentLanguage:'',languagesValues:{},languageSelector:'',multilines:false,disabled:false,textAlign:'left',displayChar:0,maxChar:0,numRows:1,regExp:'',value:'',change:null};if(options.value==''&&$.trim($this.html())!='')options.value=$.trim($this.html());$this.data('options',options);if(!properties)
{$this.data('properties',{initialized:false,re:/.*/,value:'',isValid:true,languagesValues:{}});properties=$this.data('properties');}
if(!objects)
{objects={container:$('<div/>',{'class':'ui-inputText',css:{width:'100%'}}).bind('click.inputText',function()
{objects.input.focus();}),input:null};$this.html('').append(objects.container);$this.data('objects',objects);}
privateMethods.setOptions($this,opt);});},destroy:function()
{return this.each(function()
{var $this=$(this),objects=$this.data('objects');objects.input.unbind().remove();objects.container.unbind().remove();$this.unbind('.inputText').removeData().css({width:'',height:''});delete $this;});},options:function(value)
{return(this.each(function()
{privateMethods.setOptions($(this),value);}));},disabled:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setDisabled($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.disabled);}
else
{return('');}}},textAlign:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setTextAlign($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.textAlign);}
else
{return('');}}},displayChar:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setDisplayChar($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.displayChar);}
else
{return('');}}},maxChar:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setMaxChar($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.maxChar);}
else
{return('');}}},numRows:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setNumRows($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.numRows);}
else
{return('');}}},regExp:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setRegExp($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.regExp);}
else
{return('');}}},multilines:function()
{var properties=this.data('properties');return(properties.multilines);},languages:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setLanguages($(this),value);}));}
else
{var options=this.data('options');return(options.languages);}},currentLanguage:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setCurrentLanguage($(this),value);}));}
else
{var options=this.data('options');return(options.currentLanguage);}},languageSelector:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setLanguageSelector($(this),value);}));}
else
{var options=this.data('options');return(options.languageSelector);}},languagesValues:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setLanguagesValues($(this),value);}));}
else
{var properties=this.data('properties');return(properties.languagesValues);}},value:function(value,language)
{if(value!=null)
{var options=this.data('options');return(this.each(function()
{if(language!=null)
{privateMethods.setLanguageValue($(this),language,value,options.currentLanguage==language);}
else
{privateMethods.setValue($(this),value,true);}}));}
else
{var properties=this.data('properties');return(properties.value);}},isValid:function(value)
{if(value!=null)
{return(this.each(function()
{privateMethods.setIsValid($(this),value);}));}
else
{var properties=this.data('properties');return(properties.isValid);}},change:function(value)
{if(value!=null&&$.isFunction(value))
{return(this.each(function()
{privateMethods.setEventChange($(this),value);}));}
else
{var options=this.data('options');if(options)
{return(options.change);}
else
{return(null);}}},doTranslation:function()
{return(this.each(function()
{privateMethods.doTranslation($(this));}));}};var privateMethods={isValid:function(object,value)
{var properties=object.data('properties');return(properties.re.test(value));},setOptions:function(object,value)
{var properties=object.data('properties'),options=object.data('options');if(!$.isPlainObject(value))return(false);properties.initialized=false;privateMethods.setMultilines(object,(value.multilines!=null)?value.multilines:options.multilines);privateMethods.setDisplayChar(object,(value.displayChar!=null)?value.displayChar:options.displayChar);privateMethods.setMaxChar(object,(value.maxChar!=null)?value.maxChar:options.maxChar);privateMethods.setNumRows(object,(value.numRows!=null)?value.numRows:options.numRows);privateMethods.setRegExp(object,(value.regExp!=null)?value.regExp:options.regExp);privateMethods.setLanguages(object,(value.languages!=null)?value.languages:options.languages);privateMethods.setLanguagesValues(object,(value.languagesValues!=null)?value.languagesValues:options.languagesValues);privateMethods.setCurrentLanguage(object,(value.currentLanguage!=null)?value.currentLanguage:options.currentLanguage);privateMethods.setLanguageSelector(object,(value.languageSelector!=null)?value.languageSelector:options.languageSelector);if((properties.languagesValues[options.currentLanguage]!=null&&properties.languagesValues[options.currentLanguage]!=''||properties.languagesValues[options.currentLanguage]==null)&&(value.value!=null&&value.value!=''||options.value!=''))privateMethods.setValue(object,(value.value!=null)?value.value:options.value,true);privateMethods.setTextAlign(object,(value.textAlign!=null)?value.textAlign:options.textAlign);privateMethods.setDisabled(object,(value.disabled!=null)?value.disabled:options.disabled);privateMethods.setEventChange(object,(value.change!=null)?value.change:options.change);properties.initialized=true;},setRegExp:function(object,value)
{var properties=object.data('properties'),flagRE=/^\/(.*)\/(.*)$/,flags=flagRE.exec(value);if(flags==null)
{flags=['.*',''];}
delete properties.re;properties.re=new RegExp(flags[1],flags[2]);},setIsValid:function(object,value)
{var objects=object.data('objects'),properties=object.data('properties'),check=false;if(value=='check')
{value=privateMethods.isValid(object,properties.value);check=true;}
if(properties.isValid!=value&&properties.initialized||check)
{properties.isValid=value;if(properties.isValid)
{objects.container.removeClass('ui-error');objects.input.removeClass('ui-error');}
else
{objects.container.addClass('ui-error');objects.input.addClass('ui-error');}}
return(properties.isValid);},setDisplayChar:function(object,value)
{var options=object.data('options'),objects=object.data('objects');properties=object.data('properties');if((!properties.initialized||options.displayChar!=value)&&value>=0)
{options.displayChar=value;if(options.displayChar>0)
{if(options.multilines)
{objects.input.attr('cols',options.displayChar);}
else
{objects.input.attr('size',options.displayChar);}}
else
{if(options.multilines)
{objects.input.removeAttr('size');}
else
{objects.input.removeAttr('cols');}}}
if(object.width()>0)
{objects.input.css({'width':object.width()+'px','max-width':object.width()+'px'});}
return(options.displayChar);},setMaxChar:function(object,value)
{var options=object.data('options'),objects=object.data('objects'),properties=object.data('properties');if((!properties.initialized||options.maxChar!=value)&&value>=0)
{options.maxChar=value;if(!options.multilines)
{if(options.maxChar>0)
{objects.input.attr('maxlength',options.maxChar);}
else
{objects.input.removeAttr('maxlength');}}}
return(options.maxChar);},setNumRows:function(object,value)
{var options=object.data('options'),objects=object.data('objects'),properties=object.data('properties');if((!properties.initialized||options.numRows!=value)&&value>0)
{options.numRows=value;if(options.multilines)
{objects.input.attr('rows',options.numRows);}}
return(options.numRows);},setDisabled:function(object,value)
{var options=object.data('options'),objects=object.data('objects'),properties=object.data('properties');if((!properties.initialized||options.disabled!=value)&&(value==true||value==false))
{options.disabled=value;objects.input.attr('disabled',options.disabled);}
return(options.disabled);},setTextAlign:function(object,value)
{var options=object.data('options'),objects=object.data('objects'),properties=object.data('properties');if((!properties.initialized||options.textAlign!=value)&&(value=='left'||value=='right'))
{options.textAlign=value;objects.input.css('text-align',options.textAlign);}
return(options.textAlign);},setMultilines:function(object,value)
{var options=object.data('options'),objects=object.data('objects'),properties=object.data('properties');if((!properties.initialized||options.multilines!=value)&&(value==true||value==false))
{options.multilines=value;if(options.multilines)
{objects.input=$('<textarea/>');}
else
{objects.input=$('<input>',{type:"text",value:''});}
objects.container.append(objects.input.bind('keyup.inputText',function(event)
{return(privateMethods.keyUp(object,event));}).bind('change.inputText',function(event)
{return(privateMethods.change(object,event));}).bind('keydown.inputText',function(event)
{return(privateMethods.keyDown(object,event));}));}
return(options.textAlign);},setLanguages:function(object,value)
{var properties=object.data('properties'),options=object.data('options');options.languages=value;options.languagesValues={};if(options.languages.length>0)
{if($.inArray(options.currentLanguage,options.languages)<0||options.currentLanguage=='')options.currentLanguage=options.languages[0];for(var i=0;i<options.languages.length;i++)
{properties.languagesValues[options.languages[i]]='';}}
else
{options.currentLanguage='';}
return(options.languages);},setLanguagesValues:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if(value==':clear')
{for(var langValue in properties.languagesValues)
{privateMethods.setLanguageValue(object,langValue,'',langValue==options.currentLanguage);}}
else if(!$.isEmptyObject(value))
{for(var langValue in value)
{if(properties.languagesValues[langValue]!=null)
privateMethods.setLanguageValue(object,langValue,value[langValue],langValue==options.currentLanguage);}}
return(properties.languagesValues);},setLanguageValue:function(object,language,value,updateInput)
{var options=object.data('options'),properties=object.data('properties');if(properties.languagesValues[language]!=null)
{properties.languagesValues[language]=value;if(updateInput)privateMethods.setValue(object,properties.languagesValues[options.currentLanguage],true);}
return(options.languagesValues);},setCurrentLanguage:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if((!properties.initialized||options.currentLanguage!=value)&&$.inArray(value,options.languages)>=0)
{options.currentLanguage=value;privateMethods.setValue(object,properties.languagesValues[options.currentLanguage],true);}
return(options.currentLanguage);},setLanguageSelector:function(object,value)
{var options=object.data('options'),properties=object.data('properties');if((!properties.initialized||options.languageSelector!=value)&&value!=''&&$('#'+value).length>0)
{if(options.languageSelector!='')$('#'+options.languageSelector).unbind('inputListChange');options.languageSelector=value;if(options.languageSelector!='')
$('#'+options.languageSelector).bind('inputListChange',function(event,lang)
{privateMethods.setCurrentLanguage(object,lang);});}
return(options.currentLanguage);},setValue:function(object,value,apply)
{var options=object.data('options'),properties=object.data('properties'),objects=object.data('objects');if(properties.initialized&&properties.value==value)
{return(properties.value);}
privateMethods.setIsValid(object,privateMethods.isValid(object,value));properties.value=value;if(apply)
{objects.input.val(properties.value);}
if(options.currentLanguage!='')privateMethods.setLanguageValue(object,options.currentLanguage,value,false);if(options.change)object.trigger('inputTextChange',properties.value);return(properties.value);},setEventChange:function(object,value)
{var options=object.data('options');options.change=value;object.unbind('inputTextChange');if(value)object.bind('inputTextChange',options.change);return(options.change);},keyUp:function(object,event)
{var objects=object.data('objects');if(event.keyCode==9||event.keyCode==12||event.keyCode==16||event.keyCode==17||event.keyCode==18||event.keyCode==33||event.keyCode==34||event.keyCode==35||event.keyCode==36||event.keyCode==37||event.keyCode==38||event.keyCode==39||event.keyCode==40||event.keyCode==45||event.keyCode==93)return(false);return(privateMethods.setValue(object,objects.input.val(),false));},change:function(object,event)
{var objects=object.data('objects');return(privateMethods.setValue(object,objects.input.val(),false))},keyDown:function(object,event)
{var objects=object.data('objects'),options=object.data('options');if(options.maxChar>0&&objects.input.val().length>=options.maxChar&&!(event.keyCode==8||event.keyCode==9||event.keyCode==12||event.keyCode==16||event.keyCode==17||event.keyCode==18||event.keyCode==33||event.keyCode==34||event.keyCode==35||event.keyCode==36||event.keyCode==37||event.keyCode==38||event.keyCode==39||event.keyCode==40||event.keyCode==45||event.keyCode==46||event.keyCode==93||objects.input.get(0).selectionStart!=objects.input.get(0).selectionEnd))return(false);},doTranslation:function(object)
{var objects=object.data('objects'),properties=object.data('properties'),options=object.data('options');if(googleTranslate!=null)
{googleTranslate(properties.value,'',options.currentLanguage.substr(0,2),function(result)
{privateMethods.setValue(object,result,true);});}}};$.fn.inputText=function(method)
{if(publicMethods[method])
{return publicMethods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method)
{return publicMethods.init.apply(this,arguments);}
else
{$.error('Method '+method+' does not exist on jQuery.inputText');}}})(jQuery);

/*BEGIN themes/default/js/ui/jquery.ui.mouse.js */
/*!
 * jQuery UI Mouse 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 *
 * Depends:
 *	jquery.ui.widget.js
 */

(function($,undefined){var mouseHandled=false;$(document).mouseup(function(){mouseHandled=false;});$.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).bind("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function(event){if(mouseHandled){return;}
(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var that=this,btnIsLeft=(event.which===1),elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}
this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function(event){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}
return!this._mouseStarted;},_mouseUp:function(event){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}
this._mouseStop(event);}
return false;},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(){return this.mouseDelayMet;},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true;}});})(jQuery);

/*BEGIN themes/default/js/ui/jquery.ui.position.js */
/*!
 * jQuery UI Position 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

(function($,undefined){$.ui=$.ui||{};var cachedScrollbarWidth,max=Math.max,abs=Math.abs,round=Math.round,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width / 100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height / 100:1)];}
function parseCss(element,property){return parseInt($.css(element,property),10)||0;}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}
if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}
var w1,w2,div=$("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}
div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow?"":within.element.css("overflow-x"),overflowY=within.isWindow?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowX?$.position.scrollbarWidth():0,height:hasOverflowY?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]);return{element:withinElement,isWindow:isWindow,offset:withinElement.offset()||{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:isWindow?withinElement.width():withinElement.outerWidth(),height:isWindow?withinElement.height():withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}
if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth / 2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight / 2;}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth / 2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight / 2;}
position.left+=myOffset[0];position.top+=myOffset[1];if(!$.support.offsetFractions){position.left=round(position.left);position.top=round(position.top);}
collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}
options.using.call(this,props,feedback);};}
elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}
else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if((position.top+myOffset+atOffset+offset)>overTop&&(newOverBottom<0||newOverBottom<abs(overTop))){position.top+=myOffset+atOffset+offset;}}
else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if((position.top+myOffset+atOffset+offset)>overBottom&&(newOverTop>0||abs(newOverTop)<overBottom)){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};(function(){var testElement,testElementParent,testElementStyle,offsetLeft,i,body=document.getElementsByTagName("body")[0],div=document.createElement("div");testElement=document.createElement(body?"div":"body");testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(body){$.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"});}
for(i in testElementStyle){testElement.style[i]=testElementStyle[i];}
testElement.appendChild(div);testElementParent=body||document.documentElement;testElementParent.insertBefore(testElement,testElementParent.firstChild);div.style.cssText="position: absolute; left: 10.7432222px;";offsetLeft=$(div).offset().left;$.support.offsetFractions=offsetLeft>10&&offsetLeft<11;testElement.innerHTML="";testElementParent.removeChild(testElement);})();}(jQuery));

/*BEGIN plugins/AMenuManager/js/amm_links.js */
function userLinksManage(opt,keys,token)
{var options={ajaxUrl:'plugins/AMenuManager/amm_ajax.php'},translatedKeys={g002_ok:'g002_ok',g002_cancel:'g002_cancel',g002_loading:'g002_loading',g002_editoflink:'g002_editoflink',g002_createoflink:'g002_createoflink'},properties={id:'',token:token},load=function()
{$("#iList table.littlefont").sortable('destroy');$('#iList').html("<br>"+translatedKeys.g002_loading+"<br><img src='./plugins/GrumPluginClasses/icons/processing.gif'>");$.ajax({type:"POST",url:options.ajaxUrl,async:true,data:{ajaxfct:"admin.links.list",token:properties.token},success:function(msg)
{$("#iList").html(msg);$('#iListOrderButtons').css("display",'none');$("#iList").sortable({connectWith:'.connectedSortable',axis:"y",cursor:'move',opacity:0.6,items:'li',tolerance:'pointer',update:function(){$('#iListOrderButtons').css("display",'block');}});}});},edit=function(linkId)
{properties.id=linkId;$('#iDialogEdit').dialog('option','title',(linkId=='')?translatedKeys.g002_createoflink:translatedKeys.g002_editoflink).dialog("open");},remove=function(linkId)
{properties.id=linkId;$.ajax({type:"POST",url:options.ajaxUrl,async:true,data:{ajaxfct:"admin.links.delete",id:properties.id,token:properties.token},success:function(msg)
{load();}});},checkValidity=function()
{$('.error').removeClass('error');ok=true;if($('#iamm_label').inputText('value')=='')
{$('#iamm_label').inputText('isValid',false);ok=false;}
if($('#iamm_url').inputText('value')=='')
{$('#iamm_url').inputText('isValid',false);ok=false;}
return(ok);},updateDialog=function(items)
{if(items=='')
{$('#iamm_label').inputText('value','');$('#iamm_url').inputText('value','');$('#iamm_icon').inputList('value',':first');$('#iamm_mode').inputList('value',':first');$('#iamm_visible').inputRadio('value','y');$('#iamm_access_users').inputCheckbox('value',':all');$('#iamm_access_groups').inputCheckbox('value',':all');}
else
{tmp=$.parseJSON(items);$('#iamm_label').inputText('value',tmp.label);$('#iamm_url').inputText('value',tmp.url);$('#iamm_icon').inputList('value',tmp.icon);$('#iamm_mode').inputList('value',tmp.mode);$('#iamm_visible').inputRadio('value',tmp.visible);$('#iamm_access_users').inputCheckbox('value','',tmp.accessUsers);$('#iamm_access_users').inputCheckbox('value',':invert');$('#iamm_access_groups').inputCheckbox('value','',tmp.accessGroups);$('#iamm_access_groups').inputCheckbox('value',':invert');}},doUpdateOrder=function()
{var datas={links:[]},order=0;$('#iList li.connectedSortable').each(function()
{datas.links.push({id:$(this).attr('linkId'),order:order});order++;});$.ajax({type:"POST",url:options.ajaxUrl,async:true,data:{ajaxfct:"admin.links.order",token:properties.token,datas:datas},success:function(msg)
{displayProcessing(false);returned=msg.split('!');if(returned[0]=='OK')
{$('#iListOrderButtons').css("display",'none');}
else
{$('#'+returned[0]).addClass('error');alert(returned[1]);}}});},doUpdate=function()
{displayProcessing(true);var datas={label:$('#iamm_label').inputText('value'),url:$('#iamm_url').inputText('value'),icon:$('#iamm_icon').inputList('value'),mode:$('#iamm_mode').inputList('value'),visible:$('#iamm_visible').inputRadio('value'),accessUsers:$('#iamm_access_users').inputCheckbox('value'),accessGroups:$('#iamm_access_groups').inputCheckbox('value')};$.ajax({type:"POST",url:options.ajaxUrl,async:true,data:{ajaxfct:"admin.links.set",id:properties.id,token:properties.token,datas:datas},success:function(msg)
{displayProcessing(false);if(msg.match(/^[0-9]+$/i)!=null)
{$('#iDialogEdit').dialog("close");load();}
else
{returned=msg.split('!');$('#'+returned[0]).addClass('error');alert(returned[1]);}}});},displayProcessing=function(visible)
{if(visible)
{$('#iBDProcessing').css("display","block");}
else
{$('#iBDProcessing').css("display","none");}},init=function()
{var buttons={};buttons[translatedKeys.g002_ok]=function()
{if(checkValidity())doUpdate();};buttons[translatedKeys.g002_cancel]=function()
{$('#iDialogEdit').dialog("close");};$('#iDialogEdit').dialog({autoOpen:false,width:600,height:400,modal:true,dialogClass:'gcBgTabSheet gcBorder',title:'',buttons:buttons}).bind('dialogopen',function()
{if(properties.id!='')
{displayProcessing(true);$.ajax({type:"POST",url:options.ajaxUrl,async:true,data:{ajaxfct:"admin.links.get",id:properties.id,token:properties.token},success:function(msg)
{updateDialog(msg);displayProcessing(false);}});}
else
{updateDialog('');}});$('#iamm_label').inputText({displayChar:50,maxChar:50});$('#iamm_url').inputText({displayChar:50,maxChar:255});$('#iamm_icon').inputList({listMaxWidth:250,colsWidth:[22,200],colsCss:['iconColImg','iconColText'],popupMode:'mouseout'}).css('display','block');$('#iamm_mode').inputList({popupMode:'mouseout'}).css('display','block');$('#iamm_visible').inputRadio();$('#iamm_access_users').inputCheckbox({returnMode:'notSelected'});$('#iamm_access_groups').inputCheckbox({returnMode:'notSelected'});load();};$.extend(options,opt);$.extend(translatedKeys,keys);this.load=function(){load();};this.edit=function(linkId){edit(linkId);};this.remove=function(linkId){remove(linkId);};this.doUpdateOrder=function(){doUpdateOrder();};init();};

/*BEGIN themes/default/js/ui/minified/jquery.ui.accordion.min.js */
/*! jQuery UI - v1.10.1 - 2013-02-15
* http://jqueryui.com
* Includes: jquery.ui.accordion.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.1",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),!t.collapsible&&(t.active===!1||t.active==null)&&(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();if(t.active===!1&&t.collapsible===!0||!this.headers.length)t.active=!1,this.active=e();t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");r||(r=o+"-header-"+t,n.attr("id",r)),s||(s=o+"-panel-"+t,i.attr("id",s)),n.attr("aria-controls",s),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),i==="fill"?(t=s.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):i==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);

/*BEGIN themes/default/js/ui/jquery.ui.button.js */
/*!
 * jQuery UI Button 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */

(function($,undefined){var lastActive,startXPos,startYPos,clickDragged,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",stateClasses="ui-state-hover ui-state-active ",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(){var buttons=$(this).find(":ui-button");setTimeout(function(){buttons.button("refresh");},1);},radioGroup=function(radio){var name=radio.name,form=radio.form,radios=$([]);if(name){name=name.replace(/'/g,"\\'");if(form){radios=$(form).find("[name='"+name+"']");}else{radios=$("[name='"+name+"']",radio.ownerDocument).filter(function(){return!this.form;});}}
return radios;};$.widget("ui.button",{version:"1.10.1",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,formResetHandler);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled");}else{this.element.prop("disabled",this.options.disabled);}
this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var that=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",activeClass=!toggleButton?"ui-state-active":"",focusClass="ui-state-focus";if(options.label===null){options.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html());}
this._hoverable(this.buttonElement);this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(options.disabled){return;}
if(this===lastActive){$(this).addClass("ui-state-active");}}).bind("mouseleave"+this.eventNamespace,function(){if(options.disabled){return;}
$(this).removeClass(activeClass);}).bind("click"+this.eventNamespace,function(event){if(options.disabled){event.preventDefault();event.stopImmediatePropagation();}});this.element.bind("focus"+this.eventNamespace,function(){that.buttonElement.addClass(focusClass);}).bind("blur"+this.eventNamespace,function(){that.buttonElement.removeClass(focusClass);});if(toggleButton){this.element.bind("change"+this.eventNamespace,function(){if(clickDragged){return;}
that.refresh();});this.buttonElement.bind("mousedown"+this.eventNamespace,function(event){if(options.disabled){return;}
clickDragged=false;startXPos=event.pageX;startYPos=event.pageY;}).bind("mouseup"+this.eventNamespace,function(event){if(options.disabled){return;}
if(startXPos!==event.pageX||startYPos!==event.pageY){clickDragged=true;}});}
if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false;}});}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false;}
$(this).addClass("ui-state-active");that.buttonElement.attr("aria-pressed","true");var radio=that.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0];}).removeClass("ui-state-active").attr("aria-pressed","false");});}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(options.disabled){return false;}
$(this).addClass("ui-state-active");lastActive=this;that.document.one("mouseup",function(){lastActive=null;});}).bind("mouseup"+this.eventNamespace,function(){if(options.disabled){return false;}
$(this).removeClass("ui-state-active");}).bind("keydown"+this.eventNamespace,function(event){if(options.disabled){return false;}
if(event.keyCode===$.ui.keyCode.SPACE||event.keyCode===$.ui.keyCode.ENTER){$(this).addClass("ui-state-active");}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){$(this).removeClass("ui-state-active");});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE){$(this).click();}});}}
this._setOption("disabled",options.disabled);this._resetButton();},_determineButtonType:function(){var ancestor,labelSelector,checked;if(this.element.is("[type=checkbox]")){this.type="checkbox";}else if(this.element.is("[type=radio]")){this.type="radio";}else if(this.element.is("input")){this.type="input";}else{this.type="button";}
if(this.type==="checkbox"||this.type==="radio"){ancestor=this.element.parents().last();labelSelector="label[for='"+this.element.attr("id")+"']";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length){this.buttonElement=ancestor.find(labelSelector);}}
this.element.addClass("ui-helper-hidden-accessible");checked=this.element.is(":checked");if(checked){this.buttonElement.addClass("ui-state-active");}
this.buttonElement.prop("aria-pressed",checked);}else{this.buttonElement=this.element;}},widget:function(){return this.buttonElement;},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" "+stateClasses+" "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title");}},_setOption:function(key,value){this._super(key,value);if(key==="disabled"){if(value){this.element.prop("disabled",true);}else{this.element.prop("disabled",false);}
return;}
this._resetButton();},refresh:function(){var isDisabled=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOption("disabled",isDisabled);}
if(this.type==="radio"){radioGroup(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true");}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false");}});}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true");}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false");}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label);}
return;}
var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text){buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":(icons.primary?"-primary":"-secondary")));}
if(icons.primary){buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>");}
if(icons.secondary){buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>");}
if(!this.options.text){buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){buttonElement.attr("title",$.trim(buttonText));}}}else{buttonClasses.push("ui-button-text-only");}
buttonElement.addClass(buttonClasses.join(" "));}});$.widget("ui.buttonset",{version:"1.10.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset");},_init:function(){this.refresh();},_setOption:function(key,value){if(key==="disabled"){this.buttons.button("option",key,value);}
this._super(key,value);},refresh:function(){var rtl=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(rtl?"ui-corner-left":"ui-corner-right").end().end();},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");}});}(jQuery));

/*BEGIN themes/default/js/ui/jquery.ui.dialog.js */
/*!
 * jQuery UI Dialog 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */

(function($,undefined){var sizeRelatedOptions={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};$.widget("ui.dialog",{version:"1.10.1",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset);}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable();}
if(this.options.resizable&&$.fn.resizable){this._makeResizable();}
this._isOpen=false;},_init:function(){if(this.options.autoOpen){this.open();}},_appendTo:function(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element);}
return this.document.find(element||"body").eq(0);},_destroy:function(){var next,originalPosition=this.originalPosition;this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(true,true).remove();if(this.originalTitle){this.element.attr("title",this.originalTitle);}
next=originalPosition.parent.children().eq(originalPosition.index);if(next.length&&next[0]!==this.element[0]){next.before(this.element);}else{originalPosition.parent.append(this.element);}},widget:function(){return this.uiDialog;},disable:$.noop,enable:$.noop,close:function(event){var that=this;if(!this._isOpen||this._trigger("beforeClose",event)===false){return;}
this._isOpen=false;this._destroyOverlay();if(!this.opener.filter(":focusable").focus().length){$(this.document[0].activeElement).blur();}
this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event);});},isOpen:function(){return this._isOpen;},moveToTop:function(){this._moveToTop();},_moveToTop:function(event,silent){var moved=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;if(moved&&!silent){this._trigger("focus",event);}
return moved;},open:function(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable();}
return;}
this._isOpen=true;this.opener=$(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,true);this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus");});this._trigger("open");},_focusTabbable:function(){var hasFocus=this.element.find("[autofocus]");if(!hasFocus.length){hasFocus=this.element.find(":tabbable");}
if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable");}
if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");}
if(!hasFocus.length){hasFocus=this.uiDialog;}
hasFocus.eq(0).focus();},_keepFocus:function(event){function checkFocus(){var activeElement=this.document[0].activeElement,isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable();}}
event.preventDefault();checkFocus.call(this);this._delay(checkFocus);},_createWrapper:function(){this.uiDialog=$("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+
this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return;}
if(event.keyCode!==$.ui.keyCode.TAB){return;}
var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){first.focus(1);event.preventDefault();}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){last.focus(1);event.preventDefault();}},mousedown:function(event){if(this._moveToTop(event)){this._focusTabbable();}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});}},_createTitlebar:function(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(event){if(!$(event.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus();}}});this.uiDialogTitlebarClose=$("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(event){event.preventDefault();this.close(event);}});uiDialogTitle=$("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(uiDialogTitle);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")});},_title:function(title){if(!this.options.title){title.html("&#160;");}
title.text(this.options.title);},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons();},_createButtons:function(){var that=this,buttons=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||($.isArray(buttons)&&!buttons.length)){this.uiDialog.removeClass("ui-dialog-buttons");return;}
$.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props;props=$.extend({type:"button"},props);click=props.click;props.click=function(){click.apply(that.element[0],arguments);};buttonOptions={icons:props.icons,text:props.showText};delete props.icons;delete props.showText;$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet);});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog);},_makeDraggable:function(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){$(this).addClass("ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui));},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui));},stop:function(event,ui){options.position=[ui.position.left-that.document.scrollLeft(),ui.position.top-that.document.scrollTop()];$(this).removeClass("ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui));}});},_makeResizable:function(){var that=this,options=this.options,handles=options.resizable,position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui));},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui));},stop:function(event,ui){options.height=$(this).height();options.width=$(this).width();$(this).removeClass("ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui));}}).css("position",position);},_minHeight:function(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height);},_position:function(){var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}
this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide();}},_setOptions:function(options){var that=this,resize=false,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in sizeRelatedOptions){resize=true;}
if(key in resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();this._position();}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="dialogClass"){uiDialog.removeClass(this.options.dialogClass).addClass(value);}
if(key==="disabled"){return;}
this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo());}
if(key==="buttons"){this._createButtons();}
if(key==="closeText"){this.uiDialogTitlebarClose.button({label:""+value});}
if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}
if(!isDraggable&&value){this._makeDraggable();}}
if(key==="position"){this._position();}
if(key==="resizable"){isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy");}
if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value);}
if(!isResizable&&value!==false){this._makeResizable();}}
if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));}},_size:function(){var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth;}
nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"});}else{this.element.height(Math.max(0,options.height-nonContentHeight));}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight());}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0];});},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_createOverlay:function(){if(!this.options.modal){return;}
if(!$.ui.dialog.overlayInstances){this._delay(function(){if($.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(event){if(!$(event.target).closest(".ui-dialog").length&&!$(event.target).closest(".ui-datepicker").length){event.preventDefault();$(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable();}});}});}
this.overlay=$("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});$.ui.dialog.overlayInstances++;},_destroyOverlay:function(){if(!this.options.modal){return;}
if(this.overlay){$.ui.dialog.overlayInstances--;if(!$.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog");}
this.overlay.remove();this.overlay=null;}}});$.ui.dialog.overlayInstances=0;if($.uiBackCompat!==false){$.widget("ui.dialog",$.ui.dialog,{_position:function(){var position=this.options.position,myAt=[],offset=[0,0],isVisible;if(position){if(typeof position==="string"||(typeof position==="object"&&"0"in position)){myAt=position.split?position.split(" "):[position[0],position[1]];if(myAt.length===1){myAt[1]=myAt[0];}
$.each(["left","top"],function(i,offsetPosition){if(+myAt[i]===myAt[i]){offset[i]=myAt[i];myAt[i]=offsetPosition;}});position={my:myAt[0]+(offset[0]<0?offset[0]:"+"+offset[0])+" "+
myAt[1]+(offset[1]<0?offset[1]:"+"+offset[1]),at:myAt.join(" ")};}
position=$.extend({},$.ui.dialog.prototype.options.position,position);}else{position=$.ui.dialog.prototype.options.position;}
isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}
this.uiDialog.position(position);if(!isVisible){this.uiDialog.hide();}}});}}(jQuery));

/*BEGIN themes/default/js/ui/jquery.ui.sortable.js */
/*!
 * jQuery UI Sortable 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */

(function($,undefined){function isOverAxis(x,reference,size){return(x>reference)&&(x<(reference+size));}
$.widget("ui.sortable",$.ui.mouse,{version:"1.10.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var o=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?o.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit();this.ready=true;},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item");}
return this;},_setOption:function(key,value){if(key==="disabled"){this.options[key]=value;this.widget().toggleClass("ui-sortable-disabled",!!value);}else{$.Widget.prototype._setOption.apply(this,arguments);}},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=false,that=this;if(this.reverting){return false;}
if(this.options.disabled||this.options.type==="static"){return false;}
this._refreshItems(event);$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return false;}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target);}
if(!currentItem){return false;}
if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=true;}});if(!validHandle){return false;}}
this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function(event,overrideHandle,noActivation){var i,o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide();}
this._createPlaceholder();if(o.containment){this._setContainment();}
if(o.cursor){if($("body").css("cursor")){this._storedCursor=$("body").css("cursor");}
$("body").css("cursor",o.cursor);}
if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity");}
this.helper.css("opacity",o.opacity);}
if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex");}
this.helper.css("zIndex",o.zIndex);}
if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}
this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions();}
if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this));}}
if($.ui.ddmanager){$.ui.ddmanager.current=this;}
if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}
this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);return true;},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options,scrolled=false;this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}
if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;}
if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}
if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}
if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}
for(i=this.items.length-1;i>=0;i--){item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue;}
if(item.instance!==this.currentContainer){continue;}
if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}
this._trigger("change",event,this._uiHash());break;}}
this._contactContainers(event);if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}
this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function(event,noPropagation){if(!event){return;}
if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event);}
if(this.options.revert){var that=this,cur=this.placeholder.offset();this.reverting=true;$(this.helper).animate({left:cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){that._clear(event);});}else{this._clear(event,noPropagation);}
return false;},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0]);}
if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove();}
$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}
return this;},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||(/(.+)[\-=_](.+)/));if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]));}});if(!str.length&&o.key){str.push(o.key+"=");}
return str.join("&");},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"");});return ret;},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElement=(y1+dyClick)>t&&(y1+dyClick)<b&&(x1+dxClick)>l&&(x1+dxClick)<r;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"])){return isOverElement;}else{return(l<x1+(this.helperProportions.width / 2)&&x2-(this.helperProportions.width / 2)<r&&t<y1+(this.helperProportions.height / 2)&&y2-(this.helperProportions.height / 2)<b);}},_intersectsWithPointer:function(item){var isOverElementHeight=(this.options.axis==="x")||isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y")||isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement){return false;}
return this.floating?(((horizontalDirection&&horizontalDirection==="right")||verticalDirection==="down")?2:1):(verticalDirection&&(verticalDirection==="down"?2:1));},_intersectsWithSides:function(item){var isOverBottomHalf=isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection==="right"&&isOverRightHalf)||(horizontalDirection==="left"&&!isOverRightHalf));}else{return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||(verticalDirection==="up"&&!isOverBottomHalf));}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left");},refresh:function(event){this._refreshItems(event);this.refreshPositions();return this;},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);}}}}
queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(i=queries.length-1;i>=0;i--){queries[i][0].each(function(){items.push(this);});}
return $(items);},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return false;}}
return true;});},_refreshItems:function(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}}}}
for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});}}},refreshPositions:function(fast){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}
var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue;}
t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}
p=t.offset();item.left=p.left;item.top=p.top;}
if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();}}
return this;},_createPlaceholder:function(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function(){var el=$(document.createElement(that.currentItem[0].nodeName)).addClass(className||that.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!className){el.style.visibility="hidden";}
return el;},update:function(container,p){if(className&&!o.forcePlaceholderSize){return;}
if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10));}
if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10));}}};}
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder);},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,base,cur,nearBottom,innermostContainer=null,innermostIndex=null;for(i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0])){continue;}
if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue;}
innermostContainer=this.containers[i];innermostIndex=i;}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(!innermostContainer){return;}
if(this.containers.length===1){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}else{dist=10000;itemWithLeastDistance=null;posProperty=this.containers[innermostIndex].floating?"left":"top";sizeProperty=this.containers[innermostIndex].floating?"width":"height";base=this.positionAbs[posProperty]+this.offset.click[posProperty];for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue;}
if(this.items[j].item[0]===this.currentItem[0]){continue;}
cur=this.items[j].item.offset()[posProperty];nearBottom=false;if(Math.abs(cur-base)>Math.abs(cur+this.items[j][sizeProperty]-base)){nearBottom=true;cur+=this.items[j][sizeProperty];}
if(Math.abs(cur-base)<dist){dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down";}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return;}
this.currentContainer=this.containers[innermostIndex];itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper==="clone"?this.currentItem.clone():this.currentItem);if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);}
if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};}
if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width());}
if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height());}
return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}
if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}
if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0};}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}
if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(o.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,($(o.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}
if(!(/^(document|window|parent)$/).test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=($(ce).css("overflow")!=="hidden");this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}
var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+
this.offset.relative.top*mod+
this.offset.parent.top*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+
this.offset.relative.left*mod+
this.offset.parent.left*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}
if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left;}
if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top;}
if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left;}
if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top;}}
if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/ o.grid[1])*o.grid[1];pageY=this.containment?((top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3])?top:((top-this.offset.click.top>=this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/ o.grid[0])*o.grid[0];pageX=this.containment?((left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2])?left:((left-this.offset.click.left>=this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY-
this.offset.click.top-
this.offset.relative.top-
this.offset.parent.top+
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-
this.offset.click.left-
this.offset.relative.left-
this.offset.parent.left+
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh);}});},_clear:function(event,noPropagation){this.reverting=false;var i,delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem);}
this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]="";}}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});}
if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});}
if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.currentContainer));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.currentContainer));}}
for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push((function(c){return function(event){c._trigger("deactivate",event,this._uiHash(this));};}).call(this,this.containers[i]));}
if(this.containers[i].containerCache.over){delayedTriggers.push((function(c){return function(event){c._trigger("out",event,this._uiHash(this));};}).call(this,this.containers[i]));this.containers[i].containerCache.over=0;}}
if(this._storedCursor){$("body").css("cursor",this._storedCursor);}
if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity);}
if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);}
this.dragging=false;if(this.cancelHelperRemoval){if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}
this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return false;}
if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());}
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!==this.currentItem[0]){this.helper.remove();}
this.helper=null;if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}
this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return true;},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null};}});})(jQuery);

