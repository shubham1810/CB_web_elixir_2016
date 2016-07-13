#!/usr/local/bin/node

const mymodule = require("./my_module.js");
var data = require("./data.json");


console.log("This is Intro to Node");

mymodule.myFunc();

console.log(data.name, data.work);