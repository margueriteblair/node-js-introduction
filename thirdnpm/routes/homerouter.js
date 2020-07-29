const express = require('express');


router = express.Router();
router.get('/', (req, res) => {
    res.send('You are on the homepage');
})


module.exports = router;
