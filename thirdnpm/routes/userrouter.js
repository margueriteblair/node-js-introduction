//packages import
//const express = require('express');

//router = new express.Router();

//alt

const { Router } = require('express');
/*
@path / localhost:port/user/now/:day/:month?parm1={Boolean}
@desc /
@access public
*/
const router = new Router();
//we have to infer the local host part
router.get('/now/', (req, res) => {
    const {year: y, day: d, month: m} = req.params;
    console.log(y, d, m)
    let date = new Date(y,d,m);
    res.send(date);
})

module.exports = router;
