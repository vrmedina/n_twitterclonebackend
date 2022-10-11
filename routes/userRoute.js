const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
//CREATE
router.post("/", async (req, res) => {
  const user = new userModel(req.user);
  await user.save();
  res.status(200);
});
//READ
router.get("/", async (req, res) => {
  const user = await userModel.find({ id: req.id });
  res.status(200).json({
    result: user,
  });
});
//UPDATE
router.put("/", async (req, res) => {
  const user = await userModel.updateOne({ id: req.id }, { $set: req.body });
  res.status(200);
});
//DELETE
router.delete("/", async (req, res) => {
  await userModel.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;