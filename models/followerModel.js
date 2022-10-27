const mongoose = require("mongoose");
const userModel = require("./userModel");

const followerModel = new mongoose.Schema({
  follower:  {type: userModel, required: true},
  followed:  {type: userModel, required: true},
});
   
module.exports = mongoose.model("Follower", followerModel);