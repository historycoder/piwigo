<?php /* Smarty version Smarty-3.1.13, created on 2014-10-20 09:48:22
         compiled from ".\themes\default\template\menubar_tags.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2129544512a60dd9a4-87541898%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '229a4a118d9dc0bd97496a538944987f55e1524a' => 
    array (
      0 => '.\\themes\\default\\template\\menubar_tags.tpl',
      1 => 1413767895,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2129544512a60dd9a4-87541898',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'block' => 0,
    'tag' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544512a67204b9_86475165',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544512a67204b9_86475165')) {function content_544512a67204b9_86475165($_smarty_tpl) {?><dt><?php echo l10n('Related tags');?>
</dt>
<dd>
	<div id="menuTagCloud">
<?php  $_smarty_tpl->tpl_vars['tag'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tag']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['block']->value->data; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tag']->key => $_smarty_tpl->tpl_vars['tag']->value){
$_smarty_tpl->tpl_vars['tag']->_loop = true;
?>
		<span> <a class="tagLevel<?php echo $_smarty_tpl->tpl_vars['tag']->value['level'];?>
" href= <?php if (isset($_smarty_tpl->tpl_vars['tag']->value['U_ADD'])){?> "<?php echo $_smarty_tpl->tpl_vars['tag']->value['U_ADD'];?>
" title="<?php echo l10n_dec('%d photo is also linked to current tags','%d photos are also linked to current tags',$_smarty_tpl->tpl_vars['tag']->value['counter']);?>
" rel="nofollow">+ <?php }else{ ?> "<?php echo $_smarty_tpl->tpl_vars['tag']->value['URL'];?>
" title="<?php echo l10n('display photos linked to this tag');?>
"> <?php }?> <?php echo $_smarty_tpl->tpl_vars['tag']->value['name'];?>
</a></span>

<?php } ?>
	</div>
</dd>
<?php }} ?>