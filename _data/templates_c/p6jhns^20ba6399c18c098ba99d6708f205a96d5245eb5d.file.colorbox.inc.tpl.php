<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:40:27
         compiled from ".\admin\themes\default\template\include\colorbox.inc.tpl" */ ?>
<?php /*%%SmartyHeaderCode:209565444680b37adc3-74794837%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '20ba6399c18c098ba99d6708f205a96d5245eb5d' => 
    array (
      0 => '.\\admin\\themes\\default\\template\\include\\colorbox.inc.tpl',
      1 => 1413766896,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '209565444680b37adc3-74794837',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_5444680b393759_94868277',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5444680b393759_94868277')) {function content_5444680b393759_94868277($_smarty_tpl) {?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'jquery.colorbox','load'=>'footer','require'=>'jquery','path'=>'themes/default/js/plugins/jquery.colorbox.min.js'),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>"themes/default/js/plugins/colorbox/style2/colorbox.css"),$_smarty_tpl);?>

<?php }} ?>