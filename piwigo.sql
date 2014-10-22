-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 18, 2014 at 07:49 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `piwigo`
--

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_additionalpages`
--

CREATE TABLE IF NOT EXISTS `piwigo_additionalpages` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `pos` smallint(5) DEFAULT NULL,
  `lang` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `users` varchar(255) DEFAULT NULL,
  `groups` varchar(255) DEFAULT NULL,
  `level` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `permalink` varchar(64) DEFAULT NULL,
  `standalone` enum('true','false') NOT NULL DEFAULT 'false',
  PRIMARY KEY (`id`),
  KEY `pos` (`pos`),
  KEY `lang` (`lang`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amm_blocks`
--

CREATE TABLE IF NOT EXISTS `piwigo_amm_blocks` (
  `id` varchar(40) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `users` varchar(1024) NOT NULL,
  `groups` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `byOrder` (`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_amm_blocks`
--

INSERT INTO `piwigo_amm_blocks` (`id`, `order`, `users`, `groups`) VALUES
('mbAdditionalPages', 6, '', ''),
('mbAMM_links', 8, '', ''),
('mbAMM_randompict', 7, '', ''),
('mbCategories', 1, '', ''),
('mbIdentification', 5, '', ''),
('mbLinks', 2, '', ''),
('mbMenu', 0, '', ''),
('mbSpecials', 4, '', ''),
('mbTags', 3, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amm_personalised`
--

CREATE TABLE IF NOT EXISTS `piwigo_amm_personalised` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visible` char(1) NOT NULL DEFAULT 'y',
  `nfo` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `piwigo_amm_personalised`
--

INSERT INTO `piwigo_amm_personalised` (`id`, `visible`, `nfo`) VALUES
(1, 'y', 'Maps');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amm_personalised_langs`
--

CREATE TABLE IF NOT EXISTS `piwigo_amm_personalised_langs` (
  `id` int(10) unsigned NOT NULL DEFAULT '0',
  `lang` char(5) NOT NULL DEFAULT '*',
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  PRIMARY KEY (`id`,`lang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_amm_personalised_langs`
--

INSERT INTO `piwigo_amm_personalised_langs` (`id`, `lang`, `title`, `content`) VALUES
(1, 'af_ZA', '', ''),
(1, 'ar_MA', '', ''),
(1, 'ar_SA', '', ''),
(1, 'az_AZ', '', ''),
(1, 'bg_BG', '', ''),
(1, 'bn_IN', '', ''),
(1, 'br_FR', '', ''),
(1, 'ca_ES', '', ''),
(1, 'cs_CZ', '', ''),
(1, 'da_DK', '', ''),
(1, 'de_DE', '', ''),
(1, 'dv_MV', '', ''),
(1, 'el_GR', '', ''),
(1, 'en_GB', 'Maps', 'Counties\nCities'),
(1, 'en_UK', '', ''),
(1, 'en_US', '', ''),
(1, 'eo_EO', '', ''),
(1, 'es_AR', '', ''),
(1, 'es_ES', '', ''),
(1, 'et_EE', '', ''),
(1, 'fa_IR', '', ''),
(1, 'fi_FI', '', ''),
(1, 'fr_CA', '', ''),
(1, 'fr_FR', '', ''),
(1, 'ga_IE', '', ''),
(1, 'gl_ES', '', ''),
(1, 'he_IL', '', ''),
(1, 'hr_HR', '', ''),
(1, 'hu_HU', '', ''),
(1, 'id_ID', '', ''),
(1, 'is_IS', '', ''),
(1, 'it_IT', '', ''),
(1, 'ja_JP', '', ''),
(1, 'ka_GE', '', ''),
(1, 'km_KH', '', ''),
(1, 'kn_IN', '', ''),
(1, 'kok_I', '', ''),
(1, 'ko_KR', '', ''),
(1, 'lb_LU', '', ''),
(1, 'lt_LT', '', ''),
(1, 'lv_LV', '', ''),
(1, 'mk_MK', '', ''),
(1, 'mn_MN', '', ''),
(1, 'ms_MY', '', ''),
(1, 'nb_NO', '', ''),
(1, 'nl_NL', '', ''),
(1, 'nn_NO', '', ''),
(1, 'pl_PL', '', ''),
(1, 'pt_BR', '', ''),
(1, 'pt_PT', '', ''),
(1, 'ro_RO', '', ''),
(1, 'ru_RU', '', ''),
(1, 'sh_RS', '', ''),
(1, 'sk_SK', '', ''),
(1, 'sl_SI', '', ''),
(1, 'sr_RS', '', ''),
(1, 'sv_SE', '', ''),
(1, 'ta_IN', '', ''),
(1, 'th_TH', '', ''),
(1, 'tr_TR', '', ''),
(1, 'uk_UA', '', ''),
(1, 'vi_VN', '', ''),
(1, 'zh_CN', '', ''),
(1, 'zh_HK', '', ''),
(1, 'zh_TW', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amm_urls`
--

CREATE TABLE IF NOT EXISTS `piwigo_amm_urls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `mode` int(11) NOT NULL DEFAULT '0',
  `icon` varchar(50) NOT NULL DEFAULT '',
  `position` int(11) NOT NULL DEFAULT '0',
  `visible` char(1) NOT NULL DEFAULT 'y',
  `accessUsers` varchar(1024) NOT NULL,
  `accessGroups` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_key` (`position`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_caddie`
--

CREATE TABLE IF NOT EXISTS `piwigo_caddie` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `element_id` mediumint(8) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`,`element_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_categories`
--

CREATE TABLE IF NOT EXISTS `piwigo_categories` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `id_uppercat` smallint(5) unsigned DEFAULT NULL,
  `comment` text,
  `dir` varchar(255) DEFAULT NULL,
  `rank` smallint(5) unsigned DEFAULT NULL,
  `status` enum('public','private') NOT NULL DEFAULT 'public',
  `site_id` tinyint(4) unsigned DEFAULT NULL,
  `visible` enum('true','false') NOT NULL DEFAULT 'true',
  `representative_picture_id` mediumint(8) unsigned DEFAULT NULL,
  `uppercats` varchar(255) NOT NULL DEFAULT '',
  `commentable` enum('true','false') NOT NULL DEFAULT 'true',
  `global_rank` varchar(255) DEFAULT NULL,
  `image_order` varchar(128) DEFAULT NULL,
  `permalink` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `community_user` smallint(5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_i3` (`permalink`),
  KEY `categories_i2` (`id_uppercat`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `piwigo_categories`
--

INSERT INTO `piwigo_categories` (`id`, `name`, `id_uppercat`, `comment`, `dir`, `rank`, `status`, `site_id`, `visible`, `representative_picture_id`, `uppercats`, `commentable`, `global_rank`, `image_order`, `permalink`, `community_user`) VALUES
(3, 'Adams', NULL, NULL, NULL, 1, 'public', NULL, 'true', NULL, '3', 'true', '1', NULL, NULL, NULL),
(2, 'Community', NULL, NULL, NULL, 3, 'public', NULL, 'true', NULL, '2', 'true', '3', NULL, NULL, NULL),
(4, 'Allen', NULL, NULL, NULL, 2, 'public', NULL, 'true', NULL, '4', 'true', '2', NULL, NULL, NULL),
(5, 'Marker #5-1 Mineral Springs', 3, NULL, NULL, 4, 'public', NULL, 'true', 3, '3,5', 'true', '1.4', NULL, NULL, NULL),
(6, 'Marker #5-2 Faurot Oil Well', 4, NULL, NULL, 1, 'public', NULL, 'true', 4, '4,6', 'true', '2.1', NULL, NULL, NULL),
(7, 'Marker #1-1 Bradford Tavern', 3, NULL, NULL, 3, 'public', NULL, 'true', 5, '3,7', 'true', '1.3', NULL, NULL, NULL),
(8, 'Marker #3-1 Covenanter Church', 3, NULL, NULL, 2, 'public', NULL, 'true', 7, '3,8', 'true', '1.2', NULL, NULL, NULL),
(9, 'Marker #12-1 First Presbyterian Church / Thomas Kirker', 3, NULL, NULL, 1, 'public', NULL, 'true', 8, '3,9', 'true', '1.1', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_comments`
--

CREATE TABLE IF NOT EXISTS `piwigo_comments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `image_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `author` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `author_id` smallint(5) DEFAULT NULL,
  `anonymous_id` varchar(45) NOT NULL,
  `website_url` varchar(255) DEFAULT NULL,
  `content` longtext,
  `validated` enum('true','false') NOT NULL DEFAULT 'false',
  `validation_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_i2` (`validation_date`),
  KEY `comments_i1` (`image_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_community_pendings`
--

CREATE TABLE IF NOT EXISTS `piwigo_community_pendings` (
  `image_id` mediumint(8) unsigned NOT NULL,
  `state` varchar(255) NOT NULL,
  `added_on` datetime NOT NULL,
  `validated_by` smallint(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_community_permissions`
--

CREATE TABLE IF NOT EXISTS `piwigo_community_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `group_id` smallint(5) unsigned DEFAULT NULL,
  `user_id` smallint(5) DEFAULT NULL,
  `category_id` smallint(5) unsigned DEFAULT NULL,
  `user_album` enum('true','false') NOT NULL DEFAULT 'false',
  `recursive` enum('true','false') NOT NULL DEFAULT 'true',
  `create_subcategories` enum('true','false') NOT NULL DEFAULT 'false',
  `moderated` enum('true','false') NOT NULL DEFAULT 'true',
  `nb_photos` int(11) DEFAULT NULL,
  `storage` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `piwigo_community_permissions`
--

INSERT INTO `piwigo_community_permissions` (`id`, `type`, `group_id`, `user_id`, `category_id`, `user_album`, `recursive`, `create_subcategories`, `moderated`, `nb_photos`, `storage`) VALUES
(1, 'any_registered_user', NULL, NULL, 2, 'false', 'true', 'false', 'true', 20, 50);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_config`
--

CREATE TABLE IF NOT EXISTS `piwigo_config` (
  `param` varchar(40) NOT NULL DEFAULT '',
  `value` text,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`param`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='configuration table';

--
-- Dumping data for table `piwigo_config`
--

INSERT INTO `piwigo_config` (`param`, `value`, `comment`) VALUES
('activate_comments', 'false', 'Global parameter for usage of comments system'),
('nb_comment_page', '10', 'number of comments to display on each page'),
('log', 'true', 'keep an history of visits on your website'),
('comments_validation', 'false', 'administrators validate users comments before becoming visible'),
('comments_forall', 'false', 'even guest not registered can post comments'),
('comments_order', 'ASC', 'comments order on picture page and cie'),
('comments_author_mandatory', 'false', 'Comment author is mandatory'),
('comments_email_mandatory', 'false', 'Comment email is mandatory'),
('user_can_delete_comment', 'false', 'administrators can allow user delete their own comments'),
('user_can_edit_comment', 'false', 'administrators can allow user edit their own comments'),
('email_admin_on_comment_edition', 'false', 'Send an email to the administrators when a comment is modified'),
('email_admin_on_comment_deletion', 'false', 'Send an email to the administrators when a comment is deleted'),
('gallery_locked', 'false', 'Lock your gallery temporary for non admin users'),
('gallery_title', 'Remarkable Ohio', 'Title at top of each page and for RSS feed'),
('rate', 'true', 'Rating pictures feature is enabled'),
('rate_anonymous', 'true', 'Rating pictures feature is also enabled for visitors'),
('page_banner', '<h1>%gallery_title%</h1>\r\n\r\n<p>Welcome to Remarkable Ohio!</p>', 'html displayed on the top each page of your gallery'),
('history_admin', 'false', 'keep a history of administrator visits on your website'),
('history_guest', 'true', 'keep a history of guest visits on your website'),
('allow_user_registration', 'true', 'allow visitors to register?'),
('allow_user_customization', 'true', 'allow users to customize their gallery?'),
('nb_categories_page', '12', 'Param for categories pagination'),
('nbm_send_html_mail', 'true', 'Send mail on HTML format for notification by mail'),
('nbm_send_mail_as', '', 'Send mail as param value for notification by mail'),
('nbm_send_detailed_content', 'true', 'Send detailed content for notification by mail'),
('nbm_complementary_mail_content', '', 'Complementary mail content for notification by mail'),
('nbm_send_recent_post_dates', 'true', 'Send recent post by dates for notification by mail'),
('email_admin_on_new_user', 'false', 'Send an email to theadministrators when a user registers'),
('email_admin_on_comment', 'false', 'Send an email to the administrators when a valid comment is entered'),
('email_admin_on_comment_validation', 'true', 'Send an email to the administrators when a comment requires validation'),
('obligatory_user_mail_address', 'false', 'Mail address is obligatory for users'),
('c13y_ignore', 'a:2:{s:7:"version";s:5:"2.6.2";s:4:"list";a:0:{}}', 'List of ignored anomalies'),
('extents_for_templates', 'a:0:{}', 'Actived template-extension(s)'),
('blk_menubar', '', 'Menubar options'),
('menubar_filter_icon', 'false', 'Display filter icon'),
('index_sort_order_input', 'true', 'Display image order selection list'),
('index_flat_icon', 'false', 'Display flat icon'),
('index_posted_date_icon', 'true', 'Display calendar by posted date'),
('index_created_date_icon', 'true', 'Display calendar by creation date icon'),
('index_slideshow_icon', 'true', 'Display slideshow icon'),
('index_new_icon', 'true', 'Display new icons next albums and pictures'),
('picture_metadata_icon', 'true', 'Display metadata icon on picture page'),
('picture_slideshow_icon', 'true', 'Display slideshow icon on picture page'),
('picture_favorite_icon', 'true', 'Display favorite icon on picture page'),
('picture_download_icon', 'true', 'Display download icon on picture page'),
('picture_navigation_icons', 'true', 'Display navigation icons on picture page'),
('picture_navigation_thumb', 'true', 'Display navigation thumbnails on picture page'),
('picture_menu', 'false', 'Show menubar on picture page'),
('picture_informations', 'a:11:{s:6:"author";b:1;s:10:"created_on";b:1;s:9:"posted_on";b:1;s:10:"dimensions";b:0;s:4:"file";b:0;s:8:"filesize";b:0;s:4:"tags";b:1;s:10:"categories";b:1;s:6:"visits";b:1;s:12:"rating_score";b:1;s:13:"privacy_level";b:1;}', 'Information displayed on picture page'),
('week_starts_on', 'monday', 'Monday may not be the first day of the week'),
('updates_ignored', 'a:3:{s:7:"plugins";a:0:{}s:6:"themes";a:0:{}s:9:"languages";a:0:{}}', 'Extensions ignored for update'),
('order_by', 'ORDER BY date_available DESC, file ASC, id ASC', 'default photo order'),
('order_by_inside_category', 'ORDER BY date_available DESC, file ASC, id ASC', 'default photo order inside category'),
('original_resize', 'false', NULL),
('original_resize_maxwidth', '2016', NULL),
('original_resize_maxheight', '2016', NULL),
('original_resize_quality', '95', NULL),
('mobile_theme', 'smartpocket', NULL),
('mail_theme', 'clear', NULL),
('secret_key', '4941d0b641a00e57b1f4a7f424cd069c', 'a secret key specific to the gallery for internal use'),
('piwigo_db_version', '2.6', NULL),
('smartpocket', 'a:2:{s:4:"loop";b:1;s:8:"autohide";i:5000;}', 'loop#autohide'),
('derivatives', 'a:4:{s:1:"d";a:9:{s:6:"square";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:120;i:1;i:120;}s:8:"max_crop";i:1;s:8:"min_size";a:2:{i:0;i:120;i:1;i:120;}}s:7:"sharpen";i:0;}s:5:"thumb";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:144;i:1;i:144;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}s:6:"2small";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:240;i:1;i:240;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}s:6:"xsmall";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:432;i:1;i:324;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}s:5:"small";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:576;i:1;i:432;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}s:6:"medium";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:792;i:1;i:594;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}s:5:"large";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:1008;i:1;i:756;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}s:6:"xlarge";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:1224;i:1;i:918;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}s:7:"xxlarge";O:16:"DerivativeParams":3:{s:13:"last_mod_time";i:1397069605;s:6:"sizing";O:12:"SizingParams":3:{s:10:"ideal_size";a:2:{i:0;i:1656;i:1;i:1242;}s:8:"max_crop";i:0;s:8:"min_size";N;}s:7:"sharpen";i:0;}}s:1:"q";i:95;s:1:"w";O:15:"WatermarkParams":6:{s:4:"file";s:0:"";s:8:"min_size";a:2:{i:0;i:500;i:1;i:500;}s:4:"xpos";i:50;s:4:"ypos";i:50;s:7:"xrepeat";i:0;s:7:"opacity";i:100;}s:1:"c";a:0:{}}', NULL),
('data_dir_checked', '1', NULL),
('elegant', 'a:3:{s:11:"p_main_menu";s:2:"on";s:12:"p_pict_descr";s:2:"on";s:14:"p_pict_comment";s:3:"off";}', 'p_main_menu#'),
('upload_mode', 'html', NULL),
('no_photo_yet', 'false', NULL),
('community', 'a:1:{s:11:"user_albums";b:0;}', NULL),
('community_cache_key', 'pdINiOPdaB9b85Y0K09y', NULL),
('meta 2.0.5', '1', 'MAJ meta'),
('meta 2.1.0', '1', 'MAJ meta'),
('contactmeta', '', NULL),
('gmaps_api_key', '', 'Google Maps API key'),
('gpc_config', 'a:1:{s:9:"installed";s:8:"03.05.04";}', ''),
('amm_config', 'a:15:{s:20:"amm_links_show_icons";s:1:"y";s:15:"amm_links_title";a:65:{s:5:"af_ZA";s:8:"TGlua3M=";s:5:"es_AR";s:8:"TGlua3M=";s:5:"az_AZ";s:8:"TGlua3M=";s:5:"id_ID";s:8:"TGlua3M=";s:5:"pt_BR";s:8:"TGlua3M=";s:5:"br_FR";s:8:"TGlua3M=";s:5:"ca_ES";s:8:"TGlua3M=";s:5:"cs_CZ";s:8:"TGlua3M=";s:5:"da_DK";s:8:"TGlua3M=";s:5:"de_DE";s:8:"TGlua3M=";s:5:"dv_MV";s:8:"TGlua3M=";s:5:"en_UK";s:8:"TGlua3M=";s:5:"en_US";s:8:"TGlua3M=";s:5:"es_ES";s:8:"TGlua3M=";s:5:"eo_EO";s:8:"TGlua3M=";s:5:"et_EE";s:8:"TGlua3M=";s:5:"fi_FI";s:8:"TGlua3M=";s:5:"fr_FR";s:8:"TGllbnM=";s:5:"fr_CA";s:8:"TGlua3M=";s:5:"ga_IE";s:8:"TGlua3M=";s:5:"gl_ES";s:8:"TGlua3M=";s:5:"hr_HR";s:8:"TGlua3M=";s:5:"is_IS";s:8:"TGlua3M=";s:5:"it_IT";s:8:"TGlua3M=";s:5:"lv_LV";s:8:"TGlua3M=";s:5:"lb_LU";s:8:"TGlua3M=";s:5:"lt_LT";s:8:"TGlua3M=";s:5:"hu_HU";s:8:"TGlua3M=";s:5:"ms_MY";s:8:"TGlua3M=";s:5:"nl_NL";s:8:"TGlua3M=";s:5:"nn_NO";s:8:"TGlua3M=";s:5:"nb_NO";s:8:"TGlua3M=";s:5:"pl_PL";s:8:"TGlua3M=";s:5:"pt_PT";s:8:"TGlua3M=";s:5:"ro_RO";s:8:"TGlua3M=";s:5:"sl_SI";s:8:"TGlua3M=";s:5:"sk_SK";s:8:"TGlua3M=";s:5:"sh_RS";s:8:"TGlua3M=";s:5:"sv_SE";s:8:"TGlua3M=";s:5:"vi_VN";s:8:"TGlua3M=";s:5:"tr_TR";s:8:"TGlua3M=";s:5:"el_GR";s:8:"TGlua3M=";s:5:"bg_BG";s:8:"TGlua3M=";s:5:"mk_MK";s:8:"TGlua3M=";s:5:"mn_MN";s:8:"TGlua3M=";s:5:"ru_RU";s:8:"TGlua3M=";s:5:"sr_RS";s:8:"TGlua3M=";s:5:"uk_UA";s:8:"TGlua3M=";s:5:"he_IL";s:8:"TGlua3M=";s:5:"ar_SA";s:8:"TGlua3M=";s:5:"ar_MA";s:8:"TGlua3M=";s:5:"fa_IR";s:8:"TGlua3M=";s:6:"kok_IN";s:8:"TGlua3M=";s:5:"bn_IN";s:8:"TGlua3M=";s:5:"ta_IN";s:8:"TGlua3M=";s:5:"kn_IN";s:8:"TGlua3M=";s:5:"th_TH";s:8:"TGlua3M=";s:5:"ka_GE";s:8:"TGlua3M=";s:5:"km_KH";s:8:"TGlua3M=";s:5:"zh_TW";s:8:"TGlua3M=";s:5:"zh_HK";s:8:"TGlua3M=";s:5:"ja_JP";s:8:"TGlua3M=";s:5:"zh_CN";s:8:"TGlua3M=";s:5:"ko_KR";s:8:"TGlua3M=";s:5:"en_GB";s:8:"TGlua3M=";}s:25:"amm_randompicture_preload";i:25;s:26:"amm_randompicture_showname";s:1:"n";s:29:"amm_randompicture_showcomment";s:1:"n";s:32:"amm_randompicture_periodicchange";i:0;s:24:"amm_randompicture_height";i:0;s:23:"amm_randompicture_title";a:65:{s:5:"af_ZA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"es_AR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"az_AZ";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"id_ID";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"pt_BR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"br_FR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ca_ES";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"cs_CZ";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"da_DK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"de_DE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"dv_MV";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"en_UK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"en_US";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"es_ES";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"eo_EO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"et_EE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"fi_FI";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"fr_FR";s:28:"VW5lIGltYWdlIGF1IGhhc2FyZA==";s:5:"fr_CA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ga_IE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"gl_ES";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"hr_HR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"is_IS";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"it_IT";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"lv_LV";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"lb_LU";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"lt_LT";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"hu_HU";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ms_MY";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"nl_NL";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"nn_NO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"nb_NO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"pl_PL";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"pt_PT";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ro_RO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sl_SI";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sk_SK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sh_RS";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sv_SE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"vi_VN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"tr_TR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"el_GR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"bg_BG";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"mk_MK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"mn_MN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ru_RU";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sr_RS";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"uk_UA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"he_IL";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ar_SA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ar_MA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"fa_IR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:6:"kok_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"bn_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ta_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"kn_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"th_TH";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ka_GE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"km_KH";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"zh_TW";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"zh_HK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ja_JP";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"zh_CN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ko_KR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"en_GB";s:24:"QSByYW5kb20gcGljdHVyZQ==";}s:28:"amm_randompicture_selectMode";s:1:"a";s:27:"amm_randompicture_selectCat";a:0:{}s:16:"amm_blocks_items";a:13:{s:7:"qsearch";a:3:{s:5:"order";s:1:"0";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:4:"tags";a:3:{s:5:"order";s:1:"1";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:6:"search";a:3:{s:5:"order";s:1:"2";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:9:"favorites";a:3:{s:5:"order";s:1:"3";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:8:"comments";a:3:{s:5:"order";s:1:"4";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:3:"rss";a:3:{s:5:"order";s:1:"5";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:5:"about";a:3:{s:5:"order";s:1:"6";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:12:"most_visited";a:3:{s:5:"order";s:1:"7";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:10:"best_rated";a:3:{s:5:"order";s:1:"8";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:6:"random";a:3:{s:5:"order";s:1:"9";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:11:"recent_pics";a:3:{s:5:"order";s:2:"10";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:11:"recent_cats";a:3:{s:5:"order";s:2:"11";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:8:"calendar";a:3:{s:5:"order";s:2:"12";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}}s:18:"amm_albums_to_menu";a:0:{}s:19:"amm_old_blk_menubar";s:143:"a:6:{s:6:"mbMenu";i:50;s:12:"mbCategories";i:100;s:7:"mbLinks";i:150;s:6:"mbTags";i:200;s:10:"mbSpecials";i:250;s:16:"mbIdentification";i:300;}";s:10:"newInstall";s:1:"n";s:9:"installed";s:8:"03.02.04";}', ''),
('GPCCore_config', 'a:1:{s:10:"registered";a:1:{s:21:"Advanced Menu Manager";a:4:{s:4:"name";s:21:"Advanced Menu Manager";s:7:"release";s:5:"3.2.5";s:6:"needed";s:5:"3.5.2";s:4:"date";s:10:"2014-04-14";}}}', ''),
('additional_pages', 'a:7:{s:9:"languages";a:1:{s:7:"default";s:16:"Additional Pages";}s:9:"show_home";b:1;s:10:"level_perm";b:0;s:10:"group_perm";b:0;s:9:"user_perm";b:0;s:13:"language_perm";b:0;s:8:"homepage";N;}', 'Additional Pages configuration');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_favorites`
--

CREATE TABLE IF NOT EXISTS `piwigo_favorites` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `image_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`,`image_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_favorites`
--

INSERT INTO `piwigo_favorites` (`user_id`, `image_id`) VALUES
(1, 4),
(1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_gpc_request`
--

CREATE TABLE IF NOT EXISTS `piwigo_gpc_request` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `date` datetime NOT NULL,
  `num_items` int(10) unsigned NOT NULL DEFAULT '0',
  `execution_time` float unsigned NOT NULL DEFAULT '0',
  `connected_plugin` char(255) NOT NULL,
  `filter` text NOT NULL,
  `parameters` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_gpc_result_cache`
--

CREATE TABLE IF NOT EXISTS `piwigo_gpc_result_cache` (
  `id` int(10) unsigned NOT NULL,
  `image_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`,`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_gpc_temp`
--

CREATE TABLE IF NOT EXISTS `piwigo_gpc_temp` (
  `requestId` char(30) NOT NULL,
  `imageId` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`requestId`,`imageId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_groups`
--

CREATE TABLE IF NOT EXISTS `piwigo_groups` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `is_default` enum('true','false') NOT NULL DEFAULT 'false',
  PRIMARY KEY (`id`),
  UNIQUE KEY `groups_ui1` (`name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `piwigo_groups`
--

INSERT INTO `piwigo_groups` (`id`, `name`, `is_default`) VALUES
(1, 'contributor', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_group_access`
--

CREATE TABLE IF NOT EXISTS `piwigo_group_access` (
  `group_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  `cat_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`group_id`,`cat_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_history`
--

CREATE TABLE IF NOT EXISTS `piwigo_history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL DEFAULT '0000-00-00',
  `time` time NOT NULL DEFAULT '00:00:00',
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `IP` varchar(15) NOT NULL DEFAULT '',
  `section` enum('categories','tags','search','list','favorites','most_visited','best_rated','recent_pics','recent_cats','additional_page') DEFAULT NULL,
  `category_id` smallint(5) DEFAULT NULL,
  `tag_ids` varchar(50) DEFAULT NULL,
  `image_id` mediumint(8) DEFAULT NULL,
  `summarized` enum('true','false') DEFAULT 'false',
  `image_type` enum('picture','high','other') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `history_i1` (`summarized`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=59 ;

--
-- Dumping data for table `piwigo_history`
--

INSERT INTO `piwigo_history` (`id`, `date`, `time`, `user_id`, `IP`, `section`, `category_id`, `tag_ids`, `image_id`, `summarized`, `image_type`) VALUES
(1, '2014-04-09', '15:55:39', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(2, '2014-04-09', '15:55:48', 2, '127.0.0.1', 'categories', 1, NULL, NULL, 'true', NULL),
(3, '2014-04-09', '15:55:59', 2, '127.0.0.1', 'categories', 1, NULL, 2, 'true', 'picture'),
(4, '2014-04-09', '15:56:08', 2, '127.0.0.1', 'categories', 1, NULL, NULL, 'true', NULL),
(5, '2014-04-10', '08:31:19', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(6, '2014-04-10', '08:41:01', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(7, '2014-04-10', '08:47:16', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(8, '2014-04-10', '08:48:01', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(9, '2014-04-10', '08:57:40', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(10, '2014-04-10', '09:43:17', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(11, '2014-04-10', '15:59:44', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(12, '2014-04-10', '15:59:54', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(13, '2014-04-10', '16:09:06', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(14, '2014-04-10', '16:09:10', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(15, '2014-04-10', '16:09:50', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(16, '2014-04-10', '16:09:55', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(17, '2014-04-10', '16:10:02', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(18, '2014-04-10', '16:10:05', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(19, '2014-04-10', '16:10:24', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(20, '2014-04-10', '16:26:14', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(21, '2014-04-11', '09:40:20', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(22, '2014-04-11', '09:40:44', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(23, '2014-04-11', '09:40:51', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(24, '2014-04-11', '10:01:27', 3, '127.0.0.1', 'categories', 8, NULL, NULL, 'true', NULL),
(25, '2014-04-11', '10:01:32', 3, '127.0.0.1', 'categories', 8, NULL, NULL, 'true', NULL),
(26, '2014-04-11', '10:01:34', 3, '127.0.0.1', 'categories', 7, NULL, NULL, 'true', NULL),
(27, '2014-04-11', '10:01:37', 3, '127.0.0.1', 'categories', 5, NULL, NULL, 'true', NULL),
(28, '2014-04-11', '10:02:07', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(29, '2014-04-11', '10:03:38', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(30, '2014-04-11', '10:03:54', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(31, '2014-04-11', '10:03:55', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(32, '2014-04-11', '10:04:06', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(33, '2014-04-11', '10:04:54', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(34, '2014-04-11', '10:04:56', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(35, '2014-04-11', '10:04:57', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(36, '2014-04-11', '10:04:57', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(37, '2014-04-11', '10:04:57', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(38, '2014-04-11', '10:04:57', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(39, '2014-04-11', '10:04:57', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(40, '2014-04-11', '10:04:58', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(41, '2014-04-11', '10:04:58', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(42, '2014-04-11', '10:04:58', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(43, '2014-04-11', '10:04:59', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(44, '2014-04-11', '10:04:59', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(45, '2014-04-11', '10:05:48', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(46, '2014-04-11', '10:06:40', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(47, '2014-04-11', '10:07:39', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(48, '2014-04-11', '10:17:05', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(49, '2014-04-11', '14:00:48', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(50, '2014-04-11', '14:20:18', 3, '127.0.0.1', '', NULL, NULL, NULL, 'false', NULL),
(51, '2014-04-11', '15:30:19', 3, '127.0.0.1', '', NULL, NULL, NULL, 'false', NULL),
(52, '2014-04-11', '15:40:43', 3, '127.0.0.1', 'categories', 3, NULL, NULL, 'false', NULL),
(53, '2014-04-14', '20:17:11', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(54, '2014-04-14', '20:17:46', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(55, '2014-04-14', '20:17:49', 3, '127.0.0.1', '', NULL, NULL, NULL, 'false', NULL),
(56, '2014-04-14', '20:18:44', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(57, '2014-04-14', '20:18:53', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(58, '2014-04-14', '20:18:55', 3, '127.0.0.1', '', NULL, NULL, NULL, 'false', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_history_summary`
--

CREATE TABLE IF NOT EXISTS `piwigo_history_summary` (
  `year` smallint(4) NOT NULL DEFAULT '0',
  `month` tinyint(2) DEFAULT NULL,
  `day` tinyint(2) DEFAULT NULL,
  `hour` tinyint(2) DEFAULT NULL,
  `nb_pages` int(11) DEFAULT NULL,
  UNIQUE KEY `history_summary_ymdh` (`year`,`month`,`day`,`hour`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_history_summary`
--

INSERT INTO `piwigo_history_summary` (`year`, `month`, `day`, `hour`, `nb_pages`) VALUES
(2014, NULL, NULL, NULL, 49),
(2014, 4, NULL, NULL, 49),
(2014, 4, 9, NULL, 4),
(2014, 4, 9, 15, 4),
(2014, 4, 10, NULL, 16),
(2014, 4, 10, 8, 5),
(2014, 4, 10, 9, 1),
(2014, 4, 10, 15, 2),
(2014, 4, 10, 16, 8),
(2014, 4, 11, NULL, 29),
(2014, 4, 11, 9, 3),
(2014, 4, 11, 10, 25),
(2014, 4, 11, 14, 1);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_images`
--

CREATE TABLE IF NOT EXISTS `piwigo_images` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `date_available` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_creation` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `comment` text,
  `author` varchar(255) DEFAULT NULL,
  `hit` int(10) unsigned NOT NULL DEFAULT '0',
  `filesize` mediumint(9) unsigned DEFAULT NULL,
  `width` smallint(9) unsigned DEFAULT NULL,
  `height` smallint(9) unsigned DEFAULT NULL,
  `coi` char(4) DEFAULT NULL COMMENT 'center of interest',
  `representative_ext` varchar(4) DEFAULT NULL,
  `date_metadata_update` date DEFAULT NULL,
  `rating_score` float(5,2) unsigned DEFAULT NULL,
  `path` varchar(255) NOT NULL DEFAULT '',
  `storage_category_id` smallint(5) unsigned DEFAULT NULL,
  `level` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `md5sum` char(32) DEFAULT NULL,
  `added_by` smallint(5) NOT NULL DEFAULT '0',
  `rotation` tinyint(3) unsigned DEFAULT NULL,
  `latitude` double(8,6) DEFAULT NULL,
  `longitude` double(9,6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_i2` (`date_available`),
  KEY `images_i3` (`rating_score`),
  KEY `images_i4` (`hit`),
  KEY `images_i5` (`date_creation`),
  KEY `images_i1` (`storage_category_id`),
  KEY `images_i6` (`latitude`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `piwigo_images`
--

INSERT INTO `piwigo_images` (`id`, `file`, `date_available`, `date_creation`, `name`, `comment`, `author`, `hit`, `filesize`, `width`, `height`, `coi`, `representative_ext`, `date_metadata_update`, `rating_score`, `path`, `storage_category_id`, `level`, `md5sum`, `added_by`, `rotation`, `latitude`, `longitude`) VALUES
(1, 'serpend_mound_marker.jpg', '2014-04-09 15:48:22', '2007-09-08 12:28:38', 'serpend mound marker', NULL, NULL, 1, 1517, 1600, 1200, NULL, NULL, '2014-04-09', NULL, './upload/2014/04/09/20140409154822-bf460fa1.jpg', NULL, 0, 'bf460fa1248acb256b151fe18a72d8b0', 1, 0, NULL, NULL),
(2, 'serpend_mound.jpg', '2014-04-09 15:48:47', '2006-06-11 14:36:43', 'serpend mound', NULL, NULL, 1, 83, 550, 411, NULL, NULL, '2014-04-09', NULL, './upload/2014/04/09/20140409154847-14b7ecf4.jpg', NULL, 0, '14b7ecf4bbd5c3ff9154a54fd143e83b', 1, 0, NULL, NULL),
(3, 'AdamsCoMineralSprings.jpg', '2014-04-10 16:22:36', '2007-09-11 09:58:11', 'Mineral Springs', NULL, NULL, 0, 81, 640, 480, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410162236-52482e14.jpg', NULL, 0, '52482e1430ed4443522bc9380e85b97a', 1, 0, 38.886689, -83.329570),
(4, 'AllenCoFaurotOilWell.jpg', '2014-04-10 16:23:06', '2007-09-18 19:18:39', 'Faurot Oil Well', NULL, NULL, 3, 1277, 2576, 1932, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410162306-102c377b.jpg', NULL, 0, '102c377ba2ca44bd16148f8f7cf63cb4', 1, 0, 40.743041, -84.093495),
(5, 'AdamsCoBradfordTavern.jpg', '2014-04-10 16:28:48', '2007-09-08 15:06:56', 'Bradford Tavern', NULL, NULL, 0, 1207, 1600, 1200, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410162848-8bc9c10b.jpg', NULL, 0, '8bc9c10b5592e36dc2d4ae680fe67daf', 1, 0, 38.476910, -83.328370),
(6, 'MineralSpringsPostcard.jpg', '2014-04-10 16:33:09', '2014-04-14 00:00:00', 'Mineral Springs Postcard', NULL, NULL, 3, 56, 550, 350, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410163309-8af798b3.jpg', NULL, 0, '8af798b3b024a5edc21fe250f5e16490', 1, 0, 38.886689, -83.329570),
(7, 'CovenanterChurch.jpg', '2014-04-11 09:14:35', '2005-04-07 17:36:56', 'Covenanter Church', NULL, NULL, 1, 54, 550, 412, NULL, NULL, '2014-04-11', NULL, './upload/2014/04/11/20140411091435-92a14e30.jpg', NULL, 0, '92a14e304cd4e98f6bbc9110c0974a69', 1, 0, 38.879609, -83.615087),
(8, 'AdamsFirstPresbyterianChurch.jpg', '2014-04-11 09:42:36', '2007-09-08 15:12:40', 'First Presbyterian Church', NULL, NULL, 3, 1544, 1600, 1200, NULL, NULL, '2014-04-11', NULL, './upload/2014/04/11/20140411094236-715bff30.jpg', NULL, 0, '715bff30622d4a2475115d3917feaf09', 1, 0, 38.793738, -83.544050),
(9, 'IMG_20140417_090912.jpg', '2014-04-17 09:38:31', '2014-04-17 09:09:12', 'IMG 20140417 090912', NULL, NULL, 2, 959, 1944, 2592, NULL, NULL, '2014-04-17', NULL, './upload/2014/04/17/20140417093831-673dbe36.jpg', NULL, 0, '673dbe36574f62acaa52acf0c645a2da', 1, 0, 40.003600, -82.985831);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_image_category`
--

CREATE TABLE IF NOT EXISTS `piwigo_image_category` (
  `image_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `category_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  `rank` mediumint(8) unsigned DEFAULT NULL,
  PRIMARY KEY (`image_id`,`category_id`),
  KEY `image_category_i1` (`category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_image_category`
--

INSERT INTO `piwigo_image_category` (`image_id`, `category_id`, `rank`) VALUES
(4, 6, 1),
(3, 5, 1),
(5, 7, 1),
(6, 5, 2),
(7, 8, 1),
(8, 9, 1),
(9, 6, 2);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_image_tag`
--

CREATE TABLE IF NOT EXISTS `piwigo_image_tag` (
  `image_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `tag_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`image_id`,`tag_id`),
  KEY `image_tag_i1` (`tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_image_tag`
--

INSERT INTO `piwigo_image_tag` (`image_id`, `tag_id`) VALUES
(7, 2),
(8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_languages`
--

CREATE TABLE IF NOT EXISTS `piwigo_languages` (
  `id` varchar(64) NOT NULL DEFAULT '',
  `version` varchar(64) NOT NULL DEFAULT '0',
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_languages`
--

INSERT INTO `piwigo_languages` (`id`, `version`, `name`) VALUES
('af_ZA', '2.6.0', 'Afrikaans [ZA]'),
('es_AR', '2.6.0', 'Argentina [AR]'),
('az_AZ', '2.5.0', 'Azərbaycanca [AZ]'),
('id_ID', '2.6.0', 'Bahasa Indonesia [ID]'),
('pt_BR', '2.6.1', 'Brasil [BR]'),
('br_FR', '2.6.1', 'Brezhoneg [FR]'),
('ca_ES', '2.6.1', 'Català [CA]'),
('da_DK', '2.6.0', 'Dansk [DK]'),
('de_DE', '2.6.0', 'Deutsch [DE]'),
('dv_MV', '2.5.0', 'Dhivehi [MV]'),
('en_UK', '2.6.0', 'English [UK]'),
('en_US', '2.6.0', 'English [US]'),
('es_ES', '2.6.0', 'Español [ES]'),
('eo_EO', '2.6.0', 'Esperanto [EO]'),
('et_EE', '2.6.0', 'Estonian [EE]'),
('fi_FI', '2.6.0', 'Finnish [FI]'),
('fr_FR', '2.6.0', 'Français [FR]'),
('fr_CA', '2.6.0', 'Français [QC]'),
('ga_IE', '2.5.0', 'Gaeilge [IE]'),
('gl_ES', '2.6.0', 'Galego [ES]'),
('hr_HR', '2.6.0', 'Hrvatski [HR]'),
('it_IT', '2.6.0', 'Italiano [IT]'),
('lv_LV', '2.6.0', 'Latviešu [LV]'),
('lt_LT', '2.6.0', 'Lietuviu [LT]'),
('lb_LU', '2.5.0', 'Lëtzebuergesch [LU]'),
('hu_HU', '2.6.0', 'Magyar [HU]'),
('ms_MY', '2.5.0', 'Malay [MY]'),
('nl_NL', '2.6.0', 'Nederlands [NL]'),
('nb_NO', '2.6.0', 'Norwegian [NO]'),
('nn_NO', '2.6.0', 'Norwegian nynorsk [NO]'),
('pl_PL', '2.6.0', 'Polski [PL]'),
('pt_PT', '2.6.0', 'Português [PT]'),
('ro_RO', '2.6.0', 'Română [RO]'),
('sk_SK', '2.6.0', 'Slovensky [SK]'),
('sl_SI', '2.6.1', 'Slovenšcina [SI]'),
('sh_RS', '2.6.1', 'Srpski [SR]'),
('sv_SE', '2.6.0', 'Svenska [SE]'),
('vi_VN', '2.6.0', 'Tiếng Việt [VN]'),
('tr_TR', '2.6.0', 'Türkçe [TR]'),
('is_IS', '2.6.0', 'Íslenska [IS]'),
('cs_CZ', '2.6.0', 'Česky [CZ]'),
('el_GR', '2.6.0', 'Ελληνικά [GR]'),
('bg_BG', '2.6.0', 'Български [BG]'),
('mk_MK', '2.6.0', 'Македонски [MK]'),
('mn_MN', '2.6.2', 'Монгол [MN]'),
('ru_RU', '2.6.0', 'Русский [RU]'),
('sr_RS', '2.6.1', 'Српски [SR]'),
('uk_UA', '2.6.0', 'Українська [UA]'),
('he_IL', '2.6.1', 'עברית [IL]'),
('ar_SA', '2.6.0', 'العربية [AR]'),
('ar_MA', '2.5.0', 'العربية [MA]'),
('fa_IR', '2.6.0', 'پارسی [IR]'),
('kok_IN', '2.5.0', 'कोंकणी [IN]'),
('bn_IN', '2.5.0', 'বাংলা[IN]'),
('ta_IN', '2.6.1', 'தமிழ் [IN]'),
('kn_IN', '2.6.0', 'ಕನ್ನಡ [IN]'),
('th_TH', '2.6.0', 'ภาษาไทย [TH]'),
('ka_GE', '2.6.0', 'ქართული [GE]'),
('km_KH', '2.6.1', 'ខ្មែរ [KH]'),
('zh_TW', '2.6.0', '中文 (繁體) [TW]'),
('zh_HK', '2.6.0', '中文 (香港) [HK]'),
('ja_JP', '2.6.0', '日本語 [JP]'),
('zh_CN', '2.6.0', '简体中文 [CN]'),
('ko_KR', '2.6.0', '한국어 [KR]');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_meta`
--

CREATE TABLE IF NOT EXISTS `piwigo_meta` (
  `id` smallint(5) unsigned NOT NULL,
  `metaname` varchar(255) NOT NULL,
  `metaval` longtext NOT NULL,
  `metatype` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_meta`
--

INSERT INTO `piwigo_meta` (`id`, `metaname`, `metaval`, `metatype`) VALUES
(1, 'author', '', 'name'),
(2, 'keywords', '', 'name'),
(3, 'Description', '', 'name'),
(4, 'robots', 'follow', 'name');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_metaperso`
--

CREATE TABLE IF NOT EXISTS `piwigo_metaperso` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `metaname` varchar(255) NOT NULL,
  `metaval` longtext NOT NULL,
  `metatype` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_meta_ap`
--

CREATE TABLE IF NOT EXISTS `piwigo_meta_ap` (
  `id` smallint(5) unsigned NOT NULL,
  `metaKeyap` varchar(255) NOT NULL,
  `metadesap` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_meta_cat`
--

CREATE TABLE IF NOT EXISTS `piwigo_meta_cat` (
  `id` smallint(5) unsigned NOT NULL,
  `metaKeycat` varchar(255) NOT NULL,
  `metadescat` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_meta_img`
--

CREATE TABLE IF NOT EXISTS `piwigo_meta_img` (
  `id` smallint(5) unsigned NOT NULL,
  `metaKeyimg` varchar(255) NOT NULL,
  `metadesimg` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_old_permalinks`
--

CREATE TABLE IF NOT EXISTS `piwigo_old_permalinks` (
  `cat_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  `permalink` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `date_deleted` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `last_hit` datetime DEFAULT NULL,
  `hit` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`permalink`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_plugins`
--

CREATE TABLE IF NOT EXISTS `piwigo_plugins` (
  `id` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `state` enum('inactive','active') NOT NULL DEFAULT 'inactive',
  `version` varchar(64) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_plugins`
--

INSERT INTO `piwigo_plugins` (`id`, `state`, `version`) VALUES
('c13y_upgrade', 'inactive', '0'),
('LocalFilesEditor', 'active', '2.6.0'),
('community', 'active', '2.6.c'),
('meta', 'inactive', '2.6.a'),
('virtualize', 'active', '2.6.a'),
('rv_sitemap', 'inactive', '2.6.a'),
('rv_menutree', 'active', '2.6.a'),
('rv_gmaps', 'active', '2.6.a'),
('GrumPluginClasses', 'active', '3.5.6'),
('AMenuManager', 'active', '3.2.6'),
('AdditionalPages', 'active', '2.5.c');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_rate`
--

CREATE TABLE IF NOT EXISTS `piwigo_rate` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `element_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `anonymous_id` varchar(45) NOT NULL DEFAULT '',
  `rate` tinyint(2) unsigned NOT NULL DEFAULT '0',
  `date` date NOT NULL DEFAULT '0000-00-00',
  PRIMARY KEY (`element_id`,`user_id`,`anonymous_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_search`
--

CREATE TABLE IF NOT EXISTS `piwigo_search` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `last_seen` date DEFAULT NULL,
  `rules` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `piwigo_search`
--

INSERT INTO `piwigo_search` (`id`, `last_seen`, `rules`) VALUES
(1, '2014-04-09', 'a:1:{s:1:"q";s:7:"serpent";}'),
(2, '2014-04-11', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:6:"marker";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(3, '2014-04-11', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:6:"tavern";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(4, '2014-04-11', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:7:"mineral";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(5, '2014-04-11', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:6:"Marker";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(6, '2014-04-11', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:7:"mineral";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(7, '2014-04-11', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:6:"church";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(8, '2014-04-17', 'a:1:{s:1:"q";s:6:"church";}'),
(9, '2014-04-17', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:6:"church";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_sessions`
--

CREATE TABLE IF NOT EXISTS `piwigo_sessions` (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `data` mediumtext NOT NULL,
  `expiration` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_sessions`
--

INSERT INTO `piwigo_sessions` (`id`, `data`, `expiration`) VALUES
('7F007ae9s8j3jcrhknpoi5kvh3c7c6', 'pwg_uid|i:1;pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;incompatible_plugins|a:1:{s:10:"~~expire~~";i:1397828812;}pwg_plugins_show_details|b:1;need_update|b:0;extensions_need_update|a:0:{}pwg_referer_image_id|s:1:"9";pwg_plugins_new_order|s:4:"name";community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:1;s:20:"create_whole_gallery";b:1;s:10:"user_album";b:0;s:17:"create_categories";a:8:{i:0;i:2;i:1;i:3;i:2;i:4;i:3;i:5;i:4;i:6;i:5;i:7;i:6;i:8;i:7;i:9;}s:17:"upload_categories";a:8:{i:0;i:2;i:1;i:3;i:2;i:4;i:3;i:5;i:4;i:6;i:5;i:7;i:6;i:8;i:7;i:9;}s:14:"permission_ids";a:1:{i:0;s:1:"1";}s:9:"nb_photos";i:-1;s:7:"storage";i:-1;s:17:"community_enabled";b:1;}community_cache_key|s:20:"pdINiOPdaB9b85Y0K09y";community_user_id|s:1:"1";bulk_manager_filter|a:1:{s:9:"prefilter";s:6:"caddie";}', '2014-04-18 14:23:36'),
('7F008dlb03o88ftmr8dmhlet9te3r7', 'pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:0;s:20:"create_whole_gallery";b:0;s:10:"user_album";b:0;s:17:"create_categories";a:0:{}s:17:"upload_categories";a:1:{i:0;s:1:"2";}s:14:"permission_ids";a:1:{i:0;s:1:"1";}s:9:"nb_photos";s:2:"20";s:7:"storage";s:2:"50";s:17:"community_enabled";b:1;}community_cache_key|s:20:"t6bR9SEJ0d2S6JlpaGja";community_user_id|s:1:"3";pwg_uid|i:3;', '2014-04-14 20:18:55'),
('7F00ng02f6kltdbca6tg8jc3qj91p5', 'pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:0;s:20:"create_whole_gallery";b:0;s:10:"user_album";b:0;s:17:"create_categories";a:0:{}s:17:"upload_categories";a:1:{i:0;s:1:"2";}s:14:"permission_ids";a:1:{i:0;s:1:"1";}s:9:"nb_photos";s:2:"20";s:7:"storage";s:2:"50";s:17:"community_enabled";b:1;}community_cache_key|s:20:"t6bR9SEJ0d2S6JlpaGja";community_user_id|s:1:"3";pwg_uid|i:3;', '2014-04-14 20:17:49');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_sites`
--

CREATE TABLE IF NOT EXISTS `piwigo_sites` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `galleries_url` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `sites_ui1` (`galleries_url`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `piwigo_sites`
--

INSERT INTO `piwigo_sites` (`id`, `galleries_url`) VALUES
(1, './galleries/');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_tags`
--

CREATE TABLE IF NOT EXISTS `piwigo_tags` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `url_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `tags_i1` (`url_name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `piwigo_tags`
--

INSERT INTO `piwigo_tags` (`id`, `name`, `url_name`) VALUES
(2, 'religion', 'religion');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_themes`
--

CREATE TABLE IF NOT EXISTS `piwigo_themes` (
  `id` varchar(64) NOT NULL DEFAULT '',
  `version` varchar(64) NOT NULL DEFAULT '0',
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_themes`
--

INSERT INTO `piwigo_themes` (`id`, `version`, `name`) VALUES
('smartpocket', '2.6.2', 'Smart Pocket'),
('dark', '2.6.0', 'dark');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_upgrade`
--

CREATE TABLE IF NOT EXISTS `piwigo_upgrade` (
  `id` varchar(20) NOT NULL DEFAULT '',
  `applied` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_upgrade`
--

INSERT INTO `piwigo_upgrade` (`id`, `applied`, `description`) VALUES
('61', '2014-04-09 14:53:20', 'upgrade included in installation'),
('62', '2014-04-09 14:53:20', 'upgrade included in installation'),
('63', '2014-04-09 14:53:20', 'upgrade included in installation'),
('64', '2014-04-09 14:53:20', 'upgrade included in installation'),
('65', '2014-04-09 14:53:20', 'upgrade included in installation'),
('66', '2014-04-09 14:53:20', 'upgrade included in installation'),
('67', '2014-04-09 14:53:20', 'upgrade included in installation'),
('68', '2014-04-09 14:53:20', 'upgrade included in installation'),
('69', '2014-04-09 14:53:20', 'upgrade included in installation'),
('70', '2014-04-09 14:53:20', 'upgrade included in installation'),
('71', '2014-04-09 14:53:20', 'upgrade included in installation'),
('72', '2014-04-09 14:53:20', 'upgrade included in installation'),
('73', '2014-04-09 14:53:20', 'upgrade included in installation'),
('74', '2014-04-09 14:53:20', 'upgrade included in installation'),
('75', '2014-04-09 14:53:20', 'upgrade included in installation'),
('76', '2014-04-09 14:53:20', 'upgrade included in installation'),
('77', '2014-04-09 14:53:20', 'upgrade included in installation'),
('78', '2014-04-09 14:53:20', 'upgrade included in installation'),
('79', '2014-04-09 14:53:20', 'upgrade included in installation'),
('80', '2014-04-09 14:53:20', 'upgrade included in installation'),
('81', '2014-04-09 14:53:20', 'upgrade included in installation'),
('82', '2014-04-09 14:53:20', 'upgrade included in installation'),
('83', '2014-04-09 14:53:20', 'upgrade included in installation'),
('84', '2014-04-09 14:53:20', 'upgrade included in installation'),
('85', '2014-04-09 14:53:20', 'upgrade included in installation'),
('86', '2014-04-09 14:53:20', 'upgrade included in installation'),
('87', '2014-04-09 14:53:20', 'upgrade included in installation'),
('88', '2014-04-09 14:53:20', 'upgrade included in installation'),
('89', '2014-04-09 14:53:20', 'upgrade included in installation'),
('90', '2014-04-09 14:53:20', 'upgrade included in installation'),
('91', '2014-04-09 14:53:20', 'upgrade included in installation'),
('92', '2014-04-09 14:53:20', 'upgrade included in installation'),
('93', '2014-04-09 14:53:20', 'upgrade included in installation'),
('94', '2014-04-09 14:53:20', 'upgrade included in installation'),
('95', '2014-04-09 14:53:20', 'upgrade included in installation'),
('96', '2014-04-09 14:53:20', 'upgrade included in installation'),
('97', '2014-04-09 14:53:20', 'upgrade included in installation'),
('98', '2014-04-09 14:53:20', 'upgrade included in installation'),
('99', '2014-04-09 14:53:20', 'upgrade included in installation'),
('100', '2014-04-09 14:53:20', 'upgrade included in installation'),
('101', '2014-04-09 14:53:20', 'upgrade included in installation'),
('102', '2014-04-09 14:53:20', 'upgrade included in installation'),
('103', '2014-04-09 14:53:20', 'upgrade included in installation'),
('104', '2014-04-09 14:53:20', 'upgrade included in installation'),
('105', '2014-04-09 14:53:20', 'upgrade included in installation'),
('106', '2014-04-09 14:53:20', 'upgrade included in installation'),
('107', '2014-04-09 14:53:20', 'upgrade included in installation'),
('108', '2014-04-09 14:53:20', 'upgrade included in installation'),
('109', '2014-04-09 14:53:20', 'upgrade included in installation'),
('110', '2014-04-09 14:53:20', 'upgrade included in installation'),
('111', '2014-04-09 14:53:20', 'upgrade included in installation'),
('112', '2014-04-09 14:53:20', 'upgrade included in installation'),
('113', '2014-04-09 14:53:20', 'upgrade included in installation'),
('114', '2014-04-09 14:53:20', 'upgrade included in installation'),
('115', '2014-04-09 14:53:20', 'upgrade included in installation'),
('116', '2014-04-09 14:53:20', 'upgrade included in installation'),
('117', '2014-04-09 14:53:20', 'upgrade included in installation'),
('118', '2014-04-09 14:53:20', 'upgrade included in installation'),
('119', '2014-04-09 14:53:20', 'upgrade included in installation'),
('120', '2014-04-09 14:53:20', 'upgrade included in installation'),
('121', '2014-04-09 14:53:20', 'upgrade included in installation'),
('122', '2014-04-09 14:53:20', 'upgrade included in installation'),
('123', '2014-04-09 14:53:20', 'upgrade included in installation'),
('124', '2014-04-09 14:53:20', 'upgrade included in installation'),
('125', '2014-04-09 14:53:20', 'upgrade included in installation'),
('126', '2014-04-09 14:53:20', 'upgrade included in installation'),
('127', '2014-04-09 14:53:20', 'upgrade included in installation'),
('128', '2014-04-09 14:53:20', 'upgrade included in installation'),
('129', '2014-04-09 14:53:20', 'upgrade included in installation'),
('130', '2014-04-09 14:53:20', 'upgrade included in installation'),
('131', '2014-04-09 14:53:20', 'upgrade included in installation'),
('132', '2014-04-09 14:53:20', 'upgrade included in installation'),
('133', '2014-04-09 14:53:20', 'upgrade included in installation'),
('134', '2014-04-09 14:53:20', 'upgrade included in installation'),
('135', '2014-04-09 14:53:20', 'upgrade included in installation'),
('136', '2014-04-09 14:53:20', 'upgrade included in installation'),
('137', '2014-04-09 14:53:20', 'upgrade included in installation'),
('138', '2014-04-09 14:53:20', 'upgrade included in installation'),
('139', '2014-04-09 14:53:20', 'upgrade included in installation');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_users`
--

CREATE TABLE IF NOT EXISTS `piwigo_users` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `password` varchar(255) DEFAULT NULL,
  `mail_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_ui1` (`username`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `piwigo_users`
--

INSERT INTO `piwigo_users` (`id`, `username`, `password`, `mail_address`) VALUES
(1, 'Admin', 'e3afed0047b08059d0fada10f400c1e5', 'psager@ohiohistory.org'),
(2, 'guest', NULL, NULL),
(3, 'psager', '$P$GbzCLgtc/BZ0BSR/.kzcFBiv.C0hfx/', 'phil.sager@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_user_access`
--

CREATE TABLE IF NOT EXISTS `piwigo_user_access` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `cat_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`,`cat_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_user_access`
--

INSERT INTO `piwigo_user_access` (`user_id`, `cat_id`) VALUES
(1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_user_cache`
--

CREATE TABLE IF NOT EXISTS `piwigo_user_cache` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `need_update` enum('true','false') NOT NULL DEFAULT 'true',
  `cache_update_time` int(10) unsigned NOT NULL DEFAULT '0',
  `forbidden_categories` mediumtext,
  `nb_total_images` mediumint(8) unsigned DEFAULT NULL,
  `last_photo_date` datetime DEFAULT NULL,
  `nb_available_tags` int(5) DEFAULT NULL,
  `nb_available_comments` int(5) DEFAULT NULL,
  `image_access_type` enum('NOT IN','IN') NOT NULL DEFAULT 'NOT IN',
  `image_access_list` mediumtext,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_user_cache`
--

INSERT INTO `piwigo_user_cache` (`user_id`, `need_update`, `cache_update_time`, `forbidden_categories`, `nb_total_images`, `last_photo_date`, `nb_available_tags`, `nb_available_comments`, `image_access_type`, `image_access_list`) VALUES
(1, 'false', 1397844190, '0', 7, '2014-04-17 09:38:31', 1, 0, 'NOT IN', '0');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_user_cache_categories`
--

CREATE TABLE IF NOT EXISTS `piwigo_user_cache_categories` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `cat_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  `date_last` datetime DEFAULT NULL,
  `max_date_last` datetime DEFAULT NULL,
  `nb_images` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `count_images` mediumint(8) unsigned DEFAULT '0',
  `nb_categories` mediumint(8) unsigned DEFAULT '0',
  `count_categories` mediumint(8) unsigned DEFAULT '0',
  `user_representative_picture_id` mediumint(8) unsigned DEFAULT NULL,
  PRIMARY KEY (`user_id`,`cat_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_user_cache_categories`
--

INSERT INTO `piwigo_user_cache_categories` (`user_id`, `cat_id`, `date_last`, `max_date_last`, `nb_images`, `count_images`, `nb_categories`, `count_categories`, `user_representative_picture_id`) VALUES
(1, 2, NULL, NULL, 0, 0, 0, 0, NULL),
(1, 3, NULL, '2014-04-11 09:42:36', 0, 5, 4, 4, 5),
(1, 4, NULL, '2014-04-17 09:38:31', 0, 2, 1, 1, 4),
(1, 5, '2014-04-10 16:33:09', '2014-04-10 16:33:09', 2, 2, 0, 0, NULL),
(1, 6, '2014-04-17 09:38:31', '2014-04-17 09:38:31', 2, 2, 0, 0, NULL),
(1, 7, '2014-04-10 16:28:48', '2014-04-10 16:28:48', 1, 1, 0, 0, NULL),
(1, 8, '2014-04-11 09:14:35', '2014-04-11 09:14:35', 1, 1, 0, 0, NULL),
(1, 9, '2014-04-11 09:42:36', '2014-04-11 09:42:36', 1, 1, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_user_feed`
--

CREATE TABLE IF NOT EXISTS `piwigo_user_feed` (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `last_check` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_user_feed`
--

INSERT INTO `piwigo_user_feed` (`id`, `user_id`, `last_check`) VALUES
('D0jfxjF5DIj4W834KOuG5W5o59W9XIlTBI29FIsm21Fha53IFq', 1, NULL),
('ALMJBki5Wjo971xG2dO0osv68bW816c64Y5N12YmLkA6fZ43qH', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_user_group`
--

CREATE TABLE IF NOT EXISTS `piwigo_user_group` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `group_id` smallint(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`group_id`,`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_user_infos`
--

CREATE TABLE IF NOT EXISTS `piwigo_user_infos` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `nb_image_page` smallint(3) unsigned NOT NULL DEFAULT '15',
  `status` enum('webmaster','admin','normal','generic','guest') NOT NULL DEFAULT 'guest',
  `language` varchar(50) NOT NULL DEFAULT 'en_UK',
  `expand` enum('true','false') NOT NULL DEFAULT 'false',
  `show_nb_comments` enum('true','false') NOT NULL DEFAULT 'false',
  `show_nb_hits` enum('true','false') NOT NULL DEFAULT 'false',
  `recent_period` tinyint(3) unsigned NOT NULL DEFAULT '7',
  `theme` varchar(255) NOT NULL DEFAULT 'elegant',
  `registration_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `enabled_high` enum('true','false') NOT NULL DEFAULT 'true',
  `level` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `activation_key` char(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_user_infos`
--

INSERT INTO `piwigo_user_infos` (`user_id`, `nb_image_page`, `status`, `language`, `expand`, `show_nb_comments`, `show_nb_hits`, `recent_period`, `theme`, `registration_date`, `enabled_high`, `level`, `activation_key`) VALUES
(1, 15, 'webmaster', 'en_US', 'false', 'false', 'false', 7, 'dark', '2014-04-09 14:53:20', 'true', 8, NULL),
(2, 15, 'guest', 'en_US', 'false', 'false', 'false', 7, 'dark', '2014-04-09 14:53:20', 'true', 0, NULL),
(3, 15, 'normal', 'en_US', 'false', 'false', 'false', 7, 'dark', '2014-04-10 08:41:00', 'true', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_user_mail_notification`
--

CREATE TABLE IF NOT EXISTS `piwigo_user_mail_notification` (
  `user_id` smallint(5) NOT NULL DEFAULT '0',
  `check_key` varchar(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `enabled` enum('true','false') NOT NULL DEFAULT 'false',
  `last_send` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_mail_notification_ui1` (`check_key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
