const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const likeModel = new mongoose.Schema({
  user: { type: ObjectId, required: true }, //the id of the user who likes
  tweet: { type: ObjectId, required: true }, //the id of the tweet being liked by the user
});

module.exports = mongoose.model("Like", likeModel);
