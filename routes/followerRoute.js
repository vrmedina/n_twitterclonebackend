const express = require("express");
const followerModel = require("../models/followerModel");
const userModel = require("../models/userModel");
const router = express.Router();
//CREATE FOLLOW
router.post("/create", async (req, res) => {
  const follow = new followerModel({
    follower: req.body.follower,
    followed: req.body.followed,
  });
  try {
    await follow.save();
    res.status(200).json({ message: "Follow created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ USER FOLLOWERS
router.get("/readFollowers/:uid", async (req, res) => {
  try {
    const followersId = await followerModel.find({ followed: req.params.uid });
    const users = await userModel.find().where('_id').in(followersId.map(e=>e.follower));
    for (const e in users) {
      const followersId = await followerModel.find({ followed: users[e]._id });
      const followers = (await userModel.find().where('_id').in(followersId.map(e => e.follower))).length;
      const followedId = await followerModel.find({ follower: users[e]._id });
      const followed = (await userModel.find().where('_id').in(followedId.map(e => e.followed))).length;
      users[e].followers = followers
      users[e].following = followed
    }
    res.status(200).json({
      result: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ FOLLOWED BY USER
router.get("/readFollowed/:uid", async (req, res) => {
  try {
    const followedId = await followerModel.find({ follower: req.params.uid });
    const users = await userModel.find().where('_id').in(followedId.map(e=>e.followed));
    for (const e in users) {
      const followersId = await followerModel.find({ followed: users[e]._id });
      const followers = (await userModel.find().where('_id').in(followersId.map(e => e.follower))).length;
      const followedId = await followerModel.find({ follower: users[e]._id });
      const followed = (await userModel.find().where('_id').in(followedId.map(e => e.followed))).length;
      users[e].followers = followers
      users[e].following = followed
    }
    res.status(200).json({
      result: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    await followerModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      result: "Follow deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
