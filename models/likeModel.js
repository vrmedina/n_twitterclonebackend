const mongoose = require("mongoose");

const likeModel = new mongoose.Schema({
  first_name:  {type: String, required: true},
  last_name:  {type: String, required: true},
  username:  {type: String, required: true},
  phone:  {type: Number, required: true},
  email: {type: String, required: true},
  date: { type: Date, default: Date.now },
  like: {type: String, required: true},
});
   
module.exports = mongoose.model("Like", likeModel);