//how to create, and remove directories
let fs = require('fs');
//this imports the file system module

fs.mkdirSync('stuff', function() {
    fs.readFile('read.txt', 'utf8', function(error, data) {
        fs.writeFile('./stuff/writeMe.txt', data, function() {
            if (error) {
                console.log(error)
            } else {
                console.log('Tests completed, check writeMe.txt file')
            }
        });
    })
})
fs.rmdirSync('stuff')
//fs.unlink('writeMe.txt');
//fs.unlink('./stuff/writeMe.txt', function() {
//     fs.rmdir('stuff');
// })
//fs.rmdir('stuff')