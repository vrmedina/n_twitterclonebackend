const express = require("express");
const likeModel = require("../models/likeModel");
const router = express.Router();
//CREATE like
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
//READ USER likeERS
router.get("/readlikeers/:uid", async (req, res) => {
  try {
    const likeers = await likeerModel.find({ likeed: req.params.uid });
    res.status(200).json({
      result: likeers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ likeED BY USER
router.get("/readlikeed/:uid", async (req, res) => {
  try {
    const likeed = await likeerModel.find({ likeer: req.params.uid });
    res.status(200).json({
      result: likeed,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    await likeerModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      result: "like deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;