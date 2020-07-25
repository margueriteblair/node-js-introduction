//how to create, and remove directories
let fs = require('fs');
//this imports the file system module
//fs.unlinkSync('writeMe.txt');// in order to avoid using a callback function, use the syncronous methods


    fs.readFile('read.txt', 'utf8', function(error, data) {
        fs.writeFileSync('./stuff/writeMe.txt', data)
    })



//fs.rmdirSync('stuff')
//fs.unlink('writeMe.txt');
//fs.unlink('./stuff/writeMe.txt', function() {
//     fs.rmdir('stuff');
// })
//fs.rmdir('stuff')