//create a server in node js

let http = require('http');
let fs = require('fs')

let server = http.createServer(function(req, response) {
    //response header 
    //content-type & status
    console.log('request was made: ' + req.url)
    if (req.url === '/home' || req.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname, '/index.html').pipe(response);
    } else if (req.url === '/contact') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname, '/index.html').pipe(response);
    }
    response.end('AHHHHHHH screams');
});

server.listen(3000, '127.0.0.1');
console.log('success to listen to port 3000');