/*BEGIN themes/default/js/scripts.js */
function phpWGOpenWindow(theURL,winName,features)
{img=new Image();img.src=theURL;if(img.complete)
{var width=img.width+40,height=img.height+40;}
else
{var width=640,height=480;img.onload=function(){newWin.resizeTo(img.width+50,img.height+100);};}
newWin=window.open(theURL,winName,features+',left=2,top=1,width='+width+',height='+height);}
function popuphelp(url)
{window.open(url,'dc_popup','alwaysRaised=yes,dependent=yes,toolbar=no,height=420,width=500,menubar=no,resizable=yes,scrollbars=yes,status=no');}
function pwgBind(object,method){var args=Array.prototype.slice.call(arguments,2);return function(){return method.apply(object,args.concat(Array.prototype.slice.call(arguments,0)));}}
function PwgWS(urlRoot)
{this.urlRoot=urlRoot;this.options={method:"GET",async:true,onFailure:null,onSuccess:null};};PwgWS.prototype={callService:function(method,parameters,options)
{if(options)
{for(var prop in options)
this.options[prop]=options[prop];}
try{this.xhr=new XMLHttpRequest();}
catch(e){try{this.xhr=new ActiveXObject('Msxml2.XMLHTTP');}
catch(e){try{this.xhr=new ActiveXObject('Microsoft.XMLHTTP');}
catch(e){this.error(0,"Cannot create request object");return;}}}
this.xhr.onreadystatechange=pwgBind(this,this.onStateChange);var url=this.urlRoot+"ws.php?format=json&method="+method;var body="";if(parameters)
{for(var prop in parameters)
{if(typeof parameters[prop]=='object'&&parameters[prop])
{for(var i=0;i<parameters[prop].length;i++)
body+=prop+"[]="+encodeURIComponent(parameters[prop][i])+"&";}
else
body+=prop+"="+encodeURIComponent(parameters[prop])+"&";}}
if(this.options.method!="POST")
{url+="&"+body;body=null;}
this.xhr.open(this.options.method,url,this.options.async);if(this.options.method=="POST")
this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");try{this.xhr.send(body);}catch(e){this.error(0,e.message);}},onStateChange:function(){var readyState=this.xhr.readyState;if(readyState==4)
{try{this.respondToReadyState(readyState);}finally{this.cleanup();}}},error:function(httpCode,text)
{!this.options.onFailure||this.options.onFailure(httpCode,text);this.cleanup();},respondToReadyState:function(readyState)
{var xhr=this.xhr;if(readyState==4&&xhr.status==200)
{var resp;try{resp=window.JSON&&window.JSON.parse?window.JSON.parse(xhr.responseText):(new Function("return "+xhr.responseText))();}
catch(e){this.error(200,e.message+'\n'+xhr.responseText.substr(0,512));}
if(resp!=null)
{if(resp.stat==null)
this.error(200,"Invalid response");else if(resp.stat=='ok')!this.options.onSuccess||this.options.onSuccess(resp.result);else
this.error(200,resp.err+" "+resp.message);}}
if(readyState==4&&xhr.status!=200)
this.error(xhr.status,xhr.statusText);},cleanup:function()
{if(this.xhr)this.xhr.onreadystatechange=null;this.xhr=null;this.options.onFailure=this.options.onSuccess=null;},xhr:null}
function pwgAddEventListener(elem,evt,fn)
{if(window.addEventListener)
elem.addEventListener(evt,fn,false);else
elem.attachEvent('on'+evt,fn);};

/*BEGIN plugins/rv_menutree/js/rvtree.min.js */
var XElement={hasClass:function(a,d){if(!a)return false;var f=a.className;return f.length>0&&(f==d||RegExp("(^|\\s)"+d+"(\\s|$)").test(f))},addClass:function(a,d){if(a){XElement.hasClass(a,d)||(a.className+=(a.className?" ":"")+d);return a}},toggleClasses:function(a,d,f){if(a){for(var b=a.className.split(/\s+/),g=-1,c=-1,e=0;e<b.length;e++){if(b[e]==d)g=e;if(b[e]==f)c=e}if(g>=0){b.splice(g,1);c>=g&&c--}else b.push(d);c>=0?b.splice(c,1):b.push(f);a.className=b.join(" ");return a}}},RVTree={options:{nodeClosedClass:"liClosed",
nodeOpenClass:"liOpen",nodeBulletClass:"liBullet",nodeLinkClass:"bullet"},convertTree:function(a){if(document.createElement){if(window.attachEvent&&!window.opera)if(/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)!=null)RVTree.options.IEVersion=parseFloat(RegExp.$1);RVTree._processList(a,true)}},_processList:function(a,d){if(!(!a.childNodes||a.childNodes.length==0)){for(var f=0;f<a.childNodes.length;f++){var b=a.childNodes[f];if(b.nodeName=="LI"){for(var g=false,c=0;c<b.childNodes.length;c++){var e=
b.childNodes[c];if(e.nodeName=="UL"){g=true;RVTree._processList(e,false)}}c=document.createElement("SPAN");e="\u00a0";c.className=RVTree.options.nodeLinkClass;if(g){XElement.hasClass(b,RVTree.options.nodeOpenClass)||XElement.addClass(b,RVTree.options.nodeClosedClass);if(b.firstChild.nodeName=="#text"){e+=b.firstChild.nodeValue;b.removeChild(b.firstChild)}c.onclick=function(){XElement.toggleClasses(this.parentNode,RVTree.options.nodeOpenClass,RVTree.options.nodeClosedClass);return false}}else if(XElement.hasClass(b,
RVTree.options.nodeClosedClass))c.onclick=function(){var h=this.parentNode.getElementsByTagName("A");if(h.length)document.location=h[0].href};else XElement.addClass(b,RVTree.options.nodeBulletClass);b.style.listStyleType="none";if(d&&RVTree.options.IEVersion&&RVTree.options.IEVersion<8)b.style.marginLeft="-16px";if(c){c.appendChild(document.createTextNode(e));b.insertBefore(c,b.firstChild)}}}a.style.marginLeft=0;a.style.paddingLeft=d?0:"8px"}}};
(function(){if(typeof _rvTreeAutoQueue!="undefined"&&_rvTreeAutoQueue.length)for(var a=0;a<_rvTreeAutoQueue.length;a++)RVTree.convertTree(_rvTreeAutoQueue[a]);_rvTreeAutoQueue={push:function(d){RVTree.convertTree(d)}}})();

/*BEGIN themes/default/js/switchbox.js */
(function(){var sbFunc=function(link,box){jQuery(link).click(function(){var elt=jQuery(box);elt.css("left",Math.min(jQuery(this).position().left,jQuery(window).width()-elt.outerWidth(true)-5)).css("top",jQuery(this).position().top+jQuery(this).outerHeight(true)).toggle();return false;});jQuery(box).on("mouseleave click",function(){jQuery(this).hide();});};if(window.SwitchBox){for(var i=0;i<SwitchBox.length;i+=2)
sbFunc(SwitchBox[i],SwitchBox[i+1]);}
SwitchBox={push:sbFunc}})();

