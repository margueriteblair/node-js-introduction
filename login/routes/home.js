let express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
})

module.exports = router;