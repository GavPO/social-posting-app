const User = require('../models/User');
const Post = require('../models/Post');
const { validateBody } = require('../utils/requestUtils');

async function getAllPosts(req, res) {
  try {
    const allPosts = await Post.find().populate('user');
    return res.status(200).json(allPosts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}

async function getPostByID(req, res) {
  try {
    const singlePost = await Post.findById(req.params.postID).populate('user');

    return res.status(200).json(singlePost);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}

async function createPost(req, res) {
  try {
    const validBody = await validateBody(['content', 'user'], req.body);
    if (validBody === true) {
      const newPost = await Post.create(req.body);
      return res.status(201).json(newPost);
    }
    return res
      .status(400)
      .json({ message: `Missing Parameters: ${validBody.join(', ')}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

async function deletePost(req, res) {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.postID);
    return res.status(200).json(deletedPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllPosts,
  getPostByID,
  createPost,
  deletePost,
};
