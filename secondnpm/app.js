//console.log('Hello World, this is an npm test');

let fs = require('fs');
let express = require('express');
let mongoose = require('mongoose');

let app = express();
const port = 3000;

app.get('/', (req, res) => {
    //console.log(req);
    res.send('This is the homepage');
})

app.listen(port, () => {
    console.log(`The server is now successfully listening to port ${port}`)
});

