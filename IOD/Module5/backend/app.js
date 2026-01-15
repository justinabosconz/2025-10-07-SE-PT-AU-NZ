const express = require("express"); // importing express
const app = express(); // web server for port 1 / calculator
const calculatorRouter = require("./routes/calculatorRoutes"); // importing calculator router

app.use("/Calculate", calculatorRouter); // calculator router

module.exports = app;
