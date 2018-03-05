import express from 'express';
import Posts from '../models/posts';
import PostsController from '../controllers/posts.controller';

const router = express.Router();

router.get('/', (req, res) => PostsController.findAllPosts(req, res)
  .then(data => res.send(data)));

router.post('/', (req, res) => {
  const post = new Posts();
  post.author = req.body.author;
  post.text = req.body.text;

  post.save(err => {
    if (err) throw err;

    res.sendStatus(200);
  });
});

export default router;
