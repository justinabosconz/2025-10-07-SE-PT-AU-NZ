let userData = {
  firstName: "Justina",
  lastName: "Bosco",
  age: 46,
  followers: 786,
  "Joining Date": "2021-01-02",
};

console.log(userData.firstName);
console.log(userData.lastName);
console.log(userData.age);
console.log(userData.followers);

userData.followers = 1200;

console.log(userData.followers);
console.log(userData);

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.split(""));
