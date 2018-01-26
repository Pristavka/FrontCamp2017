const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('blogs', { title: `List of blogs`, message: `Now you can see the list of blogs`});
});
router.get('/:id', function(req, res, next) {
  res.render('blogs', { title: `The ${req.params.id} blog`, message: `Now you can see the ${req.params.id} blog`});
});
router.post('/', function(req, res, next) {
  res.send(`You tried to add new list of blogs`)
});
router.put('/:id', function(req, res, next) {
  res.send(`You tried to update the list of blogs`)
});
router.delete('/:id', function(req, res, next) {
  res.send(`You tried to delete the ${req.params.id} blog`)
});

module.exports = router;
