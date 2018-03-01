import Facade from '../common/facade';
import Posts from '../models/posts';

class PostsFacade extends Facade {}

export default new PostsFacade(Posts);
