function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

// a)
let counter2 = makeCounter();
counter2();

// b) and c)
function makeCounter2(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let myCount = makeCounter2();
myCount(99, 2);
