//imported packages
// let http = require("http");
let express = require('express');
let app = express();
//imported middleware and routers
const firstMid = require('./middleware/firstmiddleware');
const router = require('./routes/homerouter')
const userrouter = require('./routes/userrouter')
const port = process.env.port;

app.use(express.json()); //parse the body from a stringified json to a javascript object 
app.use(firstMid)
app.use('/', router)
app.use('/user', userrouter);



app.listen(port, function() {
    console.log('success to listen to port ' + port);
});
