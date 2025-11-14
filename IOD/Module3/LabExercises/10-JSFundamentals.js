function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = this.age >= 16 ? "Can Drive" : "Cannot Drive"; // e)
}

// a)
let person1 = new Person("Justina", 39);

// b)
let person2 = new Person("Carol", 13);

// c)
console.log(person1);
console.log(person2);

// d)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age >= 16 ? "Can Drive" : "Cannot Drive"; // e)
  }
}

let person3 = new PersonClass("Sean", 7);
console.log(person3);
