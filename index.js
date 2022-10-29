const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MIDDLEWARE JSON
app.use(express.json());

// MONGO CONNECTION
mongoose.connect(
    "mongodb+srv://vrmedina:admin@cluster0.9aoeewj.mongodb.net/?retryWrites=true&w=majority"
    )
.then(() => {
    console.log("Success :)");
})
.catch((e) => {
    console.log(e)
    console.log("Error :')")
})

// ROUTES DECLARATION
const userRoute = require('./routes/userRoute')
app.use("/user", userRoute)

const tweetRoute = require('./routes/tweetRoute')
app.use("/tweet", tweetRoute)

const followerRoute = require('./routes/followerRoute')
app.use("/follow", followerRoute)

const timelineRoute = require('./routes/timelineRoute')
app.use("/timeline", timelineRoute)

const likeRoute = require('./routes/likeRoute')
app.use("/like", likeRoute)

// OPENING APP PORT
app.listen(3000, () => console.log(`Server Started at ${3000}`))