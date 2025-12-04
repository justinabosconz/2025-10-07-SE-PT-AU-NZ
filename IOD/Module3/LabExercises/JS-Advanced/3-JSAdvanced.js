function printMe() {
  console.log("printing debounced message");
}

function debounce(func, ms) {
  let timeout;
  return function (...args) {
    const later = function () {
      timeout = null;
      func.apply(this, args);
    };
    clearTimeout(timeout);

    timeout = setTimeout(later, ms);
  };
}

printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
