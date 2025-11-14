let a = 2,
  b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

(a = 12), (b = 13);

console.log(
  // the below is the if function written using ? operator.
  // += increases the value by 1. Hence it prints twice.
  a + b < 10 ? (result += "less than 10") : (result += "greater than 10")
);
