const router = require('express').Router();
const { login, createUser } = require('../../controllers/userController')

router.route('/login').post(login);

router.route('/signup').post(createUser);


module.exports = router;