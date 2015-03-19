var express = require('express');
var router = express.Router();

/* 聊天室功能 */

var exec = require('child_process').exec;
var cmdStr = "mfree -m " ;


//演示单次执行系统命令的方法
router.get('/cmd.html', function(req, res, next) {
    var str = "" ;
    exec(cmdStr, function(err,data,std_err){
        if(err){
            str = '执行系统命令出错: '+std_err ;
            console.log(str);
        }else{
            str = data ;
        }
        res.render('chat/room', { title: '单次系统命令' ,
          data : str
        });
    });
});

module.exports = router;