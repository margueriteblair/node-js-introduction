//create a server in node js

let http = require('http');
let fs = require('fs')

let server = http.createServer(function(req, response) {
    //response header 
    //content-type & status
    console.log('request was made: ' + req.url)
    response.writeHead(200, ('Content-Type', 'application/json'));
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(response); //message to send when the response is done

    
    let myObj = {
        name: 'Margie',
        job: 'Coder',
        age: 21
    }
    response.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('success to listen to port 3000');