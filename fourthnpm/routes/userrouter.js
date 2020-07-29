const express = require('express');

router = express.Router();
router.get('/:id', (req, res) => {
    let data = {age: 21, job: 'careerdevs student'}
    res.render('profile', {person: req.params.id, data: data} )
})


module.exports = router;