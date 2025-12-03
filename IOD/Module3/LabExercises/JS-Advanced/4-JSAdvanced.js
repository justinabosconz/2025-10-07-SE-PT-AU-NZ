// function printFibonacci(startFrom, interval, limit) {
//   let counter = 1;
//   let firstNum = startFrom;
//   let secondNum = startFrom;
//   let clearID = setInterval(() => {
//     console.log(firstNum);
//     thirdNum = firstNum + secondNum;
//     firstNum = secondNum;
//     secondNum = thirdNum;
//     counter == limit ? clearInterval(clearID) : counter++;
//   }, interval);
// }

// printFibonacci(3, 1000, 5);

// b) and c)

function printFibonacciTimeouts(startFrom, delay, limit) {
  let firstNum = startFrom;
  let secondNum = startFrom;
  for (i = 0; i < limit; i++) {
    setTimeout(() => {
      console.log(secondNum);
      thirdNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = thirdNum;
    }, delay);
  }
}

printFibonacciTimeouts(2, 1000, 5);
