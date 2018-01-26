const express = require('express');
const router = express.Router();

const home = require('./home.js')
const blogs = require('./blogs.js')

router.use('/', home);
router.use('/blogs', blogs);

module.exports = router;
