import httpStatus from 'http-status';
import Controller from '../common/controller';
import facade from '../facades/posts.facade';

class PostsController extends Controller {
  constructor(facade){
    super(facade);
  }

  findAllPosts(req, res, next) {
    return super.find(req, res, next)
      .then(data => data);
  }

  findPostById(req, res, next) {
    super.findById(req, res, next)
      .then(blog => {
        res.status(httpStatus.OK);
        res.render('blog', { title: 'Your blog', blog });
      });
  }

  editPostById(req, res, next) {
    super.findById(req, res, next)
      .then(blog => {
        res.status(httpStatus.OK);
        res.render('editBlog', { title: 'Edit blog', blog });
      });
  }

  addPost(req, res, next) {
    super.update(req, res, next)
      .then(() => {
        res.status(httpStatus.OK);
        res.redirect('/blogs');
      });
  }

  removePost(req, res, next) {
    super.remove(req, res, next)
      .then(() => {
        res.status(httpStatus.OK);
        res.redirect('/blogs');
      });
  }
}

export default new PostsController(facade);
