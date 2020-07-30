//packages import
//const express = require('express');

//router = new express.Router();

//alt

const { Router } = require('express');

const router = new Router();
//we have to infer the local host part
router.get('/now/:day/:month', (req, res) => {
    res.send(new Date);
})

module.exports = router;
