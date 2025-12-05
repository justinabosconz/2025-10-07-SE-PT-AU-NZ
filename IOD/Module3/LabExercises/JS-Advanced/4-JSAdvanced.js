function printFibonacci(startFrom, interval, limit) {
  let counter = 1;
  let firstNum = startFrom;
  let secondNum = startFrom;
  let clearID = setInterval(() => {
    console.log(firstNum);
    thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
    counter == limit ? clearInterval(clearID) : counter++;
  }, interval);
}

printFibonacci(3, 1000, 5);

// b) and c)

function printFibonacciTimeouts(startFrom, interval, limit) {
  let counter = 1;
  let firstNum = startFrom;
  let secondNum = startFrom;
  function repeatThis() {
    if (counter <= limit) {
      setTimeout(() => {
        console.log(firstNum);
        thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;
        counter++;
        repeatThis();
      }, interval);
    }
  }
  repeatThis();
}

printFibonacciTimeouts(2, 2000, 10);
