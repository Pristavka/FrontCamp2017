const express = require('express');
const router = express.Router();

const home = require('./home.js')
const blogs = require('./blogs.js')
const users = require('./users.js')

router.use('/', home);
router.use('/blogs', blogs);
router.use('/users', users);

module.exports = router;
