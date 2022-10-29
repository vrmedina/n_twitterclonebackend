const express = require("express");
const timelineModel = require("../models/timelineModel");
const router = express.Router();
//READ ALL
router.get("/readAll/:uid", async (req, res) => {
  try {
    const timeline = await timelineModel.find({user: req.params.uid});
    res.status(200).json({
      result: timeline,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;