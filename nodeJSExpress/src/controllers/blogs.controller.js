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
        res.render('blogs', { title: 'List of blogs', blogs });
        res.status(httpStatus.OK);
      });
  }

  findBlogById(req, res, next) {
    super.findById(req, res, next)
      .then(blog => {
        res.render('blog', { title: 'Your blog', blog });
        res.status(httpStatus.OK);
      });
  }

  editBlogById(req, res, next) {
    super.findById(req, res, next)
      .then(blog => {
        res.render('editBlog', { title: 'Edit blog', blog });
        res.status(httpStatus.OK);
      });
  }

}

module.exports = new BlogsController(facade);
