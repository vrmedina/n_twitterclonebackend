const mongoose = require("mongoose");
const  ObjectId = require('mongodb').ObjectId;
const userModel = require("./userModel");

const tweetModel = new mongoose.Schema({
  date: { type: Date, default: Date.now },//the date of creation of the tweet
  user:  {type: ObjectId, required: true},//the user who posted the tweet userModel
  text:  {type: String, minlength: 1, maxlength: 280, required: true},//the tweet's content
  liked: {type: [ObjectId], default: []}//the amount of likes of the tweet userModel
});
   
module.exports = mongoose.model("Tweet", tweetModel);
