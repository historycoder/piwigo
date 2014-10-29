-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 22, 2014 at 10:07 AM
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
CREATE database IF NOT EXISTS piwigo;
USE piwigo;
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
-- Table structure for table `piwigo_amd_groups`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_groups` (
  `groupId` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`groupId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `piwigo_amd_groups`
--

INSERT INTO `piwigo_amd_groups` (`groupId`, `order`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amd_groups_names`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_groups_names` (
  `groupId` int(11) NOT NULL,
  `lang` char(5) NOT NULL,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`groupId`,`lang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_amd_groups_names`
--

INSERT INTO `piwigo_amd_groups_names` (`groupId`, `lang`, `name`) VALUES
(1, 'af_ZA', 'Shooting conditions'),
(1, 'ar_MA', 'Shooting conditions'),
(1, 'ar_SA', 'Shooting conditions'),
(1, 'az_AZ', 'Shooting conditions'),
(1, 'bg_BG', 'Shooting conditions'),
(1, 'bn_IN', 'Shooting conditions'),
(1, 'br_FR', 'Shooting conditions'),
(1, 'ca_ES', 'Shooting conditions'),
(1, 'cs_CZ', 'Shooting conditions'),
(1, 'da_DK', 'Shooting conditions'),
(1, 'de_DE', 'Shooting conditions'),
(1, 'dv_MV', 'Shooting conditions'),
(1, 'el_GR', 'Shooting conditions'),
(1, 'en_UK', 'Shooting conditions'),
(1, 'en_US', 'Shooting conditions'),
(1, 'eo_EO', 'Shooting conditions'),
(1, 'es_AR', 'Shooting conditions'),
(1, 'es_ES', 'Condiciones de visualización'),
(1, 'et_EE', 'Shooting conditions'),
(1, 'fa_IR', 'Shooting conditions'),
(1, 'fi_FI', 'Shooting conditions'),
(1, 'fr_CA', 'Shooting conditions'),
(1, 'fr_FR', 'Conditions de la prise de vue'),
(1, 'ga_IE', 'Shooting conditions'),
(1, 'gl_ES', 'Shooting conditions'),
(1, 'he_IL', 'Shooting conditions'),
(1, 'hr_HR', 'Shooting conditions'),
(1, 'hu_HU', 'Shooting conditions'),
(1, 'id_ID', 'Shooting conditions'),
(1, 'is_IS', 'Shooting conditions'),
(1, 'it_IT', 'Condizioni della ripresa'),
(1, 'ja_JP', 'Shooting conditions'),
(1, 'ka_GE', 'Shooting conditions'),
(1, 'km_KH', 'Shooting conditions'),
(1, 'kn_IN', 'Shooting conditions'),
(1, 'kok_I', 'Shooting conditions'),
(1, 'ko_KR', 'Shooting conditions'),
(1, 'lb_LU', 'Shooting conditions'),
(1, 'lt_LT', 'Shooting conditions'),
(1, 'lv_LV', 'Fotografēšanas apstākļi'),
(1, 'mk_MK', 'Shooting conditions'),
(1, 'mn_MN', 'Shooting conditions'),
(1, 'ms_MY', 'Shooting conditions'),
(1, 'nb_NO', 'Shooting conditions'),
(1, 'nl_NL', 'Shooting conditions'),
(1, 'nn_NO', 'Shooting conditions'),
(1, 'pl_PL', 'Shooting conditions'),
(1, 'pt_BR', 'Shooting conditions'),
(1, 'pt_PT', 'Shooting conditions'),
(1, 'ro_RO', 'Shooting conditions'),
(1, 'ru_RU', 'Условия съемки'),
(1, 'sh_RS', 'Shooting conditions'),
(1, 'sk_SK', 'Shooting conditions'),
(1, 'sl_SI', 'Shooting conditions'),
(1, 'sr_RS', 'Shooting conditions'),
(1, 'sv_SE', 'Shooting conditions'),
(1, 'ta_IN', 'Shooting conditions'),
(1, 'th_TH', 'Shooting conditions'),
(1, 'tr_TR', 'Shooting conditions'),
(1, 'uk_UA', 'Shooting conditions'),
(1, 'vi_VN', 'Shooting conditions'),
(1, 'zh_CN', 'Shooting conditions'),
(1, 'zh_HK', 'Shooting conditions'),
(1, 'zh_TW', 'Shooting conditions');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amd_images`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_images` (
  `imageId` mediumint(8) unsigned NOT NULL,
  `analyzed` char(1) NOT NULL DEFAULT 'n',
  `nbTags` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`imageId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_amd_images`
--

INSERT INTO `piwigo_amd_images` (`imageId`, `analyzed`, `nbTags`) VALUES
(1, 'n', 0),
(2, 'n', 0),
(3, 'n', 0),
(4, 'n', 0),
(5, 'n', 0),
(6, 'n', 0),
(7, 'n', 0),
(8, 'n', 0),
(9, 'n', 0);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amd_images_tags`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_images_tags` (
  `imageId` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `numId` int(10) unsigned NOT NULL DEFAULT '0',
  `value` text,
  `numValue` decimal(10,8) DEFAULT NULL,
  PRIMARY KEY (`imageId`,`numId`) USING BTREE,
  KEY `byNumId` (`numId`,`value`(35)),
  KEY `byNumId2` (`numId`,`numValue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amd_selected_tags`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_selected_tags` (
  `tagId` varchar(80) NOT NULL,
  `order` int(10) unsigned NOT NULL DEFAULT '0',
  `groupId` int(11) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`tagId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `piwigo_amd_selected_tags`
--

INSERT INTO `piwigo_amd_selected_tags` (`tagId`, `order`, `groupId`) VALUES
('magic.Camera.Make', 0, 1),
('magic.Camera.Model', 1, 1),
('magic.ShotInfo.Aperture', 3, 1),
('magic.ShotInfo.Exposure', 4, 1),
('magic.ShotInfo.Flash.Fired', 8, 1),
('magic.ShotInfo.FocalLength', 6, 1),
('magic.ShotInfo.FocalLengthIn35mm', 7, 1),
('magic.ShotInfo.ISO', 5, 1),
('magic.ShotInfo.Lens', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amd_used_tags`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_used_tags` (
  `numId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tagId` varchar(80) NOT NULL DEFAULT '',
  `translatable` char(1) NOT NULL DEFAULT 'n',
  `name` varchar(200) NOT NULL DEFAULT '',
  `numOfImg` int(10) unsigned NOT NULL DEFAULT '0',
  `translatedName` varchar(200) NOT NULL DEFAULT '',
  `newFromLastUpdate` char(1) NOT NULL DEFAULT 'n',
  PRIMARY KEY (`numId`),
  KEY `by_tag` (`tagId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=561 ;

--
-- Dumping data for table `piwigo_amd_used_tags`
--

INSERT INTO `piwigo_amd_used_tags` (`numId`, `tagId`, `translatable`, `name`, `numOfImg`, `translatedName`, `newFromLastUpdate`) VALUES
(1, 'com.comment', 'n', 'comment', 0, 'Comment', 'n'),
(2, 'exif.exif.ApertureValue', 'n', 'ApertureValue', 0, 'Aperture', 'n'),
(3, 'exif.exif.Balance', 'y', 'Balance', 0, 'Balance', 'n'),
(4, 'exif.exif.BrightnessValue', 'n', 'BrightnessValue', 0, 'Brightness value', 'n'),
(5, 'exif.exif.ColorSpace', 'y', 'ColorSpace', 0, 'Color space', 'n'),
(6, 'exif.exif.ComponentsConfiguration', 'n', 'ComponentsConfiguration', 0, 'Components configuration', 'n'),
(7, 'exif.exif.CompressedBitsPerPixel', 'n', 'CompressedBitsPerPixel', 0, 'Compressed bits per pixel', 'n'),
(8, 'exif.exif.Contrast', 'y', 'Contrast', 0, 'Contrast', 'n'),
(9, 'exif.exif.CustomRendered', 'y', 'CustomRendered', 0, 'Custom rendered', 'n'),
(10, 'exif.exif.DateTimeDigitized', 'n', 'DateTimeDigitized', 0, 'Date/Time digitized', 'n'),
(11, 'exif.exif.DateTimeOriginal', 'n', 'DateTimeOriginal', 0, 'Date/Time original', 'n'),
(12, 'exif.exif.DigitalZoomRatio', 'n', 'DigitalZoomRatio', 0, 'Digital zoom ratio', 'n'),
(13, 'exif.exif.ExifVersion', 'n', 'ExifVersion', 0, 'Exif version', 'n'),
(14, 'exif.exif.ExposureBiasValue', 'n', 'ExposureBiasValue', 0, 'Exposure bias value', 'n'),
(15, 'exif.exif.ExposureIndex', 'n', 'ExposureIndex', 0, 'Exposure index', 'n'),
(16, 'exif.exif.ExposureMode', 'y', 'ExposureMode', 0, 'Exposure mode', 'n'),
(17, 'exif.exif.ExposureProgram', 'y', 'ExposureProgram', 0, 'Exposure program', 'n'),
(18, 'exif.exif.ExposureTime', 'n', 'ExposureTime', 0, 'Exposure time', 'n'),
(19, 'exif.exif.FNumber', 'n', 'FNumber', 0, 'Aperture', 'n'),
(20, 'exif.exif.FileSource', 'y', 'FileSource', 0, 'File source', 'n'),
(21, 'exif.exif.Flash', 'y', 'Flash', 0, 'Flash', 'n'),
(22, 'exif.exif.FlashpixVersion', 'n', 'FlashpixVersion', 0, 'Flashpix version', 'n'),
(23, 'exif.exif.FocalLength', 'n', 'FocalLength', 0, 'Focal length', 'n'),
(24, 'exif.exif.FocalLengthIn35mmFilm', 'n', 'FocalLengthIn35mmFilm', 0, 'Focal length in 35mm film', 'n'),
(25, 'exif.exif.FocalPlaneResolutionUnit', 'y', 'FocalPlaneResolutionUnit', 0, 'Focal plane resolution unit', 'n'),
(26, 'exif.exif.FocalPlaneXResolution', 'n', 'FocalPlaneXResolution', 0, 'Focal plane X resolution', 'n'),
(27, 'exif.exif.FocalPlaneYResolution', 'n', 'FocalPlaneYResolution', 0, 'Focal plane Y resolution', 'n'),
(28, 'exif.exif.GainControl', 'y', 'GainControl', 0, 'Gain control', 'n'),
(29, 'exif.exif.ISOSpeedRatings', 'n', 'ISOSpeedRatings', 0, 'ISO speed ratings', 'n'),
(30, 'exif.exif.LightSource', 'y', 'LightSource', 0, 'Light source', 'n'),
(31, 'exif.exif.MaxApertureValue', 'n', 'MaxApertureValue', 0, 'Maximum aperture value', 'n'),
(32, 'exif.exif.MeteringMode', 'y', 'MeteringMode', 0, 'Metering mode', 'n'),
(33, 'exif.exif.PixelXDimension', 'n', 'PixelXDimension', 0, 'Pixel X dimension', 'n'),
(34, 'exif.exif.PixelYDimension', 'n', 'PixelYDimension', 0, 'Pixel Y dimension', 'n'),
(35, 'exif.exif.Saturation', 'y', 'Saturation', 0, 'Saturation', 'n'),
(36, 'exif.exif.SceneCaptureType', 'y', 'SceneCaptureType', 0, 'Scene capture type', 'n'),
(37, 'exif.exif.SceneType', 'y', 'SceneType', 0, 'Scene type', 'n'),
(38, 'exif.exif.SecurityClassification', 'y', 'SecurityClassification', 0, 'Security classification', 'n'),
(39, 'exif.exif.SensingMethod', 'y', 'SensingMethod', 0, 'Sensing method', 'n'),
(40, 'exif.exif.Sharpness', 'y', 'Sharpness', 0, 'Sharpness', 'n'),
(41, 'exif.exif.ShutterSpeedValue', 'n', 'ShutterSpeedValue', 0, 'Shutter speed value', 'n'),
(42, 'exif.exif.SpectralSensitivity', 'n', 'SpectralSensitivity', 0, 'Spectral sensitivity', 'n'),
(43, 'exif.exif.SubjectDistance', 'n', 'SubjectDistance', 0, 'Subject distance', 'n'),
(44, 'exif.exif.SubjectDistanceRange', 'y', 'SubjectDistanceRange', 0, 'Subject distance range', 'n'),
(45, 'exif.exif.SubsecTime', 'n', 'SubsecTime', 0, 'Sub-second time', 'n'),
(46, 'exif.exif.SubsecTimeDigitized', 'n', 'SubsecTimeDigitized', 0, 'Sub-second time digitized', 'n'),
(47, 'exif.exif.SubsecTimeOriginal', 'n', 'SubsecTimeOriginal', 0, 'Sub-second time original', 'n'),
(48, 'exif.exif.UserComment', 'n', 'UserComment', 0, 'User comment', 'n'),
(49, 'exif.gps.GPSAltitude', 'n', 'GPSAltitude', 0, 'Altitude', 'n'),
(50, 'exif.gps.GPSAltitudeRef', 'y', 'GPSAltitudeRef', 0, 'Altitude reference', 'n'),
(51, 'exif.gps.GPSAreaInformation', 'n', 'GPSAreaInformation', 0, 'Area information', 'n'),
(52, 'exif.gps.GPSDateStamp', 'n', 'GPSDateStamp', 0, 'GPS datestamp', 'n'),
(53, 'exif.gps.GPSDestBearing', 'n', 'GPSDestBearing', 0, 'Destination bearing', 'n'),
(54, 'exif.gps.GPSDestBearingRef', 'y', 'GPSDestBearingRef', 0, 'Destination bearing reference', 'n'),
(55, 'exif.gps.GPSDestDistance', 'n', 'GPSDestDistance', 0, 'Destination distance', 'n'),
(56, 'exif.gps.GPSDestDistanceRef', 'y', 'GPSDestDistanceRef', 0, 'Destination distance reference', 'n'),
(57, 'exif.gps.GPSDestLatitude', 'n', 'GPSDestLatitude', 0, 'Destination latitude', 'n'),
(58, 'exif.gps.GPSDestLatitudeRef', 'y', 'GPSDestLatitudeRef', 0, 'Destination latitude reference', 'n'),
(59, 'exif.gps.GPSDestLongitude', 'n', 'GPSDestLongitude', 0, 'Destination longitude', 'n'),
(60, 'exif.gps.GPSDestLongitudeRef', 'y', 'GPSDestLongitudeRef', 0, 'Destination longitude reference', 'n'),
(61, 'exif.gps.GPSDifferential', 'y', 'GPSDifferential', 0, 'Differential', 'n'),
(62, 'exif.gps.GPSImgDirection', 'n', 'GPSImgDirection', 0, 'Direction of image', 'n'),
(63, 'exif.gps.GPSImgDirectionRef', 'y', 'GPSImgDirectionRef', 0, 'Reference for movement direction', 'n'),
(64, 'exif.gps.GPSLatitude', 'n', 'GPSLatitude', 0, 'Latitude', 'n'),
(65, 'exif.gps.GPSLatitudeRef', 'y', 'GPSLatitudeRef', 0, 'Latitude reference', 'n'),
(66, 'exif.gps.GPSLongitude', 'n', 'GPSLongitude', 0, 'Longitude', 'n'),
(67, 'exif.gps.GPSLongitudeRef', 'y', 'GPSLongitudeRef', 0, 'Longitude reference', 'n'),
(68, 'exif.gps.GPSMapDatum', 'n', 'GPSMapDatum', 0, 'Geodetic survey data', 'n'),
(69, 'exif.gps.GPSMeasureMode', 'y', 'GPSMeasureMode', 0, 'Measure mode', 'n'),
(70, 'exif.gps.GPSProcessingMethod', 'n', 'GPSProcessingMethod', 0, 'Processing method', 'n'),
(71, 'exif.gps.GPSSatellites', 'n', 'GPSSatellites', 0, 'Satellites', 'n'),
(72, 'exif.gps.GPSSpeed', 'n', 'GPSSpeed', 0, 'Speed', 'n'),
(73, 'exif.gps.GPSSpeedRef', 'y', 'GPSSpeedRef', 0, 'Speed reference', 'n'),
(74, 'exif.gps.GPSStatus', 'y', 'GPSStatus', 0, 'Status', 'n'),
(75, 'exif.gps.GPSTrack', 'n', 'GPSTrack', 0, 'Track', 'n'),
(76, 'exif.gps.GPSTrackRef', 'y', 'GPSTrackRef', 0, 'Track reference', 'n'),
(77, 'exif.gps.GPSVersionID', 'n', 'GPSVersionID', 0, 'Version ID', 'n'),
(78, 'exif.maker.Canon.CanonCameraInfo.CameraOrientation', 'y', 'CanonCameraInfo.CameraOrientation', 0, 'Camera orientation', 'n'),
(79, 'exif.maker.Canon.CanonCameraInfo.CameraTemperature', 'n', 'CanonCameraInfo.CameraTemperature', 0, 'Camera temperature', 'n'),
(80, 'exif.maker.Canon.CanonCameraInfo.FirmwareVersion', 'n', 'CanonCameraInfo.FirmwareVersion', 0, 'Firmware version', 'n'),
(81, 'exif.maker.Canon.CanonCameraInfo.FlashMeteringMode', 'y', 'CanonCameraInfo.FlashMeteringMode', 0, 'Flash metering mode', 'n'),
(82, 'exif.maker.Canon.CanonCameraInfo.FocalLength', 'n', 'CanonCameraInfo.FocalLength', 0, 'Focal length', 'n'),
(83, 'exif.maker.Canon.CanonCameraInfo.HighlightTonePriority', 'y', 'CanonCameraInfo.HighlightTonePriority', 0, 'Highlight tone priority', 'n'),
(84, 'exif.maker.Canon.CanonCameraInfo.LensModel', 'n', 'CanonCameraInfo.LensModel', 0, 'Lens model', 'n'),
(85, 'exif.maker.Canon.CanonCameraInfo.LensType', 'n', 'CanonCameraInfo.LensType', 0, 'Lens type', 'n'),
(86, 'exif.maker.Canon.CanonCameraInfo.LongFocal', 'n', 'CanonCameraInfo.LongFocal', 0, 'Long focal', 'n'),
(87, 'exif.maker.Canon.CanonCameraInfo.ShortFocal', 'n', 'CanonCameraInfo.ShortFocal', 0, 'Short focal', 'n'),
(88, 'exif.maker.Canon.CanonCameraInfo.WhiteBalance', 'n', 'CanonCameraInfo.WhiteBalance', 0, 'White balance', 'n'),
(89, 'exif.maker.Canon.CanonCameraSettings.AESetting', 'y', 'CanonCameraSettings.AESetting', 0, 'Camera setting [AE]', 'n'),
(90, 'exif.maker.Canon.CanonCameraSettings.AFPoint', 'y', 'CanonCameraSettings.AFPoint', 0, 'Camera setting [AF point]', 'n'),
(91, 'exif.maker.Canon.CanonCameraSettings.CanonExposureMode', 'y', 'CanonCameraSettings.CanonExposureMode', 0, 'Camera setting [Exposure mode]', 'n'),
(92, 'exif.maker.Canon.CanonCameraSettings.CanonFlashMode', 'y', 'CanonCameraSettings.CanonFlashMode', 0, 'Camera setting [Flash mode]', 'n'),
(93, 'exif.maker.Canon.CanonCameraSettings.CanonImageSize', 'y', 'CanonCameraSettings.CanonImageSize', 0, 'Camera setting [Image size]', 'n'),
(94, 'exif.maker.Canon.CanonCameraSettings.ColorTone', 'y', 'CanonCameraSettings.ColorTone', 0, 'Camera setting [Color tone]', 'n'),
(95, 'exif.maker.Canon.CanonCameraSettings.ContinuousDrive', 'y', 'CanonCameraSettings.ContinuousDrive', 0, 'Camera setting [Continous drive]', 'n'),
(96, 'exif.maker.Canon.CanonCameraSettings.DigitalZoom', 'y', 'CanonCameraSettings.DigitalZoom', 0, 'Camera setting [Digital zoom]', 'n'),
(97, 'exif.maker.Canon.CanonCameraSettings.EasyMode', 'y', 'CanonCameraSettings.EasyMode', 0, 'Camera setting [Easy mode]', 'n'),
(98, 'exif.maker.Canon.CanonCameraSettings.FlashActivity', 'y', 'CanonCameraSettings.FlashActivity', 0, 'Camera setting [Flash activity]', 'n'),
(99, 'exif.maker.Canon.CanonCameraSettings.FlashBits', 'y', 'CanonCameraSettings.FlashBits', 0, 'Camera setting [Flash bits]', 'n'),
(100, 'exif.maker.Canon.CanonCameraSettings.FocalUnits', 'n', 'CanonCameraSettings.FocalUnits', 0, 'Camera setting [Focal units]', 'n'),
(101, 'exif.maker.Canon.CanonCameraSettings.FocusContinuous', 'y', 'CanonCameraSettings.FocusContinuous', 0, 'Camera setting [Focus continuous]', 'n'),
(102, 'exif.maker.Canon.CanonCameraSettings.FocusMode', 'y', 'CanonCameraSettings.FocusMode', 0, 'Camera setting [Focus mode]', 'n'),
(103, 'exif.maker.Canon.CanonCameraSettings.FocusRange', 'y', 'CanonCameraSettings.FocusRange', 0, 'Camera setting [Focus range]', 'n'),
(104, 'exif.maker.Canon.CanonCameraSettings.ImageStabilization', 'y', 'CanonCameraSettings.ImageStabilization', 0, 'Camera setting [Image stabilization]', 'n'),
(105, 'exif.maker.Canon.CanonCameraSettings.LensType', 'y', 'CanonCameraSettings.LensType', 0, 'Camera setting [Lens type]', 'n'),
(106, 'exif.maker.Canon.CanonCameraSettings.LongFocal', 'n', 'CanonCameraSettings.LongFocal', 0, 'Camera setting [Long focal]', 'n'),
(107, 'exif.maker.Canon.CanonCameraSettings.MacroMode', 'y', 'CanonCameraSettings.MacroMode', 0, 'Camera setting [Macro mode]', 'n'),
(108, 'exif.maker.Canon.CanonCameraSettings.ManualFlashOutput', 'y', 'CanonCameraSettings.ManualFlashOutput', 0, 'Camera setting [Manual flash output]', 'n'),
(109, 'exif.maker.Canon.CanonCameraSettings.MaxAperture', 'n', 'CanonCameraSettings.MaxAperture', 0, 'Camera setting [Maximum aperture]', 'n'),
(110, 'exif.maker.Canon.CanonCameraSettings.MeteringMode', 'y', 'CanonCameraSettings.MeteringMode', 0, 'Camera setting [Metering mode]', 'n'),
(111, 'exif.maker.Canon.CanonCameraSettings.MinAperture', 'n', 'CanonCameraSettings.MinAperture', 0, 'Camera setting [Minimum aperture]', 'n'),
(112, 'exif.maker.Canon.CanonCameraSettings.PhotoEffect', 'y', 'CanonCameraSettings.PhotoEffect', 0, 'Camera setting [Photo effect]', 'n'),
(113, 'exif.maker.Canon.CanonCameraSettings.Quality', 'y', 'CanonCameraSettings.Quality', 0, 'Camera setting [Quality]', 'n'),
(114, 'exif.maker.Canon.CanonCameraSettings.RecordMode', 'y', 'CanonCameraSettings.RecordMode', 0, 'Camera setting [Record mode]', 'n'),
(115, 'exif.maker.Canon.CanonCameraSettings.SRAWQuality', 'y', 'CanonCameraSettings.SRAWQuality', 0, 'Camera setting [SRAW quality]', 'n'),
(116, 'exif.maker.Canon.CanonCameraSettings.SelfTimer', 'y', 'CanonCameraSettings.SelfTimer', 0, 'Camera setting [Self timer]', 'n'),
(117, 'exif.maker.Canon.CanonCameraSettings.ShortFocal', 'n', 'CanonCameraSettings.ShortFocal', 0, 'Camera setting [Short focal]', 'n'),
(118, 'exif.maker.Canon.CanonCameraSettings.SpotMeteringMode', 'y', 'CanonCameraSettings.SpotMeteringMode', 0, 'Camera setting [Spot metering mode]', 'n'),
(119, 'exif.maker.Canon.CanonFirmwareVersion', 'n', 'CanonFirmwareVersion', 0, 'Firmware version', 'n'),
(120, 'exif.maker.Canon.CanonImageType', 'n', 'CanonImageType', 0, 'Image type', 'n'),
(121, 'exif.maker.Canon.CanonModelID', 'n', 'CanonModelID', 0, 'Camera model ID', 'n'),
(122, 'exif.maker.Canon.CanonShotInfo.AEBBracketValue', 'n', 'CanonShotInfo.AEBBracketValue', 0, 'AE bracket value', 'n'),
(123, 'exif.maker.Canon.CanonShotInfo.AutoExposureBracketing', 'y', 'CanonShotInfo.AutoExposureBracketing', 0, 'Automatic exposure bracketing', 'n'),
(124, 'exif.maker.Canon.CanonShotInfo.AutoISO', 'n', 'CanonShotInfo.AutoISO', 0, 'Automatic ISO', 'n'),
(125, 'exif.maker.Canon.CanonShotInfo.AutoRotate', 'y', 'CanonShotInfo.AutoRotate', 0, 'Automatic rotate', 'n'),
(126, 'exif.maker.Canon.CanonShotInfo.BaseISO', 'n', 'CanonShotInfo.BaseISO', 0, 'Base ISO', 'n'),
(127, 'exif.maker.Canon.CanonShotInfo.CameraType', 'y', 'CanonShotInfo.CameraType', 0, 'Camera type', 'n'),
(128, 'exif.maker.Canon.CanonShotInfo.ControlMode', 'y', 'CanonShotInfo.ControlMode', 0, 'Control mode', 'n'),
(129, 'exif.maker.Canon.CanonShotInfo.ExposureCompensation', 'n', 'CanonShotInfo.ExposureCompensation', 0, 'Exposure compensation', 'n'),
(130, 'exif.maker.Canon.CanonShotInfo.FlashExposureComp', 'n', 'CanonShotInfo.FlashExposureComp', 0, 'Flash exposure compensation', 'n'),
(131, 'exif.maker.Canon.CanonShotInfo.FlashGuideNumber', 'n', 'CanonShotInfo.FlashGuideNumber', 0, 'Flash guide number', 'n'),
(132, 'exif.maker.Canon.CanonShotInfo.NDFilter', 'y', 'CanonShotInfo.NDFilter', 0, 'ND filter', 'n'),
(133, 'exif.maker.Canon.CanonShotInfo.SequenceNumber', 'n', 'CanonShotInfo.SequenceNumber', 0, 'Sequence number', 'n'),
(134, 'exif.maker.Canon.CanonShotInfo.SlowShutter', 'y', 'CanonShotInfo.SlowShutter', 0, 'Slow shutter', 'n'),
(135, 'exif.maker.Canon.CanonShotInfo.TargetAperture', 'n', 'CanonShotInfo.TargetAperture', 0, 'Target aperture', 'n'),
(136, 'exif.maker.Canon.CanonShotInfo.TargetExposureTime', 'n', 'CanonShotInfo.TargetExposureTime', 0, 'Target exposure time', 'n'),
(137, 'exif.maker.Canon.CanonShotInfo.WhiteBalance', 'y', 'CanonShotInfo.WhiteBalance', 0, 'White balance', 'n'),
(138, 'exif.maker.Canon.InternalSerialNumber', 'n', 'InternalSerialNumber', 0, 'Serial number', 'n'),
(139, 'exif.maker.Canon.LensModel', 'n', 'LensModel', 0, 'Lens model', 'n'),
(140, 'exif.maker.Canon.OwnerName', 'n', 'OwnerName', 0, 'Owner name', 'n'),
(141, 'exif.maker.Canon.SerialNumber', 'n', 'SerialNumber', 0, 'Serial number', 'n'),
(142, 'exif.maker.Canon.SerialNumberFormat', 'n', 'SerialNumberFormat', 0, 'Serial number format', 'n'),
(143, 'exif.maker.Nikon.AFInfo', 'y', 'AFInfo', 0, 'AF info', 'n'),
(144, 'exif.maker.Nikon.ActiveD-Lighting', 'y', 'ActiveD-Lighting', 0, 'ActiveD-Lighting', 'n'),
(145, 'exif.maker.Nikon.AuxiliaryLens', 'n', 'AuxiliaryLens', 0, 'Auxiliary lens', 'n'),
(146, 'exif.maker.Nikon.ColorHue', 'n', 'ColorHue', 0, 'Color hue', 'n'),
(147, 'exif.maker.Nikon.ColorMode', 'n', 'ColorMode', 0, 'Color mode', 'n'),
(148, 'exif.maker.Nikon.ColorSpace', 'n', 'ColorSpace', 0, 'Color space', 'n'),
(149, 'exif.maker.Nikon.DigitalZoom', 'n', 'DigitalZoom', 0, 'Digital zoom', 'n'),
(150, 'exif.maker.Nikon.FlashMode', 'y', 'FlashMode', 0, 'Flash mode', 'n'),
(151, 'exif.maker.Nikon.FlashSetting', 'n', 'FlashSetting', 0, 'Flash setting', 'n'),
(152, 'exif.maker.Nikon.FlashType', 'n', 'FlashType', 0, 'Flash type', 'n'),
(153, 'exif.maker.Nikon.FocusMode', 'n', 'FocusMode', 0, 'Focus mode', 'n'),
(154, 'exif.maker.Nikon.HighISONoiseReduction', 'y', 'HighISONoiseReduction', 0, 'High ISO noise reduction', 'n'),
(155, 'exif.maker.Nikon.HueAdjustment', 'n', 'HueAdjustment', 0, 'Hue adjustment', 'n'),
(156, 'exif.maker.Nikon.ISOSelection', 'n', 'ISOSelection', 0, 'ISO selection', 'n'),
(157, 'exif.maker.Nikon.ImageAdjustment', 'n', 'ImageAdjustment', 0, 'Image adjustment', 'n'),
(158, 'exif.maker.Nikon.ImageAuthentication', 'y', 'ImageAuthentication', 0, 'Image authentication', 'n'),
(159, 'exif.maker.Nikon.ImageDataSize', 'n', 'ImageDataSize', 0, 'Image dataSize', 'n'),
(160, 'exif.maker.Nikon.ImageOptimization', 'n', 'ImageOptimization', 0, 'Image optimization', 'n'),
(161, 'exif.maker.Nikon.Lens', 'n', 'Lens', 0, 'Lens', 'n'),
(162, 'exif.maker.Nikon.LensData', 'n', 'LensData', 0, 'Lens data', 'n'),
(163, 'exif.maker.Nikon.LensType', 'n', 'LensType', 0, 'Lens type', 'n'),
(164, 'exif.maker.Nikon.LightSource', 'n', 'LightSource', 0, 'Light source', 'n'),
(165, 'exif.maker.Nikon.NEFCompression', 'n', 'NEFCompression', 0, 'NEF compression', 'n'),
(166, 'exif.maker.Nikon.NikonCaptureVersion', 'n', 'NikonCaptureVersion', 0, 'Capture version', 'n'),
(167, 'exif.maker.Nikon.NoiseReduction', 'n', 'NoiseReduction', 0, 'NoiseReduction', 'n'),
(168, 'exif.maker.Nikon.Quality', 'n', 'Quality', 0, 'Quality', 'n'),
(169, 'exif.maker.Nikon.RawImageCenter', 'n', 'RawImageCenter', 0, 'Raw image center', 'n'),
(170, 'exif.maker.Nikon.Saturation', 'n', 'Saturation', 0, 'Saturation', 'n'),
(171, 'exif.maker.Nikon.SceneAssist', 'n', 'SceneAssist', 0, 'Scene assist', 'n'),
(172, 'exif.maker.Nikon.SceneMode', 'n', 'SceneMode', 0, 'Scene mode', 'n'),
(173, 'exif.maker.Nikon.SensorPixelSize', 'n', 'SensorPixelSize', 0, 'Sensor pixel size', 'n'),
(174, 'exif.maker.Nikon.SerialNumber', 'n', 'SerialNumber', 0, 'Serial number', 'n'),
(175, 'exif.maker.Nikon.SerialNumber2', 'n', 'SerialNumber2', 0, 'Serial number', 'n'),
(176, 'exif.maker.Nikon.Sharpness', 'n', 'Sharpness', 0, 'Sharpness', 'n'),
(177, 'exif.maker.Nikon.ShootingMode', 'y', 'ShootingMode', 0, 'Shooting mode', 'n'),
(178, 'exif.maker.Nikon.ShutterCount', 'n', 'ShutterCount', 0, 'Shutter count', 'n'),
(179, 'exif.maker.Nikon.ToneComp', 'n', 'ToneComp', 0, 'Tone compensation', 'n'),
(180, 'exif.maker.Nikon.VRInfo', 'y', 'VRInfo', 0, 'VR information', 'n'),
(181, 'exif.maker.Nikon.VariProgram', 'n', 'VariProgram', 0, 'Vari program', 'n'),
(182, 'exif.maker.Nikon.VignetteControl', 'y', 'VignetteControl', 0, 'Vignette control', 'n'),
(183, 'exif.maker.Nikon.WhiteBalance', 'n', 'WhiteBalance', 0, 'White balance', 'n'),
(184, 'exif.maker.Pentax.AELock', 'y', 'AELock', 0, 'AE lock', 'n'),
(185, 'exif.maker.Pentax.AFPoint', 'y', 'AFPoint', 0, 'AF point', 'n'),
(186, 'exif.maker.Pentax.AFPointsInFocus', 'y', 'AFPointsInFocus', 0, 'AF points in focus', 'n'),
(187, 'exif.maker.Pentax.AutoBracketing', 'y', 'AutoBracketing', 0, 'Automatic bracketing', 'n'),
(188, 'exif.maker.Pentax.BlueBalance', 'n', 'BlueBalance', 0, 'Blue balance', 'n'),
(189, 'exif.maker.Pentax.CPUFirmwareVersion', 'n', 'CPUFirmwareVersion', 0, 'CPU firmware version', 'n'),
(190, 'exif.maker.Pentax.CameraModel', 'n', 'CameraModel', 0, 'Camera model', 'n'),
(191, 'exif.maker.Pentax.ColorSpace', 'n', 'ColorSpace', 0, 'Color space', 'n'),
(192, 'exif.maker.Pentax.ColorTemperature', 'n', 'ColorTemperature', 0, 'Color temperature', 'n'),
(193, 'exif.maker.Pentax.Contrast', 'y', 'Contrast', 0, 'Contrast', 'n'),
(194, 'exif.maker.Pentax.DSPFirmwareVersion', 'n', 'DSPFirmwareVersion', 0, 'DSP firmware version', 'n'),
(195, 'exif.maker.Pentax.Date', 'n', 'Date', 0, 'Date', 'n'),
(196, 'exif.maker.Pentax.DestinationCityName', 'y', 'DestinationCityName', 0, 'Destination city name', 'n'),
(197, 'exif.maker.Pentax.DestinationDST', 'n', 'DestinationDST', 0, 'Destination DST', 'n'),
(198, 'exif.maker.Pentax.DigitalZoom', 'n', 'DigitalZoom', 0, 'Digital zoom', 'n'),
(199, 'exif.maker.Pentax.DriveMode', 'y', 'DriveMode', 0, 'Drive mode', 'n'),
(200, 'exif.maker.Pentax.DynamicRangeExpansion', 'y', 'DynamicRangeExpansion', 0, 'Dynamic range expansion', 'n'),
(201, 'exif.maker.Pentax.EffectiveLV', 'n', 'EffectiveLV', 0, 'Effective LV', 'n'),
(202, 'exif.maker.Pentax.ExposureCompensation', 'n', 'ExposureCompensation', 0, 'Exposure compensation', 'n'),
(203, 'exif.maker.Pentax.ExposureTime', 'n', 'ExposureTime', 0, 'Exposure time', 'n'),
(204, 'exif.maker.Pentax.FNumber', 'n', 'FNumber', 0, 'Aperture', 'n'),
(205, 'exif.maker.Pentax.Flash', 'y', 'Flash', 0, 'Flash', 'n'),
(206, 'exif.maker.Pentax.FlashExposureCompensation', 'n', 'FlashExposureCompensation', 0, 'Flash exposure compensation', 'n'),
(207, 'exif.maker.Pentax.FocalLength', 'n', 'FocalLength', 0, 'Focal length', 'n'),
(208, 'exif.maker.Pentax.Focus', 'y', 'Focus', 0, 'Focus', 'n'),
(209, 'exif.maker.Pentax.HighISONoiseReduction', 'y', 'HighISONoiseReduction', 0, 'High ISO noise reduction', 'n'),
(210, 'exif.maker.Pentax.HomeCityName', 'y', 'HomeCityName', 0, 'Home city name', 'n'),
(211, 'exif.maker.Pentax.HometownDST', 'n', 'HometownDST', 0, 'Hometown DST', 'n'),
(212, 'exif.maker.Pentax.ISO', 'n', 'ISO', 0, 'ISO', 'n'),
(213, 'exif.maker.Pentax.ImageProcessing', 'y', 'ImageProcessing', 0, 'Image processing', 'n'),
(214, 'exif.maker.Pentax.ImageTone', 'y', 'ImageTone', 0, 'Image tone', 'n'),
(215, 'exif.maker.Pentax.LensType', 'y', 'LensType', 0, 'Lens type', 'n'),
(216, 'exif.maker.Pentax.MeteringMode', 'y', 'MeteringMode', 0, 'Metering mode', 'n'),
(217, 'exif.maker.Pentax.NoiseReduction', 'y', 'NoiseReduction', 0, 'NoiseReduction', 'n'),
(218, 'exif.maker.Pentax.PictureMode', 'y', 'PictureMode', 0, 'Picture mode', 'n'),
(219, 'exif.maker.Pentax.PreviewLength', 'n', 'PreviewLength', 0, 'Preview width', 'n'),
(220, 'exif.maker.Pentax.PreviewOffset', 'n', 'PreviewOffset', 0, 'Preview offset', 'n'),
(221, 'exif.maker.Pentax.PreviewResolution', 'n', 'PreviewResolution', 0, 'Preview resolution', 'n'),
(222, 'exif.maker.Pentax.Quality', 'y', 'Quality', 0, 'Quality', 'n'),
(223, 'exif.maker.Pentax.RawImageSize', 'n', 'RawImageSize', 0, 'Raw image size', 'n'),
(224, 'exif.maker.Pentax.RedBalance', 'n', 'RedBalance', 0, 'Red balance', 'n'),
(225, 'exif.maker.Pentax.Saturation', 'y', 'Saturation', 0, 'Saturation', 'n'),
(226, 'exif.maker.Pentax.SensitivityAdjust', 'n', 'SensitivityAdjust', 0, 'Sensitivity adjustment', 'n'),
(227, 'exif.maker.Pentax.Sharpness', 'y', 'Sharpness', 0, 'Sharpness', 'n'),
(228, 'exif.maker.Pentax.ShootingMode', 'y', 'ShootingMode', 0, 'Shooting mode', 'n'),
(229, 'exif.maker.Pentax.Size', 'y', 'Size', 0, 'Size', 'n'),
(230, 'exif.maker.Pentax.Temperature', 'n', 'Temperature', 0, 'Temperature', 'n'),
(231, 'exif.maker.Pentax.Time', 'n', 'Time', 0, 'Time', 'n'),
(232, 'exif.maker.Pentax.Version', 'n', 'Version', 0, 'Version', 'n'),
(233, 'exif.maker.Pentax.WhiteBalance', 'y', 'WhiteBalance', 0, 'White balance', 'n'),
(234, 'exif.maker.Pentax.WhiteBalanceMode', 'y', 'WhiteBalanceMode', 0, 'White balance mode', 'n'),
(235, 'exif.maker.Pentax.WorldTimeLocation', 'y', 'WorldTimeLocation', 0, 'World time location', 'n'),
(236, 'exif.tiff.Artist', 'n', 'Artist', 0, 'Artist', 'n'),
(237, 'exif.tiff.BitsPerSample', 'n', 'BitsPerSample', 0, 'Bits per sample', 'n'),
(238, 'exif.tiff.Compression', 'y', 'Compression', 0, 'Compression', 'n'),
(239, 'exif.tiff.Copyright', 'n', 'Copyright', 0, 'Copyright', 'n'),
(240, 'exif.tiff.DateTime', 'n', 'DateTime', 0, 'Date/Time', 'n'),
(241, 'exif.tiff.DocumentName', 'n', 'DocumentName', 0, 'Document name', 'n'),
(242, 'exif.tiff.FillOrder', 'n', 'FillOrder', 0, 'Fill order', 'n'),
(243, 'exif.tiff.FlashEnergy', 'n', 'FlashEnergy', 0, 'Flash energy', 'n'),
(244, 'exif.tiff.GrayResponseUnit', 'n', 'GrayResponseUnit', 0, 'Gray response unit', 'n'),
(245, 'exif.tiff.ImageDescription', 'n', 'ImageDescription', 0, 'Image description', 'n'),
(246, 'exif.tiff.ImageLength', 'n', 'ImageLength', 0, 'Height', 'n'),
(247, 'exif.tiff.ImageWidth', 'n', 'ImageWidth', 0, 'Width', 'n'),
(248, 'exif.tiff.JPEGInterchangeFormat', 'n', 'JPEGInterchangeFormat', 0, 'JPEGInterchangeFormat', 'n'),
(249, 'exif.tiff.JPEGInterchangeFormatLength', 'n', 'JPEGInterchangeFormatLength', 0, 'JPEGInterchangeFormatLength', 'n'),
(250, 'exif.tiff.Make', 'n', 'Make', 0, 'Make', 'n'),
(251, 'exif.tiff.Model', 'n', 'Model', 0, 'Model', 'n'),
(252, 'exif.tiff.OldSubfileType', 'y', 'OldSubfileType', 0, 'Old subfile type', 'n'),
(253, 'exif.tiff.Orientation', 'n', 'Orientation', 0, 'Orientation', 'n'),
(254, 'exif.tiff.PhotometricInterpretation', 'y', 'PhotometricInterpretation', 0, 'Photometric interpretation', 'n'),
(255, 'exif.tiff.PlanarConfiguration', 'y', 'PlanarConfiguration', 0, 'Planar configuration', 'n'),
(256, 'exif.tiff.Predictor', 'y', 'Predictor', 0, 'Predictor', 'n'),
(257, 'exif.tiff.ProcessingSoftware', 'n', 'ProcessingSoftware', 0, 'Processing software', 'n'),
(258, 'exif.tiff.ResolutionUnit', 'y', 'ResolutionUnit', 0, 'Resolution unit', 'n'),
(259, 'exif.tiff.RowsPerStrip', 'n', 'RowsPerStrip', 0, 'Rows per strip', 'n'),
(260, 'exif.tiff.SamplesPerPixel', 'n', 'SamplesPerPixel', 0, 'Samples per pixel', 'n'),
(261, 'exif.tiff.Software', 'n', 'Software', 0, 'Software', 'n'),
(262, 'exif.tiff.StripByteCounts', 'n', 'StripByteCounts', 0, 'Strip byte counts', 'n'),
(263, 'exif.tiff.SubfileType', 'y', 'SubfileType', 0, 'Subfile type', 'n'),
(264, 'exif.tiff.Thresholding', 'y', 'Thresholding', 0, 'Thresholding', 'n'),
(265, 'exif.tiff.XResolution', 'n', 'XResolution', 0, 'X resolution', 'n'),
(266, 'exif.tiff.YCbCrPositioning', 'y', 'YCbCrPositioning', 0, 'YCbCr positioning', 'n'),
(267, 'exif.tiff.YCbCrSubSampling', 'n', 'YCbCrSubSampling', 0, 'YCbCr sub-sampling', 'n'),
(268, 'exif.tiff.YResolution', 'n', 'YResolution', 0, 'Y resolution', 'n'),
(269, 'iptc.By-line', 'n', 'By-line', 0, 'By-line', 'n'),
(270, 'iptc.By-line Title', 'n', 'By-line Title', 0, 'By-line title/Creator''s jobtitle', 'n'),
(271, 'iptc.Caption/Abstract', 'n', 'Caption/Abstract', 0, 'Caption/Abstract', 'n'),
(272, 'iptc.Category', 'n', 'Category', 0, 'Category', 'n'),
(273, 'iptc.City', 'n', 'City', 0, 'City', 'n'),
(274, 'iptc.Contact', 'n', 'Contact', 0, 'Contact', 'n'),
(275, 'iptc.Content Location Code', 'n', 'Content Location Code', 0, 'Content location code', 'n'),
(276, 'iptc.Content Location Name', 'n', 'Content Location Name', 0, 'Content location name', 'n'),
(277, 'iptc.Copyright Notice', 'n', 'Copyright Notice', 0, 'Copyright', 'n'),
(278, 'iptc.Country/Primary Location Code', 'n', 'Country/Primary Location Code', 0, 'Country/Primary location code', 'n'),
(279, 'iptc.Country/Primary Location Name', 'n', 'Country/Primary Location Name', 0, 'Country/Primary location name', 'n'),
(280, 'iptc.Credit', 'n', 'Credit', 0, 'Credit', 'n'),
(281, 'iptc.Date Created', 'n', 'Date Created', 0, 'Date created', 'n'),
(282, 'iptc.Date Sent', 'n', 'Date Sent', 0, 'Date sent', 'n'),
(283, 'iptc.Destination', 'n', 'Destination', 0, 'Destination', 'n'),
(284, 'iptc.Digital Creation Date', 'n', 'Digital Creation Date', 0, 'Digital creation date', 'n'),
(285, 'iptc.Digital Creation Time', 'n', 'Digital Creation Time', 0, 'Digital creation time', 'n'),
(286, 'iptc.Edit Status', 'n', 'Edit Status', 0, 'Edit status', 'n'),
(287, 'iptc.Envelope Number', 'n', 'Envelope Number', 0, 'Envelope number', 'n'),
(288, 'iptc.Envelope Priority', 'y', 'Envelope Priority', 0, 'Envelope priority', 'n'),
(289, 'iptc.Expiration Date', 'n', 'Expiration Date', 0, 'Expiration date', 'n'),
(290, 'iptc.Expiration Time', 'n', 'Expiration Time', 0, 'Expiration time', 'n'),
(291, 'iptc.File Format', 'y', 'File Format', 0, 'File format', 'n'),
(292, 'iptc.Fixture Identifier', 'n', 'Fixture Identifier', 0, 'Fixture identifier', 'n'),
(293, 'iptc.Headline', 'n', 'Headline', 0, 'Headline', 'n'),
(294, 'iptc.Image Orientation', 'y', 'Image Orientation', 0, 'Image orientation', 'n'),
(295, 'iptc.Keywords', 'n', 'Keywords', 0, 'Keywords/Subject', 'n'),
(296, 'iptc.Language Identifier', 'n', 'Language Identifier', 0, 'Language identifier', 'n'),
(297, 'iptc.Object Attribute Reference', 'n', 'Object Attribute Reference', 0, 'Object attribute reference/Intellectual genre', 'n'),
(298, 'iptc.Object Cycle', 'y', 'Object Cycle', 0, 'Object cycle', 'n'),
(299, 'iptc.Object Name', 'n', 'Object Name', 0, 'Title/Object name', 'n'),
(300, 'iptc.Object Type Reference', 'n', 'Object Type Reference', 0, 'Object type reference', 'n'),
(301, 'iptc.Original Transmission Reference', 'n', 'Original Transmission Reference', 0, 'Original transmission reference', 'n'),
(302, 'iptc.Originating Program', 'n', 'Originating Program', 0, 'Originating program', 'n'),
(303, 'iptc.Product I.D.', 'n', 'Product I.D.', 0, 'Product I.D.', 'n'),
(304, 'iptc.Program Version', 'n', 'Program Version', 0, 'Program version', 'n'),
(305, 'iptc.Province/State', 'n', 'Province/State', 0, 'Province/State', 'n'),
(306, 'iptc.Release Date', 'n', 'Release Date', 0, 'Release date', 'n'),
(307, 'iptc.Release Time', 'n', 'Release Time', 0, 'Release time', 'n'),
(308, 'iptc.Service Identifier', 'n', 'Service Identifier', 0, 'Service identifier', 'n'),
(309, 'iptc.Source', 'n', 'Source', 0, 'Source', 'n'),
(310, 'iptc.Special Instructions', 'n', 'Special Instructions', 0, 'Special instructions', 'n'),
(311, 'iptc.Subject Reference', 'n', 'Subject Reference', 0, 'Subject reference', 'n'),
(312, 'iptc.Subject Reference[Detail Name]', 'n', 'Subject Reference[Detail Name]', 0, 'Subject Reference (Detail name)', 'n'),
(313, 'iptc.Subject Reference[IPR]', 'n', 'Subject Reference[IPR]', 0, 'Subject Reference (IPR)', 'n'),
(314, 'iptc.Subject Reference[Matter Name]', 'n', 'Subject Reference[Matter Name]', 0, 'Subject Reference (Matter Name)', 'n'),
(315, 'iptc.Subject Reference[Name]', 'n', 'Subject Reference[Name]', 0, 'Subject Reference (Name)', 'n'),
(316, 'iptc.Subject Reference[Number]', 'n', 'Subject Reference[Number]', 0, 'Subject Reference (Number)', 'n'),
(317, 'iptc.Sublocation', 'n', 'Sublocation', 0, 'Sublocation', 'n'),
(318, 'iptc.Supplemental Category', 'n', 'Supplemental Category', 0, 'Supplemental category', 'n'),
(319, 'iptc.Time Created', 'n', 'Time Created', 0, 'Time created', 'n'),
(320, 'iptc.Time Sent', 'n', 'Time Sent', 0, 'Time sent', 'n'),
(321, 'iptc.Urgency', 'y', 'Urgency', 0, 'Urgency', 'n'),
(322, 'iptc.Writer/Editor', 'n', 'Writer/Editor', 0, 'Writer/Editor', 'n'),
(323, 'magic.Author.Artist', 'n', 'Author.Artist', 0, 'Artist', 'n'),
(324, 'magic.Author.Comment', 'n', 'Author.Comment', 0, 'Comment', 'n'),
(325, 'magic.Author.Copyright', 'n', 'Author.Copyright', 0, 'Copyright', 'n'),
(326, 'magic.Author.ImageTitle', 'n', 'Author.ImageTitle', 0, 'Title', 'n'),
(327, 'magic.Author.Keywords', 'n', 'Author.Keywords', 0, 'Keywords/Subject', 'n'),
(328, 'magic.Camera.Make', 'n', 'Camera.Make', 0, 'Make', 'n'),
(329, 'magic.Camera.Model', 'n', 'Camera.Model', 0, 'Camera model', 'n'),
(330, 'magic.GPS.Altitude', 'y', 'GPS.Altitude', 0, 'Altitude', 'n'),
(331, 'magic.GPS.GoogleMaps', 'y', 'magic.GPS.GoogleMaps', 0, 'magic.GPS.GoogleMaps', 'n'),
(332, 'magic.GPS.Latitude', 'y', 'GPS.Latitude', 0, 'Latitude', 'n'),
(333, 'magic.GPS.LatitudeNum', 'n', 'GPS.LatitudeNum', 0, 'Latitude', 'n'),
(334, 'magic.GPS.Localization', 'y', 'GPS.Localization', 0, 'Localization', 'n'),
(335, 'magic.GPS.Longitude', 'y', 'GPS.Longitude', 0, 'Longitude', 'n'),
(336, 'magic.GPS.LongitudeNum', 'n', 'GPS.LongitudeNum', 0, 'Longitude', 'n'),
(337, 'magic.Image.Dimension', 'n', 'Image.Dimension', 0, 'Dimension', 'n'),
(338, 'magic.Image.Height', 'n', 'Image.Height', 0, 'Height', 'n'),
(339, 'magic.Image.Width', 'n', 'Image.Width', 0, 'Width', 'n'),
(340, 'magic.Processing.OriginalFileName', 'n', 'Processing.OriginalFileName', 0, 'Original file name', 'n'),
(341, 'magic.Processing.PostProcessingDateTime', 'n', 'Processing.PostProcessingDateTime', 0, 'Post processing date&time', 'n'),
(342, 'magic.Processing.PostProcessingSoftware', 'n', 'Processing.PostProcessingSoftware', 0, 'Post processing software', 'n'),
(343, 'magic.Processing.Software', 'n', 'Processing.Software', 0, 'Software', 'n'),
(344, 'magic.ShotInfo.Aperture', 'n', 'ShotInfo.Aperture', 0, 'Aperture', 'n'),
(345, 'magic.ShotInfo.DateTime', 'n', 'ShotInfo.DateTime', 0, 'Date/Time', 'n'),
(346, 'magic.ShotInfo.Exposure', 'n', 'ShotInfo.Exposure', 0, 'Exposure', 'n'),
(347, 'magic.ShotInfo.Flash.Fired', 'y', 'ShotInfo.Flash.Fired', 0, 'Flash fired', 'n'),
(348, 'magic.ShotInfo.Flash.RedEyeMode', 'y', 'ShotInfo.Flash.RedEyeMode', 0, 'Flash red-eye mode', 'n'),
(349, 'magic.ShotInfo.FocalLength', 'n', 'ShotInfo.FocalLength', 0, 'Focal length', 'n'),
(350, 'magic.ShotInfo.FocalLengthIn35mm', 'n', 'ShotInfo.FocalLengthIn35mm', 0, 'Focal length in 35mm film', 'n'),
(351, 'magic.ShotInfo.ISO', 'n', 'ShotInfo.ISO', 0, 'ISO', 'n'),
(352, 'magic.ShotInfo.Lens', 'n', 'ShotInfo.Lens', 0, 'Lens', 'n'),
(353, 'xmp.Iptc4xmpCore:CiAdrCity', 'n', 'Iptc4xmpCore:CiAdrCity', 0, 'City', 'n'),
(354, 'xmp.Iptc4xmpCore:CiAdrCtry', 'n', 'Iptc4xmpCore:CiAdrCtry', 0, 'Country', 'n'),
(355, 'xmp.Iptc4xmpCore:CiAdrExtadr', 'n', 'Iptc4xmpCore:CiAdrExtadr', 0, 'Address', 'n'),
(356, 'xmp.Iptc4xmpCore:CiAdrPcode', 'n', 'Iptc4xmpCore:CiAdrPcode', 0, 'Postal code', 'n'),
(357, 'xmp.Iptc4xmpCore:CiEmailWork', 'n', 'Iptc4xmpCore:CiEmailWork', 0, 'Email address', 'n'),
(358, 'xmp.Iptc4xmpCore:CiTelWork', 'n', 'Iptc4xmpCore:CiTelWork', 0, 'Phone number', 'n'),
(359, 'xmp.Iptc4xmpCore:CiUrlWork', 'n', 'Iptc4xmpCore:CiUrlWork', 0, 'Web URL', 'n'),
(360, 'xmp.Iptc4xmpCore:CountryCode', 'n', 'Iptc4xmpCore:CountryCode', 0, 'Country/Primary location code', 'n'),
(361, 'xmp.Iptc4xmpCore:IntellectualGenre', 'n', 'Iptc4xmpCore:IntellectualGenre', 0, 'Object attribute reference/Intellectual genre', 'n'),
(362, 'xmp.Iptc4xmpCore:Location', 'n', 'Iptc4xmpCore:Location', 0, 'Sublocation', 'n'),
(363, 'xmp.Iptc4xmpCore:Scene', 'y', 'Iptc4xmpCore:Scene', 0, 'Scene code', 'n'),
(364, 'xmp.Iptc4xmpCore:SubjectCode', 'n', 'Iptc4xmpCore:SubjectCode', 0, 'Subject reference', 'n'),
(365, 'xmp.aux:Firmware', 'n', 'aux:Firmware', 0, 'Firmware', 'n'),
(366, 'xmp.aux:Lens', 'n', 'aux:Lens', 0, 'Lens', 'n'),
(367, 'xmp.aux:SerialNumber', 'n', 'aux:SerialNumber', 0, 'Serial number', 'n'),
(368, 'xmp.crs:AutoBrightness', 'y', 'crs:AutoBrightness', 0, 'Automatic brightness', 'n'),
(369, 'xmp.crs:AutoContrast', 'y', 'crs:AutoContrast', 0, 'Automatic contrast', 'n'),
(370, 'xmp.crs:AutoExposure', 'y', 'crs:AutoExposure', 0, 'Automatic exposure', 'n'),
(371, 'xmp.crs:AutoShadows', 'y', 'crs:AutoShadows', 0, 'Automatic shadows', 'n'),
(372, 'xmp.crs:Balance', 'y', 'crs:Balance', 0, 'Balance', 'n'),
(373, 'xmp.crs:BlueHue', 'n', 'crs:BlueHue', 0, 'Blue hue', 'n'),
(374, 'xmp.crs:BlueSaturation', 'n', 'crs:BlueSaturation', 0, 'Blue saturation', 'n'),
(375, 'xmp.crs:Brightness', 'n', 'crs:Brightness', 0, 'Brightness', 'n'),
(376, 'xmp.crs:CameraProfile', 'n', 'crs:CameraProfile', 0, 'Camera profile', 'n'),
(377, 'xmp.crs:ChromaticAberrationB', 'n', 'crs:ChromaticAberrationB', 0, 'Chromatic aberration blue', 'n'),
(378, 'xmp.crs:ChromaticAberrationR', 'n', 'crs:ChromaticAberrationR', 0, 'Chromatic aberration red', 'n'),
(379, 'xmp.crs:ColorNoiseReduction', 'n', 'crs:ColorNoiseReduction', 0, 'Color noise reduction', 'n'),
(380, 'xmp.crs:Contrast', 'n', 'crs:Contrast', 0, 'Contrast', 'n'),
(381, 'xmp.crs:CropAngle', 'n', 'crs:CropAngle', 0, 'Crop angle', 'n'),
(382, 'xmp.crs:CropBottom', 'n', 'crs:CropBottom', 0, 'Crop bottom', 'n'),
(383, 'xmp.crs:CropHeight', 'n', 'crs:CropHeight', 0, 'Crop height', 'n'),
(384, 'xmp.crs:CropLeft', 'n', 'crs:CropLeft', 0, 'Crop left', 'n'),
(385, 'xmp.crs:CropRight', 'n', 'crs:CropRight', 0, 'Crop right', 'n'),
(386, 'xmp.crs:CropTop', 'n', 'crs:CropTop', 0, 'Crop top', 'n'),
(387, 'xmp.crs:CropUnits', 'y', 'crs:CropUnits', 0, 'Crop units', 'n'),
(388, 'xmp.crs:CropWidth', 'n', 'crs:CropWidth', 0, 'Crop width', 'n'),
(389, 'xmp.crs:Exposure', 'n', 'crs:Exposure', 0, 'Exposure', 'n'),
(390, 'xmp.crs:GreenHue', 'n', 'crs:GreenHue', 0, 'Green hue', 'n'),
(391, 'xmp.crs:GreenSaturation', 'n', 'crs:GreenSaturation', 0, 'Green saturation', 'n'),
(392, 'xmp.crs:HasCrop', 'y', 'crs:HasCrop', 0, 'Has crop', 'n'),
(393, 'xmp.crs:HasSettings', 'y', 'crs:HasSettings', 0, 'Has settings', 'n'),
(394, 'xmp.crs:LuminanceSmoothing', 'n', 'crs:LuminanceSmoothing', 0, 'Luminance smoothing', 'n'),
(395, 'xmp.crs:RawFileName', 'n', 'crs:RawFileName', 0, 'Raw file name', 'n'),
(396, 'xmp.crs:RedHue', 'n', 'crs:RedHue', 0, 'Red hue', 'n'),
(397, 'xmp.crs:RedSaturation', 'n', 'crs:RedSaturation', 0, 'Red saturation', 'n'),
(398, 'xmp.crs:Saturation', 'n', 'crs:Saturation', 0, 'Saturation', 'n'),
(399, 'xmp.crs:ShadowTint', 'n', 'crs:ShadowTint', 0, 'Shadow tint', 'n'),
(400, 'xmp.crs:Shadows', 'n', 'crs:Shadows', 0, 'Shadows', 'n'),
(401, 'xmp.crs:Sharpness', 'n', 'crs:Sharpness', 0, 'Sharpness', 'n'),
(402, 'xmp.crs:Temperature', 'n', 'crs:Temperature', 0, 'Temperature', 'n'),
(403, 'xmp.crs:Tint', 'n', 'crs:Tint', 0, 'Tint', 'n'),
(404, 'xmp.crs:ToneCurveName', 'y', 'crs:ToneCurveName', 0, 'Tone curve name', 'n'),
(405, 'xmp.crs:Version', 'n', 'crs:Version', 0, 'Version', 'n'),
(406, 'xmp.crs:VignetteAmount', 'n', 'crs:VignetteAmount', 0, 'Vignette amount', 'n'),
(407, 'xmp.crs:VignetteMidpoint', 'n', 'crs:VignetteMidpoint', 0, 'Vignette midpoint', 'n'),
(408, 'xmp.crs:WhiteBalance', 'y', 'crs:WhiteBalance', 0, 'White balance', 'n'),
(409, 'xmp.dc:CreatorTool', 'n', 'dc:CreatorTool', 0, 'Creator tool', 'n'),
(410, 'xmp.dc:Type', 'n', 'dc:Type', 0, 'Type', 'n'),
(411, 'xmp.dc:contributor', 'n', 'dc:contributor', 0, 'Contributor', 'n'),
(412, 'xmp.dc:coverage', 'n', 'dc:coverage', 0, 'Coverage', 'n'),
(413, 'xmp.dc:creator', 'n', 'dc:creator', 0, 'Creator', 'n'),
(414, 'xmp.dc:description', 'n', 'dc:description', 0, 'Caption/Abstract', 'n'),
(415, 'xmp.dc:format', 'n', 'dc:format', 0, 'Format', 'n'),
(416, 'xmp.dc:identifier', 'n', 'dc:identifier', 0, 'Identifier', 'n'),
(417, 'xmp.dc:language', 'n', 'dc:language', 0, 'Language', 'n'),
(418, 'xmp.dc:publisher', 'n', 'dc:publisher', 0, 'Publisher', 'n'),
(419, 'xmp.dc:relation', 'n', 'dc:relation', 0, 'Relation', 'n'),
(420, 'xmp.dc:rights', 'n', 'dc:rights', 0, 'Copyright', 'n'),
(421, 'xmp.dc:source', 'n', 'dc:source', 0, 'Source', 'n'),
(422, 'xmp.dc:subject', 'n', 'dc:subject', 0, 'Keywords/Subject', 'n'),
(423, 'xmp.dc:title', 'n', 'dc:title', 0, 'Title/Object name', 'n'),
(424, 'xmp.digiKam:TagsList', 'y', 'digiKam:TagsList', 0, 'Keywords/Subject', 'n'),
(425, 'xmp.exif:ApertureValue', 'n', 'exif:ApertureValue', 0, 'Aperture', 'n'),
(426, 'xmp.exif:Balance', 'n', 'exif:Balance', 0, 'Balance', 'n'),
(427, 'xmp.exif:BrightnessValue', 'n', 'exif:BrightnessValue', 0, 'Brightness value', 'n'),
(428, 'xmp.exif:ColorSpace', 'n', 'exif:ColorSpace', 0, 'Color space', 'n'),
(429, 'xmp.exif:ComponentsConfiguration', 'n', 'exif:ComponentsConfiguration', 0, 'Components configuration', 'n'),
(430, 'xmp.exif:CompressedBitsPerPixel', 'n', 'exif:CompressedBitsPerPixel', 0, 'Compressed bits per pixel', 'n'),
(431, 'xmp.exif:Contrast', 'n', 'exif:Contrast', 0, 'Contrast', 'n'),
(432, 'xmp.exif:CustomRendered', 'n', 'exif:CustomRendered', 0, 'Custom process', 'n'),
(433, 'xmp.exif:DateTimeDigitized', 'n', 'exif:DateTimeDigitized', 0, 'Date/Time digitized', 'n'),
(434, 'xmp.exif:DateTimeOriginal', 'n', 'exif:DateTimeOriginal', 0, 'Date/Time original', 'n'),
(435, 'xmp.exif:DigitalZoomRatio', 'n', 'exif:DigitalZoomRatio', 0, 'Digital zoom ratio', 'n'),
(436, 'xmp.exif:ExifVersion', 'n', 'exif:ExifVersion', 0, 'Exif version', 'n'),
(437, 'xmp.exif:ExposureBiasValue', 'n', 'exif:ExposureBiasValue', 0, 'Exposure bias value', 'n'),
(438, 'xmp.exif:ExposureIndex', 'n', 'exif:ExposureIndex', 0, 'Exposure index', 'n'),
(439, 'xmp.exif:ExposureMode', 'n', 'exif:ExposureMode', 0, 'Exposure mode', 'n'),
(440, 'xmp.exif:ExposureProgram', 'n', 'exif:ExposureProgram', 0, 'Exposure program', 'n'),
(441, 'xmp.exif:ExposureTime', 'n', 'exif:ExposureTime', 0, 'Exposure time', 'n'),
(442, 'xmp.exif:FNumber', 'n', 'exif:FNumber', 0, 'Aperture', 'n'),
(443, 'xmp.exif:FileSource', 'n', 'exif:FileSource', 0, 'File source', 'n'),
(444, 'xmp.exif:Fired', 'y', 'exif:Fired', 0, 'Fired', 'n'),
(445, 'xmp.exif:FlashEnergy', 'n', 'exif:FlashEnergy', 0, 'Flash energy', 'n'),
(446, 'xmp.exif:FlashpixVersion', 'n', 'exif:FlashpixVersion', 0, 'Flashpix version', 'n'),
(447, 'xmp.exif:FocalLength', 'n', 'exif:FocalLength', 0, 'Focal length', 'n'),
(448, 'xmp.exif:FocalLengthIn35mmFilm', 'n', 'exif:FocalLengthIn35mmFilm', 0, 'Focal length in 35mm film', 'n'),
(449, 'xmp.exif:FocalPlaneResolutionUnit', 'n', 'exif:FocalPlaneResolutionUnit', 0, 'Focal plane resolution unit', 'n'),
(450, 'xmp.exif:FocalPlaneXResolution', 'n', 'exif:FocalPlaneXResolution', 0, 'Focal plane X resolution', 'n'),
(451, 'xmp.exif:FocalPlaneYResolution', 'n', 'exif:FocalPlaneYResolution', 0, 'Focal plane Y resolution', 'n'),
(452, 'xmp.exif:Function', 'y', 'exif:Function', 0, 'Function', 'n'),
(453, 'xmp.exif:GPSAltitude', 'n', 'exif:GPSAltitude', 0, 'Altitude', 'n'),
(454, 'xmp.exif:GPSAltitudeRef', 'n', 'exif:GPSAltitudeRef', 0, 'Altitude reference', 'n'),
(455, 'xmp.exif:GPSAreaInformation', 'n', 'exif:GPSAreaInformation', 0, 'Area information', 'n'),
(456, 'xmp.exif:GPSDestBearing', 'n', 'exif:GPSDestBearing', 0, 'Destination bearing', 'n'),
(457, 'xmp.exif:GPSDestBearingRef', 'n', 'exif:GPSDestBearingRef', 0, 'Destination bearing reference', 'n'),
(458, 'xmp.exif:GPSDestDistance', 'n', 'exif:GPSDestDistance', 0, 'Destination distance', 'n'),
(459, 'xmp.exif:GPSDestDistanceRef', 'n', 'exif:GPSDestDistanceRef', 0, 'Destination distance reference', 'n'),
(460, 'xmp.exif:GPSDestLatitude', 'y', 'exif:GPSDestLatitude', 0, 'Destination latitude', 'n'),
(461, 'xmp.exif:GPSDestLongitude', 'y', 'exif:GPSDestLongitude', 0, 'Destination longitude', 'n'),
(462, 'xmp.exif:GPSDifferential', 'n', 'exif:GPSDifferential', 0, 'Differential', 'n'),
(463, 'xmp.exif:GPSImgDirection', 'n', 'exif:GPSImgDirection', 0, 'Direction of image', 'n'),
(464, 'xmp.exif:GPSImgDirectionRef', 'n', 'exif:GPSImgDirectionRef', 0, 'Reference for movement direction', 'n'),
(465, 'xmp.exif:GPSLatitude', 'y', 'exif:GPSLatitude', 0, 'Latitude', 'n'),
(466, 'xmp.exif:GPSLongitude', 'y', 'exif:GPSLongitude', 0, 'Longitude', 'n'),
(467, 'xmp.exif:GPSMapDatum', 'n', 'exif:GPSMapDatum', 0, 'Geodetic survey data', 'n'),
(468, 'xmp.exif:GPSMeasureMode', 'n', 'exif:GPSMeasureMode', 0, 'Measure mode', 'n'),
(469, 'xmp.exif:GPSProcessingMethod', 'n', 'exif:GPSProcessingMethod', 0, 'Processing method', 'n'),
(470, 'xmp.exif:GPSSatellites', 'n', 'exif:GPSSatellites', 0, 'Satellites', 'n'),
(471, 'xmp.exif:GPSSpeed', 'n', 'exif:GPSSpeed', 0, 'Speed', 'n'),
(472, 'xmp.exif:GPSSpeedRef', 'n', 'exif:GPSSpeedRef', 0, 'Speed reference', 'n'),
(473, 'xmp.exif:GPSStatus', 'n', 'exif:GPSStatus', 0, 'Status', 'n'),
(474, 'xmp.exif:GPSTimeStamp', 'n', 'exif:GPSTimeStamp', 0, 'GPS timestamp', 'n'),
(475, 'xmp.exif:GPSTrack', 'n', 'exif:GPSTrack', 0, 'Track', 'n'),
(476, 'xmp.exif:GPSTrackRef', 'n', 'exif:GPSTrackRef', 0, 'Track reference', 'n'),
(477, 'xmp.exif:GPSVersionID', 'n', 'exif:GPSVersionID', 0, 'Version ID', 'n'),
(478, 'xmp.exif:GainControl', 'n', 'exif:GainControl', 0, 'Gain control', 'n'),
(479, 'xmp.exif:ISOSpeedRatings', 'n', 'exif:ISOSpeedRatings', 0, 'ISO speed ratings', 'n'),
(480, 'xmp.exif:LightSource', 'n', 'exif:LightSource', 0, 'Light source', 'n'),
(481, 'xmp.exif:MaxApertureValue', 'n', 'exif:MaxApertureValue', 0, 'Maximum aperture value', 'n'),
(482, 'xmp.exif:MeteringMode', 'n', 'exif:MeteringMode', 0, 'Metering mode', 'n'),
(483, 'xmp.exif:Mode', 'y', 'exif:Mode', 0, 'Mode', 'n'),
(484, 'xmp.exif:PixelXDimension', 'n', 'exif:PixelXDimension', 0, 'Pixel X dimension', 'n'),
(485, 'xmp.exif:PixelYDimension', 'n', 'exif:PixelYDimension', 0, 'Pixel Y dimension', 'n'),
(486, 'xmp.exif:RedEyeMode', 'y', 'exif:RedEyeMode', 0, 'Red-eye mode', 'n'),
(487, 'xmp.exif:Return', 'y', 'exif:Return', 0, 'Return', 'n'),
(488, 'xmp.exif:Saturation', 'n', 'exif:Saturation', 0, 'Saturation', 'n'),
(489, 'xmp.exif:SceneCaptureType', 'n', 'exif:SceneCaptureType', 0, 'Scene capture type', 'n'),
(490, 'xmp.exif:SceneType', 'n', 'exif:SceneType', 0, 'Scene type', 'n'),
(491, 'xmp.exif:SensingMethod', 'n', 'exif:SensingMethod', 0, 'Sensing method', 'n'),
(492, 'xmp.exif:Sharpness', 'n', 'exif:Sharpness', 0, 'Sharpness', 'n'),
(493, 'xmp.exif:ShutterSpeedValue', 'n', 'exif:ShutterSpeedValue', 0, 'Shutter speed value', 'n'),
(494, 'xmp.exif:SpectralSensitivity', 'n', 'exif:SpectralSensitivity', 0, 'Spectral sensitivity', 'n'),
(495, 'xmp.exif:SubjectDistance', 'n', 'exif:SubjectDistance', 0, 'Subject distance', 'n'),
(496, 'xmp.exif:SubjectDistanceRange', 'n', 'exif:SubjectDistanceRange', 0, 'Subject distance range', 'n'),
(497, 'xmp.exif:UserComment', 'n', 'exif:UserComment', 0, 'User comment', 'n'),
(498, 'xmp.exif:WhiteBalance', 'n', 'exif:WhiteBalance', 0, 'White balance', 'n'),
(499, 'xmp.lr:hierarchicalSubject', 'y', 'lr:hierarchicalSubject', 0, 'Keywords/Subject', 'n'),
(500, 'xmp.photoshop:AuthorsPosition', 'n', 'photoshop:AuthorsPosition', 0, 'By-line title/Creator''s jobtitle', 'n'),
(501, 'xmp.photoshop:CaptionWriter', 'n', 'photoshop:CaptionWriter', 0, 'Writer/Editor', 'n'),
(502, 'xmp.photoshop:Category', 'n', 'photoshop:Category', 0, 'Category', 'n'),
(503, 'xmp.photoshop:City', 'n', 'photoshop:City', 0, 'City', 'n'),
(504, 'xmp.photoshop:Country', 'n', 'photoshop:Country', 0, 'Country/Primary location name', 'n'),
(505, 'xmp.photoshop:Credit', 'n', 'photoshop:Credit', 0, 'Credit', 'n'),
(506, 'xmp.photoshop:DateCreated', 'n', 'photoshop:DateCreated', 0, 'Date created', 'n'),
(507, 'xmp.photoshop:Headline', 'n', 'photoshop:Headline', 0, 'Headline', 'n'),
(508, 'xmp.photoshop:ICCProfile', 'n', 'photoshop:ICCProfile', 0, 'ICC profile', 'n'),
(509, 'xmp.photoshop:Instructions', 'n', 'photoshop:Instructions', 0, 'Special instruction', 'n'),
(510, 'xmp.photoshop:Source', 'n', 'photoshop:Source', 0, 'Source', 'n'),
(511, 'xmp.photoshop:State', 'n', 'photoshop:State', 0, 'Province/State', 'n'),
(512, 'xmp.photoshop:SupplementalCategories', 'n', 'photoshop:SupplementalCategories', 0, 'Supplemental categories', 'n'),
(513, 'xmp.photoshop:TransmissionReference', 'n', 'photoshop:TransmissionReference', 0, 'Original transmission reference', 'n'),
(514, 'xmp.photoshop:Urgency', 'y', 'photoshop:Urgency', 0, 'Urgency', 'n'),
(515, 'xmp.tiff:Artist', 'n', 'tiff:Artist', 0, 'Artist', 'n'),
(516, 'xmp.tiff:BitsPerSample', 'n', 'tiff:BitsPerSample', 0, 'Bits per sample', 'n'),
(517, 'xmp.tiff:Compression', 'n', 'tiff:Compression', 0, 'Compression', 'n'),
(518, 'xmp.tiff:Copyright', 'n', 'tiff:Copyright', 0, 'Copyright', 'n'),
(519, 'xmp.tiff:DateTime', 'n', 'tiff:DateTime', 0, 'Date/Time', 'n'),
(520, 'xmp.tiff:ImageDescription', 'n', 'tiff:ImageDescription', 0, 'Image description', 'n'),
(521, 'xmp.tiff:ImageLength', 'n', 'tiff:ImageLength', 0, 'Height', 'n'),
(522, 'xmp.tiff:ImageWidth', 'n', 'tiff:ImageWidth', 0, 'Width', 'n'),
(523, 'xmp.tiff:Make', 'n', 'tiff:Make', 0, 'Make', 'n'),
(524, 'xmp.tiff:Model', 'n', 'tiff:Model', 0, 'Model', 'n'),
(525, 'xmp.tiff:Orientation', 'n', 'tiff:Orientation', 0, 'Orientation', 'n'),
(526, 'xmp.tiff:PhotometricInterpretation', 'n', 'tiff:PhotometricInterpretation', 0, 'Photometric interpretation', 'n'),
(527, 'xmp.tiff:PlanarConfiguration', 'n', 'tiff:PlanarConfiguration', 0, 'Planar configuration', 'n'),
(528, 'xmp.tiff:ResolutionUnit', 'n', 'tiff:ResolutionUnit', 0, 'Resolution unit', 'n'),
(529, 'xmp.tiff:SamplesPerPixel', 'n', 'tiff:SamplesPerPixel', 0, 'Samples per pixel', 'n'),
(530, 'xmp.tiff:Software', 'n', 'tiff:Software', 0, 'Software', 'n'),
(531, 'xmp.tiff:XResolution', 'n', 'tiff:XResolution', 0, 'X resolution', 'n'),
(532, 'xmp.tiff:YCbCrPositioning', 'n', 'tiff:YCbCrPositioning', 0, 'YCbCr positioning', 'n'),
(533, 'xmp.tiff:YCbCrSubSampling', 'n', 'tiff:YCbCrSubSampling', 0, 'YCbCr sub-sampling', 'n'),
(534, 'xmp.tiff:YResolution', 'n', 'tiff:YResolution', 0, 'Y resolution', 'n'),
(535, 'xmp.x:xmptk', 'n', 'x:xmptk', 0, 'x:xmptk', 'n'),
(536, 'xmp.xmp:Advisory', 'n', 'xmp:Advisory', 0, 'Advisory', 'n'),
(537, 'xmp.xmp:BaseURL', 'n', 'xmp:BaseURL', 0, 'Base URL', 'n'),
(538, 'xmp.xmp:CreateDate', 'n', 'xmp:CreateDate', 0, 'Create date', 'n'),
(539, 'xmp.xmp:CreatorTool', 'n', 'xmp:CreatorTool', 0, 'Creator tool', 'n'),
(540, 'xmp.xmp:Identifier', 'n', 'xmp:Identifier', 0, 'Identifier', 'n'),
(541, 'xmp.xmp:Label', 'n', 'xmp:Label', 0, 'Label', 'n'),
(542, 'xmp.xmp:MetadataDate', 'n', 'xmp:MetadataDate', 0, 'Metadata date', 'n'),
(543, 'xmp.xmp:ModifyDate', 'n', 'xmp:ModifyDate', 0, 'Modify date', 'n'),
(544, 'xmp.xmp:Nickname', 'n', 'xmp:Nickname', 0, 'Nickname', 'n'),
(545, 'xmp.xmp:Rating', 'n', 'xmp:Rating', 0, 'Rating', 'n'),
(546, 'xmp.xmpMM:DocumentID', 'n', 'xmpMM:DocumentID', 0, 'Document ID', 'n'),
(547, 'xmp.xmpMM:InstanceID', 'n', 'xmpMM:InstanceID', 0, 'Instance ID', 'n'),
(548, 'xmp.xmpMM:LastURL', 'n', 'xmpMM:LastURL', 0, 'Last URL', 'n'),
(549, 'xmp.xmpMM:ManageTo', 'n', 'xmpMM:ManageTo', 0, 'Manage to', 'n'),
(550, 'xmp.xmpMM:ManageUI', 'n', 'xmpMM:ManageUI', 0, 'Manage UI', 'n'),
(551, 'xmp.xmpMM:Manager', 'n', 'xmpMM:Manager', 0, 'Manager', 'n'),
(552, 'xmp.xmpMM:ManagerVariant', 'n', 'xmpMM:ManagerVariant', 0, 'Manager variant', 'n'),
(553, 'xmp.xmpMM:RenditionClass', 'n', 'xmpMM:RenditionClass', 0, 'Rendition class', 'n'),
(554, 'xmp.xmpMM:RenditionParams', 'n', 'xmpMM:RenditionParams', 0, 'Rendition params', 'n'),
(555, 'xmp.xmpMM:VersionID', 'n', 'xmpMM:VersionID', 0, 'Version ID', 'n'),
(556, 'xmp.xmpRights:Certificate', 'n', 'xmpRights:Certificate', 0, 'Certificate', 'n'),
(557, 'xmp.xmpRights:Marked', 'y', 'xmpRights:Marked', 0, 'Marked', 'n'),
(558, 'xmp.xmpRights:Owner', 'n', 'xmpRights:Owner', 0, 'Owner', 'n'),
(559, 'xmp.xmpRights:UsageTerms', 'n', 'xmpRights:UsageTerms', 0, 'Usage terms', 'n'),
(560, 'xmp.xmpRights:WebStatement', 'n', 'xmpRights:WebStatement', 0, 'Web statement', 'n');

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amd_user_tags_def`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_user_tags_def` (
  `numId` int(10) unsigned NOT NULL COMMENT 'Id of the tag',
  `defId` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'also used for ordering',
  `parentId` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'Id of the parent',
  `order` int(10) unsigned NOT NULL,
  `type` char(1) NOT NULL DEFAULT 'T' COMMENT 'T = static text ; M = metadata value ; C = condition',
  `value` varchar(200) NOT NULL,
  `conditionType` char(2) NOT NULL DEFAULT 'E',
  `conditionValue` varchar(200) NOT NULL,
  PRIMARY KEY (`numId`,`defId`),
  KEY `byTagParentId` (`numId`,`parentId`,`order`) USING BTREE,
  KEY `byTagOrder` (`numId`,`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `piwigo_amd_user_tags_label`
--

CREATE TABLE IF NOT EXISTS `piwigo_amd_user_tags_label` (
  `numId` int(10) unsigned NOT NULL,
  `lang` char(5) NOT NULL,
  `label` varchar(200) NOT NULL,
  PRIMARY KEY (`numId`,`lang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
('mbAMM_randompict', 7, '', '1'),
('mbCategories', 2, '', ''),
('mbIdentification', 1, '', ''),
('mbLinks', 3, '', ''),
('mbMenu', 0, '', ''),
('mbSpecials', 5, '', '1'),
('mbTags', 4, '', '');

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `piwigo_categories`
--

INSERT INTO `piwigo_categories` (`id`, `name`, `id_uppercat`, `comment`, `dir`, `rank`, `status`, `site_id`, `visible`, `representative_picture_id`, `uppercats`, `commentable`, `global_rank`, `image_order`, `permalink`, `community_user`) VALUES
(3, 'Adams', NULL, NULL, NULL, 2, 'public', NULL, 'true', NULL, '3', 'true', '2', NULL, NULL, NULL),
(2, 'Community', NULL, NULL, NULL, 1, 'public', NULL, 'true', NULL, '2', 'true', '1', NULL, NULL, NULL),
(5, 'Marker #5-1 Mineral Springs', 3, 'Medicinal value of springs promoted by Charles Matheny, 1840. First hotel built 1864 and resort named Sodaville. Under ownership of General Benjamin Coates 1888-91, Smith Grimes 1891-08, and J. W. Rogers 1908-20. Mineral Springs Health Resort Nationally known for its large hotel complex and recreational facilities. This hotel destroyed by fire, 1924. Smaller hotel built 1904, quarter mile north, continued operation through 1940. ', NULL, 3, 'public', NULL, 'true', 3, '3,5', 'true', '2.3', NULL, NULL, NULL),
(7, 'Marker #1-1 Bradford Tavern', 3, 'The Bradford Tavern, West Union''s first inn built ca. 1804, served the Maysville-Zanesville stagecoach route and such travelers as Andrew Jackson, Henry Clay, and Santa Anna. After 1840, it was continued as the Marlatt House and, later, the Crawford House. Robert Lawler operated it as the Commercial Hotel, 1904-1919. In 1936, Mr. and Mrs. William Lafferty restored the building as the "Olde Wayside Inn." ', NULL, 2, 'public', NULL, 'true', 5, '3,7', 'true', '2.2', NULL, NULL, NULL),
(9, 'Marker #12-1 First Presbyterian Church / Thomas Kirker', 3, 'The First Presbyterian Church of West Union, built in 1810, is known as the "Church of the Governors." Although the date is uncertain, the congregation was organized circa 1800 on Thomas Kirker''s land on Eagle Creek, about three miles from West Union. Kirker, Ohio''s second governor, was influential in organizing the congregation and raising funds for the construction of the building. Stonemason, Thomas Metcalfe, Kentucky governor from 1828-1832, was awarded the contract to build the walls for $250.00; the total construction cost was $500.00. The first three regular ministers - William Williamson, Dyer Burgess, and John P. Van Dyke - all held strong anti-slavery sentiment that was felt throughout the congregation. During the Civil War, soldiers of the 70th Ohio Volunteer Infantry, a regiment of recruits from Adams County and eastern Brown County, were said to have been temporarily quartered in the church before leaving West Union in 1861. ', NULL, 1, 'public', NULL, 'true', 8, '3,9', 'true', '2.1', NULL, NULL, NULL),
(10, 'Allen', NULL, NULL, 'Allen', 3, 'public', 1, 'true', NULL, '10', 'true', '3', NULL, NULL, NULL),
(11, 'Marker 5-2 Faurot Oil Well', 10, 'In 1885, 800 feet north of this marker, Benjamin Faurot struck oil after drilling into the Trenton Rock Limestone formation at a depth of 1,251 feet.  This event marked the beginning of the great Oil Boom of northwest Ohio.  The ensuing rush brought speculators who drilled hundreds of wells in the Trenton Rock (Lima) Oil Field that stretched from Mercer County north through Wood County in Ohio and west to Indiana.  By 1886, the Lima field was the nation''s leading producer of oil, and by the following year it was considered to be the largest in the world.  Production from the Ohio portion of the Lima-Indiana field reached its peak in 1896, when more than 20 million barrels were brought out of the ground.  Though short-lived, the oil rush brought an influx of people, pipelines, refineries, and businesses, giving a powerful impetus to the growth of northwest Ohio. Address: 835 East North Street, Lima. Directions: 835 East North Street, Lima', 'Marker_5-2_Faurot_Oil_Well', 1, 'public', 1, 'true', 14, '10,11', 'true', '3.1', NULL, NULL, NULL),
(12, 'Ashland', NULL, NULL, 'Ashland', 4, 'public', 1, 'true', NULL, '12', 'true', '4', NULL, NULL, NULL),
(13, 'Marker 1-3 Hayesville Town Hall and Opera House', 12, 'This building was a center of community life from the time of its construction in 1886 to the late 1930s.  Once common, such combinations of governmental offices and commercial and entertainment space are today rare.  The second floor opera house retains many original features, including stage backdrops, dressing rooms, and seats.  Vaudeville, theater companies, and entertainment of all kinds were hosted here and many performers signed the backstage walls:  Buffalo Bill dated his signature October 28, 1888.  Along with village offices, first floor tenants have included the Vermillion Township Trustees, the Eddie Stover Hat Shop, and the F.L. Smith Watch Repair and Jewelry Store.  Hayesville''s citizens approved the hall''s construction on April 18, 1884 by a vote of 100 to 13.  Contractor Samuel Craig completed the building two years later at a cost of $4,852.20.  Located on the Lincoln Highway, this building was listed on the National Register of Historic Places in 1976. Address: 835 East North Street, Lima. Directions: E. Main Street, at the corner of SR 60 and 179 by the Post Office, Hayesville. Sponsors: Ohio Bicentennial Commission, The Longaberger Company, Hayesville Opera House Restoriation Board, The Village of Hayesville, and The Ohio Historical Society', 'Marker_1-3_Hayesville_Town_Hall_and_Opera_House', 1, 'public', 1, 'true', 11, '12,13', 'true', '4.1', NULL, NULL, NULL),
(14, 'Marker 7-3 Johnny Appleseed Land Lease and Nursery', 12, 'John "Appleseed" Chapman (b. September 26, 1774—d. March 18, 1845) was the first lessee of this 160 acre tract (NW ¼, S 20, T 20, R 16), when he secured it for 99 years from the Virginia Military District School Lands on April 10, 1815. This $320 lease complied with the Ordinance of 1785 which stipulated that proceeds from the sale or lease of a 36th of all new land in the Northwest Territory be used to support public education. Perrysville author, Rosella Rice, knew Appleseed. In a history of Ashland County, she wrote, "One of his nurseries is near us and I often go to the secluded spot on the quiet banks of the creek [Blackfork]…with sod never broken since the old man did it." Attributed as Green Township''s first permanent settler, Abram Baughman''s original 160 acres (c. 1807) adjoined this property to the west. Directions: 2662 SR 39 Perrysville, OH 44864, Ashland County, Sprang Property. Sponsors: The Sprang Family, Greentown Preservation Association, and The Ohio Historical Society.', 'Marker_7-3_Johnny_Appleseed_Land_Lease_and_Nursery', 2, 'public', 1, 'true', 12, '12,14', 'true', '4.2', NULL, NULL, NULL);

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
('c13y_ignore', 'a:2:{s:7:"version";s:5:"2.6.3";s:4:"list";a:0:{}}', 'List of ignored anomalies'),
('extents_for_templates', 'a:0:{}', 'Actived template-extension(s)'),
('blk_menubar', '', 'Menubar options'),
('menubar_filter_icon', 'false', 'Display filter icon'),
('index_sort_order_input', 'true', 'Display image order selection list'),
('index_flat_icon', 'false', 'Display flat icon'),
('index_posted_date_icon', 'true', 'Display calendar by posted date'),
('index_created_date_icon', 'false', 'Display calendar by creation date icon'),
('index_slideshow_icon', 'true', 'Display slideshow icon'),
('index_new_icon', 'true', 'Display new icons next albums and pictures'),
('picture_metadata_icon', 'true', 'Display metadata icon on picture page'),
('picture_slideshow_icon', 'true', 'Display slideshow icon on picture page'),
('picture_favorite_icon', 'true', 'Display favorite icon on picture page'),
('picture_download_icon', 'true', 'Display download icon on picture page'),
('picture_navigation_icons', 'true', 'Display navigation icons on picture page'),
('picture_navigation_thumb', 'true', 'Display navigation thumbnails on picture page'),
('picture_menu', 'false', 'Show menubar on picture page'),
('picture_informations', 'a:11:{s:6:"author";b:1;s:10:"created_on";b:1;s:9:"posted_on";b:1;s:4:"tags";b:1;s:10:"categories";b:1;s:6:"visits";b:1;s:12:"rating_score";b:1;s:13:"privacy_level";b:1;s:10:"dimensions";b:0;s:4:"file";b:0;s:8:"filesize";b:0;}', 'Information displayed on picture page'),
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
('community_cache_key', 'ufToLMzNrqJyG49VIEsG', NULL),
('meta 2.0.5', '1', 'MAJ meta'),
('meta 2.1.0', '1', 'MAJ meta'),
('contactmeta', ',', NULL),
('gmaps_api_key', '', 'Google Maps API key'),
('gpc_config', 'a:1:{s:9:"installed";s:8:"03.05.04";}', ''),
('amm_config', 'a:15:{s:20:"amm_links_show_icons";s:1:"y";s:15:"amm_links_title";a:65:{s:5:"af_ZA";s:8:"TGlua3M=";s:5:"es_AR";s:8:"TGlua3M=";s:5:"az_AZ";s:8:"TGlua3M=";s:5:"id_ID";s:8:"TGlua3M=";s:5:"pt_BR";s:8:"TGlua3M=";s:5:"br_FR";s:8:"TGlua3M=";s:5:"ca_ES";s:8:"TGlua3M=";s:5:"cs_CZ";s:8:"TGlua3M=";s:5:"da_DK";s:8:"TGlua3M=";s:5:"de_DE";s:8:"TGlua3M=";s:5:"dv_MV";s:8:"TGlua3M=";s:5:"en_UK";s:8:"TGlua3M=";s:5:"en_US";s:8:"TGlua3M=";s:5:"es_ES";s:8:"TGlua3M=";s:5:"eo_EO";s:8:"TGlua3M=";s:5:"et_EE";s:8:"TGlua3M=";s:5:"fi_FI";s:8:"TGlua3M=";s:5:"fr_FR";s:8:"TGllbnM=";s:5:"fr_CA";s:8:"TGlua3M=";s:5:"ga_IE";s:8:"TGlua3M=";s:5:"gl_ES";s:8:"TGlua3M=";s:5:"hr_HR";s:8:"TGlua3M=";s:5:"is_IS";s:8:"TGlua3M=";s:5:"it_IT";s:8:"TGlua3M=";s:5:"lv_LV";s:8:"TGlua3M=";s:5:"lb_LU";s:8:"TGlua3M=";s:5:"lt_LT";s:8:"TGlua3M=";s:5:"hu_HU";s:8:"TGlua3M=";s:5:"ms_MY";s:8:"TGlua3M=";s:5:"nl_NL";s:8:"TGlua3M=";s:5:"nn_NO";s:8:"TGlua3M=";s:5:"nb_NO";s:8:"TGlua3M=";s:5:"pl_PL";s:8:"TGlua3M=";s:5:"pt_PT";s:8:"TGlua3M=";s:5:"ro_RO";s:8:"TGlua3M=";s:5:"sl_SI";s:8:"TGlua3M=";s:5:"sk_SK";s:8:"TGlua3M=";s:5:"sh_RS";s:8:"TGlua3M=";s:5:"sv_SE";s:8:"TGlua3M=";s:5:"vi_VN";s:8:"TGlua3M=";s:5:"tr_TR";s:8:"TGlua3M=";s:5:"el_GR";s:8:"TGlua3M=";s:5:"bg_BG";s:8:"TGlua3M=";s:5:"mk_MK";s:8:"TGlua3M=";s:5:"mn_MN";s:8:"TGlua3M=";s:5:"ru_RU";s:8:"TGlua3M=";s:5:"sr_RS";s:8:"TGlua3M=";s:5:"uk_UA";s:8:"TGlua3M=";s:5:"he_IL";s:8:"TGlua3M=";s:5:"ar_SA";s:8:"TGlua3M=";s:5:"ar_MA";s:8:"TGlua3M=";s:5:"fa_IR";s:8:"TGlua3M=";s:6:"kok_IN";s:8:"TGlua3M=";s:5:"bn_IN";s:8:"TGlua3M=";s:5:"ta_IN";s:8:"TGlua3M=";s:5:"kn_IN";s:8:"TGlua3M=";s:5:"th_TH";s:8:"TGlua3M=";s:5:"ka_GE";s:8:"TGlua3M=";s:5:"km_KH";s:8:"TGlua3M=";s:5:"zh_TW";s:8:"TGlua3M=";s:5:"zh_HK";s:8:"TGlua3M=";s:5:"ja_JP";s:8:"TGlua3M=";s:5:"zh_CN";s:8:"TGlua3M=";s:5:"ko_KR";s:8:"TGlua3M=";s:5:"en_GB";s:8:"TGlua3M=";}s:25:"amm_randompicture_preload";i:25;s:26:"amm_randompicture_showname";s:1:"n";s:29:"amm_randompicture_showcomment";s:1:"n";s:32:"amm_randompicture_periodicchange";i:0;s:24:"amm_randompicture_height";i:0;s:23:"amm_randompicture_title";a:65:{s:5:"af_ZA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"es_AR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"az_AZ";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"id_ID";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"pt_BR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"br_FR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ca_ES";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"cs_CZ";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"da_DK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"de_DE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"dv_MV";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"en_UK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"en_US";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"es_ES";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"eo_EO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"et_EE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"fi_FI";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"fr_FR";s:28:"VW5lIGltYWdlIGF1IGhhc2FyZA==";s:5:"fr_CA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ga_IE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"gl_ES";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"hr_HR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"is_IS";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"it_IT";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"lv_LV";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"lb_LU";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"lt_LT";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"hu_HU";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ms_MY";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"nl_NL";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"nn_NO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"nb_NO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"pl_PL";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"pt_PT";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ro_RO";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sl_SI";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sk_SK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sh_RS";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sv_SE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"vi_VN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"tr_TR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"el_GR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"bg_BG";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"mk_MK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"mn_MN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ru_RU";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"sr_RS";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"uk_UA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"he_IL";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ar_SA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ar_MA";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"fa_IR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:6:"kok_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"bn_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ta_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"kn_IN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"th_TH";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ka_GE";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"km_KH";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"zh_TW";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"zh_HK";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ja_JP";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"zh_CN";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"ko_KR";s:24:"QSByYW5kb20gcGljdHVyZQ==";s:5:"en_GB";s:24:"QSByYW5kb20gcGljdHVyZQ==";}s:28:"amm_randompicture_selectMode";s:1:"a";s:27:"amm_randompicture_selectCat";a:0:{}s:16:"amm_blocks_items";a:13:{s:9:"favorites";a:3:{s:5:"order";s:1:"3";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:12:"most_visited";a:3:{s:5:"order";s:1:"7";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:10:"best_rated";a:3:{s:5:"order";s:1:"8";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:6:"random";a:3:{s:5:"order";s:1:"9";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:11:"recent_pics";a:3:{s:5:"order";s:2:"10";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:11:"recent_cats";a:3:{s:5:"order";s:2:"11";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:8:"calendar";a:3:{s:5:"order";s:2:"12";s:9:"container";s:7:"special";s:10:"visibility";s:1:"/";}s:7:"qsearch";a:3:{s:5:"order";s:1:"0";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:4:"tags";a:3:{s:5:"order";s:1:"1";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:6:"search";a:3:{s:5:"order";s:1:"2";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:8:"comments";a:3:{s:5:"order";s:1:"4";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:5:"about";a:3:{s:5:"order";s:1:"6";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}s:3:"rss";a:3:{s:5:"order";s:1:"5";s:9:"container";s:4:"menu";s:10:"visibility";s:1:"/";}}s:18:"amm_albums_to_menu";a:0:{}s:19:"amm_old_blk_menubar";s:143:"a:6:{s:6:"mbMenu";i:50;s:12:"mbCategories";i:100;s:7:"mbLinks";i:150;s:6:"mbTags";i:200;s:10:"mbSpecials";i:250;s:16:"mbIdentification";i:300;}";s:10:"newInstall";s:1:"n";s:9:"installed";s:8:"03.02.07";}', ''),
('GPCCore_config', 'a:1:{s:10:"registered";a:1:{s:21:"Advanced Menu Manager";a:4:{s:4:"name";s:21:"Advanced Menu Manager";s:7:"release";s:5:"3.2.7";s:6:"needed";s:5:"3.5.2";s:4:"date";s:10:"2014-04-24";}}}', ''),
('additional_pages', 'a:7:{s:9:"languages";a:1:{s:7:"default";s:16:"Additional Pages";}s:9:"show_home";b:1;s:10:"level_perm";b:0;s:10:"group_perm";b:0;s:9:"user_perm";b:0;s:13:"language_perm";b:0;s:8:"homepage";N;}', 'Additional Pages configuration'),
('GPCRequestBuilder_config', 'a:1:{s:10:"registered";a:0:{}}', '');

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
(1, 8),
(1, 11);

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=102 ;

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
(50, '2014-04-11', '14:20:18', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(51, '2014-04-11', '15:30:19', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(52, '2014-04-11', '15:40:43', 3, '127.0.0.1', 'categories', 3, NULL, NULL, 'true', NULL),
(53, '2014-04-14', '20:17:11', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(54, '2014-04-14', '20:17:46', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(55, '2014-04-14', '20:17:49', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(56, '2014-04-14', '20:18:44', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(57, '2014-04-14', '20:18:53', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(58, '2014-04-14', '20:18:55', 3, '127.0.0.1', '', NULL, NULL, NULL, 'true', NULL),
(59, '2014-04-18', '15:55:26', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'true', NULL),
(60, '2014-04-24', '09:59:51', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(61, '2014-04-24', '10:00:21', 3, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(62, '2014-05-07', '13:17:46', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(63, '2014-05-07', '13:25:58', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(64, '2014-05-07', '13:52:22', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(65, '2014-05-07', '14:04:20', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(66, '2014-05-07', '14:06:26', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(67, '2014-05-07', '14:07:31', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(68, '2014-05-07', '14:23:43', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(69, '2014-05-07', '14:24:45', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(70, '2014-05-07', '14:26:19', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(71, '2014-05-07', '14:27:38', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(72, '2014-08-13', '16:23:26', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(73, '2014-08-13', '16:24:34', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(74, '2014-08-13', '16:25:26', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(75, '2014-08-14', '08:36:16', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(76, '2014-08-14', '08:36:56', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(77, '2014-08-14', '08:37:02', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(78, '2014-08-14', '08:55:17', 2, '127.0.0.1', 'categories', 3, NULL, NULL, 'false', NULL),
(79, '2014-08-14', '08:55:29', 2, '127.0.0.1', 'categories', 9, NULL, NULL, 'false', NULL),
(80, '2014-08-14', '08:55:33', 2, '127.0.0.1', 'categories', 9, NULL, 8, 'false', 'picture'),
(81, '2014-08-14', '08:55:40', 2, '127.0.0.1', 'categories', 9, NULL, NULL, 'false', NULL),
(82, '2014-08-14', '08:55:41', 2, '127.0.0.1', 'categories', 3, NULL, NULL, 'false', NULL),
(83, '2014-08-14', '08:55:43', 2, '127.0.0.1', 'categories', 8, NULL, NULL, 'false', NULL),
(84, '2014-08-14', '08:55:46', 2, '127.0.0.1', 'categories', 8, NULL, 9, 'false', 'picture'),
(85, '2014-08-14', '08:55:49', 2, '127.0.0.1', 'categories', 8, NULL, NULL, 'false', NULL),
(86, '2014-08-14', '08:55:50', 2, '127.0.0.1', 'categories', 8, NULL, 7, 'false', 'picture'),
(87, '2014-08-14', '08:55:58', 2, '127.0.0.1', 'categories', 8, NULL, NULL, 'false', NULL),
(88, '2014-08-14', '08:56:02', 2, '127.0.0.1', 'categories', 3, NULL, NULL, 'false', NULL),
(89, '2014-08-14', '08:56:05', 2, '127.0.0.1', 'categories', 7, NULL, NULL, 'false', NULL),
(90, '2014-08-14', '08:56:06', 2, '127.0.0.1', 'categories', 7, NULL, 5, 'false', 'picture'),
(91, '2014-08-14', '08:56:11', 2, '127.0.0.1', 'categories', 7, NULL, NULL, 'false', NULL),
(92, '2014-08-14', '08:56:13', 2, '127.0.0.1', 'categories', 3, NULL, NULL, 'false', NULL),
(93, '2014-08-14', '08:56:21', 2, '127.0.0.1', 'categories', 5, NULL, NULL, 'false', NULL),
(94, '2014-08-14', '08:56:25', 2, '127.0.0.1', 'categories', 5, NULL, 3, 'false', 'picture'),
(95, '2014-08-14', '08:56:29', 2, '127.0.0.1', 'categories', 5, NULL, NULL, 'false', NULL),
(96, '2014-08-14', '14:20:05', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(97, '2014-08-14', '14:20:06', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(98, '2014-08-14', '14:26:31', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(99, '2014-08-14', '14:26:35', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL),
(100, '2014-08-14', '14:26:47', 2, '127.0.0.1', 'search', NULL, NULL, NULL, 'false', NULL),
(101, '2014-09-16', '20:30:26', 2, '127.0.0.1', 'categories', NULL, NULL, NULL, 'false', NULL);

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
(2014, NULL, NULL, NULL, 59),
(2014, 4, NULL, NULL, 59),
(2014, 4, 9, NULL, 4),
(2014, 4, 9, 15, 4),
(2014, 4, 10, NULL, 16),
(2014, 4, 10, 8, 5),
(2014, 4, 10, 9, 1),
(2014, 4, 10, 15, 2),
(2014, 4, 10, 16, 8),
(2014, 4, 11, NULL, 32),
(2014, 4, 11, 9, 3),
(2014, 4, 11, 10, 25),
(2014, 4, 11, 14, 2),
(2014, 4, 11, 15, 2),
(2014, 4, 14, NULL, 6),
(2014, 4, 14, 20, 6),
(2014, 4, 18, NULL, 1),
(2014, 4, 18, 15, 1),
(2014, NULL, NULL, NULL, 49),
(2014, 4, NULL, NULL, 49),
(2014, 4, 9, NULL, 4);

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
  `headline` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_i2` (`date_available`),
  KEY `images_i3` (`rating_score`),
  KEY `images_i4` (`hit`),
  KEY `images_i5` (`date_creation`),
  KEY `images_i1` (`storage_category_id`),
  KEY `images_i6` (`latitude`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `piwigo_images`
--

INSERT INTO `piwigo_images` (`id`, `file`, `date_available`, `date_creation`, `name`, `comment`, `author`, `hit`, `filesize`, `width`, `height`, `coi`, `representative_ext`, `date_metadata_update`, `rating_score`, `path`, `storage_category_id`, `level`, `md5sum`, `added_by`, `rotation`, `latitude`, `longitude`, `headline`) VALUES
(1, 'serpend_mound_marker.jpg', '2014-04-09 15:48:22', '2007-09-08 12:28:38', 'serpend mound marker', NULL, NULL, 1, 1512, 1600, 1200, NULL, NULL, '2014-04-23', NULL, './upload/2014/04/09/20140409154822-bf460fa1.jpg', NULL, 0, 'bf460fa1248acb256b151fe18a72d8b0', 1, 0, 39.024117, -83.429467, NULL),
(2, 'serpend_mound.jpg', '2014-04-09 15:48:47', '2006-06-11 14:36:43', 'serpend mound', NULL, NULL, 1, 71, 550, 411, NULL, NULL, '2014-04-23', NULL, './upload/2014/04/09/20140409154847-14b7ecf4.jpg', NULL, 0, '14b7ecf4bbd5c3ff9154a54fd143e83b', 1, 0, 39.024117, -83.429467, NULL),
(3, 'AdamsCoMineralSprings.jpg', '2014-04-10 16:22:36', '2007-09-11 09:58:11', 'Mineral Springs', NULL, NULL, 5, 81, 640, 480, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410162236-52482e14.jpg', NULL, 0, '52482e1430ed4443522bc9380e85b97a', 1, 0, 38.886689, -83.329570, NULL),
(4, 'AllenCoFaurotOilWell.jpg', '2014-04-10 16:23:06', '2007-09-18 19:18:39', 'Faurot Oil Well', NULL, NULL, 3, 1277, 2576, 1932, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410162306-102c377b.jpg', NULL, 0, '102c377ba2ca44bd16148f8f7cf63cb4', 1, 0, 40.743041, -84.093495, NULL),
(5, 'AdamsCoBradfordTavern.jpg', '2014-04-10 16:28:48', '2007-09-08 15:06:56', 'Bradfords Tavern', NULL, NULL, 3, 1207, 1600, 1200, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410162848-8bc9c10b.jpg', NULL, 0, '8bc9c10b5592e36dc2d4ae680fe67daf', 1, 0, 38.476910, -83.328370, NULL),
(6, 'MineralSpringsPostcard.jpg', '2014-04-10 16:33:09', '2014-04-14 00:00:00', 'Mineral Springs Postcard', NULL, NULL, 4, 56, 550, 350, NULL, NULL, '2014-04-10', NULL, './upload/2014/04/10/20140410163309-8af798b3.jpg', NULL, 0, '8af798b3b024a5edc21fe250f5e16490', 1, 0, 38.886689, -83.329570, NULL),
(8, 'AdamsFirstPresbyterianChurch.jpg', '2014-04-11 09:42:36', '2007-09-08 15:12:40', 'First Presbyterian Church', NULL, NULL, 7, 1544, 1600, 1200, NULL, NULL, '2014-04-11', NULL, './upload/2014/04/11/20140411094236-715bff30.jpg', NULL, 0, '715bff30622d4a2475115d3917feaf09', 1, 0, 38.793738, -83.544050, NULL),
(9, 'IMG_20140417_090912.jpg', '2014-04-17 09:38:31', '2014-04-17 09:09:12', 'IMG 20140417 090912', NULL, NULL, 6, 959, 1944, 2592, NULL, NULL, '2014-04-17', NULL, './upload/2014/04/17/20140417093831-673dbe36.jpg', NULL, 0, '673dbe36574f62acaa52acf0c645a2da', 1, 0, 40.003600, -82.985831, NULL),
(10, 'OilWellalongtheOttawaRiver.jpg', '2014-05-06 21:36:17', NULL, 'Oil Well along the Ottawa River', 'In 1885, 800 feet north of this marker, Benjamin Faurot struck oil after drilling into the Trenton Rock Limestone formation at a depth of 1,251 feet.  This event marked the beginning of the great Oil Boom of northwest Ohio.  The ensuing rush brought speculators who drilled hundreds of wells in the Trenton Rock (Lima) Oil Field that stretched from Mercer County north through Wood County in Ohio and west to Indiana.  By 1886, the Lima field was the nation''s leading producer of oil, and by the following year it was considered to be the largest in the world.  Production from the Ohio portion of the Lima-Indiana field reached its peak in 1896, when more than 20 million barrels were brought out of the ground.  Though short-lived, the oil rush brought an influx of people, pipelines, refineries, and businesses, giving a powerful impetus to the growth of northwest Ohio. Address: 835 East North Street, Lima. Directions: 835 East North Street, Lima', NULL, 2, 274, 1694, 1203, NULL, NULL, '2014-05-07', NULL, './galleries/Allen/Marker_5-2_Faurot_Oil_Well/OilWellalongtheOttawaRiver.jpg', 11, 0, NULL, 1, 0, 40.742784, -84.093083, NULL),
(11, 'Hayesville_Town_Hall_Opera_House_marker.jpg', '2014-05-12 18:00:00', '2008-09-22 13:39:38', 'Opera House', 'This building was a center of community life from the time of its construction in 1886 to the late 1930s.  Once common, such combinations of governmental offices and commercial and entertainment space are today rare.  The second floor opera house retains many original features, including stage backdrops, dressing rooms, and seats.  Vaudeville, theater companies, and entertainment of all kinds were hosted here and many performers signed the backstage walls:  Buffalo Bill dated his signature October 28, 1888.  Along with village offices, first floor tenants have included the Vermillion Township Trustees, the Eddie Stover Hat Shop, and the F.L. Smith Watch Repair and Jewelry Store.  Hayesville''s citizens approved the hall''s construction on April 18, 1884 by a vote of 100 to 13.  Contractor Samuel Craig completed the building two years later at a cost of $4,852.20.  Located on the Lincoln Highway, this building was listed on the National Register of Historic Places in 1976. Address: 835 East North Street, Lima. Directions: E. Main Street, at the corner of SR 60 and 179 by the Post Office, Hayesville. Sponsors: Ohio Bicentennial Commission, The Longaberger Company, Hayesville Opera House Restoriation Board, The Village of Hayesville, and The Ohio Historical Society', NULL, 4, 515, 1000, 750, NULL, NULL, '2014-05-12', NULL, './galleries/Ashland/Marker_1-3_Hayesville_Town_Hall_and_Opera_House/Hayesville_Town_Hall_Opera_House_marker.jpg', 13, 0, NULL, 1, 0, 40.772980, -82.262120, 'Hayesville Town Hall and Opera House'),
(12, 'Johnny_Appleseed_Land_Lease_and_Nursery.jpg', '2014-05-13 13:37:56', '2009-07-03 13:07:50', 'Johnny Appleseed Marker --Norman and Irma Sprang', 'John "Appleseed" Chapman (b. September 26, 1774', NULL, 1, 543, 1600, 1200, NULL, NULL, '2014-05-13', NULL, './galleries/Ashland/Marker_7-3_Johnny_Appleseed_Land_Lease_and_Nursery/Johnny_Appleseed_Land_Lease_and_Nursery.jpg', 14, 0, NULL, 1, 0, 40.389640, -82.486250, 'Johnny "Appleseed" Land Lease and Nursery'),
(13, 'The_Setting_of_the_Marker.jpg', '2014-05-14 10:27:08', '0000-00-00 00:00:00', 'The_Setting of the Marker', 'This building was a center of community life from the time of its construction in 1886 to the late 1930s.  Once common, such combinations of governmental offices and commercial and entertainment space are today rare.  The second floor opera house retains many original features, including stage backdrops, dressing rooms, and seats.  Vaudeville, theater companies, and entertainment of all kinds were hosted here and many performers signed the backstage walls:  Buffalo Bill dated his signature October 28, 1888.  Along with village offices, first floor tenants have included the Vermillion Township Trustees, the Eddie Stover Hat Shop, and the F.L. Smith Watch Repair and Jewelry Store.  Hayesville''s citizens approved the hall''s construction on April 18, 1884 by a vote of 100 to 13.  Contractor Samuel Craig completed the building two years later at a cost of $4,852.20.  Located on the Lincoln Highway, this building was listed on the National Register of Historic Places in 1976. Address: 835 East North Street, Lima. Directions: E. Main Street, at the corner of SR 60 and 179 by the Post Office, Hayesville. Sponsors: Ohio Bicentennial Commission, The Longaberger Company, Hayesville Opera House Restoriation Board, The Village of Hayesville, and The Ohio Historical Society.', NULL, 1, 1502, 2816, 2112, NULL, NULL, '2014-05-14', NULL, './galleries/Ashland/Marker_1-3_Hayesville_Town_Hall_and_Opera_House/The_Setting_of_the_Marker.jpg', 13, 0, NULL, 1, 0, 40.772980, -82.262120, 'Hayesville Town Hall and Opera House'),
(14, 'Faurot_Oil_Well_along_the_Ottawa_River.jpg', '2014-05-14 10:53:25', '2007-09-18 19:18:39', 'Oil Well along the Ottawa River', 'In 1885, 800 feet north of this marker, Benjamin Faurot struck oil after drilling into the Trenton Rock Limestone formation at a depth of 1,251 feet.  This event marked the beginning of the great Oil Boom of northwest Ohio.  The ensuing rush brought speculators who drilled hundreds of wells in the Trenton Rock (Lima) Oil Field that stretched from Mercer County north through Wood County in Ohio and west to Indiana.  By 1886, the Lima field was the nation''s leading producer of oil, and by the following year it was considered to be the largest in the world.  Production from the Ohio portion of the Lima-Indiana field reached its peak in 1896, when more than 20 million barrels were brought out of the ground.  Though short-lived, the oil rush brought an influx of people, pipelines, refineries, and businesses, giving a powerful impetus to the growth of northwest Ohio. Address: 835 East North Street, Lima. Directions: 835 East North Street, Lima', NULL, 1, 1278, 2576, 1932, NULL, NULL, '2014-05-14', NULL, './galleries/Allen/Marker_5-2_Faurot_Oil_Well/Faurot_Oil_Well_along_the_Ottawa_River.jpg', 11, 0, NULL, 1, 0, 40.742784, -84.093083, NULL);

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
(14, 11, NULL),
(3, 5, 1),
(5, 7, 1),
(6, 5, 2),
(8, 9, 1),
(10, 11, NULL),
(11, 13, NULL),
(12, 14, NULL),
(13, 13, NULL),
(14, 14, NULL);

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
(8, 2),
(10, 3),
(11, 3),
(11, 4),
(11, 5),
(12, 6),
(12, 7),
(13, 3),
(13, 4),
(13, 5),
(14, 3),
(14, 8),
(14, 9);

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
('en_GB', '2.6.0', 'English [GB]'),
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

--
-- Dumping data for table `piwigo_meta_img`
--

INSERT INTO `piwigo_meta_img` (`id`, `metaKeyimg`, `metadesimg`) VALUES
(9, '', '');

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
('meta', 'active', '2.6.c'),
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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

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
(8, '2014-04-24', 'a:1:{s:1:"q";s:6:"church";}'),
(9, '2014-04-17', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:1:{i:0;s:6:"church";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(10, '2014-04-24', 'a:1:{s:1:"q";s:4:"#5-2";}'),
(11, '2014-04-24', 'a:1:{s:1:"q";s:3:"5-2";}'),
(12, '2014-04-24', 'a:1:{s:1:"q";s:10:"covenanter";}'),
(13, '2014-08-14', 'a:2:{s:6:"fields";a:1:{s:8:"allwords";a:2:{s:5:"words";a:2:{i:0;s:5:"adams";i:1;s:6:"county";}s:4:"mode";s:3:"AND";}}s:4:"mode";s:3:"AND";}'),
(14, '2014-08-14', 'a:1:{s:1:"q";s:5:"adams";}');

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
('41B9r3is798c2a7surqrpgmpqc3lk0', 'pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:0;s:20:"create_whole_gallery";b:0;s:10:"user_album";b:0;s:17:"create_categories";a:0:{}s:17:"upload_categories";a:0:{}s:14:"permission_ids";a:0:{}s:9:"nb_photos";i:0;s:7:"storage";i:0;s:17:"community_enabled";b:0;}community_cache_key|s:20:"IsnzjL8nEb9qJRJ90HNs";community_user_id|s:1:"2";pwg_referer_image_id|s:1:"6";', '2014-10-12 10:08:47'),
('422Ar3is798c2a7surqrpgmpqc3lk0', 'pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:0;s:20:"create_whole_gallery";b:0;s:10:"user_album";b:0;s:17:"create_categories";a:0:{}s:17:"upload_categories";a:0:{}s:14:"permission_ids";a:0:{}s:9:"nb_photos";i:0;s:7:"storage";i:0;s:17:"community_enabled";b:0;}community_cache_key|s:20:"IsnzjL8nEb9qJRJ90HNs";community_user_id|s:1:"2";', '2014-10-11 11:08:22'),
('413Cr3is798c2a7surqrpgmpqc3lk0', 'pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:0;s:20:"create_whole_gallery";b:0;s:10:"user_album";b:0;s:17:"create_categories";a:0:{}s:17:"upload_categories";a:0:{}s:14:"permission_ids";a:0:{}s:9:"nb_photos";i:0;s:7:"storage";i:0;s:17:"community_enabled";b:0;}community_cache_key|s:20:"IsnzjL8nEb9qJRJ90HNs";community_user_id|s:1:"2";pwg_referer_image_id|s:1:"6";', '2014-10-15 18:35:18'),
('7F0091rtchob79k6q3lngktgckteh7', 'pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:1;s:20:"create_whole_gallery";b:1;s:10:"user_album";b:0;s:17:"create_categories";a:10:{i:0;i:2;i:1;i:3;i:2;i:5;i:3;i:7;i:4;i:9;i:5;i:10;i:6;i:11;i:7;i:12;i:8;i:13;i:9;i:14;}s:17:"upload_categories";a:10:{i:0;i:2;i:1;i:3;i:2;i:5;i:3;i:7;i:4;i:9;i:5;i:10;i:6;i:11;i:7;i:12;i:8;i:13;i:9;i:14;}s:14:"permission_ids";a:1:{i:0;s:1:"1";}s:9:"nb_photos";i:-1;s:7:"storage";i:-1;s:17:"community_enabled";b:1;}community_cache_key|s:20:"ufToLMzNrqJyG49VIEsG";community_user_id|s:1:"1";pwg_uid|i:1;need_update|b:0;extensions_need_update|a:0:{}bulk_manager_filter|a:1:{s:9:"prefilter";s:6:"caddie";}pwg_referer_image_id|s:2:"14";pwg_show_metadata|i:1;', '2014-10-21 21:12:31'),
('6266r3is798c2a7surqrpgmpqc3lk0', 'pwg_device|s:7:"desktop";pwg_mobile_theme|b:0;community_user_permissions|a:9:{s:20:"upload_whole_gallery";b:1;s:20:"create_whole_gallery";b:1;s:10:"user_album";b:0;s:17:"create_categories";a:11:{i:0;i:2;i:1;i:3;i:2;i:5;i:3;i:7;i:4;i:8;i:5;i:9;i:6;i:10;i:7;i:11;i:8;i:12;i:9;i:13;i:10;i:14;}s:17:"upload_categories";a:11:{i:0;i:2;i:1;i:3;i:2;i:5;i:3;i:7;i:4;i:8;i:5;i:9;i:6;i:10;i:7;i:11;i:8;i:12;i:9;i:13;i:10;i:14;}s:14:"permission_ids";a:1:{i:0;s:1:"1";}s:9:"nb_photos";i:-1;s:7:"storage";i:-1;s:17:"community_enabled";b:1;}community_cache_key|s:20:"IsnzjL8nEb9qJRJ90HNs";community_user_id|s:1:"1";pwg_referer_image_id|s:1:"6";pwg_uid|i:1;need_update|b:0;extensions_need_update|a:0:{}', '2014-10-16 08:50:53');

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `piwigo_tags`
--

INSERT INTO `piwigo_tags` (`id`, `name`, `url_name`) VALUES
(2, 'religion', 'religion'),
(3, 'Region One', 'region_one'),
(4, 'Performing Arts', 'performing_arts'),
(5, 'Theaters', 'theaters'),
(6, 'Horticulture', 'horticulture'),
(7, 'Agriculture', 'agriculture'),
(8, 'Oil industry', 'oil_industry'),
(9, 'Mining', 'mining');

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
('dark', '2.6.0', 'dark'),
('markers', '2.6.0', 'markers');

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
(1, 'Admin', '$P$G3J62uCsV5LsTAGnl1DmXH1wNDug3e0', 'psager@ohiohistory.org'),
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
(1, 'false', 1413939311, '0', 9, '2014-05-14 10:53:25', 8, NULL, 'NOT IN', '0');

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
(1, 3, NULL, '2014-04-11 09:42:36', 0, 4, 3, 3, 8),
(1, 5, '2014-04-10 16:33:09', '2014-04-10 16:33:09', 2, 2, 0, 0, 3),
(1, 7, '2014-04-10 16:28:48', '2014-04-10 16:28:48', 1, 1, 0, 0, 5),
(1, 9, '2014-04-11 09:42:36', '2014-04-11 09:42:36', 1, 1, 0, 0, 8),
(1, 10, NULL, '2014-05-14 10:53:25', 0, 2, 1, 1, 14),
(1, 11, '2014-05-14 10:53:25', '2014-05-14 10:53:25', 2, 2, 0, 0, 14),
(1, 12, NULL, '2014-05-14 10:53:25', 0, 4, 2, 2, 12),
(1, 13, '2014-05-14 10:27:08', '2014-05-14 10:27:08', 2, 2, 0, 0, NULL),
(1, 14, '2014-05-14 10:53:25', '2014-05-14 10:53:25', 2, 2, 0, 0, NULL);

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
(1, 15, 'webmaster', 'en_US', 'false', 'false', 'false', 7, 'markers', '2014-04-09 14:53:20', 'true', 8, NULL),
(2, 15, 'guest', 'en_UK', 'false', 'false', 'false', 7, 'markers', '2014-04-09 14:53:20', 'true', 0, NULL),
(3, 15, 'normal', 'en_US', 'false', 'false', 'false', 7, 'markers', '2014-04-10 08:41:00', 'true', 0, NULL);

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

--
-- Dumping data for table `piwigo_user_mail_notification`
--

INSERT INTO `piwigo_user_mail_notification` (`user_id`, `check_key`, `enabled`, `last_send`) VALUES
(1, '60NLq1a9vyePTr57', 'false', NULL),
(3, '8P07s4d8djIl45v8', 'false', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
