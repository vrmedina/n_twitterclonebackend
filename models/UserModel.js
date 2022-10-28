const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId;
const followerModel = require("./followerModel");

const userModel = new mongoose.Schema({
  name:  {type: String, required: true},//name displayed on screen
  username:  {type: String, required: true},//unique username
  location:  {type: String, default: ''},//where the user lives
  description: {type: String, default: ''},//a brief description of the users profile
  following:  {type: [ObjectId], default: []},//number of users being followed by the user
  followers:  {type: [ObjectId], default: []},//number of users following the user
  date: { type: Date, default: Date.now},//ideally...the birthdate of the user
});

module.exports = mongoose.model("User", userModel);