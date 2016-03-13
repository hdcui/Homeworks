var express = require('express');
var Client = require('mysql');
var format = require('format');
var router = express.Router();

/*处理数据库管理成语对数据库进行增删改查的服务器脚本*/

//连接数据库
var client = Client.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'news'
});

//处理数据查询请求的服务器路由及方法
router.post('/select', function(req, res) {
    var newsclass = req.body.newsclass;
    var selectSql = 'SELECT * from baidunewsdb where newsclass=?';
    client.query(selectSql, [newsclass], function(err, resdata, fields) {
        var maincontent = [];
        for (var i = 0; i < resdata.length; i++) {
            maincontent[i] = {
                newsid: resdata[i].newsid,
                newsclass: resdata[i].newsclass,
                newslink: resdata[i].newslink,
                newsimg: resdata[i].newsimg,
                newstitle: resdata[i].newstitle,
                newscontent: resdata[i].newscontent,
                newsdate: format.formatDate(resdata[i].newsdate)
            }
        };
        res.json(maincontent);
    });
});

//处理数据新增请求的服务器路由及方法
router.post('/insert', function(req, res) {
    var newsclass = req.body.newsclass;
    var newsimg = req.body.newsimg;
    var newslink = req.body.newslink;
    var newstitle = req.body.newstitle;
    var newscontent = req.body.newscontent;
    var newsdate = req.body.newsdate;
    var insertSql = 'INSERT INTO baidunewsdb(newsclass, newsimg, newstitle, newscontent, newslink, newsdate) VALUES(?,?,?,?,?,?)';
    var insertData = [newsclass, newsimg, newstitle, newscontent, newslink, newsdate];
    client.query(insertSql, insertData, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.json('success')
        }
    })
});

//处理数据删除请求的服务器路由及方法
router.post('/delete', function(req, res) {
    var newstitle = req.body.newstitle;
    var deleteSql = 'DELETE from baidunewsdb where newstitle=?';
    client.query(deleteSql, [newstitle], function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.json('success')
        }
    })
});

//处理数据更新请求的服务器路由及方法
router.post('/update', function(req, res) {
    var newsimg = req.body.newsimg;
    var newslink = req.body.newslink;
    var newstitle = req.body.newstitle;
    var newscontent = req.body.newscontent;
    var newsdate = req.body.newsdate;
    var updateSql = 'UPDATE baidunewsdb set newsimg=?, newsdate=?,newscontent=?, newslink=? where newstitle=?';
    var updateData = [newsimg, newsdate, newscontent, newslink, newstitle];
    client.query(updateSql, updateData, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.json('success')
        }
    })
});

module.exports = router;
