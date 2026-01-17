const express = require("express");
const router = express.Router();
const controller = require("../controllers/myAppController");

router.get("/E-commerce", (req, res) => {
  controller.fetchData(req, res);
});

router.get("/contact", (req, res) => {
  res.send("Contact us on 111-111-111");
});

module.exports = router;
