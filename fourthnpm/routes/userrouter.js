const express = require('express');

router = express.Router();
router.get('/:id', (req, res) => {
    res.send(`The user is requesting to see ${req.params.id}. The user will also have access to ${req.params.id}`);
})


module.exports = router;