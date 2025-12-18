const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my backend application");
});

app.get("/test", (req, res) => {
  res.send("This is for testing");
});

app.listen(port, () => {
  console.log("Web server started..");
});
