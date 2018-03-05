export default {
  winston: {
    error: 'error.log',
    logger: 'logger.log'
  },
  database: 'mongodb://localhost:27017/posts',
  secret: 'secret',
  getAllPostsURL: 'http://localhost:3000/api/posts',
  messages: {
    success: 'Your post has added successfuly!'
  }
};
