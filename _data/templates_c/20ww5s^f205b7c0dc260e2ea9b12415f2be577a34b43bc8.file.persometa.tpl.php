<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:27:30
         compiled from "C:\wamp\www\piwigo\plugins\meta\persometa.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2697154446502ad2a81-74600251%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f205b7c0dc260e2ea9b12415f2be577a34b43bc8' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\meta\\persometa.tpl',
      1 => 1413767579,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2697154446502ad2a81-74600251',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'metapersos' => 0,
    'metaperso' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_54446502afb1a4_83279601',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54446502afb1a4_83279601')) {function content_54446502afb1a4_83279601($_smarty_tpl) {?><?php  $_smarty_tpl->tpl_vars['metaperso'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['metaperso']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['metapersos']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['metaperso']->key => $_smarty_tpl->tpl_vars['metaperso']->value){
$_smarty_tpl->tpl_vars['metaperso']->_loop = true;
?>
<meta <?php echo $_smarty_tpl->tpl_vars['metaperso']->value['METATYPE'];?>
="<?php echo $_smarty_tpl->tpl_vars['metaperso']->value['METANAME'];?>
" content="<?php echo $_smarty_tpl->tpl_vars['metaperso']->value['METAVAL'];?>
">
<?php } ?><?php }} ?>