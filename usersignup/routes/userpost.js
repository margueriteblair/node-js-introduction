let express = require('express');

let router = express.Router();

router.post('/post/new', (req, res) => {
    console.log(req.body)
    res.send()
})