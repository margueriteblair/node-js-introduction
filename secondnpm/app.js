//console.log('Hello World, this is an npm test');

let fs = require('fs');
let express = require('express');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');

let app = express();
const port = 3000;

app.get('/', (req, res) => {
    //console.log(req);
    res.sendFile(__dirname + '/index.html');
})
app.get('/contact', (req, res) => {
    //res.send('This is the page for Margies contact information')
    res.sendFile(__dirname + '/contact.html');
})
app.get('/profile/:id', (req, res) => {
    res.send(`You requested to see a profile with the id of ${req.params.id}`)
}) //dynamic routes

app.listen(port, () => {
    console.log(`The server is now successfully listening to port ${port}`)
});

