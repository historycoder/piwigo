<?php /* Smarty version Smarty-3.1.13, created on 2014-09-18 08:56:15
         compiled from "/home/ohiohistory/public_html/piwigo/themes/default/local_head.tpl" */ ?>
<?php /*%%SmartyHeaderCode:525606032541ad66f920416-18245329%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '32e89c7f365318325c0b8518c48e8aa47aeee210' => 
    array (
      0 => '/home/ohiohistory/public_html/piwigo/themes/default/local_head.tpl',
      1 => 1397851751,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '525606032541ad66f920416-18245329',
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
  'unifunc' => 'content_541ad66f92a053_43339608',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_541ad66f92a053_43339608')) {function content_541ad66f92a053_43339608($_smarty_tpl) {?><?php if ($_smarty_tpl->tpl_vars['load_css']->value){?> 
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