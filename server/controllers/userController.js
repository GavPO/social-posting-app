const User = require("../models/User");
const Post = require("../models/Post");
const { signToken } = require("../utils/auth");
const { validateUser } = require("../utils/userUtils");

async function getUsers(req, res) {
  try {
    const allUsers = await User.find().select("-password").select("-__v");
    return res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function getUser(req, res) {
  try {
    const allUsers = await User.findById(req.params.userID)
      .select("-password")
      .select("-__v")
      .populate("friends");

    return res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function getUsersPosts(req, res) {
  try {
    const usersPost = await Post.find({ user: req.params.userID }).select(
      "-__v"
    );

    return res.status(200).json(usersPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function createUser(req, res) {
  try {
    const alreadyOne = await validateUser(req.body);

    if (alreadyOne) {
      return res.status(400).json({ message: "User already exists!" });
    } else {
      const user = await User.create(req.body);
      const token = signToken(user);

      return res.status(200).json({ user, token });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email }).select("-__v");

    if (!user) {
      res.statusMessage = "Incorrect email or password, please try again";
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    const validPassword = await user.isCorrectPassword(req.body.password);
    if (!validPassword) {
      res.statusMessage = "Incorrect email or password, please try again";
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    const token = signToken(user);
    return res.status(200).json({ token, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  getUsers,
  getUser,
  getUsersPosts,
  createUser,
  login,
};
