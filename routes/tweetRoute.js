const express = require("express");
const tweetModel = require("../models/tweetModel");
const router = express.Router();
//CREATE
router.post("/", async (req, res) => {
  const tweet = new tweetModel(req.tweet);
  await tweet.save();
  res.status(200);
});
//READ
router.get("/", async (req, res) => {
  const tweet = await tweetModel.find({ id: req.id });
  res.status(200).json({
    result: tweet,
  });
});
//UPDATE
router.put("/", async (req, res) => {
  const tweet = await tweetModel.updateOne({ id: req.id }, { $set: req.body });
  res.status(200);
});
//DELETE
router.delete("/", async (req, res) => {
  await tweetModel.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;