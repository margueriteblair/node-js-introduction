const express = require('express');

let router = express.Router();

router.get('/post', (req, res) => {
    console.log(req.body)
    res.send('hello');
})


module.exports = router;