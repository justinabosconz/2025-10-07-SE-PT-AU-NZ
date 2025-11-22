const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
console.log(today.getMinutes() + "minutes have passed so far today");
console.log(today.getSeconds() + "seconds have passed so far today");

const birthDate = new Date(1986, 7, 10);
let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

console.log(`I am ${years} years, ${months} months and ${days} days old`);

// d)
function daysInBetween(date1, date2) {
  d1 = new Date(date1);
  d2 = new Date(date2);
  diff = (d2 - d1) / (24 * 60 * 60 * 1000);
  return diff;
}

console.log(daysInBetween("2013-4-11", "2018-11-18"));
