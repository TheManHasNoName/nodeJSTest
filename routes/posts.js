const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is a post request')
})


router.get('/test', (req, res) => {
    res.send('This is now `/post/test`')
})

module.exports = router;