const express = require('express');


let app = express();
let port = 3300;


app.listen(port, () => {
    console.log(`Successfully listening to ${port}`)
})