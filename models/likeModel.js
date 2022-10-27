const mongoose = require("mongoose");
const userModel = require("./userModel");
const tweetModel = require("./tweetModel");

const likeModel = new mongoose.Schema({
  username:  {type: userModel, required: true},
  tweet: {type: tweetModel, required: true},
});
   
module.exports = mongoose.model("Like", likeModel);