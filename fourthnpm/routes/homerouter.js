const express = require('express');

homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

module.exports = homeRouter;