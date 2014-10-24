/*BEGIN header */

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

/*BEGIN plugins/rv_gmaps/template/data_handler.js */
function PwgDataHandler(map,opts)
{this._map=map;this._infoWindow=new google.maps.InfoWindow();this.styler=opts.styler;this.options=jQuery.fn.extend({show_all_img_src:null},opts||{});google.maps.event.bind(this._map,"click",this,this._onMapClick);}
PwgDataHandler.prototype={_map:null,_infoWindow:null,options:{},_markers:[],_navHtmlIds:["gotoPrevImage","gotoNextImage"],_navHtmlHandles:[],_prevResult:{nb_items:0},terminate:function()
{this._map=null;try{for(i=0;i<this._markers.length;i++)
this._markers[i].pwg=null;this._markers.length=0;}
catch(e){}},handle:function(data)
{var i;if(document.title!=data.title)
document.title=data.title;var elt=document.getElementById("aPageUrl");if(elt&&elt.href!=data.page_url.urlNoHtm())
{elt.href=data.page_url.urlNoHtm();elt.innerHTML=data.title;elt.title=Localization.fmt1("go to %s",data.title);}
var elt=document.getElementById("aBlowup");if(elt&&elt.href!=data.blowup_url.urlNoHtm())
elt.href=data.blowup_url.urlNoHtm();var elt=document.getElementById("aKml");if(elt&&elt.href!=data.kml_url.urlNoHtm())
{elt.href=data.kml_url.urlNoHtm();elt.title=Localization.fmt1("opens %s in Google Earth",data.title);}
var changed=true;if(this._prevResult.nb_items==data.nb_items&&this._markers.length==data.image_clusters.length)
{changed=false;if(this._markers.length>0&&!this._markers[0].getPosition().equals(data.image_clusters[0].position))
changed=true;}
if(changed)
{var markersToRemove=[],clustersToAdd=[],newMarkers=[],cluster,marker;data.image_clusters.sort(function(a,b){return PwgDataHandler.cmpll(a.position,b.position);});for(i=0;i<data.image_clusters.length;i++)
{cluster=data.image_clusters[i];while(this._markers.length)
{marker=this._markers[0];if(PwgDataHandler.cmpll(cluster.position,marker.getPosition())==0)
{marker.setOptions(this.styler.changeStyle(cluster,marker.pwg));marker.pwg={nb_items:cluster.nb_items,images:cluster.items,bounds:cluster.bounds,blowup_url:cluster.blowup_url};newMarkers.push(marker);this._markers.shift();cluster=null;break;}
else if(PwgDataHandler.cmpll(cluster.position,marker.getPosition())<0)
{break;}
else
{markersToRemove.push(marker);this._markers.shift();}}
if(cluster)
clustersToAdd.push(cluster);}
if(document.is_debug)glog('reused '+newMarkers.length+' exact markers');markersToRemove=markersToRemove.concat(this._markers);var infoWindowMarker=this._infoWindow.getAnchor();for(i=0;i<clustersToAdd.length;i++)
{cluster=clustersToAdd[i];var theTitle=(cluster.nb_items>1)?Localization.fmt1("%d photos",cluster.nb_items):cluster.items[0].name;marker=markersToRemove.pop();if(marker&&marker==infoWindowMarker)
{marker.setMap(null);google.maps.event.clearInstanceListeners(marker);if(document.is_debug)glog('removed marker with infoWindow');marker=this._markers.pop();}
if(!marker)
{marker=new google.maps.Marker(this.styler.getStyle(cluster));marker.setPosition(cluster.position);marker.setTitle(theTitle);google.maps.event.addListener(marker,"click",pwgBind(this,this._onMarkerClick,marker));google.maps.event.addListener(marker,"dblclick",pwgBind(this,this._onMarkerDblClick,marker));marker.setMap(this._map);}
else
{marker.currentImageIndex=0;marker.setPosition(cluster.position);marker.setTitle(theTitle);marker.setOptions(this.styler.changeStyle(cluster,marker.pwg));}
newMarkers.push(marker);marker.pwg={nb_items:cluster.nb_items,images:cluster.items,bounds:cluster.bounds,blowup_url:cluster.blowup_url};}
for(i=0;i<markersToRemove.length;i++)
{markersToRemove[i].setMap(null);google.maps.event.clearInstanceListeners(markersToRemove[i]);}
this._markers=newMarkers;this._markers.sort(function(a,b){return PwgDataHandler.cmpll(a.getPosition(),b.getPosition());});this._prevResult.nb_items=data.nb_items;}
document.getElementById("dataLoadStatus").innerHTML=Localization.fmt1("%d photos",data.nb_items);},_onMarkerClick:function(marker)
{if(this._infoWindow.getAnchor()==marker)
return;var content="";if(!marker.currentImageIndex)
marker.currentImageIndex=0;content+='<div class="gmiw_header" style="'+(marker.pwg.images.length>1?'':'display:none')+'">';content+='<span id="pwgImageCounters">'+this.buildCurrentPictureCounterHtml(marker)+'</span> ';content+='<a href="javascript:void(0);" id="'+this._navHtmlIds[0]+'">';content+='<span>'+"&laquo; "+Localization.get('Prev')+'</span>';content+='</a>';content+=" ";content+='<a href="javascript:void(0);" id="'+this._navHtmlIds[1]+'">';content+='<span>'+Localization.get('Next')+" &raquo;"+'</span>';content+='</a>';content+=" ";var imgShowAll='';if(this.options.show_all_img_src)
imgShowAll='<img src="'+this.options.show_all_img_src+'" alt="" style="border:0" /> ';content+='<a id="pwgImageBlowup" href="'+marker.pwg.blowup_url+'" onclick="return PwgDataHandler.blowupUrl(this.href);" title='+Localization.getQ('show all photos around this location')+'>'+
imgShowAll+'<span>'+Localization.get('Show all')+'</span>'+'</a>';content+='</div>';content+='<div id="pwgImageDetail">'+this.buildCurrentPictureHtml(marker)+'</div>';var h;while(h=this._navHtmlHandles.pop())
google.maps.event.removeListener(h);google.maps.event.addListenerOnce(this._infoWindow,"domready",pwgBind(this,this._onInfoWindowDomReady));this._infoWindow.setContent(content);this._infoWindow.setPosition(marker.getPosition());this._infoWindow.open(this._map,marker);},_onMarkerDblClick:function(marker)
{this._map.fitBounds(marker.pwg.bounds);},_onMapClick:function(marker)
{this._infoWindow.close();},buildCurrentPictureHtml:function(marker)
{var imageDetail=marker.pwg.images[marker.currentImageIndex],dpr=window.devicePixelRatio||1,w=Math.round(imageDetail.w/dpr),h=Math.round(imageDetail.h/dpr);var res="";res+='<div class="gmiw_imageTitle">'+imageDetail.t+"</div>";res+='<div class="gmiw_imageContent">'+'<div class="gmiw_imageWrap">'+'<a href="'+imageDetail.url+'">'+'<img src="'+imageDetail.tn+'" alt="thumb" width='+w+' height='+h+'>'+'</a></div>'+'<div class="gmiw_imageComment">'+imageDetail.d+'</div>'+'</div>';return res;},buildCurrentPictureCounterHtml:function(marker)
{var res='<b>'+(marker.currentImageIndex+1)+'</b>'+'/'+'<b>'+marker.pwg.images.length+'</b>';if(marker.pwg.nb_items>marker.pwg.images.length)
res+=" "+Localization.fmt1("out of %d",marker.pwg.nb_items);return res;},_onInfoWindowDomReady:function()
{if(!this._infoWindow.getAnchor()||this._infoWindow.getAnchor().pwg.images.length<2)
return;for(var i=0;i<this._navHtmlIds.length;i++)
{var elt=document.getElementById(this._navHtmlIds[i]);if(elt)
this._navHtmlHandles.push(google.maps.event.addDomListener(elt,"click",pwgBind(this,this._onPictureNavigate,this._infoWindow.getAnchor(),i)));}},_onPictureNavigate:function(marker,dir)
{if(dir==0)dir=-1;marker.currentImageIndex+=dir;if(marker.currentImageIndex<0)
marker.currentImageIndex=marker.pwg.images.length-1;else if(marker.currentImageIndex>=marker.pwg.images.length)
marker.currentImageIndex=0;try{var elt=document.getElementById("pwgImageDetail");elt.innerHTML=this.buildCurrentPictureHtml(marker);}
catch(e)
{alert(e.message);}
try{var elt=document.getElementById("pwgImageCounters");elt.innerHTML=this.buildCurrentPictureCounterHtml(marker);}
catch(e)
{alert(e.message);}
return false;}}
PwgDataHandler.blowupUrl=function(theUrl)
{jQuery.colorbox({href:theUrl,iframe:1,width:"98%",height:"99%"});return false;}
PwgDataHandler.cmpll=function(a,b){var d=a.lng()-b.lng();if(d<-.5e-6)
return-1;else if(d>.5e-6)
return 1;d=a.lat()-b.lat();if(d<-.5e-6)
return-1;else if(d>.5e-6)
return 1;return 0;}
String.prototype.urlNoHtm=function()
{return this.replace("&amp;","&");};

