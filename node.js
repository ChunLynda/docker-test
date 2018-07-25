console.log("start");

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('body');
    res.end('Hello World!\nThis is testing part!\nThis is the second test.');
}).listen(8080);
