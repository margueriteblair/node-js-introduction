//imported packages
// let http = require("http");
let express = require('express');
let app = express();
//imported middleware and routers
const firstMid = require('./middleware/firstmiddleware');
const router = require('./routes/homerouter')
const userrouter = require('./routes/userrouter')
const port = 3000;

app.use(firstMid)
app.use('/', router)
app.use('/user')


app.listen(port, function() {
    console.log('success to listen to port 3000');
});
