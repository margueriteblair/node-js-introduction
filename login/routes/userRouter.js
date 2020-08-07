const express = require('express');

const router = express.Router();

router.patch('/login', (req, res) => {
    console.log(req.body);
    //this patch request is talking to the backend, which is why we see it in the console
    //the request body is the actual data that is being submitted
    res.sendFile(process.cwd() + '/public/done.html');
})



module.exports = router;