/*BEGIN plugins/rv_gmaps/template/data_loader.js */
function PwgDataLoader(map,opts)
{this._map=map;this.options=jQuery.fn.extend({reload_data_timeout:200,rectangle_of_confusion:new google.maps.Size(16,32)},opts||{});this.options.rectangle_of_confusion=new google.maps.Size(this.options.rectangle_of_confusion.width,this.options.rectangle_of_confusion.height);if(this.options.rectangle_of_confusion.width<16)this.options.rectangle_of_confusion.width=16;if(this.options.rectangle_of_confusion.height<16)this.options.rectangle_of_confusion.height=16;}
getLatLonDigits=function(d,factor,exp)
{if(d<0)return getLatLonDigits(-d,factor,exp);var digits=Math.ceil(exp-Math.log(d*factor)/Math.LN10);return digits<0?0:(digits>6?6:digits);}
Math.roundN=function(d,digits){var c=Math.pow(10,digits);return Math.round(d*c)/c;}
PwgDataLoader.prototype={_urlMapData:null,_timerReloadData:null,_dataLoading:false,_previousLoadDataReq:{box:null,zoom:0,resultBounds:null},start:function(urlMapData)
{this._urlMapData=urlMapData;google.maps.event.bind(this._map,"dragstart",this,this.clearTimerReloadData);google.maps.event.bind(this._map,"idle",this,this._onIdle);},terminate:function()
{this.clearTimerReloadData();this._map=null;},clearTimerReloadData:function()
{if(this._timerReloadData)
{clearTimeout(this._timerReloadData);this._timerReloadData=null;return true;}
return false;},_onIdle:function()
{this.clearTimerReloadData();this._timerReloadData=setTimeout(pwgBind(this,this._onTimeoutLoadData),this.options.reload_data_timeout);},_onTimeoutLoadData:function()
{if(this._dataLoading)return;this.clearTimerReloadData();this._loadData();},_loadData:function()
{var bounds=new google.maps.LatLngBounds(this._map.getBounds().getSouthWest(),this._map.getBounds().getNorthEast());var latRange=bounds.toSpan().lat();var latPrec=latRange*this.options.rectangle_of_confusion.height / this._map.getDiv().offsetHeight;var lonRange=bounds.toSpan().lng();var lonPrec=(lonRange>=0?lonRange:360-lonRange)*this.options.rectangle_of_confusion.width / this._map.getDiv().offsetWidth;if(this._previousLoadDataReq.box!=null)
{if(this._previousLoadDataReq.box.contains(bounds.getNorthEast())&&this._previousLoadDataReq.box.contains(bounds.getSouthWest()))
{if(this._previousLoadDataReq.resultBounds==null)
return;if(this._map.getZoom()<=this._previousLoadDataReq.zoom)
return;}}
var nd=0,sd=0,ed=0,wd=0;{nd=latRange*0.12;sd=latRange*0.04;}
{ed=lonRange*0.09;wd=lonRange*0.07;}
var digits=Math.max(getLatLonDigits(latRange,4,2),getLatLonDigits(lonRange,4,2));var box=new google.maps.LatLngBounds(bounds.getSouthWest(),bounds.getNorthEast());box.extend(new google.maps.LatLng(Math.roundN(bounds.getSouthWest().lat()-sd,digits),Math.roundN(bounds.getSouthWest().lng()-wd,digits)));box.extend(new google.maps.LatLng(Math.roundN(bounds.getNorthEast().lat()+nd,digits),Math.roundN(bounds.getNorthEast().lng()+ed,digits)));var url=this._urlMapData;url+="&box="+box.getSouthWest().toUrlValue(5)+","+box.getNorthEast().toUrlValue(5);url+="&lap="+Math.roundN(latPrec,getLatLonDigits(latPrec,1,1)).toString();url+="&lop="+Math.roundN(lonPrec,getLatLonDigits(lonPrec,1,1)).toString();if(document.is_debug){glog("sd="+sd+" wd="+wd+" nd="+nd+" ed="+ed);glog(url);}
this._previousLoadDataReq.box=box;this._previousLoadDataReq.zoom=this._map.getZoom();this._previousLoadDataReq.resultBounds=null;this._dataLoading=true;try{google.maps.event.trigger(this,"dataloading");jQuery.ajax({url:url,success:pwgBind(this,this._onAjaxSuccess),error:pwgBind(this,this._onAjaxError),});}
catch(e){this._dataLoading=false;this._previousLoadDataReq.box=null;google.maps.event.trigger(this,"dataloadfailed",600,e);}},_onAjaxSuccess:function(data,textStatus,xhr)
{var resp;try
{eval('resp = '+data);if(resp.nb_items==undefined)
throw new Error("DATA DECODING ERROR");this._previousLoadDataReq.resultBounds=resp.bounds;if(document.is_debug&&resp.debug)glog(resp.debug);google.maps.event.trigger(this,"dataloaded",resp);}
catch(e){this._previousLoadDataReq.box=null;google.maps.event.trigger(this,"dataloadfailed",textStatus,e);var s=e.message;s+='\n'+data.substr(0,1000);alert(s);}
finally{this._dataLoading=false;}},_onAjaxError:function(xhr,textStatus,exc)
{try{google.maps.event.trigger(this,"dataloadfailed",textStatus+xhr.status,exc);}
catch(e){}
finally{this._dataLoading=false;}},};

