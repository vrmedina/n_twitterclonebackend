const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();
//CREATE
router.post("/", async (req, res) => {
  const user = new UserModel(req.user);
  await user.save();
  res.status(200);
});
//READ
router.get("/", async (req, res) => {
  const user = await UserModel.find({ id: req.id });
  res.status(200).json({
    result: user,
  });
});
//UPDATE
router.put("/", async (req, res) => {
  const user = await UserModel.updateOne({ id: req.id }, { $set: req.body });
  res.status(200);
});
//DELETE
router.delete("/", async (req, res) => {
  await UserModel.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;