var http = require('http');
var req = require('request');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end('Hello World! -- Sibendu.');
};

var www = http.createServer(handleRequest);
www.listen(5000);
