var express = require('express');
var router = express.Router();

/* 欢迎模块.同时也是基础结构模块 */
router.get('/welcome.html', function(req, res, next) {
  res.render('welcome', { title: '欢迎回来！' ,
    user:{name:"张三",email:"zhangsan@163.com"}
  });
});



module.exports = router;