/*
Navicat MySQL Data Transfer

Source Server         : pythondb
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : wx_db

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2018-10-09 16:41:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for all_forum
-- ----------------------------
DROP TABLE IF EXISTS `all_forum`;
CREATE TABLE `all_forum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `cover` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `who_send` int(11) NOT NULL,
  `watch` int(11) NOT NULL DEFAULT '0',
  `comments` int(11) DEFAULT NULL,
  `submit_time` datetime NOT NULL,
  `allow_show` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `author` (`who_send`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of all_forum
-- ----------------------------
INSERT INTO `all_forum` VALUES ('1', 'test', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'test description', 'test content', '2', '0', '1', '2018-09-14 09:49:00', '1');
INSERT INTO `all_forum` VALUES ('2', 'second test', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'second test description', 'this is second test content', '2', '0', null, '2018-10-09 13:49:33', '1');
INSERT INTO `all_forum` VALUES ('3', 'test others', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'test others write article', 'this is others people write', '5', '0', null, '2018-10-09 14:05:44', '1');

-- ----------------------------
-- Table structure for bc_user
-- ----------------------------
DROP TABLE IF EXISTS `bc_user`;
CREATE TABLE `bc_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bc_user
-- ----------------------------
INSERT INTO `bc_user` VALUES ('1', '123', '123');
INSERT INTO `bc_user` VALUES ('2', '123', '202cb962ac59075b964b07152d234b70');
INSERT INTO `bc_user` VALUES ('5', '111', '698d51a19d8a121ce581499d7b701668');
