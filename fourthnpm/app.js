//imported packages
// let http = require("http");
let express = require('express');
let app = express();
//imported middleware and routers
const firstMid = require('./middleware/firstmiddleware');
const router = require('./routes/userrouter')
const homeRouter = require('./routes/homerouter');
app.set('view engine', 'ejs'); //we're setting the view enginge/templating engine to be ejs

const port = 3000;

app.use(firstMid)
app.use('/profile/:id', router)
app.use('/', homeRouter);


app.listen(port, function() {
    console.log('success to listen to port 3000');
});







