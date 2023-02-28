const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 30,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

const Post = model("Post", postSchema);

module.exports = Post;
