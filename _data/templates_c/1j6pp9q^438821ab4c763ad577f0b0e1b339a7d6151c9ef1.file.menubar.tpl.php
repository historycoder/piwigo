<?php /* Smarty version Smarty-3.1.13, created on 2014-09-17 21:37:02
         compiled from "./themes/default/template/menubar.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1083686285541a373e397156-11258246%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '438821ab4c763ad577f0b0e1b339a7d6151c9ef1' => 
    array (
      0 => './themes/default/template/menubar.tpl',
      1 => 1397851764,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1083686285541a373e397156-11258246',
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
  'unifunc' => 'content_541a373e606b41_69113090',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_541a373e606b41_69113090')) {function content_541a373e606b41_69113090($_smarty_tpl) {?><?php if (!empty($_smarty_tpl->tpl_vars['blocks']->value)){?>
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