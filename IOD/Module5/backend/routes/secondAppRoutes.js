const express = require("express");
const secondAppRouter = express.Router();

secondAppRouter.get("/", (req, res) => {
  res.send("Welcome to my second backend application.");
});

secondAppRouter.get("/test", (req, res) => {
  res.send("This root is for testing purpose.");
});

secondAppRouter.get("/about", (req, res) => {
  res.send("This page is giving information about the web server.");
});

secondAppRouter.get("/contact", (req, res) => {
  res.send("Contact number is 222-222-222.");
});

module.exports = secondAppRouter;
