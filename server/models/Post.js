const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Post = model('Post', postSchema);

module.exports = Post;
