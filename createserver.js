//create a server in node js

let http = require('http');

let server = http.createServer(function(req, response) {
    //response header 
    //content-type & status
    console.log('request was made: ' + req.url)
    response.writeHead(200, ('Content-Type', 'text/plain'));
    response.end('Hey Margie'); //message to send when the response is done
});

server.listen(3000, '127.0.0.1');
console.log('success to listen to port 3000');