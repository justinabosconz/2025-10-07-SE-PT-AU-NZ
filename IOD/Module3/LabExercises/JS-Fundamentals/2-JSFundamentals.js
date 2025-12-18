let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = three + four; // this will apend because the values are strings
let multiplication = three * four; // this will multiply as implicit conversion happens
let division = three / four; // this will divide as implicit conversion happens
let subtraction = three - four; //this will subtract as implicit conversion happens
let lessThan1 = three < four; // this will return true as the first letter 4 is greater than 3
let lessThan2 = thirty < four; // this will return true as the first letter 4 is greater than 3. Further comparison doesn't happen

// addition = three + four is incorrect. To fix it:
let addition2 = Number(three) + Number(four);

// lessThan2 = thirty < four is incorrect because comparison happens with . To fix it:
let lessThan3 = Number(thirty) < Number(four);
