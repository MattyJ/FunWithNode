'use strict';

console.log('Hello world');

var x = 10;
var y = 25;

console.log(x * y);

var msgs = require("./msgs");
var msg = new msgs();
console.log(msg.first);

var logger = require("./logger");  // by default use index.js as starting point
logger.log("this from the logger");

var _ = require("underscore");
