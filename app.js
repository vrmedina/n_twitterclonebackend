const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/userRoute")

mongoose
	.connect("mongodb://localhost:27017/twitter", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use("/api", routes) // new

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})