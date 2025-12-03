function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}

// a)

function validateStringArg(fn) {
  return function (itemName) {
    if (typeof itemName !== "string") {
      return `Error: ${itemName} is not a string. Try again.`;
    } else {
      return fn(itemName);
    }
  };
}

const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error

// b)

function orderItems(...args) {
  return `Order placed for: ${args.join(", ")}`;
}

// c) and d)

try {
  function validateStringArg(fn) {
    return function (...args) {
      for (const arg of args) {
        if (typeof arg !== "string") {
          //console.log(`Error: ${arg} is not a string. Try again.`);
          throw new SyntaxError("Invalid argument type");
        } else {
          console.log(fn(arg));
        }
      }
    };
  }
  const validatedOrderItem2 = validateStringArg(orderItems);
  console.log(validatedOrderItem2("Apple Watch", 12345)); // should run the function
  console.log(validatedOrderItem2(123)); // should throw an error
} catch (err) {
  console.log("caught an error.");
}
