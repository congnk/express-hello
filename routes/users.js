var express = require('express');
var router = express.Router();
var user_list = require('../model/users').users;

/* GET users listing. */
router.list = function(req, res){
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.send(user_list);
};

router.get = function(req, res){
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.send(user_list[req.param('id')]);
};

router.delete = function(req, res){  
  res.setHeader('Content-Type', 'application/json;charset=utf-8');  
  delete user_list[req.param('id')];  
  res.send({status:"success", message:"delete user success"});  
  console.log(user_list);  
};  

router.update = function(req, res){  
  res.setHeader('Content-Type', 'application/json;charset=utf-8');  
  user_list[req.body.id] = req.body;  
  res.send({status:"success", message:"update user success"});  
  console.log(user_list);
};  
  
  
router.add = function(req, res){  
  res.setHeader('Content-Type', 'application/json;charset=utf-8');  
  console.log(req.body);  
  user_list[req.body.id] = req.body;  
  res.send({status:"success", message:"add user success"});  
  console.log(user_list);
};

module.exports = router;
