#!/usr/local/bin/node
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send("API");
});

app.listen(8080);