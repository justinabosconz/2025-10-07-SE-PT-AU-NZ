const westley = {
  name: "Westley",
  lname: "Kumar", // I added the last name key value pair
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  lname: "Bosco", // I added the last name key value pair
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name} ${person.lname}, my name is ${this.firstName}. `; //a)I added ${person.lname} to the ` operator
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    // I modified the below function to an IF function
    if (person.numFingers >= 6) {
      return "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand? Nice to meet you."; // b)
    } else {
      return "Nice to meet you.";
    }
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);

/* c) I tried to convert the getCatchPhrase IF function to a ? operator function 
but then the function doesn't work 
because function cannot be called before the parameter is defined.*/
