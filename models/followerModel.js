/* const mongoose = require("mongoose");
const  ObjectId = require('mongodb').ObjectId;
const userModel = require("./userModel");

const followerModel = new mongoose.Schema({
  follower:  {type: ObjectId, required: true},
  followed:  {type: ObjectId, required: true},
});
   
module.exports = mongoose.model("Follower", followerModel); */