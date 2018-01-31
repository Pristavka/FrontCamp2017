const express = require('express');
const router = express.Router();

const blogs =[];

router.get('/', function(req, res, next) {
  res.render('blogs', { title: `List of blogs`, message: `Now you can see the list of blogs`});
});
router.get('/:id', function(req, res, next) {
  res.render('blogs', { title: `The ${req.params.id} blog`, message: `Now you can see the ${req.params.id} blog`});
});
router.post('/', function(req, res, next) {
  blogs.push(req.body);
  res.statusCode(200);
});
router.put('/:id', function(req, res, next) {
  res.statusCode(204);
});
router.delete('/:id', function(req, res, next) {
  res.statusCode(204);
});

module.exports = router;
