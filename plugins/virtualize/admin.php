<?php
// +-----------------------------------------------------------------------+
// | Piwigo - a PHP based picture gallery                                  |
// +-----------------------------------------------------------------------+
// | Copyright(C) 2011      Pierrick LE GALL             http://piwigo.org |
// +-----------------------------------------------------------------------+
// | This program is free software; you can redistribute it and/or modify  |
// | it under the terms of the GNU General Public License as published by  |
// | the Free Software Foundation                                          |
// |                                                                       |
// | This program is distributed in the hope that it will be useful, but   |
// | WITHOUT ANY WARRANTY; without even the implied warranty of            |
// | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU      |
// | General Public License for more details.                              |
// |                                                                       |
// | You should have received a copy of the GNU General Public License     |
// | along with this program; if not, write to the Free Software           |
// | Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, |
// | USA.                                                                  |
// +-----------------------------------------------------------------------+

if( !defined("PHPWG_ROOT_PATH") )
{
  die ("Hacking attempt!");
}

include_once(PHPWG_ROOT_PATH.'admin/include/functions.php');

$admin_base_url = get_root_url().'admin.php?page=plugin&section=virtualize%2Fadmin.php';
load_language('plugin.lang', dirname(__FILE__).'/');

// +-----------------------------------------------------------------------+
// | Check Access and exit when user status is not ok                      |
// +-----------------------------------------------------------------------+

check_status(ACCESS_ADMINISTRATOR);

// +-----------------------------------------------------------------------+
// |                            add permissions                            |
// +-----------------------------------------------------------------------+

if (isset($_POST['submit']))
{
  $query = '
SELECT
    path AS oldpath,
    date_available,
    id
  FROM '.IMAGES_TABLE.'
  WHERE path NOT LIKE \'./upload/%\'
;';
  $result = pwg_query($query);
  while ($row = pwg_db_fetch_assoc($result))
  {
    $file_for_md5sum  = $row['oldpath'];
    $md5sum = md5_file($file_for_md5sum);

    list($year, $month, $day, $hour, $minute, $second) = preg_split('/[^\d]+/', $row['date_available']);

    $upload_dir = './upload/'.$year.'/'.$month.'/'.$day;
    if (!is_dir($upload_dir))
    {
      umask(0000);
      $recursive = true;
      if (!@mkdir($upload_dir, 0777, $recursive))
      {
        echo 'error during "'.$upload_dir.'" directory creation';
        exit();
      }
    }
    secure_directory($upload_dir);

    $extension = get_extension($row['oldpath']);
    $newfilename = $year.$month.$day.$hour.$minute.$second.'-'.substr($md5sum, 0, 8).'.jpg';

    $newpath = $upload_dir.'/'.$newfilename;

    $query = '
UPDATE '.IMAGES_TABLE.'
  SET path = \''.$newpath.'\',
      storage_category_id = NULL
  WHERE id = '.$row['id'].'
;';
    pwg_query($query);

    rename($row['oldpath'], $newpath);
    delete_element_derivatives(array('path' => $row['oldpath']));
  }

  $query = '
UPDATE '.CATEGORIES_TABLE.'
  SET dir = NULL
;';
  pwg_query($query);

  array_push($page['infos'], l10n('Information data registered in database'));
}


// +-----------------------------------------------------------------------+
// |                             template init                             |
// +-----------------------------------------------------------------------+

$template->set_filenames(
  array(
    'plugin_admin_content' => dirname(__FILE__).'/admin.tpl'
    )
  );

$template->assign(
    array(
      'F_ADD_ACTION'=> $admin_base_url,
    )
  );

// +-----------------------------------------------------------------------+
// |                           sending html code                           |
// +-----------------------------------------------------------------------+

$template->assign_var_from_handle('ADMIN_CONTENT', 'plugin_admin_content');
?>
