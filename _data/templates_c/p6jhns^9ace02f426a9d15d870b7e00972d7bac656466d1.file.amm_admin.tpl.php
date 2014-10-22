<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:40:35
         compiled from "C:\wamp\www\piwigo\plugins\AMenuManager\admin\amm_admin.tpl" */ ?>
<?php /*%%SmartyHeaderCode:24416544468131c74e5-90824554%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9ace02f426a9d15d870b7e00972d7bac656466d1' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\AMenuManager\\admin\\amm_admin.tpl',
      1 => 1413767615,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '24416544468131c74e5-90824554',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'plugin' => 0,
    'pageNfo' => 0,
    'AMM_BODY_PAGE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544468131f0f48_45749402',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544468131f0f48_45749402')) {function content_544468131f0f48_45749402($_smarty_tpl) {?><h2 style="float:right;top:-24px;position:relative;height:auto;font-size:12px;font-weight:normal;"><?php echo $_smarty_tpl->tpl_vars['plugin']->value['AMM_VERSION'];?>
</h2>

<div class='helps'>
<?php if (isset($_smarty_tpl->tpl_vars['pageNfo']->value)){?>
  <p><?php echo $_smarty_tpl->tpl_vars['pageNfo']->value;?>
</p>
<?php }?>
</div>

<div id='iBDProcessing' style="display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:#000000;opacity:0.75;z-index:800;">
  <img src="plugins/GrumPluginClasses/icons/processing.gif" style="margin-top:20%;">
</div>

<div id='iConfigState' style='display:none;'>
</div>

<?php echo $_smarty_tpl->tpl_vars['AMM_BODY_PAGE']->value;?>


<?php }} ?>