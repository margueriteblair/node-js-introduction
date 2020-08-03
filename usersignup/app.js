//imported packages
const express = require('express');
//imported files
let homeRouter = require('./routes/home');
let userpost = require('./routes/userpost');
let newuserpost = require('./routes/usernew')
//declaring variables
let app = express();
let port = 3000;
app.use(express.json()) 
//app usage permissions
app.use('/', homeRouter);
app.use('/user', userpost);
//middleware that allows us to parse stringified objects
//as a best practice don't trust what the client sends you


app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})
