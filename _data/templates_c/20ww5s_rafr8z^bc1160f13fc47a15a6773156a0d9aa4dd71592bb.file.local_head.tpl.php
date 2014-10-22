<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:27:30
         compiled from "C:\wamp\www\piwigo\themes\default\local_head.tpl" */ ?>
<?php /*%%SmartyHeaderCode:276954446502e49061-58736434%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bc1160f13fc47a15a6773156a0d9aa4dd71592bb' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\themes\\default\\local_head.tpl',
      1 => 1413767853,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '276954446502e49061-58736434',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'load_css' => 0,
    'ROOT_URL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_54446502e721e2_26902926',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54446502e721e2_26902926')) {function content_54446502e721e2_26902926($_smarty_tpl) {?><?php if ($_smarty_tpl->tpl_vars['load_css']->value){?> 
	<!--[if lt IE 7]>
		<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
themes/default/fix-ie5-ie6.css">
	<![endif]-->
	<!--[if IE 7]>
		<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
themes/default/fix-ie7.css">
	<![endif]-->
	<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>"themes/default/print.css",'order'=>-10),$_smarty_tpl);?>

<?php }?>
<?php }} ?>