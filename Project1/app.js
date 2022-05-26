const fs    = require('fs'); // import file system library
const os    = require('os'); 
const path  = require('path');
const http  = require('http');
const https = require('https');

// Whenever our server recieves a request, reqListener() is executed
// function reqListener(req, res){ }
// http.createServer(reqListener);

// same as:     http.createServer(function(req, res){})
const server =  http.createServer((req, res) => {
    console.log(req);
})

// 3000 is the port number we pass in
server.listen(3000);



















