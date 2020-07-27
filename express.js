let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})
app.get('/contact', function(req, res) {
    res.render('contact');
})

app.get('/profile/:name', function(request, response) {
    let data = {age: 21, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    response.render('profile', {person: request.params.name, data: data});
})
//the route is still dynamic and it changes
app.listen(3000) //app listens for the specific port number
//http methods, get, post, delete, put
//there are different methods to respond to request
//get = app.get('route', fn);
//post = app.post('route', fn);
//delete = app.delete('route', fn); 