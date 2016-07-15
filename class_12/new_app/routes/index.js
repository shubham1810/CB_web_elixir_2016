var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
    if (typeof(req.query.name) != 'undefined' ) {
        res.send("Hello " + req.query.name);
    } else {
        res.send("Hello");
    }
});

module.exports = router;
