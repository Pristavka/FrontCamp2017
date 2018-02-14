const express = require('express');
const Blogs = require('../models/blogs');
const BlogsController = require('../controllers/blogs.controller');

const router = express.Router();

router.get('/', (...args) => BlogsController.findAllBlogs(...args));
router.post('/', (req, res) => {
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

router.get('/add', (req, res) => res.render('addBlog', { title: 'Add new blog' }));

router.get('/:id', (...args) => BlogsController.findBlogById(...args));
router.put('/:id', (...args) => BlogsController.postBlog(...args));
router.delete('/:id', (...args) => BlogsController.removeBlog(...args));

router.get('/edit/:id', (...args) => BlogsController.editBlogById(...args));

module.exports = router;
