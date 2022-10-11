const mongoose = require("mongoose")

const schema = mongoose.Schema({
	firstName: String,
	lastName: String,
})

module.exports = mongoose.model("User", schema)
