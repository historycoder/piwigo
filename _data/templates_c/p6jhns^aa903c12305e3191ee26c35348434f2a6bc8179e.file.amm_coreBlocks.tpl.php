<?php /* Smarty version Smarty-3.1.13, created on 2014-10-19 21:40:34
         compiled from "C:\wamp\www\piwigo\plugins\AMenuManager\admin\amm_coreBlocks.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2646754446812df00f6-87784059%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'aa903c12305e3191ee26c35348434f2a6bc8179e' => 
    array (
      0 => 'C:\\wamp\\www\\piwigo\\plugins\\AMenuManager\\admin\\amm_coreBlocks.tpl',
      1 => 1413767613,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2646754446812df00f6-87784059',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'datas' => 0,
    'id' => 0,
    'value' => 0,
    'token' => 0,
    'blocksTabsheet' => 0,
    'block' => 0,
    'user' => 0,
    'group' => 0,
    'blockName' => 0,
    'data' => 0,
    'ROOT_URL' => 0,
    'themeconf' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_54446813170ca0_72455150',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54446813170ca0_72455150')) {function content_54446813170ca0_72455150($_smarty_tpl) {?>
<script type="text/javascript">

  var cbm,
      resetValues = {
        'cancel':new Array(),
        'piwigo':new Array()
      };
  $(window).load(
    function ()
    {
      
      // initialization for cancel et reset functions
<?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_smarty_tpl->tpl_vars['id'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['coreBlocks']['defaultValues']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value){
$_smarty_tpl->tpl_vars['value']->_loop = true;
 $_smarty_tpl->tpl_vars['id']->value = $_smarty_tpl->tpl_vars['value']->key;
?>
        resetValues.piwigo.push(  {  id:"<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
", block:"<?php echo $_smarty_tpl->tpl_vars['value']->value['container'];?>
", order:<?php echo $_smarty_tpl->tpl_vars['value']->value['order'];?>
, visibility:"<?php echo $_smarty_tpl->tpl_vars['value']->value['visibility'];?>
"  }  );
<?php } ?>
<?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_smarty_tpl->tpl_vars['id'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['coreBlocks']['items']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value){
$_smarty_tpl->tpl_vars['value']->_loop = true;
 $_smarty_tpl->tpl_vars['id']->value = $_smarty_tpl->tpl_vars['value']->key;
?>
        resetValues.cancel.push(  {  id:"<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
", block:"<?php echo $_smarty_tpl->tpl_vars['value']->value['container'];?>
", order:<?php echo $_smarty_tpl->tpl_vars['value']->value['order'];?>
, visibility:"<?php echo $_smarty_tpl->tpl_vars['value']->value['visibility'];?>
"  }  );
<?php } ?>
      

      cbm=new coreBlocks(
        {},
        {},
        '<?php echo $_smarty_tpl->tpl_vars['token']->value;?>
',
        {
          resetValues:resetValues,
          tab:"<?php echo $_smarty_tpl->tpl_vars['datas']->value['tab'];?>
"
        }

      );
    }
  );
</script>



<div style='padding-top:15px;'>
<?php echo $_smarty_tpl->tpl_vars['blocksTabsheet']->value;?>

</div>


<div id="containerPos" style='display:none;'>

  <ul class='menuUl'>
<?php  $_smarty_tpl->tpl_vars['block'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['block']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['menuBlocks']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['block']->key => $_smarty_tpl->tpl_vars['block']->value){
$_smarty_tpl->tpl_vars['block']->_loop = true;
?>
      <li class='menuListItem connectedSortable pluginBox' blockId='<?php echo $_smarty_tpl->tpl_vars['block']->value['id'];?>
'>

        <table class='menuListAccess'>
          <tr>
            <td style='min-width: 250px;'>
              <span class='menuListMove' title="<?php echo l10n('Drag to re-order');?>
">&nbsp;</span>
              <span class='menuListName'>
                <span style='font-weight:bold;' class='pluginBoxNameCell'><?php echo l10n($_smarty_tpl->tpl_vars['block']->value['name']);?>
</span>&nbsp;[<?php echo $_smarty_tpl->tpl_vars['block']->value['id'];?>
]<br>
                <span style='font-style:italic;'><?php if ($_smarty_tpl->tpl_vars['block']->value['owner']=='piwigo'){?>Piwigo<?php }else{ ?><?php echo l10n('g002_plugin');?>
&nbsp;:&nbsp;<?php echo $_smarty_tpl->tpl_vars['block']->value['owner'];?>
<?php }?></span>
              </span>
            </td>
            <td style='min-width: 100px;text-align:right;'><?php echo l10n('g002_accessibility');?>
</td>
            <td style='width:30%;'>
              <div id='users_<?php echo $_smarty_tpl->tpl_vars['block']->value['id'];?>
' class='menuListUsers' style='display:none;'>
              {
                "selected":<?php echo $_smarty_tpl->tpl_vars['block']->value['users'];?>
,
                "values":
                [
<?php  $_smarty_tpl->tpl_vars['user'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['user']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['users']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['user']->total= $_smarty_tpl->_count($_from);
 $_smarty_tpl->tpl_vars['user']->iteration=0;
 $_smarty_tpl->tpl_vars['user']->index=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['user']->key => $_smarty_tpl->tpl_vars['user']->value){
$_smarty_tpl->tpl_vars['user']->_loop = true;
 $_smarty_tpl->tpl_vars['user']->iteration++;
 $_smarty_tpl->tpl_vars['user']->index++;
 $_smarty_tpl->tpl_vars['user']->first = $_smarty_tpl->tpl_vars['user']->index === 0;
 $_smarty_tpl->tpl_vars['user']->last = $_smarty_tpl->tpl_vars['user']->iteration === $_smarty_tpl->tpl_vars['user']->total;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['items']['first'] = $_smarty_tpl->tpl_vars['user']->first;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['items']['last'] = $_smarty_tpl->tpl_vars['user']->last;
?>
                  {"value":"<?php echo $_smarty_tpl->tpl_vars['user']->value['id'];?>
","cols":["<?php echo $_smarty_tpl->tpl_vars['user']->value['name'];?>
"]}<?php if (!$_smarty_tpl->getVariable('smarty')->value['foreach']['items']['last']){?>,<?php }?>
<?php } ?>
                ]
              }
              </div>
            </td>
            <td style='width:30%;'>
              <div id='groups_<?php echo $_smarty_tpl->tpl_vars['block']->value['id'];?>
' class='menuListGroups' style:'display:none;'>
              {
                "selected":<?php echo $_smarty_tpl->tpl_vars['block']->value['groups'];?>
,
                "values":
                [
<?php  $_smarty_tpl->tpl_vars['group'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['group']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['groups']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['group']->total= $_smarty_tpl->_count($_from);
 $_smarty_tpl->tpl_vars['group']->iteration=0;
 $_smarty_tpl->tpl_vars['group']->index=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['group']->key => $_smarty_tpl->tpl_vars['group']->value){
$_smarty_tpl->tpl_vars['group']->_loop = true;
 $_smarty_tpl->tpl_vars['group']->iteration++;
 $_smarty_tpl->tpl_vars['group']->index++;
 $_smarty_tpl->tpl_vars['group']->first = $_smarty_tpl->tpl_vars['group']->index === 0;
 $_smarty_tpl->tpl_vars['group']->last = $_smarty_tpl->tpl_vars['group']->iteration === $_smarty_tpl->tpl_vars['group']->total;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['items']['first'] = $_smarty_tpl->tpl_vars['group']->first;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['items']['last'] = $_smarty_tpl->tpl_vars['group']->last;
?>
                  {"value":"<?php echo $_smarty_tpl->tpl_vars['group']->value['id'];?>
","cols":["<?php echo $_smarty_tpl->tpl_vars['group']->value['name'];?>
"]}<?php if (!$_smarty_tpl->getVariable('smarty')->value['foreach']['items']['last']){?>,<?php }?>
<?php } ?>
                ]
              }
              </div>
            </td>

          </tr>
        </table>
      </li>
<?php } ?>
  </ul>

</div>

<div id="containerMenu" style='display:none;'>
  <table>
    <tr>
<?php  $_smarty_tpl->tpl_vars['blockName'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['blockName']->_loop = false;
 $_smarty_tpl->tpl_vars['block'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['coreBlocks']['blocks']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['blockName']->key => $_smarty_tpl->tpl_vars['blockName']->value){
$_smarty_tpl->tpl_vars['blockName']->_loop = true;
 $_smarty_tpl->tpl_vars['block']->value = $_smarty_tpl->tpl_vars['blockName']->key;
?>
      <td>
        <h3><?php echo l10n($_smarty_tpl->tpl_vars['blockName']->value);?>
</h3>
      </td>
<?php } ?>
      <td>&nbsp;</td>
    </tr>
    <tr>
<?php  $_smarty_tpl->tpl_vars['blockName'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['blockName']->_loop = false;
 $_smarty_tpl->tpl_vars['block'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['coreBlocks']['blocks']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['blockName']->total= $_smarty_tpl->_count($_from);
 $_smarty_tpl->tpl_vars['blockName']->iteration=0;
 $_smarty_tpl->tpl_vars['blockName']->index=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['blockName']->key => $_smarty_tpl->tpl_vars['blockName']->value){
$_smarty_tpl->tpl_vars['blockName']->_loop = true;
 $_smarty_tpl->tpl_vars['block']->value = $_smarty_tpl->tpl_vars['blockName']->key;
 $_smarty_tpl->tpl_vars['blockName']->iteration++;
 $_smarty_tpl->tpl_vars['blockName']->index++;
 $_smarty_tpl->tpl_vars['blockName']->first = $_smarty_tpl->tpl_vars['blockName']->index === 0;
 $_smarty_tpl->tpl_vars['blockName']->last = $_smarty_tpl->tpl_vars['blockName']->iteration === $_smarty_tpl->tpl_vars['blockName']->total;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['items']['first'] = $_smarty_tpl->tpl_vars['blockName']->first;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['items']['last'] = $_smarty_tpl->tpl_vars['blockName']->last;
?>
      <td <?php if (!$_smarty_tpl->getVariable('smarty')->value['foreach']['items']['first']){?>class='leftBar'<?php }?>>
        <div id="containerMenu_<?php echo $_smarty_tpl->tpl_vars['block']->value;?>
" class="containerMenuBlock">

          <ul class="connectedSortable categoryUl" id="menu_<?php echo $_smarty_tpl->tpl_vars['block']->value;?>
">
<?php  $_smarty_tpl->tpl_vars['data'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['data']->_loop = false;
 $_smarty_tpl->tpl_vars['id'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['datas']->value['coreBlocks']['items']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['data']->key => $_smarty_tpl->tpl_vars['data']->value){
$_smarty_tpl->tpl_vars['data']->_loop = true;
 $_smarty_tpl->tpl_vars['id']->value = $_smarty_tpl->tpl_vars['data']->key;
?>
<?php if ($_smarty_tpl->tpl_vars['data']->value['container']==$_smarty_tpl->tpl_vars['block']->value){?>
              <li class="categoryLi menuItem pluginBox <?php if ($_smarty_tpl->tpl_vars['id']->value=='qsearch'){?>menuItemDisabled<?php }?>" id="i<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
">
                <div class='pluginBoxNameCell'>
<?php if ($_smarty_tpl->tpl_vars['id']->value=="qsearch"){?>
<?php }else{ ?>
                  <span class='listMove' title="<?php echo l10n('Drag to re-order');?>
"></span>
<?php }?>
                  <?php echo l10n($_smarty_tpl->tpl_vars['data']->value['translation']);?>


                    <img src="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
<?php echo $_smarty_tpl->tpl_vars['themeconf']->value['admin_icon_dir'];?>
/permissions.png"
                         class="button drag_button visibilitySwitch"
                         alt="<?php echo l10n('g002_click_to_manage_rights');?>
"
                         title="<?php echo l10n('g002_click_to_manage_rights');?>
"
                         style="float:right;"/>

                </div>
                <div id="i<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
_visibility" class="visibility">
                  <?php echo $_smarty_tpl->tpl_vars['data']->value['visibilityForm'];?>

                </div>
              </li>
<?php }?>
<?php } ?>
          </ul>
        </div>
      </td>
<?php } ?>
    <td class='leftBar'>
      <div class='containerMenuBlock'>
        <input type="button" value="<?php echo l10n('g002_cancel');?>
" onclick="cbm.reset('cancel');"/><br>
        <input type="button" value="<?php echo l10n('g002_piwigo_default');?>
" onclick="cbm.reset('piwigo');"/>
      </div>
    </td>
    </tr>
  </table>
</div>

<div style='padding-top:30px;'>
  <input style='margin-left:20px;' type="button" value="<?php echo l10n('g002_apply');?>
" onclick="cbm.submit();">
</div>

<?php }} ?>