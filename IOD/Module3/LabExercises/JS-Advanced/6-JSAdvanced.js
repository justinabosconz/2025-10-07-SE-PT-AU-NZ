// function multiply(a, b) {
//   console.log(a * b);
// }

Function.prototype.delay = function (ms) {
  let originalFunction = this;
  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function multiply(a = 1, b = 1, c = 1, d = 1) {
  console.log(a * b * c * d);
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

multiply.delay(500)(1, 2, 3, 4);
