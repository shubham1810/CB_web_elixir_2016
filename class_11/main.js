#!/usr/local/bin/node
var express = require('express');
var app = express();

var port = 8080;

app.get('/', function (req, res) {
    //console.log(req);
    /* var k = [];
    for(var z in req) {
        k.push(z);
    }
    console.log(k); */
    console.log(req.query);
    if (req.query != {}) {
        res.send(JSON.stringify(req.query));
    } else {
        res.send("No query");
    }
});

app.listen(port, function () {
    console.log("Launching the server on port " + port);
});