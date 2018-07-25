console.log("start");

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\nThis is testing part!\n');
    res.end('Hello World1!\nThis is testing part1!\n');
}).listen(8080);
