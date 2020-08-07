let express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html') //backend url
})

//location.origin is the frontend
router.get(
    '/login',
    (req, res) => {
        const filePath = process.cwd() + 'public/login.html';
        res.sendFile(filePath);
    }
)

module.exports = router;