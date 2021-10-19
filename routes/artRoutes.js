const { addArt } = require("../controllers/artController");
const express = require("express");

const router = express.Router();

router.post("/",addArt);

module.exports = router;