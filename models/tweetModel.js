const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const tweetModel = new mongoose.Schema({
  date: { type: Date, default: Date.now }, //the date of creation of the tweet
  user: { type: ObjectId, required: true }, //the id of the user who posted the tweet
  text: { type: String, minlength: 1, maxlength: 280, required: true }, //the tweet's content
  likes: { type: Number, default: 0 }, //the amount of likes of the tweet
});

module.exports = mongoose.model("Tweet", tweetModel);
