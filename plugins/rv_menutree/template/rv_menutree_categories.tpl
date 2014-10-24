<dt>
	<a href="{$block->data.U_CATEGORIES}">{'Albums'|@translate}</a>
</dt>
<dd>
{strip}
{foreach from=$block->data.MENU_CATEGORIES item=cat}
	{$cat.PRE}
	<li{$cat.CLASS}> <a href="{$cat.URL}"{if $cat.IS_UPPERCAT} rel="up"{/if}>{$cat.NAME}</a>
		{if $cat.count_images > 0}
			<span{if $cat.nb_images <= 0} class=menuInfoCatByChild{/if} title="{$cat.TITLE}"> [{$cat.count_images}] </span>
		{/if}
		{if !empty($cat.icon_ts)}
			<img title="{$cat.icon_ts.TITLE}" src="{$ROOT_URL}{$themeconf.icon_dir}/recent{if $cat.icon_ts.IS_CHILD_DATE}_by_child{/if}.png" alt="(!)">
		{/if}
{/foreach}
{$RVMT_POST}
{/strip}
{combine_script id='rvmt' load='async' path="plugins/`$RVMT_BASE_NAME`/js/rvtree.min.js"}
{footer_script}
var _rvTreeAutoQueue = _rvTreeAutoQueue||[]; _rvTreeAutoQueue.push(  document.getElementById('theCategoryMenu') );
{/footer_script}
	<div class=totalImages style="margin-top:4px">{$block->data.NB_PICTURE|@translate_dec:'%d photo':'%d photos'}</div>
</dd>