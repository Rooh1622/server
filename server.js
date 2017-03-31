'use strict';
var http = require('http');
var port = process.env.port || 1337;

var module = require("./random");
console.log(module.init());
console.log(module.screen);
var screen1 = module.screen;
console.log(module.init());
console.log(module.screen);
var screen2 = module.screen;
http.createServer(function (req, res) {


    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(screen1 + '\n' + screen2);

}).listen(port);
//XGvVnlMY