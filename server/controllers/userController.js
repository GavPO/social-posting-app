const User = require('../models/User');
const Post = require('../models/Post');
const { signToken } = require('../utils/auth');
const { validateUser } = require('../utils/userUtils');
const { validateBody } = require('../utils/requestUtils');
const gravatar = require('gravatar');

async function getUsers(req, res) {
  try {
    const allUsers = await User.find().select('-password').select('-__v');

    return res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function getUserByID(req, res) {
  try {
    const allUsers = await User.findById(req.params.userID)
      .select('-password')
      .select('-__v')
      .populate('friends');

    return res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function getUsersPosts(req, res) {
  try {
    const usersPost = await Post.find({ user: req.params.userID }).select(
      '-__v'
    );

    return res.status(200).json(usersPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function createUser(req, res) {
  try {
    const validBody = await validateBody(
      ['username', 'email', 'password'],
      req.body
    );
    if (validBody === true) {
      const alreadyOne = await validateUser(req.body);
      if (alreadyOne) {
        return res.status(400).json({ message: 'User already exists!' });
      }

      const avatar = gravatar.url(req.body.email, true);
      const user = await User.create({ ...req.body, avatar });
      const token = signToken(user);

      return res.status(200).json({ user, token });
    }

    return res
      .status(400)
      .json({ message: `Missing Parameters: ${validBody.join(', ')}` });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function login(req, res) {
  try {
    const validBody = validateBody(['email', 'password'], req.body);
    if (validBody) {
      const user = await User.findOne({ email: req.body.email }).select('-__v');

      if (!user) {
        res.statusMessage = 'Incorrect email or password, please try again';
        return res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
      }

      const validPassword = await user.isCorrectPassword(req.body.password);
      if (!validPassword) {
        res.statusMessage = 'Incorrect email or password, please try again';
        return res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
      }

      const token = signToken(user);
      return res.status(200).json({ token, user });
    }

    return res.status(400).json({ message: 'Missing Parameters!', validBody });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  getUsers,
  getUserByID,
  getUsersPosts,
  createUser,
  login,
};
