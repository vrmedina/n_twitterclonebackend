const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
//CREATE
router.post("/create", async (req, res) => {
  const user = new userModel({
      name: req.body.name,
      username: req.body.username,
      location: req.body.location,
      description: req.body.description,
      following: req.body.following,
      followers: req.body.followers,
      date: req.body.date,
  })
  try {
      await user.save();
      res.status(200).json(user.save())
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});
//READ ONE
router.get("/readOne/:id", async (req, res) => {
  try{
    const user = await userModel.find({id: req.id});
    res.status(200).json({
      result: user,
    });
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
});
//READ ALL
router.get("/readAll", async (req, res) => {
  try{
    const user = await userModel.find();
    res.status(200).json({
      result: user,
    });
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
});
//UPDATE
router.put("/update/:id", async (req, res) => {
  const user = await userModel.updateOne({ id: req.id }, { $set: req.body });
  res.status(200).json({
    result: user,
  });
});
//DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    await userModel.deleteOne({ id: req.id });
    res.status(200);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

module.exports = router;