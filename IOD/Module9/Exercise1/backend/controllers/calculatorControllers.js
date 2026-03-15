const calcLibrary = require("../libraries/calculator");

let calculatorObj = new calcLibrary();

// add
const addNumbers = (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  let result = calculatorObj.add(parseInt(num1), parseInt(num2)); // pulling from library

  res.status(200);
  res.json({
    res: result,
  });
};

// subtract
const subtractNumbers = (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  let result = calculatorObj.subtract(num1, num2); // pulling from library

  res.status(200);
  res.json({
    res: result,
  });
};

// divide
const divideNumbers = (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  let result = calculatorObj.divide(num1, num2); // pulling from library

  res.status(200);
  res.json({
    res: result,
  });
};

// multiply
const multiplyNumbers = (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  let result = calculatorObj.multiply(num1, num2); // pulling from library

  res.status(200);
  res.json({
    res: result,
  });
};

//exporting
module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
};
