const express = require('express');

let router = express.Router();
//THIS IS THE LAST ROUTE IN THE PATH
router.post('/new', (req, res) => {
    console.log(req.body)
    res.json(req.body);
})


module.exports = router;