const express = require("express");
const tweetModel = require("../models/tweetModel");
const router = express.Router();
//CREATE
router.post("/create", async (req, res) => {
  const user = new tweetModel({
    user: req.body.user,
    text: req.body.text,
  });
  try {
    await user.save();
    res.status(200).json({message: "Tweet created successfully"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ ONE
router.get("/readOne/:twid", async (req, res) => {
  try {
    const user = await tweetModel.findById(req.params.twid);
    res.status(200).json({
      result: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ ALL
router.get("/readAll/:uid", async (req, res) => {
  try {
    const user = await tweetModel.find({user: req.params.uid});
    res.status(200).json({
      result: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//UPDATE
router.patch("/update/:twid", async (req, res) => {
  try {
    const tweet = await tweetModel.findByIdAndUpdate(
      req.params.twid,
      { $set: {text: req.body.text} }
    );
    res.status(200).json({
      result: "Tweet edited successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE
router.delete("/delete/:twid", async (req, res) => {
  try {
    await tweetModel.findByIdAndDelete(req.params.twid);
    res.status(200).json({
      result: "Tweet deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;