<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:07:53
         compiled from "C:\wamp\www\piwigo\plugins\rv_menutree\template\rv_menutree_categories.tpl" */ ?>
<?php /*%%SmartyHeaderCode:27146544a876932cfe0-35415118%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '657897cddeb6094efeec37e1b795d67a240c8bb3' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\rv_menutree\\template\\rv_menutree_categories.tpl',
      1 => 1392808426,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '27146544a876932cfe0-35415118',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'block' => 0,
    'cat' => 0,
    'ROOT_URL' => 0,
    'themeconf' => 0,
    'RVMT_POST' => 0,
    'RVMT_BASE_NAME' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544a8769472cc5_54560841',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a8769472cc5_54560841')) {function content_544a8769472cc5_54560841($_smarty_tpl) {?><dt>
	<a href="<?php echo $_smarty_tpl->tpl_vars['block']->value->data['U_CATEGORIES'];?>
"><?php echo l10n('Albums');?>
</a>
</dt>
<dd>
 <?php  $_smarty_tpl->tpl_vars['cat'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['cat']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['block']->value->data['MENU_CATEGORIES']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['cat']->key => $_smarty_tpl->tpl_vars['cat']->value){
$_smarty_tpl->tpl_vars['cat']->_loop = true;
?> <?php echo $_smarty_tpl->tpl_vars['cat']->value['PRE'];?>
 <li<?php echo $_smarty_tpl->tpl_vars['cat']->value['CLASS'];?>
> <a href="<?php echo $_smarty_tpl->tpl_vars['cat']->value['URL'];?>
"<?php if ($_smarty_tpl->tpl_vars['cat']->value['IS_UPPERCAT']){?> rel="up"<?php }?>><?php echo $_smarty_tpl->tpl_vars['cat']->value['NAME'];?>
</a> <?php if ($_smarty_tpl->tpl_vars['cat']->value['count_images']>0){?> <span<?php if ($_smarty_tpl->tpl_vars['cat']->value['nb_images']<=0){?> class=menuInfoCatByChild<?php }?> title="<?php echo $_smarty_tpl->tpl_vars['cat']->value['TITLE'];?>
"> [<?php echo $_smarty_tpl->tpl_vars['cat']->value['count_images'];?>
] </span> <?php }?> <?php if (!empty($_smarty_tpl->tpl_vars['cat']->value['icon_ts'])){?> <img title="<?php echo $_smarty_tpl->tpl_vars['cat']->value['icon_ts']['TITLE'];?>
" src="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
<?php echo $_smarty_tpl->tpl_vars['themeconf']->value['icon_dir'];?>
/recent<?php if ($_smarty_tpl->tpl_vars['cat']->value['icon_ts']['IS_CHILD_DATE']){?>_by_child<?php }?>.png" alt="(!)"> <?php }?> <?php } ?> <?php echo $_smarty_tpl->tpl_vars['RVMT_POST']->value;?>
 
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'rvmt','load'=>'async','path'=>"plugins/".((string)$_smarty_tpl->tpl_vars['RVMT_BASE_NAME']->value)."/js/rvtree.min.js"),$_smarty_tpl);?>

<?php $_smarty_tpl->smarty->_tag_stack[] = array('footer_script', array()); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>

var _rvTreeAutoQueue = _rvTreeAutoQueue||[]; _rvTreeAutoQueue.push(  document.getElementById('theCategoryMenu') );
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

	<div class=totalImages style="margin-top:4px"><?php echo l10n_dec('%d photo','%d photos',$_smarty_tpl->tpl_vars['block']->value->data['NB_PICTURE']);?>
</div>
</dd><?php }} ?>