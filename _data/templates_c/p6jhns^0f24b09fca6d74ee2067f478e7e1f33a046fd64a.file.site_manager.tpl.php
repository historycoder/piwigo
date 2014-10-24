<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:10:20
         compiled from ".\admin\themes\default\template\site_manager.tpl" */ ?>
<?php /*%%SmartyHeaderCode:4092544a87fc8da9f4-10076872%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0f24b09fca6d74ee2067f478e7e1f33a046fd64a' => 
    array (
      0 => '.\\admin\\themes\\default\\template\\site_manager.tpl',
      1 => 1339642332,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4092544a87fc8da9f4-10076872',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'remote_output' => 0,
    'remote_line' => 0,
    'sites' => 0,
    'site' => 0,
    'pwg' => 0,
    'plugin_link' => 0,
    'F_ACTION' => 0,
    'PWG_TOKEN' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544a87fcb922e6_05468073',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a87fcb922e6_05468073')) {function content_544a87fcb922e6_05468073($_smarty_tpl) {?><?php $_smarty_tpl->smarty->_tag_stack[] = array('footer_script', array()); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>

jQuery(document).ready(function(){
  jQuery("#showCreateSite a").click(function(){
    jQuery("#showCreateSite").hide();
    jQuery("#createSite").show();
  });
});
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>



<div class="titrePage">
  <h2><?php echo l10n('Site manager');?>
</h2>
</div>

<?php if (!empty($_smarty_tpl->tpl_vars['remote_output']->value)){?>
<div class="remoteOutput">
  <ul>
<?php  $_smarty_tpl->tpl_vars['remote_line'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['remote_line']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['remote_output']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['remote_line']->key => $_smarty_tpl->tpl_vars['remote_line']->value){
$_smarty_tpl->tpl_vars['remote_line']->_loop = true;
?>
    <li class="<?php echo $_smarty_tpl->tpl_vars['remote_line']->value['CLASS'];?>
"><?php echo $_smarty_tpl->tpl_vars['remote_line']->value['CONTENT'];?>
</li>
<?php } ?>
  </ul>
</div>
<?php }?>

<?php if (!empty($_smarty_tpl->tpl_vars['sites']->value)){?>
<table class="table2">
	<tr class="throw">
		<td><?php echo l10n('Directory');?>
</td>
		<td><?php echo l10n('Actions');?>
</td>
	</tr>
<?php  $_smarty_tpl->tpl_vars['site'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['site']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['sites']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['site']['index']=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['site']->key => $_smarty_tpl->tpl_vars['site']->value){
$_smarty_tpl->tpl_vars['site']->_loop = true;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['site']['index']++;
?>
  <tr style="text-align:left" class="<?php if ((1 & $_smarty_tpl->getVariable('smarty')->value['foreach']['site']['index'])){?>row1<?php }else{ ?>row2<?php }?>"><td>
    <a href="<?php echo $_smarty_tpl->tpl_vars['site']->value['NAME'];?>
"><?php echo $_smarty_tpl->tpl_vars['site']->value['NAME'];?>
</a><br>(<?php echo $_smarty_tpl->tpl_vars['site']->value['TYPE'];?>
, <?php echo $_smarty_tpl->tpl_vars['site']->value['CATEGORIES'];?>
 <?php echo l10n('Albums');?>
, <?php echo $_smarty_tpl->tpl_vars['pwg']->value->l10n_dec('%d photo','%d photos',$_smarty_tpl->tpl_vars['site']->value['IMAGES']);?>
)
  </td><td>
    [<a href="<?php echo $_smarty_tpl->tpl_vars['site']->value['U_SYNCHRONIZE'];?>
" title="<?php echo l10n('update the database from files');?>
"><?php echo l10n('Synchronize');?>
</a>]
<?php if (isset($_smarty_tpl->tpl_vars['site']->value['U_DELETE'])){?>
      [<a href="<?php echo $_smarty_tpl->tpl_vars['site']->value['U_DELETE'];?>
" onclick="return confirm('<?php echo strtr(l10n('Are you sure?'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
');"
                title="<?php echo l10n('delete this site and all its attached elements');?>
"><?php echo l10n('delete');?>
</a>]
<?php }?>
<?php if (!empty($_smarty_tpl->tpl_vars['site']->value['plugin_links'])){?>
        <br>
<?php  $_smarty_tpl->tpl_vars['plugin_link'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['plugin_link']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['site']->value['plugin_links']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['plugin_link']->key => $_smarty_tpl->tpl_vars['plugin_link']->value){
$_smarty_tpl->tpl_vars['plugin_link']->_loop = true;
?>
        [<a href="<?php echo $_smarty_tpl->tpl_vars['plugin_link']->value['U_HREF'];?>
" title='<?php echo $_smarty_tpl->tpl_vars['plugin_link']->value['U_HINT'];?>
'><?php echo $_smarty_tpl->tpl_vars['plugin_link']->value['U_CAPTION'];?>
</a>]
<?php } ?>
<?php }?>
  </td></tr>
<?php } ?>
</table>
<?php }?>

<p id="showCreateSite" style="text-align:left;margin-left:1em;">
  <a href="#"><?php echo l10n('create a new site');?>
</a>
</p>

<form action="<?php echo $_smarty_tpl->tpl_vars['F_ACTION']->value;?>
" method="post" id="createSite" style="display:none">
  <input type="hidden" name="pwg_token" value="<?php echo $_smarty_tpl->tpl_vars['PWG_TOKEN']->value;?>
">
  <fieldset>
    <legend><?php echo l10n('create a new site');?>
</legend>

  <p style="margin-top:0;"><strong><?php echo l10n('Directory');?>
</strong>
    <br><input type="text" name="galleries_url" id="galleries_url">
  </p>

  <p class="actionButtons">
    <input class="submit" type="submit" name="submit" value="<?php echo l10n('Submit');?>
">
  </p>
</form>
<?php }} ?>