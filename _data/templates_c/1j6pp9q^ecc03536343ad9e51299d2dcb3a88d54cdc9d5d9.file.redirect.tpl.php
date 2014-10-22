<?php /* Smarty version Smarty-3.1.13, created on 2014-09-18 08:56:15
         compiled from "./themes/default/template/redirect.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1067766610541ad66f92bfe5-58455473%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ecc03536343ad9e51299d2dcb3a88d54cdc9d5d9' => 
    array (
      0 => './themes/default/template/redirect.tpl',
      1 => 1397851766,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1067766610541ad66f92bfe5-58455473',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'REDIRECT_MSG' => 0,
    'page_refresh' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_541ad66fba9b80_67998509',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_541ad66fba9b80_67998509')) {function content_541ad66fba9b80_67998509($_smarty_tpl) {?><div style="margin:2em;text-align:center;font-size:larger">
	<?php echo $_smarty_tpl->tpl_vars['REDIRECT_MSG']->value;?>

</div>

<p style="margin:2em;text-align:center">
	<a href="<?php echo $_smarty_tpl->tpl_vars['page_refresh']->value['U_REFRESH'];?>
">
		<?php echo l10n('Click here if your browser does not automatically forward you');?>

	</a>
</p>
<?php }} ?>