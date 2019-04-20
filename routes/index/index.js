const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome, please login");
});

module.exports = router;
