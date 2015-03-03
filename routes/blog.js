var express = require('express');
var router = express.Router();

/* GET blog page. */
/*router.get('/', function(req, res, next) {
  res.render('blog', { title: 'Blog!' ,
	author: 'Farmer'
	});
});
*/
var fs = require('fs');
router.get('/', function(req, res, next) {
    fs.readFile('/root/npm/hello/blogs/navigator.html','utf-8', function (err, data) {
        if (err){
			res.send(err);
			console.log(err);
		}
        res.send(data);
    });
});

module.exports = router;
