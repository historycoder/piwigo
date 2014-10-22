<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:34:21
         compiled from ".\admin\themes\default\template\cat_modify.tpl" */ ?>
<?php /*%%SmartyHeaderCode:241485444669d0a5425-44439078%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '922aa3cd0acd4c09f125bef80e87bf5d3a17316d' => 
    array (
      0 => '.\\admin\\themes\\default\\template\\cat_modify.tpl',
      1 => 1413766892,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '241485444669d0a5425-44439078',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'CATEGORIES_NAV' => 0,
    'TABSHEET_TITLE' => 0,
    'F_ACTION' => 0,
    'representant' => 0,
    'ROOT_URL' => 0,
    'themeconf' => 0,
    'INTRO' => 0,
    'CAT_ID' => 0,
    'U_JUMPTO' => 0,
    'U_MANAGE_ELEMENTS' => 0,
    'U_ADD_PHOTOS_ALBUM' => 0,
    'U_CHILDREN' => 0,
    'U_SYNC' => 0,
    'CAT_FULL_DIR' => 0,
    'U_DELETE' => 0,
    'CAT_NAME' => 0,
    'CAT_COMMENT' => 0,
    'move_cat_options' => 0,
    'move_cat_options_selected' => 0,
    'CAT_VISIBLE' => 0,
    'CAT_COMMENTABLE' => 0,
    'metaCONTENT' => 0,
    'metaCONTENT2' => 0,
    'TAG_INPUT_ENABLED' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_5444669d33e556_07305554',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5444669d33e556_07305554')) {function content_5444669d33e556_07305554($_smarty_tpl) {?><?php if (!is_callable('smarty_function_html_options')) include 'C:\\wamp\\www\\piwigo\\include\\smarty\\libs\\plugins\\function.html_options.php';
if (!is_callable('smarty_function_html_radios')) include 'C:\\wamp\\www\\piwigo\\include\\smarty\\libs\\plugins\\function.html_radios.php';
?><div class="titrePage">
  <h2><span style="letter-spacing:0"><?php echo $_smarty_tpl->tpl_vars['CATEGORIES_NAV']->value;?>
</span> &#8250; <?php echo l10n('Edit album');?>
 <?php echo $_smarty_tpl->tpl_vars['TABSHEET_TITLE']->value;?>
</h2>
</div>

<form action="<?php echo $_smarty_tpl->tpl_vars['F_ACTION']->value;?>
" method="POST" id="catModify">

<fieldset>
  <legend><?php echo l10n('Informations');?>
</legend>

  <table style="width:100%">
    <tr>
      <td id="albumThumbnail">
<?php if (isset($_smarty_tpl->tpl_vars['representant']->value)){?>
<?php if (isset($_smarty_tpl->tpl_vars['representant']->value['picture'])){?>
        <a href="<?php echo $_smarty_tpl->tpl_vars['representant']->value['picture']['URL'];?>
"><img src="<?php echo $_smarty_tpl->tpl_vars['representant']->value['picture']['SRC'];?>
" alt=""></a>
<?php }else{ ?>
        <img src="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
<?php echo $_smarty_tpl->tpl_vars['themeconf']->value['admin_icon_dir'];?>
/category_representant_random.png" alt="<?php echo l10n('Random photo');?>
">
<?php }?>
<?php if ($_smarty_tpl->tpl_vars['representant']->value['ALLOW_SET_RANDOM']){?>
        <p style="text-align:center;"><input class="submit" type="submit" name="set_random_representant" value="<?php echo l10n('Refresh');?>
" title="<?php echo l10n('Find a new representant by random');?>
"></p>
<?php }?>
<?php if (isset($_smarty_tpl->tpl_vars['representant']->value['ALLOW_DELETE'])){?>
        <p><input class="submit" type="submit" name="delete_representant" value="<?php echo l10n('Delete Representant');?>
"></p>
<?php }?>
<?php }?>
      </td>

      <td id="albumLinks">
<p><?php echo $_smarty_tpl->tpl_vars['INTRO']->value;?>
</p>
<ul>
<?php if (cat_admin_access($_smarty_tpl->tpl_vars['CAT_ID']->value)){?>
  <li><a class="icon-eye" href="<?php echo $_smarty_tpl->tpl_vars['U_JUMPTO']->value;?>
"><?php echo l10n('jump to album');?>
 →</a></li>
<?php }?>

<?php if (isset($_smarty_tpl->tpl_vars['U_MANAGE_ELEMENTS']->value)){?>
  <li><a class="icon-picture" href="<?php echo $_smarty_tpl->tpl_vars['U_MANAGE_ELEMENTS']->value;?>
"><?php echo l10n('manage album photos');?>
</a></li>
<?php }?>

  <li style="text-transform:lowercase;"><a class="icon-plus-circled" href="<?php echo $_smarty_tpl->tpl_vars['U_ADD_PHOTOS_ALBUM']->value;?>
"><?php echo l10n('Add Photos');?>
</a></li>

  <li><a class="icon-sitemap" href="<?php echo $_smarty_tpl->tpl_vars['U_CHILDREN']->value;?>
"><?php echo l10n('manage sub-albums');?>
</a></li>

<?php if (isset($_smarty_tpl->tpl_vars['U_SYNC']->value)){?>
  <li><a class="icon-exchange" href="<?php echo $_smarty_tpl->tpl_vars['U_SYNC']->value;?>
"><?php echo l10n('Synchronize');?>
</a> (<?php echo l10n('Directory');?>
 = <?php echo $_smarty_tpl->tpl_vars['CAT_FULL_DIR']->value;?>
)</li>
<?php }?>

<?php if (isset($_smarty_tpl->tpl_vars['U_DELETE']->value)){?>
  <li><a class="icon-trash" href="<?php echo $_smarty_tpl->tpl_vars['U_DELETE']->value;?>
" onclick="return confirm('<?php echo strtr(l10n('Are you sure?'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
');"><?php echo l10n('delete album');?>
</a></li>
<?php }?>

</ul>
      </td>
    </tr>
  </table>

</fieldset>

<fieldset>
  <legend><?php echo l10n('Properties');?>
</legend>
  <p>
    <strong><?php echo l10n('Name');?>
</strong>
    <br>
    <input type="text" class="large" name="name" value="<?php echo $_smarty_tpl->tpl_vars['CAT_NAME']->value;?>
" maxlength="255">
  </p>

  <p>
    <strong><?php echo l10n('Description');?>
</strong>
    <br>
    <textarea cols="50" rows="5" name="comment" id="comment" class="description"><?php echo $_smarty_tpl->tpl_vars['CAT_COMMENT']->value;?>
</textarea>
  </p>

<?php if (isset($_smarty_tpl->tpl_vars['move_cat_options']->value)){?>
  <p>
    <strong><?php echo l10n('Parent album');?>
</strong>
    <br>
    <select class="categoryDropDown" name="parent">
      <option value="0">------------</option>
      <?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['move_cat_options']->value,'selected'=>$_smarty_tpl->tpl_vars['move_cat_options_selected']->value),$_smarty_tpl);?>

    </select>
  </p>
<?php }?>

  <p>
    <strong><?php echo l10n('Lock');?>
</strong>
    <br>
		<?php echo smarty_function_html_radios(array('name'=>'visible','values'=>array('true','false'),'output'=>array(l10n('No'),l10n('Yes')),'selected'=>$_smarty_tpl->tpl_vars['CAT_VISIBLE']->value),$_smarty_tpl);?>

  </p>

<?php if (isset($_smarty_tpl->tpl_vars['CAT_COMMENTABLE']->value)){?>
  <p>
    <strong><?php echo l10n('Comments');?>
</strong>
    <br>
		<?php echo smarty_function_html_radios(array('name'=>'commentable','values'=>array('false','true'),'output'=>array(l10n('No'),l10n('Yes')),'selected'=>$_smarty_tpl->tpl_vars['CAT_COMMENTABLE']->value),$_smarty_tpl);?>

  </p>
<?php }?>
  <p style="margin:0">
    <input class="submit" type="submit" value="<?php echo l10n('Save Settings');?>
" name="submit">
  </p>
</fieldset>


  	<div>
		
			<fieldset>
				<legend><?php echo l10n('Metadata - Plugin meta');?>
</legend>
					<?php echo l10n('meta_compcat');?>
&nbsp;:&nbsp;<input type="text" name="insermetaKA" value="<?php echo $_smarty_tpl->tpl_vars['metaCONTENT']->value;?>
" size="110" maxlenght="110">
				<br>	
				<br>	
					<?php echo l10n('meta_compcatdes');?>
&nbsp;:&nbsp;<input type="text" name="insermetaDA" value="<?php echo $_smarty_tpl->tpl_vars['metaCONTENT2']->value;?>
" size="110" maxlenght="110">&nbsp;:&nbsp;(<?php echo l10n('meta_compcatdeshelp');?>
)
				<br>	
				<br>
					<div style="text-align:center;">
					<input class="submit" name="submetaalbum" type="submit" value="<?php echo l10n('meta_inscat');?>
" <?php echo $_smarty_tpl->tpl_vars['TAG_INPUT_ENABLED']->value;?>
 />
					</div>
			</fieldset>
		
	</div>
</form>
	
  
<?php }} ?>