//console.log('Hello World, this is an npm test');
document.getElementById('submit-button').addEventListener('click', () => {
    document.getElementsByClassName("input").value = "";
})

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
app.get('/contact', (req, res) => {
    console.log(req.body);
    //res.send('This is the page for Margies contact information')
    res.render('contact', {qs: req.query});
})
app.post('/contact',urlencodedParser, (req, res) => {
    //res.send('This is the page for Margies contact information')
    res.render('contact-success', {data: req.body});
})

app.get('/profile/:id', (req, res) => {
    res.send(`You requested to see a profile with the id of ${req.params.id}`)
}) //dynamic routes



app.listen(port, () => {
    console.log(`The server is now successfully listening to port ${port}`)
});

