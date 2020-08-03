const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    const filePath = process.cwd() + '/public/index.html'
    console.log(filePath)
    res.sendFile(filePath)
    //res.send('Hey');
})

module.exports = router;

