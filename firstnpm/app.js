const express = require('express');
const mongoose = require('mongoose');

//console.log(express);
const port = 3000;
const app = express(); //app 

app.get('/', (req, res) => { //the forward slash is just the root route
    console.log(req);
    res.send('Hello World')
    //res.send(alert(`This is an alert!`));
})
app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
    
}); //3000 is standard port number



