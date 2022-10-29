const mongoose = require("mongoose");
const  ObjectId = require('mongodb').ObjectId;
//const tweetModel = require("./tweetModel");

const timelineModel = new mongoose.Schema({
  timeline:  {type: [ObjectId], default: []},
});
   
module.exports = mongoose.model("Timeline", timelineModel);