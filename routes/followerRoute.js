const express = require("express");
const followerModel = require("../models/followerModel");
const router = express.Router();
//CREATE
router.post("/create", async (req, res) => {
  const follow = new followerModel({
    follower: req.body.follower,
    followed: req.body.followed,
  });
  try {
    await follow.save();
    res.status(200).json({message: "Follow created successfully"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ ONE
router.get("/readFollowers/:uid", async (req, res) => {
  try {
    const user = await tweetModel.findById(req.params.uid);
    res.status(200).json({
      result: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ ALL
router.get("/readFollowed/:uid", async (req, res) => {
  try {
    const user = await tweetModel.find({user: req.params.uid});
    res.status(200).json({
      result: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    await tweetModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      result: "Tweet deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;