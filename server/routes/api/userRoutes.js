const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');



const { getUsers, getUser, getUsersPosts } = require('../../controllers/userController');

router.route('/').get(authMiddleware, getUsers)



router.route('/:userID').get(authMiddleware, getUser)

router.route('/:userID/posts').get(authMiddleware, getUsersPosts)

module.exports = router;