let express = require('express');

let router = express.Router();
const usernew = require('./usernew');

router.get('/post', (req, res) => {
    console.log((req.body))
    res.send('Success');
}) 
//posting is for creating or updating a resource
//this is why we need to use post to return the submitted information that the user submitted back to them
//always use post if theres sensitive information involved
router.use('/post', usernew);

module.exports = router;