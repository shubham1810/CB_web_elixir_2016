var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
    // console.log(next);
    res.send("This is an API in Express. generated from express-generator.");
});

module.exports = router;
