var express = require('express');
var router = express.Router();

/* 登录注册模块. */
router.get('/login.html', function(req, res, next) {
  res.render('login/login', { title: '请登录' ,
    user:{name:"张三",email:"zhangsan@163.com"}
  });
});

router.get('/register.html', function(req, res, next) {
  res.render('login/register', { title: '请注册' ,
    user:{name:"张三",email:"zhangsan@163.com"}
  });
});



module.exports = router;