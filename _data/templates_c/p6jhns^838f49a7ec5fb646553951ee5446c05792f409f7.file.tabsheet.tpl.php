<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:07:23
         compiled from ".\admin\themes\default\template\tabsheet.tpl" */ ?>
<?php /*%%SmartyHeaderCode:4116544a874bc254d3-98142999%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '838f49a7ec5fb646553951ee5446c05792f409f7' => 
    array (
      0 => '.\\admin\\themes\\default\\template\\tabsheet.tpl',
      1 => 1308252940,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4116544a874bc254d3-98142999',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'tabsheet' => 0,
    'name' => 0,
    'tabsheet_selected' => 0,
    'sheet' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544a874bcd5127_84310673',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a874bcd5127_84310673')) {function content_544a874bcd5127_84310673($_smarty_tpl) {?><?php if (isset($_smarty_tpl->tpl_vars['tabsheet']->value)&&count($_smarty_tpl->tpl_vars['tabsheet']->value)){?>
<div id="tabsheet">
<ul class="tabsheet">
<?php  $_smarty_tpl->tpl_vars['sheet'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['sheet']->_loop = false;
 $_smarty_tpl->tpl_vars['name'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['tabsheet']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['sheet']->key => $_smarty_tpl->tpl_vars['sheet']->value){
$_smarty_tpl->tpl_vars['sheet']->_loop = true;
 $_smarty_tpl->tpl_vars['name']->value = $_smarty_tpl->tpl_vars['sheet']->key;
?>
  <li class="<?php if (($_smarty_tpl->tpl_vars['name']->value==$_smarty_tpl->tpl_vars['tabsheet_selected']->value)){?>selected_tab<?php }else{ ?>normal_tab<?php }?>">
    <a href="<?php echo $_smarty_tpl->tpl_vars['sheet']->value['url'];?>
"><span><?php echo $_smarty_tpl->tpl_vars['sheet']->value['caption'];?>
</span></a>
  </li>
<?php } ?>
</ul>
</div>
<?php }?><?php }} ?>