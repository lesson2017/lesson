/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-02-23 18:34:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog_list
-- ----------------------------
DROP TABLE IF EXISTS `blog_list`;
CREATE TABLE `blog_list` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `content` text,
  `author` varchar(10) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `classify` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_list
-- ----------------------------
INSERT INTO `blog_list` VALUES ('6', '博客测试3号机', '<p>博客测试3号机运行正常</p>', 'ghost', '2017-02-23 17:28:34', null);

-- ----------------------------
-- Table structure for blog_user
-- ----------------------------
DROP TABLE IF EXISTS `blog_user`;
CREATE TABLE `blog_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `nickname` varchar(20) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `inn` varchar(100) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `ip` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_user
-- ----------------------------
INSERT INTO `blog_user` VALUES ('18', 'lianxiang@beecredit.com', '连香', '0', '111111', '[\"JavaScript\",\"PHP\",\"HTML5\",\"Node.js\",\"Java\",\"AngularJs\"]', '2017-02-22 09:34:47', '192.168.1.15');
INSERT INTO `blog_user` VALUES ('19', 'lianyu@beecredit.com', '连玉', '0', '111111', '\"PHP\"', '2017-02-22 11:23:53', '192.168.1.15');
