<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:27:30
         compiled from ".\plugins\rv_menutree\template\rv_menutree_categories.tpl" */ ?>
<?php /*%%SmartyHeaderCode:24149544465026cce69-69989958%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1b19d39859bd158cf0dbbfa61d394ad063043181' => 
    array (
      0 => '.\\plugins\\rv_menutree\\template\\rv_menutree_categories.tpl',
      1 => 1413767428,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '24149544465026cce69-69989958',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'U_START_FILTER' => 0,
    'U_STOP_FILTER' => 0,
    'block' => 0,
    'cat' => 0,
    'ref_level' => 0,
    'RVMT_UPPER_IDS' => 0,
    'liclass' => 0,
    'ROOT_URL' => 0,
    'themeconf' => 0,
    'RVMT_BASE_NAME' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544465028d2024_52584967',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544465028d2024_52584967')) {function content_544465028d2024_52584967($_smarty_tpl) {?><dt>
<?php if (isset($_smarty_tpl->tpl_vars['U_START_FILTER']->value)){?>
	<a href="<?php echo $_smarty_tpl->tpl_vars['U_START_FILTER']->value;?>
" class="pwg-state-default pwg-button menubarFilter" title="<?php echo l10n('display only recently posted photos');?>
" rel="nofollow"><span class="pwg-icon pwg-icon-filter"> </span></a>
<?php }?>
<?php if (isset($_smarty_tpl->tpl_vars['U_STOP_FILTER']->value)){?>
	<a href="<?php echo $_smarty_tpl->tpl_vars['U_STOP_FILTER']->value;?>
" class="pwg-state-default pwg-button menubarFilter" title="<?php echo l10n('return to the display of all photos');?>
"><span class="pwg-icon pwg-icon-filter-del"> </span></a>
<?php }?>
	<a href="<?php echo $_smarty_tpl->tpl_vars['block']->value->data['U_CATEGORIES'];?>
"><?php echo l10n('Markers');?>
</a>
</dt>
<dd>
 <?php if (isset($_smarty_tpl->tpl_vars['ref_level'])) {$_smarty_tpl->tpl_vars['ref_level'] = clone $_smarty_tpl->tpl_vars['ref_level'];
$_smarty_tpl->tpl_vars['ref_level']->value = 0; $_smarty_tpl->tpl_vars['ref_level']->nocache = null; $_smarty_tpl->tpl_vars['ref_level']->scope = 0;
} else $_smarty_tpl->tpl_vars['ref_level'] = new Smarty_variable(0, null, 0);?> <?php  $_smarty_tpl->tpl_vars['cat'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['cat']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['block']->value->data['MENU_CATEGORIES']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['cat']->key => $_smarty_tpl->tpl_vars['cat']->value){
$_smarty_tpl->tpl_vars['cat']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['cat']->key;
?> <?php if ($_smarty_tpl->tpl_vars['cat']->value['LEVEL']>$_smarty_tpl->tpl_vars['ref_level']->value){?> <ul<?php if ($_smarty_tpl->tpl_vars['ref_level']->value==0){?> class=rvTree id=theCategoryMenu<?php }?>> <?php }else{ ?> </li> <?php echo str_repeat('</ul></li>',($_smarty_tpl->tpl_vars['ref_level']->value-$_smarty_tpl->tpl_vars['cat']->value['LEVEL']));?>
 <?php }?> <?php if ($_smarty_tpl->tpl_vars['cat']->value['SELECTED']){?> <?php if (isset($_smarty_tpl->tpl_vars['liclass'])) {$_smarty_tpl->tpl_vars['liclass'] = clone $_smarty_tpl->tpl_vars['liclass'];
$_smarty_tpl->tpl_vars['liclass']->value = 'selected '; $_smarty_tpl->tpl_vars['liclass']->nocache = null; $_smarty_tpl->tpl_vars['liclass']->scope = 0;
} else $_smarty_tpl->tpl_vars['liclass'] = new Smarty_variable('selected ', null, 0);?> <?php }else{ ?> <?php if (isset($_smarty_tpl->tpl_vars['liclass'])) {$_smarty_tpl->tpl_vars['liclass'] = clone $_smarty_tpl->tpl_vars['liclass'];
$_smarty_tpl->tpl_vars['liclass']->value = ''; $_smarty_tpl->tpl_vars['liclass']->nocache = null; $_smarty_tpl->tpl_vars['liclass']->scope = 0;
} else $_smarty_tpl->tpl_vars['liclass'] = new Smarty_variable('', null, 0);?> <?php }?> <?php if ($_smarty_tpl->tpl_vars['cat']->value['count_categories']>0){?> <?php if (isset($_smarty_tpl->tpl_vars['U_STOP_FILTER']->value)||isset($_smarty_tpl->tpl_vars['RVMT_UPPER_IDS']->value[$_smarty_tpl->tpl_vars['cat']->value['id']])){?> <?php if (isset($_smarty_tpl->tpl_vars['liclass'])) {$_smarty_tpl->tpl_vars['liclass'] = clone $_smarty_tpl->tpl_vars['liclass'];
$_smarty_tpl->tpl_vars['liclass']->value = ((string)$_smarty_tpl->tpl_vars['liclass']->value)."liOpen"; $_smarty_tpl->tpl_vars['liclass']->nocache = null; $_smarty_tpl->tpl_vars['liclass']->scope = 0;
} else $_smarty_tpl->tpl_vars['liclass'] = new Smarty_variable(((string)$_smarty_tpl->tpl_vars['liclass']->value)."liOpen", null, 0);?> <?php }else{ ?> <?php if (isset($_smarty_tpl->tpl_vars['liclass'])) {$_smarty_tpl->tpl_vars['liclass'] = clone $_smarty_tpl->tpl_vars['liclass'];
$_smarty_tpl->tpl_vars['liclass']->value = ((string)$_smarty_tpl->tpl_vars['liclass']->value)."liClosed"; $_smarty_tpl->tpl_vars['liclass']->nocache = null; $_smarty_tpl->tpl_vars['liclass']->scope = 0;
} else $_smarty_tpl->tpl_vars['liclass'] = new Smarty_variable(((string)$_smarty_tpl->tpl_vars['liclass']->value)."liClosed", null, 0);?> <?php }?> <?php }?> <li<?php if (!empty($_smarty_tpl->tpl_vars['liclass']->value)){?> class="<?php echo $_smarty_tpl->tpl_vars['liclass']->value;?>
"<?php }?>> <a href="<?php echo $_smarty_tpl->tpl_vars['cat']->value['URL'];?>
"<?php if ($_smarty_tpl->tpl_vars['cat']->value['IS_UPPERCAT']){?> rel="up"<?php }?>><?php echo $_smarty_tpl->tpl_vars['cat']->value['NAME'];?>
</a> <?php if ($_smarty_tpl->tpl_vars['cat']->value['count_images']>0){?> <span<?php if ($_smarty_tpl->tpl_vars['cat']->value['nb_images']<=0){?> class=menuInfoCatByChild<?php }?> title="<?php echo $_smarty_tpl->tpl_vars['cat']->value['TITLE'];?>
"> [<?php echo $_smarty_tpl->tpl_vars['cat']->value['count_images'];?>
] </span> <?php }?> <?php if (!empty($_smarty_tpl->tpl_vars['cat']->value['icon_ts'])){?> <img title="<?php echo $_smarty_tpl->tpl_vars['cat']->value['icon_ts']['TITLE'];?>
" src="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
<?php echo $_smarty_tpl->tpl_vars['themeconf']->value['icon_dir'];?>
/recent<?php if ($_smarty_tpl->tpl_vars['cat']->value['icon_ts']['IS_CHILD_DATE']){?>_by_child<?php }?>.png" alt="(!)"> <?php }?> <?php if (isset($_smarty_tpl->tpl_vars['ref_level'])) {$_smarty_tpl->tpl_vars['ref_level'] = clone $_smarty_tpl->tpl_vars['ref_level'];
$_smarty_tpl->tpl_vars['ref_level']->value = $_smarty_tpl->tpl_vars['cat']->value['LEVEL']; $_smarty_tpl->tpl_vars['ref_level']->nocache = null; $_smarty_tpl->tpl_vars['ref_level']->scope = 0;
} else $_smarty_tpl->tpl_vars['ref_level'] = new Smarty_variable($_smarty_tpl->tpl_vars['cat']->value['LEVEL'], null, 0);?> <?php } ?> <?php echo str_repeat('</li></ul>',$_smarty_tpl->tpl_vars['ref_level']->value);?>
 
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'rvmt','load'=>'async','path'=>"plugins/".((string)$_smarty_tpl->tpl_vars['RVMT_BASE_NAME']->value)."/js/rvtree.min.js"),$_smarty_tpl);?>

<?php $_smarty_tpl->smarty->_tag_stack[] = array('footer_script', array()); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>

var _rvTreeAutoQueue = _rvTreeAutoQueue||[]; _rvTreeAutoQueue.push(  document.getElementById('theCategoryMenu') );
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

	<div class=totalImages style="margin-top:4px"><?php echo l10n_dec('%d photo','%d photos',$_smarty_tpl->tpl_vars['block']->value->data['NB_PICTURE']);?>
</div>
</dd><?php }} ?>