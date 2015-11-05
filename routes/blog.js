var express = require('express');
var router = express.Router();

var fs = require('fs');
router.get('/', function(req, res, next) {
    fs.readFile('blogs/navigator.html','utf-8', function (err, data) {
        if (err){
			res.send(err);
			console.log(err);
		}
        res.send(data);
    });
});

module.exports = router;
