const mongoose = require("mongoose");
const  ObjectId = require('mongodb').ObjectId;

const timelineModel = new mongoose.Schema({
  timeline:  {type: [ObjectId], default: []}, //array of tweet ids
});
   
module.exports = mongoose.model("Timeline", timelineModel);