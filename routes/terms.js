const express = require('express');
const router = express.Router();
const {title, introduce, titleList, termsList} = require('../glossary_file')

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('terms', { title, introduce, titleList, termsList });
});

module.exports = router;
