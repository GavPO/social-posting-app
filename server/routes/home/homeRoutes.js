const router = require('express').Router();
const { login } = require('../../controllers/userController')

router.route('/login').post(login);

module.exports = router;