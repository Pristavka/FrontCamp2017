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

  addPost(req, res, next) {
    super.update(req, res, next)
      .then(() => {
        res.sendStatus(httpStatus.OK);
      });
  }
}

export default new PostsController(facade);
