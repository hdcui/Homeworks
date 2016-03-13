var express = require('express');
var Client = require('mysql');
var format = require('format');
var router = express.Router();

/*处理前端页面展示的数据库连接服务器脚本*/

//连接数据库
var client = Client.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'news'
});

//根据不同的路由地址来确定需要从数据库中加载的数据
function getKeyword(req, res, next, type) {
    client.query(
        "SELECT `newsclass`, `newsimg`, `newstitle`, `newscontent`, `newslink`, `newsdate` FROM `baidunewsdb` WHERE `newsclass`='" + type + "'",
        function(err, resdata, fields) {
            var maincontent = [];
            for (var i = 0; i < resdata.length; i++) {
                maincontent[i] = {
                    newslink: resdata[i].newslink,
                    newsimg: resdata[i].newsimg,
                    newstitle: resdata[i].newstitle,
                    newscontent: resdata[i].newscontent,
                    newsdate: format.formatDate(resdata[i].newsdate)
                }
            };
            res.render('news', {
                body: maincontent,
                type: type
            });
        }
    );
}

/*针对新闻分类分配对应的路由地址*/
router.get('/tuijian', function(req, res, next) {
    getKeyword(req, res, next, 'tuijian')
});

router.get('/baijia', function(req, res, next) {
    getKeyword(req, res, next, 'baijia')
});

router.get('/keji', function(req, res, next) {
    getKeyword(req, res, next, 'keji')
});

router.get('/tiyu', function(req, res, next) {
    getKeyword(req, res, next, 'tiyu')
});


module.exports = router;
