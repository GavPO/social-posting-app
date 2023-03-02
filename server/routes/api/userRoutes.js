const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');



const { getUsers, getUser, getUsersPosts } = require('../../controllers/userController');

router.route('/').get(authMiddleware, getUsers)



router.route('/:id').get(authMiddleware, getUser)

router.route('/:id/posts').get(authMiddleware, getUsersPosts)

module.exports = router;