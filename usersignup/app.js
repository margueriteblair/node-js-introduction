//imported packages
const express = require('express');

let app = express();
let port = 3000;

app.get('/', (req, res) => {
    res.send('This is a test, testing test')
})


app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})
