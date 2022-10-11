const express = require("express")
const User = require("./models/UserModel")
const router = express.Router()

// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

module.exports = router