const loggerLibrary = require("./logger");
let LoggerObj = new loggerLibrary();

class Calculator {
  // add
  add(num1, num2) {
    const value = num1 + num2;
    LoggerObj.log(value);
    return value;
  }

  // subtract
  subtract(num1, num2) {
    const value = num1 - num2;
    LoggerObj.log(value);
    return value;
  }

  // divide
  divide(num1, num2) {
    const value = num1 / num2;
    LoggerObj.log(value);
    return value;
  }

  // multiply
  multiply(num1, num2) {
    const value = num1 * num2;
    LoggerObj.log(value);
    return value;
  }
}

module.exports = Calculator;
