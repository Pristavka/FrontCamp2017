import express from 'express';
import posts from'./posts.js';

const router = express.Router();

router.use('/api/posts', posts);
// router.use('/users', users);

export default router;
