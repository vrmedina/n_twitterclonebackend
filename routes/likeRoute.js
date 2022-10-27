const express = require("express");
const likeModel = require("../models/likeModel");
const router = express.Router();
//CREATE
router.post("/", async (req, res) => {
  const like = new likeModel(req.like);
  await like.save();
  res.status(200);
});
//READ
router.get("/", async (req, res) => {
  const like = await likeModel.find({ id: req.id });
  res.status(200).json({
    result: like,
  });
});
//DELETE
router.delete("/", async (req, res) => {
  await likeModel.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;