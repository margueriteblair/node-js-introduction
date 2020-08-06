const express = require('express');

const router = express.Router();

router.patch('/login', (req, res) => {
    let updateObj = req.body;
    console.log('Poop')
    console.log(req.body);
    res.end();
})



module.exports = router;