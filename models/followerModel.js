const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const followerModel = new mongoose.Schema({
  follower: { type: ObjectId, required: true }, //the id of the user who follows
  followed: { type: ObjectId, required: true }, //the id of the user who is being followed
});

module.exports = mongoose.model("Follower", followerModel);
