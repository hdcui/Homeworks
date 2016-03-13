-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-01-06 13:44:20
-- 服务器版本： 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `baidunewsdb`
--

CREATE TABLE `baidunewsdb` (
  `newsid` int(10) UNSIGNED NOT NULL,
  `newsclass` varchar(20) NOT NULL,
  `newsimg` varchar(1000) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newscontent` varchar(400) NOT NULL,
  `newslink` varchar(1000) NOT NULL,
  `newsdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `baidunewsdb`
--

INSERT INTO `baidunewsdb` (`newsid`, `newsclass`, `newsimg`, `newstitle`, `newscontent`, `newslink`, `newsdate`) VALUES
(1, 'baijia', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=54d03489a7ec08fa260010a461ef3d4d/1b4c510fd9f9d72ac38a802bd32a2834349bbb1e.jpg', '为什么这些人可以轻松掌握30种语言？', '并没有一个决定因素会阻碍人们高效学习其他语言。', 'http://synchuman.baijia.baidu.com/article/262381', '2015-12-13'),
(2, 'baijia', 'http://h.hiphotos.baidu.com/news/crop%3D0%2C8%2C495%2C297%3Bw%3D638/sign=96172ed89b82d158afcd03f1bd3a35e0/43a7d933c895d143ea554c1574f082025aaf07e0.jpg', '双12期末考，巨头网易的电商之路苦尽甘来', '与网易考拉海购相接近的主要是聚美和唯品会两家，而以市值来衡量的话，目前网易市值230亿美元，唯...', 'http://wangliyang.baijia.baidu.com/article/262366', '2015-12-13'),
(6, 'baijia', 'http://a.hiphotos.baidu.com/news/crop%3D65%2C2%2C1059%2C635%3Bw%3D638/sign=a92966915eee3d6d3689dd8b7e20580e/08f790529822720ef4e797cc7ccb0a46f21fabdf.jpg', '新型黄金轻如空气', '这个常识最近就会被打破，因为一种新型的“黄金”比泡沫还轻，居然可以浮在的卡布奇诺泡沫之上。', 'http://kangsitanding.baijia.baidu.com/article/262279', '2015-12-13'),
(7, 'baijia', 'http://a.hiphotos.baidu.com/news/crop%3D121%2C3%2C1318%2C791%3Bw%3D638/sign=ea4bc156322ac65c734a3c33c6c38020/eac4b74543a982261f3036118d82b9014a90eb17.jpg', '竞争与合作：第三方支付业与商业银行的发展', '使用“扫一扫”即可将网页分享至朋友圈。', 'http://bashusong.baijia.baidu.com/article/262264', '2015-12-13'),
(8, 'baijia', 'http://h.hiphotos.baidu.com/news/crop%3D14%2C1%2C652%2C391%3Bw%3D638/sign=5958cf5ed609b3defff0be28f18e58ad/d1a20cf431adcbef791f1630abaf2edda3cc9fd8.jpg', '双十二，华山论剑排定座次的双十二', '此前的所有竞争，都是各平台围绕消费者的竞争，但双十二线下支付让更多的商家开始信赖阿里平台提供的帮助。', 'http://xieqiang.baijia.baidu.com/article/262319', '2015-12-13'),
(9, 'baijia', 'http://b.hiphotos.baidu.com/news/crop%3D0%2C23%2C1280%2C768%3Bw%3D638/sign=3d2d843334fa828bc56cc7a3c02f6d06/a686c9177f3e6709482e45c93cc79f3df8dc55dd.jpg', '联想陈旭东：把心思花在五花八门的邀请函不是真创新', '安卓智能手机市场已成斗兽场，不创新行吗。', 'http://shangjigang.baijia.baidu.com/article/262266', '2015-12-13'),
(10, 'baijia', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=a4840d4a560fd9f9a017566a1d2dd42b/902397dda144ad3416fea5b1d7a20cf431ad8546.jpg', '阿里收购《南华早报》，百年报业的三大可能走向？', '此次收购的是南华早报集团旗下的媒体资产，包括《南华早报》的纸质和网络版，杂志和户外媒体等业务。', 'http://wangguanxiong.baijia.baidu.com/article/262239', '2015-12-13'),
(11, 'baijia', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C2%2C428%2C257%3Bw%3D638/sign=4a4fde11783e6709aa4f1fbf06f7b30f/3812b31bb051f8196bd1217cddb44aed2e73e714.jpg', '《万万没想到》：干瘪的时代需要十万种万万没想到', '叫兽表示，与传统的西游题材不同，此次《万万没想到》做的是反转西游，是西游四人组遇到屌丝小妖王大...', 'http://yi.baijia.baidu.com/article/262240', '2015-12-13'),
(12, 'keji', 'http://r3.sinaimg.cn/10230/2015/1213/33/4/99558742/auto.jpg', '东芝拟上调五位前高管索赔费用', '有关东芝公司大量虚报利润的财务造假问题，公司预计将向主导不当财务的前社长等5人共计索赔超过10...', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpnqf9655593-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-13'),
(13, 'keji', 'http://r3.sinaimg.cn/10230/2015/1103/f4/1/02552274/550x366.jpg', '用户施压成功：微软将恢复免费15GB云存储', '如果启用了智能手机照片集功能，那么OneDrive还将提供额外的15GB空间，是真的吗。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpnqm3185436-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-13'),
(14, 'keji', 'http://img1.gtimg.com/tech/pics/hv1/204/237/1984/129070239.png', '苹果到底准备怎样解决iPhone的续航问题？', '苹果好像还要在手机上做实验，据传明年的iPhone7可能会直接取消3.5毫米耳机接口。', 'http://tech.qq.com/a/20151213/011600.htm', '2015-12-13'),
(15, 'keji', 'http://inews.gtimg.com/newsapp_bt/0/118521764/1000', '传新Nexus手机仍由华为开发', 'Nexus6P的反响良好，而谷歌目前没有理由更换Nexus设备的开发商。', 'http://view.inews.qq.com/a/DIG2015121301233301', '2015-12-30'),
(16, 'keji', 'http://image.tech.china.cn//upload/images/2015/1213/001944/68_212320_d6bb7e39ece6c703317b7e344f4e5e6a.jpg', '华为荣耀发力智能家居 公布华为HiLink计划', '当下的智能家居行业还属于初级阶段，各品牌厂商各自为阵，市场上充斥着眼花缭乱的APP、缺乏联动的...', 'http://tech.china.com.cn/it/20151213/212320.shtml', '2015-12-13'),
(17, 'keji', 'http://y3.ifengimg.com/a/2015_50/4ba4079a004b5f8.jpg', '专利表明未来三星智能手机或可更换镜头', '如果不喜欢手机的相机，用户就可以更换具有更高像素，或者光圈、焦距等规格不同的相机。', 'http://i.ifeng.com/news?aid=104026252', '2015-12-13'),
(18, 'keji', 'http://image.tianjimedia.com/uploadImages/upload/20151212/yvsihuxg5cfjpg.jpg', '中国银联"云闪付"正式发布 支持安卓手机', '中国银联产品部负责人李春欢说，目前银联支持“云闪付”的POS终端占比超6成，下一步将继续加大机...', 'http://news.yesky.com/456/99267456.shtml', '2015-12-13'),
(19, 'keji', 'http://img6.cache.netease.com/tech/2015/12/12/2015121209580920569_550.png', 'Priv卖脱销 黑莓股价上涨7%', '本周有消息称Priv在沃尔玛和百思买卖到断货，受此消息刺激，黑莓股价上涨7%。', 'http://tech.163.com/15/1212/09/BAKIUAFE000915BE.html', '2015-12-13'),
(20, 'tiyu', 'http://r3.sinaimg.cn/10230/2015/1213/41/e/52562267/550x367.jpg', 'ATP年度大满贯冷门前两名：费德勒澳网意外出局居首', '继续我们的赛季回顾系列，ATP官网带你回顾2015赛季大满贯5大爆冷比赛，今天我们先来回顾No...', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpnqf9655805-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-17'),
(21, 'tiyu', 'http://r3.sinaimg.cn/10230/2015/1213/58/5/39557239/570x320.jpg', '老虎30大时刻NO.18：08年美国公开赛后动膝盖手术', '他告诉全世界，他计划动终结这个赛季的手术，那意味着他不得不放弃两场大满贯赛和莱德杯。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpnqm3185260-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-13'),
(22, 'tiyu', 'http://img4.cache.netease.com/3g/2015/12/13/201512130832505c255.png', '依赖梅西?巴萨SN组合完爆MS', '在MS单独带队时，巴萨本赛季6场比赛的成绩仅为2胜3平1负。', 'http://sports.163.com/15/1213/03/BAMECSO700051C8V.html', '2015-12-13'),
(23, 'tiyu', 'http://r3.sinaimg.cn/10230/2015/1020/8c/c/03559095/435x310.jpg', '四国赛文一击败非洲明星队 胡卫东迎NBL执教首胜', '文一男篮新任主教练胡卫东上任首战取得“开门红”。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpnqm3185497-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-13'),
(24, 'tiyu', 'http://r3.sinaimg.cn/10230/2015/1213/bc/7/12557254/auto.jpg', '西媒惊呼西班牙掉入死亡之组：务必争取第一！', '2016年欧洲杯小组赛的抽签已经结束，卫冕冠军西班牙遭遇捷克、土耳其以及克罗地亚，西班牙几大媒...', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpxnx5042586-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-13'),
(25, 'tiyu', 'http://inews.gtimg.com/newsapp_bt/0/118101499/1000', '林书豪组东部最强板凳二人组', '骑士轻取魔术，汤普森生涯篮板数达到2787个，超越蒂龙-希尔，升至队史篮板榜第十位。', 'http://view.inews.qq.com/a/SPO2015121202894402', '2015-12-13'),
(26, 'tiyu', 'http://y2.ifengimg.com/a/2015_50/d5e8070c52510e4.jpg', '鲁能正式宣布巴西名帅上任 他可是内马尔的恩师', '在曼诺先生的执教生涯中，先后与鲁能4名巴西外援合作，对他们的特点和情况较为熟悉。', 'http://i.ifeng.com/news?aid=104029581', '2015-12-13'),
(27, 'tiyu', 'http://r3.sinaimg.cn/10230/2015/1213/32/8/94563474/570x380.jpg', '壕!恒大携4000件球衣赴大阪 为球队在日本打造主场', '过海关的时候，还为此交了2万日元的税费。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpnqm3184337-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-13'),
(28, 'tuijian', 'http://img1.cache.netease.com/cnews/2015/12/13/20151213155032f3955_550.jpg', '被哈佛录取女孩妈妈:一直放养', '这是杭二中第一个在本科阶段被哈佛大学录取的学生，也是浙江省第一个被哈佛本科提前录取的学生。', 'http://news.163.com/15/1213/15/BANPISTJ00011229.html', '2015-12-19'),
(29, 'tuijian', 'http://r3.sinaimg.cn/10230/2015/1213/cb/7/03558997/550x409.jpg', '家长交了2万余元学费 还没上课幼儿园就关停.图', '他是在6月30日为孩子交了半年的学费、餐费等，共计28000元，我们家孩子上了10来天，幼儿园...', 'http://news.163.com/15/1213/15/BANPISTJ00011229.html', '2015-12-13'),
(30, 'tuijian', 'http://news.ittime.com.cn/uploadimage/images/564e5e6c622adoriginal.jpg', '清华大学教授孙立平：弄不好中产阶级还要遭次洗劫', '清华大学社会学系教授孙立平，发表了主题为《当前中国的经济困境与社会转型》的演讲，总结了他对过去...', 'http://news.ittime.com.cn/news/news_9566.shtml', '2015-12-13'),
(31, 'tuijian', 'http://img1.cache.netease.com/catchpic/a_/AD/ADF24FD0FB95AA1EDA97F736883A170B.jpg', '特朗普与沙特王子在网上互撕', '一向奉行“语不惊人死不休”的特朗普发表极端言论，要求美国“全面禁止”穆斯林入境，否则恐遭更多类...', 'http://news.163.com/15/1213/14/BANKNVDV00014SEH.html', '2015-12-13'),
(32, 'tuijian', 'http://r3.sinaimg.cn/10230/2015/1213/1c/2/01554710/570x356.jpg', '盘点4大连胜杀手 44年前灭湖人的凶手就是他们', '金州勇士在客场以95-108负于密尔沃基雄鹿，本赛季开局24胜0负的不败战绩终于遭到终结。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxmpnqf9660672-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', '2015-12-13'),
(40, 'keji', 'http://inews.gtimg.com/newsapp_bt/0/124163770/1000', '用S6拍电影和摄影机差多少', '由于它是经过三位专业的电影制作人之手，因此我们相信视频在后期依然经过了特效处理和剪辑才能达到如...', 'http://view.inews.qq.com/a/DIG2015121802759305', '2015-12-19'),
(43, 'tuijian', 'http://inews.gtimg.com/newsapp_bt/0/138614996/1000&fm=36', '昨夜离岸人民币大跌逾600点', '对于1月4日早盘离岸人民币兑美元汇率突然大跌170个基点，上述外汇交易员感觉颇为意外。', 'http://view.inews.qq.com/a/FIN2016010500876001', '2016-01-06'),
(45, 'baijia', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C532%2C319%3Bw%3D638/sign=84438413abaf2eddc0be13a9b0202dd8/cc11728b4710b9123ab60cebc4fdfc03924522b4.jpg', '黎万强牵头的小米影业 会成为乐视影业的劲敌吗？', '小米影业在内容上的投资主要在陈彤手里的十亿美金，大多花在为了充实小米电视的内容上，和乐视影业在...', 'http://xiaomengdog.baijia.baidu.com/article/286083', '2016-01-06'),
(48, 'tiyu', 'http://r3.sinaimg.cn/10230/2016/0105/df/5/96563192/570x382.jpg', '迪瓦茨曝被湖人交易想退役 称科比最伟大之一', '近20年前，湖人队完成了NBA史上最佳引援之一，他们通过交易得到科比，并签下自由球员奥尼尔，从...', 'http://sinanews.sina.cn/sharenews.shtml?id=fxneept3758686-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', '2016-01-06'),
(51, 'keji', 'http://img1.gtimg.com/digi/pics/hv1/159/33/1999/129993549.jpg', '世界首款可听音乐看视频的折叠耳机亮相CES', '该产品将会是世界上首款既可以听音频，又可以看视频的折叠耳机，一起来看一下。', 'http://digi.tech.qq.com/a/20160105/038444.htm', '2016-01-05'),
(52, 'tuijian', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C0%2C601%2C360%3Bw%3D638/sign=d231f57e222dd42a4b465beb3e0b7785/8cb1cb1349540923d84fc3699558d109b3de4986.jpg', '伟大的设计争论：像微信一样繁琐会成为烂摊子吗？', '从购买火车票到寻找一个按摩服务，微信几乎提供了一个全平台的互联网服务，毫不夸张的说，你可以在微...', 'http://junstapo.baijia.baidu.com/article/288075', '2016-01-06'),
(53, 'baijia', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C15%2C402%2C241%3Bw%3D638/sign=4de8d796cc1349546a51b2246b7ebe69/0df431adcbef76095801f68829dda3cc7cd99e9a.jpg', '没有贫富差距，也就没有创业公司', '如果你非要结束贫富差距，这实际上也就意味：你是要在自己国家里，结束创业。', 'http://yanglinhua.baijia.baidu.com/article/287749', '2016-01-06'),
(54, 'keji', 'http://r3.sinaimg.cn/10230/2016/0106/61/1/59562971/500x253.jpg', '2015终端盘点：手机厂商“软硬兼施”求创新', 'iOS份额预计11.00%，YunOS份额预计7.10%，YunOS已经成为第三大移动操作系统。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxnerek0987604-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', '2016-01-01'),
(55, 'tiyu', 'http://y0.ifengimg.com/a/2016_02/fa68292d58c1c5d.jpg', '鲁尼当选2015英格兰足球先生 生涯第四次获此殊荣', '鲁尼现年30岁，他在2015年打破了查尔顿爵士的国家队进球纪录，并以队长身份，带领英格兰队进军...', 'http://i.ifeng.com/news?aid=104871853', '2016-01-21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baidunewsdb`
--
ALTER TABLE `baidunewsdb`
  ADD PRIMARY KEY (`newsid`),
  ADD UNIQUE KEY `newsid` (`newsid`),
  ADD KEY `newscontent` (`newscontent`(255)),
  ADD KEY `newsclass` (`newsclass`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `baidunewsdb`
--
ALTER TABLE `baidunewsdb`
  MODIFY `newsid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
