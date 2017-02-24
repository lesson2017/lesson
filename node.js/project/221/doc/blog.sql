/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-02-24 19:12:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog_labs
-- ----------------------------
DROP TABLE IF EXISTS `blog_labs`;
CREATE TABLE `blog_labs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_labs
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_list
-- ----------------------------
INSERT INTO `blog_list` VALUES ('8', '前言 序 中国文明正源的强势生存', '<p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">一</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　大秦帝国是中国文明的正源。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　大秦帝国所处的时代是中国五千年文明史中最重要的一个时代。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　不幸的是，作为统一帝国的短促与后来以儒家观念为核心的官方意识形态的刻意贬损，秦帝国在“暴虐苛政”的恶名下几乎湮没在历史的沉沉烟雾之中。有限史料所显示的错讹断裂且不必论，明清通俗小说《东周列国志》、《二十四史演义》等通俗史话作品，对秦帝国的描述更是鲁莽灭裂，放肆亵渎，竟然将这段历史涂抹得狰狞可怖面目全非。这种荒诞的史观，非但是官方正统意识形态的形象化，而且流布民间，形成了中国民众源远流长的“暴秦”口碑。事实上，对于酷爱说古道今的中国老百姓而言，话本小说、评书戏剧、民间传说等对民众意识所起到的浸润奠基作用，远远大于晦涩难懂的史书。两千年来，在对秦帝国的描绘评判中，旧的正统形态与旧的民间艺术异曲同工，或刻意贬损，或肆意涂抹，悠悠岁月中竟是众口铄金，中国文明正源的万丈光焰竟然离奇得变形了。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　这是中国历史的悲剧，也是中国文明的悲剧——一个富有正义感与历史感的民族，竟将奠定自己文明根基的伟大帝国硬生生划入异类而生猛挞伐！</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　悲剧的深远阴影正在随着历史的进步而渐渐淡化，儒家式的恶毒咒骂也已经大体终止了。但是，国人乃至世界对秦帝国的了解，还依然朦胧混沌。尽管万里长城、兵马俑、郡县制、度量衡以至我们每日使用的方块字（请注意，人们叫它“汉字”），都实实在在地矗立在那里，人们观念的分裂却依旧如斯。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　秦为何物？老百姓还是不甚了了。即或在知识阶层，能够大体说叨秦帝国来龙去脉与基本功绩的，也是凤毛麟角。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　于是，就有了将秦帝国说叨清楚的冲动。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　在漫长艰苦的写作中，这种冲动已经慢慢淡了下来，化成一个简单的愿望——将事实展现出来，让人们自己去判断。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; text-align: left; background-color: rgb(255, 255, 255);\">　　虽然如此，还是想将研究与写作过程中形成的一些基本思想大体说说，给读者与研究家们提供些许谈资，以做深究品评。</p><p><br/></p>', 'ghost', '2017-02-24 16:23:54', 'css');
INSERT INTO `blog_list` VALUES ('9', '序 中国文明正源的强势生存', '<p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">二</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">　　通常意义上，“帝国”是一个历史概念。它一般包含三个基本标准：其一，统一辽阔的国土（小国家没有帝国）；其二，专制统治（民主制没有帝国）；其三，强大的军事扩张（无扩张不成帝国）。秦在这三个方面都表现得极为鲜明，可算是典型的古典帝国，而不是一个普通的王朝。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">　　所以，这部描述秦兴亡生灭过程的长篇历史小说，就叫了《大秦帝国》。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">　　秦之作为大帝国，略早于西方的罗马帝国，但大体上是同时代的。在古朴粗犷的铁器农耕时代，大秦帝国与西方罗马帝国一起，成为高悬于人类历史天空的两颗太阳，同时成为东西方文明的正源。但是，大秦帝国与罗马帝国的历史命运却是截然不同的。这里有两个基本方面特别值得注意：其一，秦帝国统一大政权存在的时间极短，只有十五年；而罗马帝国却有数百年大政权的历史。其二，秦帝国创造的一整套国家体制与文明体系，奠定了中国文明的根基，而且绵延不断地流传了下来；具有数百年历史的罗马帝国，却在历史更替中变成了无数破碎的裂片，始终未能建立一脉相承的统一文明。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">　　一个是滔滔大河千古不废。一个是源与流断裂，莽莽大河化成了淙淙小溪。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">　　历史命运的不同，隐寓着两种文明方式内在的巨大差异。详细比较研究这种差异，不是文学作品的任务。《大秦帝国》所展现的，只是这个东方大帝国的生灭兴亡史的形象故事。与罗马帝国的比较只是说明，秦帝国是一个具有世界意义的东方帝国，是创造了一整套不朽文明体系的大帝国。在整个人类文明史中，这样的大帝国是独一无二的。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">　　这是我创作《大秦帝国》的信念根基。</p><p style=\"margin-top: 36px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, &quot;Luxi Sans&quot;, &quot;DejaVu Sans&quot;, Tahoma, &quot;Hiragino Sans GB&quot;, 宋体; font-size: 18px; line-height: 36px; white-space: normal; background-color: rgb(255, 255, 255);\">　　我对大秦帝国有着一种神圣的崇拜。</p><p><br/></p>', 'ghost', '2017-02-24 16:22:38', 'node');
INSERT INTO `blog_list` VALUES ('10', '澈丹小和尚', '<p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【师傅，你知道我在想谁么？】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【昨天那个女施主。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【你怎么知道。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【我也在想。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【那你怎么睡得着？】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【那是大方丈的闺女，想也白想。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【师傅，想必我在庙里呆不久了，我怕我控制不住自己。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【还想她呢？】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【嗯。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【那就别控制了，为师传你一套迷魂经。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【你怎么不用？】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【此经一生一念，一念一缘，我已经有你师娘了。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【我靠，那我还是等等看还有没有更合适的吧。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【操，没用，都会腻的。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【小和尚，听说你喜欢我？】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【不好说喜欢，只是看见你会乱】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【听说你还想娶我？】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【不好说想娶，只是想永远和你在一起。】</p><p style=\"color: rgb(51, 51, 51); font-family: Tahoma, Verdana, sTHeiTi, simsun, sans-serif; font-size: 14px; line-height: 21px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">【妈逼，油嘴滑舌，你丫天秤座的吧？】</p><p><br/></p>', 'ghost', '2017-02-24 14:59:33', 'node');

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
