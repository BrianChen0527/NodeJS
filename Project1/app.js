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
    // reading some info from a request    
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // Set the header for our response (here we use HTML, but there are others)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>This is not a smart way to output HTML</h1></body>');
    res.write('</html>');
    res.end();
    // You cannot use write() after end() !

    process.exit();
})

// listen() keeps the server in a loop by constantly listening for requests (until exit() or sth wrong happens)
// 3000 is the port number we pass in
server.listen(3000);



















