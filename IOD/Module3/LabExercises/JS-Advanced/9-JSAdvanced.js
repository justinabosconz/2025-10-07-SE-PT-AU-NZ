function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000 * 20);
    console.log(`Delaying for ${delay} miliseconds...`);
    if (delay % 2)
      setTimeout(() => {
        reject(true);
      }, delay);
    else
      setTimeout(() => {
        resolve(true);
      }, delay);
  })
    .then((result) => console.log("Successful"))
    .catch((result) => console.log("Failure"))
    .finally(() => console.log("Promise fulfilled"));
}

randomDelay().then(() => console.log("There appears to have been a delay."));
