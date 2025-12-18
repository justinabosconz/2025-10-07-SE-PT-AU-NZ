const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

//a)
function getObjectValue(city) {
  for (let key in city) {
    console.log(`key = ${key}, value = ${city[key]}`);
  }
}

//b)
const christchurch = {
  name: "christchurch",
  population: 412_000,
  region: "Canterbury",
  founded: "31 July 1856",
  timezone: "Auckland",
};

getObjectValue(sydney);
getObjectValue(christchurch);