/*BEGIN plugins/rv_gmaps/template/page_linker.js */
function PageLinker(map,aElementId)
{this._map=map;this._elementId=aElementId;google.maps.event.bind(this._map,"idle",this,this._regenerateUrl);google.maps.event.bind(this._map,"maptypeid_changed",this,this._regenerateUrl);}
PageLinker.getQueryVars=function()
{var vars={};var qString=unescape(top.location.search.substring(1));if(qString.length==0)
return vars;var pairs=qString.split(/\&/);for(var i=0;i<pairs.length;i++)
{var nameVal=pairs[i].split(/\=/);vars[nameVal[0]]=nameVal[1];}
return vars;};PageLinker.map2Url=function(map)
{var vars=PageLinker.getQueryVars();vars['ll']=map.getCenter().toUrlValue(5);vars['z']=map.getZoom();vars['t']=map.getMapTypeId();var url=document.location.protocol+'//'+document.location.hostname+document.location.pathname;var bFirst=true;for(var key in vars)
{url+=bFirst?"?":"&";bFirst=false;url+=key;if(vars[key]!=null)
url+="="+vars[key];}
return url;};PageLinker.url2Map=function(mapOptions)
{var vars=PageLinker.getQueryVars();if(!((vars['z']&&vars['ll'])||vars['t']))
return false;var mapType=google.maps.MapTypeId.ROADMAP;if(vars['t'])
mapOptions.mapTypeId=vars['t'];if(vars['z']&&vars['ll'])
{mapOptions.zoom=parseFloat(vars['z']);var ll=vars['ll'].split(",");if(ll.length==2)
{mapOptions.center=new google.maps.LatLng(ll[0],ll[1]);}
return true;}
return false;}
PageLinker.prototype={_regenerateUrl:function()
{var elt=document.getElementById(this._elementId);if(!elt)return;elt.href=PageLinker.map2Url(this._map);}};

/*BEGIN plugins/rv_gmaps/template/styler.js */
function PwgSingleStyler(style,roc)
{style=style||{};this.roc=roc||new google.maps.Size(16,32);this.getStyle=function(){return style;}
this.changeStyle=function(){return null;}}
function PwgStyler(styles,roc)
{this.styles=styles;this.roc=roc||new google.maps.Size(16,32);for(var i=0;i<this.styles.length;i++)
this.styles[i].zIndex=1000-i;}
PwgStyler.prototype={getStyle:function(cluster)
{return this.styles[this._indexer(cluster,this.styles)];},changeStyle:function(cluster,oldcluster)
{var idx=this._indexer(cluster,this.styles),idx2=this._indexer(oldcluster,this.styles);return idx==idx2?null:this.styles[idx];},_indexer:function(cluster,styles)
{var n=cluster.nb_items,i=0;while(n>1)
{n=n/10;i++;}
return i<styles.length?i:styles.length-1;}};

