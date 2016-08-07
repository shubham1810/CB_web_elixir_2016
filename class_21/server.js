var express = require('express');
var app = express();


app.use('/', express.static('.'));


app.get('/calculate', function (req, res) {

    var dist = req.query.dist;
    var wt = req.query.wt;

    var fare = calculateFare(dist, wt);

    res.send({fare: fare});
});


function calculateFare(dist, wt) {
    return 25 + Math.max(0, (dist-2)*8) + Math.max(0, (wt-15));
}



app.listen(3000, function () {
    console.log("server running...");
});
