//imported packages
const express = require('express');
//imported files
let homeRouter = require('./routes/home');

let app = express();
let port = 3000;
//app usage permissions
app.use('/', homeRouter);




app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})
