const express = require('express');
const Blogs = require('../models/blogs');

const router = express.Router();

router.get('/', (req, res) => {
  Blogs.find({}, (err, blogs) => {
    if (err) res.status(400).json(err.message = 'We didn\'t find the Blogs');
    else res.render('blogs', { title: 'List of blogs', blogs });
  });
});

router.get('/add', (req, res) => {
  res.render('addBlog', { title: 'Add new blog' });
});

router.get('/:id', (req, res) => {
  Blogs.findById(req.params.id, (err, blog) => {
    if (err) res.status(400).json(err.message = `We didn't find the Blog with ID = ${req.params.id}`);
    else res.render('blog', { title: 'Your blog', blog });
  });
});

router.get('/edit/:id', (req, res) => {
  Blogs.findById(req.params.id, (err, blog) => {
    if (err) res.status(400).json(err.message = `We didn't find the Blog with ID = ${req.params.id}`);
    else res.render('editBlog', { title: 'Edit blog', blog });
  });
});

router.post('/edit/:id', (req, res) => {
  let blog = {};
  blog.author = req.body.author;
  blog.text = req.body.text;

  Blogs.update({_id: req.params.id}, blog, (err) => {
    if (err) res.status(400).json(err.message = `We didn't find the Blog with ID = ${req.params.id}`);
    else {
      req.flash('success', 'Blog updated!');
      res.redirect('/blogs');
    }
  });
});

router.post('/add', (req, res) => {
  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('text', 'Text is required').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    res.render('addBlog', { title: 'Add new blog', errors });
  } else {
    const blog = new Blogs();
    blog.author = req.body.author;
    blog.text = req.body.text;

    blog.save(err => {
      if (err) return console.log(err);

      req.flash('success', 'Blog added!');
      res.redirect('/blogs');
    });
  }
});

router.delete('/delete/:id', (req, res) => {
  Blogs.remove({_id: req.body.id}, err => {
    if (err) res.status(400).json(err.message = `We didn't find the Blog with ID = ${req.params.id}`);
    else res.redirect('/blogs');
  });
});

module.exports = router;
