const express = require('express');


router = express.Router();
router.get('/:params', (req, res) => {
    res.send(req.queries);
})


module.exports = router;