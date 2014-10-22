<?php /* Smarty version Smarty-3.1.13, created on 2014-10-21 20:52:56
         compiled from ".\admin\themes\default\template\include\tag_selection.inc.tpl" */ ?>
<?php /*%%SmartyHeaderCode:64145446ffe8a62129-82447835%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '91f5ffec664eb862cf5509369888245561510291' => 
    array (
      0 => '.\\admin\\themes\\default\\template\\include\\tag_selection.inc.tpl',
      1 => 1413766897,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '64145446ffe8a62129-82447835',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_5446ffe8a92182_44160428',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5446ffe8a92182_44160428')) {function content_5446ffe8a92182_44160428($_smarty_tpl) {?><?php $_smarty_tpl->smarty->_tag_stack[] = array('footer_script', array('require'=>'jquery')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array('require'=>'jquery'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>

jQuery(document).ready(function(){
  jQuery(".tagSelection label").click(function () {
    var parent = jQuery(this).parent('li');
    var checkbox = jQuery(this).children("input[type=checkbox]");

    if (jQuery(checkbox).is(':checked')) {
      jQuery(parent).addClass("tagSelected"); 
    }
    else {
      jQuery(parent).removeClass('tagSelected'); 
    }
  });
});
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array('require'=>'jquery'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

<?php }} ?>