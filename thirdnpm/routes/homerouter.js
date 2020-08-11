const express = require('express');


router = express.Router();
router.get('/', (req, res) => {
    const myObj = {
        message: "Hello World, welcome to Chilis"
    }

    if (process.env.MESSAGE_STYLE === "uppercase") {
        myObj.message = myObj.message.toUpperCase();
    }
    res.json(myObj);
})


module.exports = router;
