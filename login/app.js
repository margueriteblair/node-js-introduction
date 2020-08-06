const express = require('express');
const home = require('./routes/home')
const userRouter = require('./routes/userRouter')
//lets assume the object being updated is only name and email, but a different name and email is being updated each time a new user is logging in
//post request is for creating new data
let app = express();
let port = 3000;

app.use(express.json())
app.use(express.static('public'))
app.use('/', home);
app.use('user', userRouter)



app.listen(port, () => {
    console.log(`Successfully listening to ${port}`)
})