const express = require("express");
const userModel = require("../models/userModel");
const followerModel = require("../models/followerModel");
const tweetModel = require("../models/tweetModel");
const likeModel = require("../models/likeModel");
const router = express.Router();
//READ TIMELINE BY USER ID
router.get("/read/:uid", async (req, res) => {
  try {
    const followedId = await followerModel.find({ follower: req.params.uid });
    const followed = await userModel
      .find()
      .where("_id")
      .in(followedId.map((e) => e.followed));
    let tweets = [];
    for (const e in followed) {
      tweets.push(await tweetModel.find({ user: followed[e]._id }));
    }
    tweets = [].concat.apply([], tweets);
    for (const e in tweets) {
      const likes = await likeModel.find({ tweet: tweets[e]._id });
      tweets[e].likes = likes.length;
    }
    timeline = tweets;
    res.status(200).json({
      result: timeline,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
