var fs = require('fs') //variable name = module name is a common convention;

//let readMe = fs.readFileSync('read.txt', 'utf8') //this one is syncronous
//blocking the flow of the code 
//syncornous method
//console.log(readMe);
let data = 'this is updated text that i am writing';
fs.readFile('read.txt', 'utf8', function(err, data) { //this one is asyncronous;
    fs.writeFile('writeMe.txt', data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(fs.readFileSync('writeMe.txt', 'utf-8'));
        }
    }) //we're not blocking the code up here, all async
});

//var.readFile() = async; much quicker
//var.readFileSync = sync.
//nb: if you have the async and sync file doing the same thing, they can mess each other up
// fs.writeFile("books.txt", data, (err) => { 
//     if (err) 
//       console.log(err); 
//     else { 
//       console.log("File written successfully\n"); 
//       console.log("The written has the following contents:"); 
//       console.log(fs.readFileSync("books.txt", "utf8")); 
//     } 
//   }); 

