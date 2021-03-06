const fs    = require('fs'); // import file system library
const os    = require('os'); 
const path  = require('path');
const { BADQUERY } = require('dns');

const reqHandler = (req, res) => {
    // getting some info from a request
    const url = req.url;
    const method = req.method;

    // Set the header for our response (here we use HTML, but there are others)
    res.setHeader('Content-Type', 'text/html');
    
    // If the url is the home page:
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>This is the home page</h1></body>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return;
    }

    // If the url is the message page:
    if(url === '/message' && method === 'POST'){
        const body = [];
        
        // NodeJS parses all requests chunk by chunk
        // req.on() is an event listener and it allows us to listen to events occuring on our server
        // A 'data' event is fired every time a new chunk is ready (ASYNCHRONOUS)
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // This second listener is also ASYNCHRONOUS, it only runs when your message has been parsed!
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // Retrieve the second part of parsedBody, which is the user's entered message
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            console.log(message);        

            // Write the user message into message.txt SYNCHRONOUSLY, 
            // which means we can keep running the following lines of code without blocking our workflow 
            fs.writeFileSync('message.txt', message);
        });

        
        // status code of 302 stands for redirection
        res.statusCode = 302;
        // reset the location of the url to the homepage
        res.setHeader('Location', '/');
        res.end();
        return;
    }


    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>This is not a smart way to output HTML</h1></body>');
    res.write('</html>');
    res.end();
    // You cannot use write() after end() !
}

// Export our reqHandler() function for use in app.js
module.exports = {
    handler: reqHandler,
    // u can add other exports here:
    someText: "some text here"
}

