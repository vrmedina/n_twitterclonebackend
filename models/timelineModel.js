const mongoose = require("mongoose");
const tweetModel = require("./tweetModel");

const timelineModel = new mongoose.Schema({
  tweets:  {type: tweetModel, default: []},
});
   
module.exports = mongoose.model("Timeline", timelineModel);