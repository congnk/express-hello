var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '四川成都高新区' ,
    user:{name:"张三",email:"zhangsan@163.com"}
  });
});

var fs = require('fs');
router.get('/index.html', function(req, res, next) {
    fs.readFile('html/index.html', 'utf-8', function (err, data) {
        if (err) {
            res.send(err);
            console.log(err);
        }
        res.send(data);
    });
});
module.exports = router;
