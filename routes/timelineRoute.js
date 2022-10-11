const express = require("express");
const timelineModel = require("../models/timelineModel");
const router = express.Router();
//CREATE
router.post("/", async (req, res) => {
  const timeline = new timelineModel(req.timeline);
  await timeline.save();
  res.status(200);
});
//READ
router.get("/", async (req, res) => {
  const timeline = await timelineModel.find({ id: req.id });
  res.status(200).json({
    result: timeline,
  });
});
//UPDATE
router.put("/", async (req, res) => {
  const timeline = await timelineModel.updateOne({ id: req.id }, { $set: req.body });
  res.status(200);
});
//DELETE
router.delete("/", async (req, res) => {
  await timelineModel.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;