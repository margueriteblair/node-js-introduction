let express = require('express');
let router = express.Router();
const usernew = require('./usernew');

router.post('/post', (req, res) => {
    console.log(req.body)
    //res.sendFile(__dirname + "/usernew.html")
    // res.json({
    //     Status: 'Successfully made an account!',
    //     Username: data.usr,
    //     Email: data.email,
    //     Password: data.pswd
    // })
    res.send('Success');
}) 
//posting is for creating or updating a resource
//this is why we need to use post to return the submitted information that the user submitted back to them
//always use post if theres sensitive information involved
router.use('/new', usernew);

module.exports = router;