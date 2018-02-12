const express = require('express');
const Blogs = require('../models/blogs');

const router = express.Router();

router.get('/', (req, res) => {
  Blogs.find({}, (err, blogs) => {
    if (err) return console.log(err);

    res.render('blogs', { title: 'List of blogs', blogs });
  });
});

router.get('/add', (req, res) => {
  res.render('addBlog', { title: 'Add new blog' });
});

router.get('/:id', (req, res) => {
  Blogs.findById(req.params.id, (err, blog) => {
    res.render('blog', { title: 'Your blog', blog });
  });
});

router.get('/edit/:id', (req, res) => {
  Blogs.findById(req.params.id, (err, blog) => {
    res.render('editBlog', { title: 'Edit blog', blog });
  });
});

router.post('/edit/:id', (req, res) => {
  let blog = {};
  blog.author = req.body.author;
  blog.text = req.body.text;

  Blogs.update({_id: req.params.id}, blog, (err) => {
    if (err) return console.log(err);
    
    req.flash('success', 'Blog updated!');
    res.redirect('/blogs');
  });
});

router.post('/add', (req, res) => {
  const blog = new Blogs();
  blog.author = req.body.author;
  blog.text = req.body.text;

  blog.save(err => {
    if (err) return console.log(err);

    req.flash('success', 'Blog added!');
    res.redirect('/blogs');
  });
});

router.delete('/delete/:id', (req, res) => {
  Blogs.remove({_id: req.body.id}, err => {
    if (err) return console.log(err);

    res.redirect('/blogs');
  });
});

module.exports = router;
