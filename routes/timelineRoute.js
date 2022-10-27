const express = require("express");
const timelineModel = require("../models/timelineModel");
const router = express.Router();
//READ
router.get("/", async (req, res) => {
  const timeline = await timelineModel.find({ id: req.id });
  res.status(200).json({
    result: timeline,
  });
});

module.exports = router;