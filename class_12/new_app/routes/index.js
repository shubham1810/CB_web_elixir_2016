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

router.get('/loop', function(req, res, next) {
    var i=0;

    for(i=0; i<1000000000; i++) {
        /* if (i%1000 == 0) {
            console.log(i);
        } */
    }

    res.send("Done");
});

module.exports = router;
