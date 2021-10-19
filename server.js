require("dotenv").config()
const app = require("./app")

const mongoose = require("mongoose");

const DB = process.env.MONGO_STRING.replace("<PASSWORD>", process.env.MONGO_PASSWORD);

mongoose.connect(DB).then((con) => {
    console.log("connected")
})



app.listen(process.env.PORT, () => {
    console.log("hosted on 8000")
})