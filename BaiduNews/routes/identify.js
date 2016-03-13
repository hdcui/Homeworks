var express = require('express');
var router = express.Router();

//用户登录验证
//用户名：admin；密码：123456

router.route('/login')
    .get(function(req, res) {
        res.render('login', {})
    })
    .post(function(req, res) {
        var userName = req.body.username;
        var passKey = req.body.password;
        console.log(req.body);
        var user = {
            username: 'admin',
            password: '123456'
        };
        if (userName === user.username && passKey === user.password) {
            router.get('/dashboard', function(req, res) {
                res.render('dashboard')
            });
            res.json('pass');
        } else {
            res.json('fail')
        }
    });

module.exports = router;
