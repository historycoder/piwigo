<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:28:01
         compiled from "C:\wamp\www\piwigo\admin\themes\default\local_head.tpl" */ ?>
<?php /*%%SmartyHeaderCode:597454446521412642-68916858%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2d1ebe5a4c32ded7c1566f3081bb868618cdffcd' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\admin\\themes\\default\\local_head.tpl',
      1 => 1413766880,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '597454446521412642-68916858',
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
  'unifunc' => 'content_5444652142e076_76164818',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5444652142e076_76164818')) {function content_5444652142e076_76164818($_smarty_tpl) {?><?php if ($_smarty_tpl->tpl_vars['load_css']->value){?>
<!--[if lt IE 7]>
	<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
admin/themes/default/fix-ie5-ie6.css">
<![endif]-->

<!--[if IE 7]>
  <link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
admin/themes/default/fix-ie7.css">
<![endif]-->
<?php }?><?php }} ?>