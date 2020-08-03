const express = require('express');

let router = express.Router();
//THIS IS THE LAST ROUTE IN THE PATH
router.get('/post', (req, res) => {
    console.log(JSON.parse(req.body))
    res.send('hello');
})


module.exports = router;