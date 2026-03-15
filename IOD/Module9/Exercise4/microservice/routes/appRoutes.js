const express = require("express");
const appRouter = express.Router();
const appController = require("../controllers/appControllers");

// fetching data
appRouter.get("/products", (req, res) => {
  appController.fetchData(req, res);
});

module.exports = appRouter;
