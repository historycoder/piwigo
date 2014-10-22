<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:40:34
         compiled from "C:\wamp\www\piwigo\plugins\GrumPluginClasses\templates\GPCTabSheet.tpl" */ ?>
<?php /*%%SmartyHeaderCode:233255444681294bff0-94079636%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '61cf35c43f20168183593da8a969a60d4d7f49ef' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\GrumPluginClasses\\templates\\GPCTabSheet.tpl',
      1 => 1413767687,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '233255444681294bff0-94079636',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'tabsheet' => 0,
    'tabsheet_classes' => 0,
    'tabsheet_id' => 0,
    'name' => 0,
    'tab_classes' => 0,
    'tabsheet_selected' => 0,
    'sheet' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_54446812c0f9e8_31311812',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54446812c0f9e8_31311812')) {function content_54446812c0f9e8_31311812($_smarty_tpl) {?><?php if (isset($_smarty_tpl->tpl_vars['tabsheet']->value)&&count($_smarty_tpl->tpl_vars['tabsheet']->value)){?>
<ul <?php if (isset($_smarty_tpl->tpl_vars['tabsheet_classes']->value)){?>class="<?php echo $_smarty_tpl->tpl_vars['tabsheet_classes']->value;?>
"<?php }?> <?php if (isset($_smarty_tpl->tpl_vars['tabsheet_id']->value)){?>id="<?php echo $_smarty_tpl->tpl_vars['tabsheet_id']->value;?>
"<?php }?> >
<?php  $_smarty_tpl->tpl_vars['sheet'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['sheet']->_loop = false;
 $_smarty_tpl->tpl_vars['name'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['tabsheet']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['sheet']->key => $_smarty_tpl->tpl_vars['sheet']->value){
$_smarty_tpl->tpl_vars['sheet']->_loop = true;
 $_smarty_tpl->tpl_vars['name']->value = $_smarty_tpl->tpl_vars['sheet']->key;
?>
  <li <?php if (isset($_smarty_tpl->tpl_vars['tabsheet_id']->value)){?>id="<?php echo $_smarty_tpl->tpl_vars['tabsheet_id']->value;?>
<?php echo $_smarty_tpl->tpl_vars['name']->value;?>
"<?php }?> class="<?php echo $_smarty_tpl->tpl_vars['tab_classes']->value['normal'];?>
 <?php if (($_smarty_tpl->tpl_vars['name']->value==$_smarty_tpl->tpl_vars['tabsheet_selected']->value)){?><?php echo $_smarty_tpl->tpl_vars['tab_classes']->value['selected'];?>
<?php }else{ ?><?php echo $_smarty_tpl->tpl_vars['tab_classes']->value['unselected'];?>
<?php }?>">
    <a <?php if ($_smarty_tpl->tpl_vars['sheet']->value['url']!=''){?>href="<?php echo $_smarty_tpl->tpl_vars['sheet']->value['url'];?>
"<?php }?> <?php if ($_smarty_tpl->tpl_vars['sheet']->value['onClick']!=''){?>onclick="<?php echo $_smarty_tpl->tpl_vars['sheet']->value['onClick'];?>
"<?php }?> ><span><?php echo $_smarty_tpl->tpl_vars['sheet']->value['caption'];?>
</span></a>
  </li>
<?php } ?>
</ul>

<?php if (isset($_smarty_tpl->tpl_vars['tabsheet_id']->value)){?>
  
  <script type="text/javascript">
    $('#<?php echo $_smarty_tpl->tpl_vars['tabsheet_id']->value;?>
 li a').bind('click',
      function ()
      {
        $('#<?php echo $_smarty_tpl->tpl_vars['tabsheet_id']->value;?>
 li').removeClass('<?php echo $_smarty_tpl->tpl_vars['tab_classes']->value['selected'];?>
').addClass('<?php echo $_smarty_tpl->tpl_vars['tab_classes']->value['unselected'];?>
');
        $(this.parentNode).removeClass('<?php echo $_smarty_tpl->tpl_vars['tab_classes']->value['unselected'];?>
').addClass('<?php echo $_smarty_tpl->tpl_vars['tab_classes']->value['selected'];?>
');
      }
    );
  
  </script>

<?php }?>
<?php }?>
<?php }} ?>