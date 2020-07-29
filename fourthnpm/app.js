//imported packages
// let http = require("http");
let express = require('express');
let app = express();
//imported middleware and routers
const firstMid = require('./middleware/firstmiddleware');
const userRouter = require('./routes/userrouter')
const homeRouter = require('./routes/homerouter');
const queryRouter = require('./routes/queryroute');
app.set('view engine', 'ejs'); //we're setting the view enginge/templating engine to be ejs

const port = 3000;

app.use(firstMid)
app.use('/:id', userRouter)
app.use('/', homeRouter);
// app.use('/:name', queryRouter)

app.listen(port, function() {
    console.log('success to listen to port ' + port);
});







