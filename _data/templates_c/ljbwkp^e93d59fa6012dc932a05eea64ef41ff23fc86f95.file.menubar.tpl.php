<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:07:52
         compiled from ".\themes\default\template\menubar.tpl" */ ?>
<?php /*%%SmartyHeaderCode:12127544a8768d59de5-88050358%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e93d59fa6012dc932a05eea64ef41ff23fc86f95' => 
    array (
      0 => '.\\themes\\default\\template\\menubar.tpl',
      1 => 1332724814,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12127544a8768d59de5-88050358',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'blocks' => 0,
    'id' => 0,
    'block' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544a8768e138a0_78044154',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a8768e138a0_78044154')) {function content_544a8768e138a0_78044154($_smarty_tpl) {?><?php if (!empty($_smarty_tpl->tpl_vars['blocks']->value)){?>
<div id="menubar">
<?php  $_smarty_tpl->tpl_vars['block'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['block']->_loop = false;
 $_smarty_tpl->tpl_vars['id'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['blocks']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['block']->key => $_smarty_tpl->tpl_vars['block']->value){
$_smarty_tpl->tpl_vars['block']->_loop = true;
 $_smarty_tpl->tpl_vars['id']->value = $_smarty_tpl->tpl_vars['block']->key;
?>
	<dl id="<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
">
<?php if (!empty($_smarty_tpl->tpl_vars['block']->value->template)){?>
<?php echo $_smarty_tpl->getSubTemplate ($_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_MODIFIER]['get_extent'][0][0]->get_extent($_smarty_tpl->tpl_vars['block']->value->template,$_smarty_tpl->tpl_vars['id']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<?php }else{ ?>
		<?php echo $_smarty_tpl->tpl_vars['block']->value->raw_content;?>

<?php }?>
	</dl>
<?php } ?>
</div><div id="menuSwitcher"></div>
<?php }?><?php }} ?>