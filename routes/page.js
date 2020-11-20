const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('main_page', {});
});

router.get('/email', (req, res) => {
    res.render('email', {})
})

router.get('/aboutme', (req, res) => {
    res.render('aboutme', {})
})



module.exports = router;