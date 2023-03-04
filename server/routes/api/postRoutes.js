const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');

const {
  getAllPosts,
  getPostByID,
  createPost,
  deletePost,
} = require('../../controllers/postController');

router
  .route('/')
  .get(authMiddleware, getAllPosts)
  .post(authMiddleware, createPost);

router
  .route('/:postID')
  .get(authMiddleware, getPostByID)
  .delete(authMiddleware, deletePost);

module.exports = router;
