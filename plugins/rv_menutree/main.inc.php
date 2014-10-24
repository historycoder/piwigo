<?php /*
Plugin Name: RV Menu Tree
Version: 2.7.a
Plugin URI: http://piwigo.org/ext/extension_view.php?eid=238
Description: Replaces the categories in the menu bar with a nicer one (javascript).
Author: rvelices
Author URI: http://www.modusoptimus.com
*/


add_event_handler('loc_begin_page_header', 'rv_mt_begin_page_header');
function rv_mt_begin_page_header()
{
	global $template;
	$template->func_combine_css( array('path'=>'plugins/rv_menutree/menutree.css') );
}

add_event_handler('get_categories_menu_sql_where', 'rv_mt_get_categories_menu_sql_where', EVENT_HANDLER_PRIORITY_NEUTRAL, 2 );

function rv_mt_get_categories_menu_sql_where($where, $expand)
{
	if (mobile_theme())
		return $where;
	add_event_handler('blockmanager_apply', 'rv_mt_menubar_categories');

	if ($expand)
		return $where;

	global $page;
	if ( !isset($page['category']) )
		$where = 'id_uppercat IS NULL OR uppercats REGEXP \'^[0-9]+,[0-9]+$\'';
	else
	{
		$where = 'id_uppercat is NULL
  OR uppercats LIKE "'.$page['category']['upper_names'][0]['id'].',%"
  OR uppercats REGEXP \'^[0-9]+,[0-9]+$\'';
	}
	return $where;
}

function rv_mt_menubar_categories($menu_ref_arr)
{
	$menu = & $menu_ref_arr[0];

	if (($block = $menu->get_block('mbCategories')) != null)
	{
		global $template, $page;

		$upper_ids = isset($page['category']['uppercats']) ? array_flip( explode(',', $page['category']['uppercats'])) : null;
		$refLevel = 0;
		foreach($block->data['MENU_CATEGORIES'] as &$cat)
		{
			$level = $cat['LEVEL'];
			if ($level>$refLevel)
				$pre = '<ul'.($refLevel==0?' class=rvTree id=theCategoryMenu':'').'>';
			else
				$pre = '</li>'.str_repeat('</ul></li>', $refLevel-$level);

			$class= $cat['SELECTED'] ? 'selected ' : '';
			if ($cat['count_categories'] > 0)
				$class .= isset($upper_ids[$cat['id']]) ? 'liOpen':'liClosed';
			if (!empty($class))
				$class=' class="'.$class.'"';
			$cat['PRE'] = $pre;
			$cat['CLASS'] = $class;
			$refLevel = $level;
		}
		unset($cat);
		$rvmt_base_name  = basename(dirname(__FILE__));
		$template->assign(array(
			'RVMT_BASE_NAME' => $rvmt_base_name,
			'RVMT_POST' => str_repeat('</li></ul>', $refLevel),
			)
		);
		$block->template = realpath(PHPWG_ROOT_PATH.'plugins/'.$rvmt_base_name.'/template/rv_menutree_categories.tpl');
	}
}
?>