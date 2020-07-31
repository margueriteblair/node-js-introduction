//subrouter for users that'll be the post
//then create a post route
//router.post
//
const express = require('express');
const router = express.Router();

router.post('/newUser', (req, res) => {
    res.send('SAAAAAAHH') //no params !! >:()
    //req.query is built on the frontend, as is the body
})

module.exports = router;