<?php /* Smarty version Smarty-3.1.13, created on 2014-10-24 13:07:54
         compiled from "C:\wamp\www\piwigo\plugins\language_switch\flags.tpl" */ ?>
<?php /*%%SmartyHeaderCode:13101544a876a2b2f86-58380418%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a5741d4287617fd7d22e8b4b53968bda7175d4c4' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\language_switch\\flags.tpl',
      1 => 1384826804,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13101544a876a2b2f86-58380418',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'lang_switch' => 0,
    'flag' => 0,
    'lang_info' => 0,
    'LANGUAGE_SWITCH_LOAD_STYLE' => 0,
    'LANGUAGE_SWITCH_PATH' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_544a876a3962e6_31135583',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_544a876a3962e6_31135583')) {function content_544a876a3962e6_31135583($_smarty_tpl) {?><li id="languageSwitch"><a id="languageSwitchLink" title="<?php echo l10n('Language');?>
" class="pwg-state-default pwg-button" rel="nofollow"> <span class="pwg-icon langflag-<?php echo $_smarty_tpl->tpl_vars['lang_switch']->value['Active']['code'];?>
">&nbsp;</span><span class="pwg-button-text"><?php echo l10n('Language');?>
</span> </a> <div id="languageSwitchBox" class="switchBox"> <div class="switchBoxTitle"><?php echo l10n('Language');?>
</div> <?php  $_smarty_tpl->tpl_vars['flag'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['flag']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['lang_switch']->value['flags']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['f']['index']=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['flag']->key => $_smarty_tpl->tpl_vars['flag']->value){
$_smarty_tpl->tpl_vars['flag']->_loop = true;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['f']['index']++;
?> <a rel="nofollow" href="<?php echo $_smarty_tpl->tpl_vars['flag']->value['url'];?>
"> <?php if ($_smarty_tpl->tpl_vars['lang_info']->value['direction']=="ltr"){?><span class="pwg-icon langflag-<?php echo $_smarty_tpl->tpl_vars['flag']->value['code'];?>
"><?php echo $_smarty_tpl->tpl_vars['flag']->value['alt'];?>
</span><?php echo $_smarty_tpl->tpl_vars['flag']->value['title'];?>
<?php }else{ ?><?php echo $_smarty_tpl->tpl_vars['flag']->value['title'];?>
<span class="pwg-icon langflag-<?php echo $_smarty_tpl->tpl_vars['flag']->value['code'];?>
"><?php echo $_smarty_tpl->tpl_vars['flag']->value['alt'];?>
</span><?php }?> </a> <?php if (($_smarty_tpl->getVariable('smarty')->value['foreach']['f']['index']+1)%3==0){?><br><?php }?> <?php } ?> </div> </li>

<?php $_smarty_tpl->smarty->_tag_stack[] = array('footer_script', array('require'=>'jquery')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array('require'=>'jquery'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>

jQuery("#languageSwitchLink").click(function() {
	var elt = jQuery("#languageSwitchBox");
	elt.css("left", Math.min(jQuery(this).offset().left, jQuery(window).width() - elt.outerWidth(true) - 5))
		.css("top", jQuery(this).offset().top + jQuery(this).outerHeight(true))
		.toggle();
});
jQuery("#languageSwitchBox").on("mouseleave", function() {
	jQuery(this).hide();
});
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['footer_script'][0][0]->block_footer_script(array('require'=>'jquery'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>



<?php if ($_smarty_tpl->tpl_vars['LANGUAGE_SWITCH_LOAD_STYLE']->value){?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>($_smarty_tpl->tpl_vars['LANGUAGE_SWITCH_PATH']->value).("style.css")),$_smarty_tpl);?>

<?php }?>


<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>($_smarty_tpl->tpl_vars['LANGUAGE_SWITCH_PATH']->value).("language_switch.css")),$_smarty_tpl);?>
<?php }} ?>