<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:07:53
         compiled from "C:\wamp\www\piwigo\plugins\meta\persometa.tpl" */ ?>
<?php /*%%SmartyHeaderCode:6296544a87696eda46-60255149%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f205b7c0dc260e2ea9b12415f2be577a34b43bc8' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\meta\\persometa.tpl',
      1 => 1410175498,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6296544a87696eda46-60255149',
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
  'unifunc' => 'content_544a876974d111_53652280',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a876974d111_53652280')) {function content_544a876974d111_53652280($_smarty_tpl) {?><?php  $_smarty_tpl->tpl_vars['metaperso'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['metaperso']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['metapersos']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['metaperso']->key => $_smarty_tpl->tpl_vars['metaperso']->value){
$_smarty_tpl->tpl_vars['metaperso']->_loop = true;
?>
<meta <?php echo $_smarty_tpl->tpl_vars['metaperso']->value['METATYPE'];?>
="<?php echo $_smarty_tpl->tpl_vars['metaperso']->value['METANAME'];?>
" content="<?php echo $_smarty_tpl->tpl_vars['metaperso']->value['METAVAL'];?>
">
<?php } ?><?php }} ?>