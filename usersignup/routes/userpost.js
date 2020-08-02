let express = require('express');
let router = express.Router();
const usernew = require('./usernew');

router.post('/post', (req, res) => {
    // console.log(req.body)
    res.sendFile(__dirname + "/usernew.html")
}) 
//posting is for creating or updating a resource
//this is why we need to use post to return the submitted information that the user submitted back to them

router.use('/new', usernew);

module.exports = router;