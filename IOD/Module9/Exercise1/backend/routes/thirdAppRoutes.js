const express = require("express");
const thirdAppRouter = express.Router();

thirdAppRouter.get("/", (req, res) => {
  res.send("This is the third server I have built.");
});
thirdAppRouter.get("/about", (req, res) => {
  res.send("This is the about page for the third server.");
});

module.exports = thirdAppRouter;
