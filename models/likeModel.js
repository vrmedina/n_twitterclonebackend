const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId;
//const userModel = require("./userModel");
//const tweetModel = require("./tweetModel");

const likeModel = new mongoose.Schema({
  user:  {type: ObjectId, required: true},
  tweet: {type: ObjectId, required: true},
});
   
module.exports = mongoose.model("Like", likeModel);