<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:07:53
         compiled from "C:\wamp\www\piwigo\themes\elegant\local_head.tpl" */ ?>
<?php /*%%SmartyHeaderCode:11095544a8769ade6a3-76753716%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2364967c00254d681bab6207e8ff1572af013c14' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\themes\\elegant\\local_head.tpl',
      1 => 1391641544,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '11095544a8769ade6a3-76753716',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'LEVEL_SEPARATOR' => 0,
    'elegant' => 0,
    'BODY_ID' => 0,
    'ROOT_URL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544a8769b57041_51499815',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a8769b57041_51499815')) {function content_544a8769b57041_51499815($_smarty_tpl) {?><?php $_smarty_tpl->smarty->_tag_stack[] = array('html_style', array()); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['html_style'][0][0]->block_html_style(array(), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>

.browsePath ul li span a:before, .browsePath ul li.last:before
{
  content: "<?php echo $_smarty_tpl->tpl_vars['LEVEL_SEPARATOR']->value;?>
";
}
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['html_style'][0][0]->block_html_style(array(), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

<?php $_smarty_tpl->smarty->_tag_stack[] = array('footer_script', array()); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>

  var p_main_menu = "<?php echo $_smarty_tpl->tpl_vars['elegant']->value['p_main_menu'];?>
", p_pict_descr = "<?php echo $_smarty_tpl->tpl_vars['elegant']->value['p_pict_descr'];?>
", p_pict_comment = "<?php echo $_smarty_tpl->tpl_vars['elegant']->value['p_pict_comment'];?>
";
  jQuery(document).ready(function() {
      jQuery(".browsePath").jBreadCrumb();
  });
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array(), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

<?php if ($_smarty_tpl->tpl_vars['BODY_ID']->value=='thePicturePage'){?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'elegant.scripts_pp','load'=>'footer','require'=>'jquery','path'=>'themes/elegant/scripts_pp.js'),$_smarty_tpl);?>

<?php }else{ ?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'elegant.scripts','load'=>'footer','require'=>'jquery','path'=>'themes/elegant/scripts.js'),$_smarty_tpl);?>

<?php }?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'jquery.jBreadCrumb','load'=>'footer','require'=>'jquery','path'=>'themes/elegant/js/jquery.jBreadCrumb.js'),$_smarty_tpl);?>



<!--[if lt IE 8]>
		<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
themes/elegant/fix-ie7.css">
	<![endif]-->
<?php }} ?>