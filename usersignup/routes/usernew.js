const express = require('express');

let router = express.Router();

router.get('/new', (req, res) => {
    res.send('hello');
})

module.exports = router;