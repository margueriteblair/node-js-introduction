let express = require('express');
let app = express();
app.get('/', function(req, res) {
    res.send('this is the homepage');
})
app.get('/contact', function(req, res) {
    res.send('this is the homepage');
})
app.listen(3000) //app listens for the specific port number
//http methods, get, post, delete, put
//there are different methods to respond to request
//get = app.get('route', fn);
//post = app.post('route', fn);
//delete = app.delete('route', fn); 