const Facade = require('../common/facade');
const Blogs = require('../models/blogs');

class BlogsFacade extends Facade {}

module.exports = new BlogsFacade(Blogs);
