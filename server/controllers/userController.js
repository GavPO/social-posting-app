const User = require("../models/User");
const { signToken } = require("../utils/auth");

export async function getUsers(req, res) {}

export async function getUser(req, res) {}

export async function getFriends(req, res) {}

export async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    const token = signToken(user);

    res.status(200).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

export async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email }).select("-__v");

    if (!user) {
      return res
        .status(400)
        .json({ message: "No user with that email address!" });
    }

    const validPassword = await user.isCorrectPassword(req.body.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }
    
    const token = signToken(user);
    res.status(200).json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}
