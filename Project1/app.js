const http  = require('http');
const https = require('https');
const routes = require('./routes'); // import our routes.js utilities file

// Whenever our server recieves a request, reqProcessor() in routes.js is executed
const server =  http.createServer(routes.handler);

// listen() keeps the server in a loop by constantly listening for requests
// 3000 is the port number we pass in
server.listen(2000);



















