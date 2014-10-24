<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:08:14
         compiled from "C:\wamp\www\piwigo\plugins\rv_gmaps\template\map.tpl" */ ?>
<?php /*%%SmartyHeaderCode:22224544a877e26c0d4-37500970%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e45eeef5f283257250f40f3e40fa0c6f2411b678' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\rv_gmaps\\template\\map.tpl',
      1 => 1403662270,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '22224544a877e26c0d4-37500970',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'CONTENT_ENCODING' => 0,
    'GALLERY_TITLE' => 0,
    'lang_info' => 0,
    'PLUGIN_LOCATION' => 0,
    'RVM_PLUGIN_VERSION' => 0,
    'MAP_TYPE' => 0,
    'initial_bounds' => 0,
    'MAP_MARKER_ICON_JS' => 0,
    'PLUGIN_ROOT_URL' => 0,
    'U_MAP_DATA' => 0,
    'U_HOME' => 0,
    'U_HOME_MAP' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544a877e57dd95_39433705',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a877e57dd95_39433705')) {function content_544a877e57dd95_39433705($_smarty_tpl) {?><!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=<?php echo $_smarty_tpl->tpl_vars['CONTENT_ENCODING']->value;?>
" />
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<meta name="robots" content="noindex,nofollow" />
<title><?php echo $_smarty_tpl->tpl_vars['GALLERY_TITLE']->value;?>
</title>

<script src="//maps.googleapis.com/maps/api/js?sensor=false&amp;language=<?php echo $_smarty_tpl->tpl_vars['lang_info']->value['code'];?>
&amp;libraries=places" type="text/javascript"></script>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'jquery','load'=>'header','path'=>'//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'jquery.colorbox','load'=>'async','require'=>'jquery','path'=>'themes/default/js/plugins/jquery.colorbox.min.js'),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>((string)$_smarty_tpl->tpl_vars['PLUGIN_LOCATION']->value)."/template/style.css",'version'=>$_smarty_tpl->tpl_vars['RVM_PLUGIN_VERSION']->value),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>'themes/default/js/plugins/colorbox/style2/colorbox.css'),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'rvm.dl','load'=>'header','path'=>((string)$_smarty_tpl->tpl_vars['PLUGIN_LOCATION']->value)."/template/data_loader.js",'version'=>$_smarty_tpl->tpl_vars['RVM_PLUGIN_VERSION']->value),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'rvm.dh','load'=>'header','path'=>((string)$_smarty_tpl->tpl_vars['PLUGIN_LOCATION']->value)."/template/data_handler.js",'version'=>$_smarty_tpl->tpl_vars['RVM_PLUGIN_VERSION']->value),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'rvm.pl','load'=>'header','path'=>((string)$_smarty_tpl->tpl_vars['PLUGIN_LOCATION']->value)."/template/page_linker.js",'version'=>$_smarty_tpl->tpl_vars['RVM_PLUGIN_VERSION']->value),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'rvm.st','load'=>'header','path'=>((string)$_smarty_tpl->tpl_vars['PLUGIN_LOCATION']->value)."/template/styler.js",'version'=>$_smarty_tpl->tpl_vars['RVM_PLUGIN_VERSION']->value),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'core.scripts','load'=>'header','path'=>'themes/default/js/scripts.js'),$_smarty_tpl);?>

<!-- COMBINED_CSS -->
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['get_combined_scripts'][0][0]->func_get_combined_scripts(array('load'=>'header'),$_smarty_tpl);?>

<!--[if lt IE 7]>
<style type="text/css">
	#map { position:auto; height: 100%; }
</style>
<![endif]-->

<script type="text/javascript">
//<![CDATA[
var map;

document.is_debug = false;
if ( document.location.search.match(/[\?&]debug/) )
	document.is_debug = true;

function glog(msg) {
	if (console) {
		var b = map.getBounds();
		if (b)
			console.log(msg + " b="+b.toUrlValue() + " c="+map.getCenter().toUrlValue() + " z="+map.getZoom() );
		else
			console.log(msg);
	}
}

function positionMap(){
	$("#map").css('top', ($("#titlebar").height())+"px");
}

function load()
{
	var mapOptions = {
		mapTypeId: google.maps.MapTypeId.<?php echo $_smarty_tpl->tpl_vars['MAP_TYPE']->value;?>
,
		overviewMapControl: true,
		overviewMapControlOptions: { opened: document.documentElement.offsetWidth>640}
	}

	if (!PageLinker.url2Map(mapOptions))
	{
<?php if (isset($_smarty_tpl->tpl_vars['initial_bounds']->value)){?>
		mapOptions.iniBounds = new google.maps.LatLngBounds( new google.maps.LatLng(<?php echo $_smarty_tpl->tpl_vars['initial_bounds']->value['s'];?>
,<?php echo $_smarty_tpl->tpl_vars['initial_bounds']->value['w'];?>
), new google.maps.LatLng(<?php echo $_smarty_tpl->tpl_vars['initial_bounds']->value['n'];?>
,<?php echo $_smarty_tpl->tpl_vars['initial_bounds']->value['e'];?>
) );
		mapOptions.center = mapOptions.iniBounds.getCenter();
<?php }else{ ?>
		mapOptions.center = new google.maps.LatLng(0,0);
		mapOptions.zoom = 2;
<?php }?>
	}

	map = new google.maps.Map( document.getElementById("map"), mapOptions );
	
	if (mapOptions.iniBounds)
		map.fitBounds(mapOptions.iniBounds);

<?php if (isset($_GET['debug'])){?>
	google.maps.event.addListener(map, "idle", function() { glog("idle"); });
	google.maps.event.addListener(map, "bounds_changed", function() { glog("bounds_changed");} );
	google.maps.event.addListener(map, "center_changed", function() { glog("center_changed");} );
	google.maps.event.addListener(map, "maptypeid_changed", function() { glog("maptypeid_changed");} );
	google.maps.event.addListener(map, "zoom_changed", function() { glog("zoom_changed");} );
	google.maps.event.addListener(map, "drag", function() { glog("drag");} );
<?php }?>
	pwgPageLinker = new PageLinker(map, "aLinkToThisPage" );

	var pwgStyler = <?php echo $_smarty_tpl->tpl_vars['MAP_MARKER_ICON_JS']->value;?>
;

	map.pwgDataLoader = new PwgDataLoader(map, { rectangle_of_confusion: pwgStyler.roc} );
	google.maps.event.addListener(map.pwgDataLoader, "dataloading", function() {
		var pre = '<img src="<?php echo $_smarty_tpl->tpl_vars['PLUGIN_ROOT_URL']->value;?>
/icons/progress_s.gif" width="16" height="16" alt="~"> ';
		document.getElementById("dataLoadStatus").innerHTML = pre + Localization.get("Loading");
		}
	);
  
	google.maps.event.addListener(map.pwgDataLoader, "dataloadfailed", function(responseCode) {
		document.getElementById("dataLoadStatus").innerHTML = Localization.get("Failed") + " "+responseCode;
		}
		);

	map.pwgDataHandler = new PwgDataHandler(map, { styler: pwgStyler, show_all_img_src: "<?php echo $_smarty_tpl->tpl_vars['PLUGIN_ROOT_URL']->value;?>
/icons/pic_s.gif" } );
	google.maps.event.addListener(map.pwgDataLoader, "dataloaded", pwgBind(map.pwgDataHandler, map.pwgDataHandler.handle) );

	map.pwgDataLoader.start( "<?php echo $_smarty_tpl->tpl_vars['U_MAP_DATA']->value;?>
" );

	positionMap();
	$(window).on("resize", positionMap);
	var ac = new google.maps.places.Autocomplete( document.getElementById('q') );
	ac.bindTo('bounds', map);
	google.maps.event.addListener(ac, 'place_changed', function() {
		var place = ac.getPlace();
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);  // Why 17? Because it looks good.
		}
	} );
}

function unload()
{
	if (map)
	{
		!map.pwgDataLoader || map.pwgDataLoader.terminate();
		!map.pwgDataHandler || map.pwgDataHandler.terminate();
	}
}


var Localization =
{
  _strings: {
"go to %s": "<?php echo strtr(l10n('go to %s'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"Next": "<?php echo strtr(l10n('Next'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"Prev": "<?php echo strtr(l10n('Prev'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"out of %d": "<?php echo strtr(l10n('out of %d'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"Loading": "<?php echo strtr(l10n('Loading'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"Failed": "<?php echo strtr(l10n('Failed'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"Show all": "<?php echo strtr(l10n('Show all'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"show all photos around this location": "<?php echo strtr(l10n('show all photos around this location'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"displays %s on a map" : "<?php echo strtr(l10n('displays %s on a map'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"opens %s in Google Earth" : "<?php echo strtr(l10n('opens %s in Google Earth'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
"%d photos" : "<?php echo strtr(l10n('%d photos'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
",
dontMindTheComma: ""
    },

  get: function( str ) {
		var lang_str = this._strings[str];
		if (lang_str == undefined)
		{
			if (document.is_debug) glog("Language string undefined '"+ str+"'");
			return str;
		}
		return lang_str;
	},

  getQ: function( str ) {
		return '"'+this.get(str)+'"';
	},

  fmt1: function () {
		var str = arguments[0];
		str = this.get(str);
		str = str.replace( '%s', "%" ).replace( '%d', "%" ).replace('%', arguments[1]);
		return str;
		
	}
}
//]]>
</script>
</head>

<body onload="load()" onunload="unload()">

<div id="titlebar">
	<div class="titlebar_links">
		<span id="dataLoadStatus"><?php echo l10n('Loading');?>
</span>
		<span class="gmnoprint">
			<input type="text" size="24" id="q">
		</span>
		<a id="aKml" href="" type="application/vnd.google-earth.kml+xml" class="gmnoprint"><img src="//maps.google.com/mapfiles/ms/view_as_kml.png" width="16" height="16" alt="kml"><span class="hideable"> KML</span></a>
		<a id="aLinkToThisPage" href="" class="gmnoprint"><img src="//maps.google.com/mapfiles/bar_icon_link.gif" alt="&lt;-&gt;" width="16" height="16"><span class="hideable"> <?php echo l10n('Link to this page');?>
</span></a>
    <a id="aBlowup" href="" onclick="return PwgDataHandler.blowupUrl(this.href);" class="gmnoprint" title="<?php echo l10n('show all photos around this location');?>
">
			<img src="<?php echo $_smarty_tpl->tpl_vars['PLUGIN_ROOT_URL']->value;?>
/icons/pic_s.gif" width="16" height="16" alt="" title="<?php echo l10n('show all photos around this location');?>
">
			<span><?php echo l10n('Show all');?>
</span>
		</a>
  </div>
  <div class="titlebar_title">
    <a href="<?php echo $_smarty_tpl->tpl_vars['U_HOME']->value;?>
" class="gmnoprint"><?php echo l10n('Home');?>
</a>
    <a href="<?php echo $_smarty_tpl->tpl_vars['U_HOME_MAP']->value;?>
" title="<?php echo l10n('displays all photos on a map');?>
"><img src="<?php echo $_smarty_tpl->tpl_vars['PLUGIN_ROOT_URL']->value;?>
/icons/map_sw.gif" width="32" height="17" alt="map"></a>
    <?php echo l10n('Viewing');?>
: <a id="aPageUrl" href=""></a>
  </div>
</div>

<div id="map"> </div>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['get_combined_scripts'][0][0]->func_get_combined_scripts(array('load'=>'footer'),$_smarty_tpl);?>

</body>
</html><?php }} ?>