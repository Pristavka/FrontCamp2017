const httpStatus = require('http-status');
const Controller = require('../common/controller');
const facade = require('../facades/blogs.facade');

class BlogsController extends Controller{
  constructor(facade){
    super(facade);
  }

  findAllBlogs(req, res, next) {
    super.find(req, res, next)
      .then(blogs => {
        res.status(httpStatus.OK);
        res.render('blogs', { title: 'List of blogs', blogs });
      });
  }

  findBlogById(req, res, next) {
    super.findById(req, res, next)
      .then(blog => {
        res.status(httpStatus.OK);
        res.render('blog', { title: 'Your blog', blog });
      });
  }

  editBlogById(req, res, next) {
    super.findById(req, res, next)
      .then(blog => {
        res.status(httpStatus.OK);
        res.render('editBlog', { title: 'Edit blog', blog });
      });
  }

  postBlog(req, res, next) {
    super.update(req, res, next)
      .then(() => {
        res.status(httpStatus.OK);
        req.flash('success', 'Blog updated!');
        res.redirect('/blogs');
      });
  }

  removeBlog(req, res, next) {
    super.remove(req, res, next)
      .then(() => {
        res.status(httpStatus.OK);
        res.redirect('/blogs');
      });
  }
}

module.exports = new BlogsController(facade);
