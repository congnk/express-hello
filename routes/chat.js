var express = require('express');
var router = express.Router();
var URL = require('url');

/* 聊天室功能 */

var exec = require('child_process').exec;
var cmdStr = "free -m " ;


//演示单次执行系统命令的方法
router.get('/cmd.html', function(req, res, next) {
    var str = "cmd " ;
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



router.executeCmd = function(req, res){
    res.setHeader('Content-Type', 'application/json;charset=utf-8');

    var cmdStr = req.body.cmd + " " + req.body.para;
    console.log(" 即将执行命令 " +  cmdStr);
    exec(cmdStr, function(err,std_out,std_err){
        var status = "";
        if(err){
            var str = '执行系统命令出错: '+std_err ;
            status = "failed";
            console.log(str);
        }else{
            str = std_out ;
            console.log(std_out);
            status = "success";
         }
        res.send({
           status:status,
           message:"命令已执行",
           data : str
        });
    });

};

module.exports = router;
