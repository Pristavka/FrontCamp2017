const express = require('express');
const Blogs = require('../models/blogs');
const BlogsController = require('../controllers/blogs.controller');

const router = express.Router();

router.get('/', (...args) => BlogsController.findAllBlogs(...args));
router.get('/blog/add', (req, res) => res.render('addBlog', { title: 'Add new blog' }));
router.get('/blog/:id', (...args) => BlogsController.findBlogById(...args));
router.get('/blog/edit/:id', (...args) => BlogsController.editBlogById(...args));

router.put('/blog/edit/:id', (...args) => BlogsController.postBlog(...args));
router.post('/blog/add', (req, res) => {
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
      if (err) throw(err);

      req.flash('success', 'Blog added!');
      res.redirect('/blogs');
    });
  }
});

router.delete('/blog/delete/:id', (...args) => BlogsController.removeBlog(...args));

module.exports = router;
