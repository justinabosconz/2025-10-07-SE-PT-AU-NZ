let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

/* a)
because the toFixed() method converts the numbers into strings and the + operator appends */

// b)
function currencyAddition(float1, float2) {
  let result = (parseFloat(float1) + parseFloat(float2)).toFixed(2);
  return result;
}

console.log(currencyAddition(0.1, 0.2));

// c)
function currencyOperation(float1, float2, operation) {
  switch (operation) {
    case "+":
      return (parseFloat(float1) + parseFloat(float2)).toFixed(2);
    case "-":
      return (parseFloat(float1) - parseFloat(float2)).toFixed(2);
    case "*":
      return (parseFloat(float1) * parseFloat(float2)).toFixed(2);
    case "/":
      return (parseFloat(float1) / parseFloat(float2)).toFixed(2);
    default:
      return "Use '+', '-', '*', or '/' only.";
  }
}

console.log(currencyOperation(0, 1.2, "/"));
