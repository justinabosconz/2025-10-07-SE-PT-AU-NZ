const express = require("express");
const appRouter = express.Router();

appRouter.get("/test", (req, res) => {
  res.send("This root is for testing purpose.");
});

appRouter.get("/about", (req, res) => {
  res.send("This page is giving information about the web server.");
});

appRouter.get("/contact", (req, res) => {
  res.send("Contact number is 111-111-111");
});

module.exports = appRouter;
