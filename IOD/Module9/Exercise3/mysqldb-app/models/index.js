"use strict";
const User = require("./user"); //require the model
const Like = require("./like");
const Post = require("./post");
const Comment = require("./comment");

async function init() {
  await User.sync(); // sync the model
  await Like.sync();
  await Post.sync();
  await Comment.sync();
  // also sync any extra models here
}

init();

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User);
User.hasMany(Comment);

Like.belongsTo(User);
User.hasMany(User);

module.exports = {
  User,
  Like,
  Post,
  Comment, // export the model
  // also export any extra models here
};
