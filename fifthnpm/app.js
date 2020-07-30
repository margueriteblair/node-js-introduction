let express = require('express');
//let queryString = require('querystring');

let app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html') 
})

app.get('/contact', (req, res) => {
    console.log(req.query); //this is how we get the queries in express;
    res.render('contact') //this one is the ejs file
})

app.get('/profile/:name', (req, res) => {
    let data = {age: 21, job: 'careerdevs student'};
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000, () => {
    console.log('Successfully listening to port 3000')
});