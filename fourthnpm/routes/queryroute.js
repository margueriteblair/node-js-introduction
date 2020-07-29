let express = require('express');

queryRouter = express.Router();

queryRouter.get('/:name', (req, res) => {
    let data = {age: 21, job: 'asshole'}
    res.render('profile', {person: req.params.name, data: data} )
})

