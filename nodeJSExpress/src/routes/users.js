const express = require('express');
const Users = require('../models/users');

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' })
});

module.exports = router;