const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: `Main page`, message: `Welcome Friends!`});
});

module.exports = router;