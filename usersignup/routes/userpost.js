let express = require('express');
let router = express.Router();
const usernew = require('./usernew');

router.post('/post', (req, res) => {
    // console.log(req.body)
    res.sendFile(__dirname + "/usernew.html")
})

router.use('/new', usernew);

module.exports = router;