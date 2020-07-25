//writable streams - allow node js to write data to a stream
//readable streams allows node js to readdata from a stream
//duplexallows node to read and write data

let http = require('http');
let fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/caesar.txt', 'utf8');
//we have to specify uft8 so that we can have it translated from the buffer encoded version to the regular charactersk
//this will pass the data and split it up into chunks
//event called 'data' built into createReadStream

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    console.log(chunk);
})