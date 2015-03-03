var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '四川成都高新区' ,
    user:{name:"张三",email:"zhangsan@163.com"}
  });
});

module.exports = router;
