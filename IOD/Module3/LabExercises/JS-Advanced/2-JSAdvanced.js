function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// a)

/* The order will be #4, #3, #2 and then #1.
#4 has no setTimeout so it will be printed first.
The other three will be printed next but according to their time set, as they all fall in the setTimeout bucket. */

// b) and c)

let delayMsg2 = (message) =>
  console.log(`This message will be printed after a delay: ${message}`);

let cancelledTimerId = setTimeout(
  delayMsg2,
  1000 * 11,
  "#5: Delayed by 11000ms"
);

setTimeout(delayMsg2, 1000 * 11, "#5: Testing number 5");

// d)

clearTimeout(cancelledTimerId);
