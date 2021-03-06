const express = require("express");
const Art = require("./models/artmodels");
const artRouter = require("./routes/artRoutes")

const app = express();
//middlewares
app.use(express.json())
//routers
app.use("/api/v1/arts",artRouter)

module.exports = app;