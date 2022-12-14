const express = require("express");
const likeModel = require("../models/likeModel");
const tweetModel = require("../models/tweetModel");
const router = express.Router();
//CREATE LIKE
router.post("/create", async (req, res) => {
  const like = new likeModel({
    user: req.body.user,
    tweet: req.body.tweet,
  });
  try {
    await like.save();
    res.status(200).json({ message: "Like created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ TWEETS LIKED BY USER ID
router.get("/readLiked/:uid", async (req, res) => {
  try {
    const liked = await likeModel.find({ user: req.params.uid });
    const tweets = await tweetModel.find().where('_id').in(liked.map(e=>e.tweet));
    for (const e in tweets) {
      const likes = await likeModel.find({ tweet: tweets[e]._id });
      tweets[e].likes = likes.length
    }
    res.status(200).json({
      result: tweets,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ USER LIKED ONLY IDS BY USER ID
router.get("/readLikes/:uid", async (req, res) => {
  try {
    const liked = await likeModel.find({ user: req.params.uid });
    res.status(200).json({
      result: liked,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE LIKE BY LIKE ID
router.delete("/delete/:id", async (req, res) => {
  try {
    await likeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      result: "Like deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;