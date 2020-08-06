const express = require('express');
const home = require('./routes/home')

let app = express();
let port = 3000;

app.use(express.json())
app.use('/', home);
//app.use('/users/login', userRouter)



app.listen(port, () => {
    console.log(`Successfully listening to ${port}`)
})