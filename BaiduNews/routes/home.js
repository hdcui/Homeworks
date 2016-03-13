var express = require('express');
var router = express.Router();

/*获取主页内容*/
router.get('/', function(req, res) {
    res.render('home')
})

module.exports = router;
