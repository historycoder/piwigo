<?php /* Smarty version Smarty-3.1.13, created on 2014-09-18 08:56:16
         compiled from "./themes/default/template/infos_errors.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1407544495541ad6701cb087-23538600%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd78c3ca45b466172c2831c33a0defab7022f78ef' => 
    array (
      0 => './themes/default/template/infos_errors.tpl',
      1 => 1397851764,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1407544495541ad6701cb087-23538600',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'errors' => 0,
    'error' => 0,
    'infos' => 0,
    'info' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_541ad67024f054_81483090',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_541ad67024f054_81483090')) {function content_541ad67024f054_81483090($_smarty_tpl) {?><?php if (isset($_smarty_tpl->tpl_vars['errors']->value)){?>
<div class="errors">
  <ul>
<?php  $_smarty_tpl->tpl_vars['error'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['error']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['errors']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['error']->key => $_smarty_tpl->tpl_vars['error']->value){
$_smarty_tpl->tpl_vars['error']->_loop = true;
?>
    <li><?php echo $_smarty_tpl->tpl_vars['error']->value;?>
</li>
<?php } ?>
  </ul>
</div>
<?php }?>

<?php if (!empty($_smarty_tpl->tpl_vars['infos']->value)){?>
<div class="infos">
  <ul>
<?php  $_smarty_tpl->tpl_vars['info'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['info']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['infos']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['info']->key => $_smarty_tpl->tpl_vars['info']->value){
$_smarty_tpl->tpl_vars['info']->_loop = true;
?>
    <li><?php echo $_smarty_tpl->tpl_vars['info']->value;?>
</li>
<?php } ?>
  </ul>
</div>
<?php }?><?php }} ?>