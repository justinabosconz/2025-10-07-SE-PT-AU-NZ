const express = require("express");
const calculatorRouter = express.Router();
const calculatorController = require("../controllers/calculatorControllers");

//Add
calculatorRouter.get("/Add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

//Subtract
calculatorRouter.get("/Subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});

//Divide
calculatorRouter.get("/Divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});

//Multiply
calculatorRouter.get("/Multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

module.exports = calculatorRouter;
