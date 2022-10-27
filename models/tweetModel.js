const mongoose = require("mongoose");
const userModel = require("./userModel");

const tweetModel = new mongoose.Schema({
  date: { type: Date, default: Date.now },//the date of creation of the tweet
  text:  {type: String, minlength: 1, maxlength: 280, required: true},//the tweet's content
  user:  {type: userModel, required: true},//the user who posted the tweet
  liked: {type: [userModel], default: []}//the amount of likes of the tweet
});
   
module.exports = mongoose.model("Tweet", tweetModel);
