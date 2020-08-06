const express = require('express');

const router = express.Router();

router.patch('/login', (req, res) => {
    console.log(req.body);
    res.sendFile(process.cwd() + '/public/done.html');
})



module.exports = router;