let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// a)
let moreSports = teamSports;
moreSports.push("Soccer");
moreSports.unshift("Baseball");

console.log(moreSports);

// b)
let dog2 = dog1;
dog2 = "Jackie";

// c)
let cat2 = cat1;
cat2.name = "Shiny";

// d) teamSports and cat1 have automatically changed because I only used the reference and not cloned the data.
console.log(teamSports);
console.log(dog1);
console.log(cat1);

// e)
moreSports = [...teamSports];
cat2 = { ...cat1 };
