//console.log('Hello World, this is an npm test');
let fs = require('fs');
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
let app = express();
const port = 3000;

app.get('/', (req, res) => {
    //console.log(req);
    res.sendFile(__dirname + '/index.html');
})
app.get('/contact', urlencodedParser, (req, res) => {
    console.log(req.body);
    //res.send('This is the page for Margies contact information')
    res.sendFile(__dirname + '/contact.html');
})
app.post('/contact', (req, res) => {
    //res.send('This is the page for Margies contact information')
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:id', (req, res) => {
    res.send(`You requested to see a profile with the id of ${req.params.id}`)
}) //dynamic routes



app.listen(port, () => {
    console.log(`The server is now successfully listening to port ${port}`)
});

