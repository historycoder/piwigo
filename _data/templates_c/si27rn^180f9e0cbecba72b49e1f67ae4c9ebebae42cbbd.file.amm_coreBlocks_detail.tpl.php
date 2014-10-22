<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:40:34
         compiled from "C:\wamp\www\piwigo\plugins\AMenuManager\admin\amm_coreBlocks_detail.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2088254446812cf60d7-81397741%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '180f9e0cbecba72b49e1f67ae4c9ebebae42cbbd' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\AMenuManager\\admin\\amm_coreBlocks_detail.tpl',
      1 => 1413767614,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2088254446812cf60d7-81397741',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'users' => 0,
    'values' => 0,
    'groups' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_54446812d68011_44069139',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54446812d68011_44069139')) {function content_54446812d68011_44069139($_smarty_tpl) {?><h3><?php echo l10n('User');?>
</h3>
<p>
<?php  $_smarty_tpl->tpl_vars['values'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['values']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['users']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['values']->key => $_smarty_tpl->tpl_vars['values']->value){
$_smarty_tpl->tpl_vars['values']->_loop = true;
?>
  <label><input type="checkbox" value="<?php echo $_smarty_tpl->tpl_vars['values']->value['id'];?>
" class='visibilityUser' <?php if ($_smarty_tpl->tpl_vars['values']->value['allowed']==true){?> checked<?php }?> />&nbsp;<?php echo $_smarty_tpl->tpl_vars['values']->value['name'];?>
</label><br/>
<?php } ?>
</p>

<h3><?php echo l10n('Group');?>
</h3>
<p>
<?php  $_smarty_tpl->tpl_vars['values'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['values']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['groups']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['values']->key => $_smarty_tpl->tpl_vars['values']->value){
$_smarty_tpl->tpl_vars['values']->_loop = true;
?>
  <label><input type="checkbox" value="<?php echo $_smarty_tpl->tpl_vars['values']->value['id'];?>
" class='visibilityGroup' <?php if ($_smarty_tpl->tpl_vars['values']->value['allowed']==true){?> checked<?php }?> />&nbsp;<?php echo $_smarty_tpl->tpl_vars['values']->value['name'];?>
</label><br/>
<?php } ?>
</p>
<?php }} ?>