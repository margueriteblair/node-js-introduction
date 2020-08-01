let express = require('express');

let router = express.Router();

router.post('/post', (req, res) => {
    // console.log(req.body)
    res.sendFile(__dirname + "/usernew.html")
})

module.exports = router;