const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');

const {
  getUsers,
  getUserByID,
  getUsersPosts,
} = require('../../controllers/userController');

router.route('/').get(authMiddleware, getUsers);

router.route('/:userID').get(authMiddleware, getUserByID);

router.route('/:userID/posts').get(authMiddleware, getUsersPosts);

module.exports = router;
