const express = require('express');

contactRouter = express.Router();
contactRouter.get('/contact', (req, res) => {
    console.log(req.query); //this is how we get the queries in express;
    res.render('contact', {qs: req.query}) //this one is the ejs file
})

module.exports = contactRouter;