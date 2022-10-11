const express = require("express");
const followerModel = require("../models/followerModel");
const router = express.Router();
//CREATE
router.post("/", async (req, res) => {
  const follower = new followerModel(req.follower);
  await follower.save();
  res.status(200);
});
//READ
router.get("/", async (req, res) => {
  const follower = await followerModel.find({ id: req.id });
  res.status(200).json({
    result: follower,
  });
});
//UPDATE
router.put("/", async (req, res) => {
  const follower = await followerModel.updateOne({ id: req.id }, { $set: req.body });
  res.status(200);
});
//DELETE
router.delete("/", async (req, res) => {
  await followerModel.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;