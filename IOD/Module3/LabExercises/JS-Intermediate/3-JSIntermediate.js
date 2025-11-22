const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a)
animals.push("Lion", "Elephant");
console.log(animals);

// b)
animals.unshift("Dog", "Cat");
console.log(animals);

// c)
animals.sort();
console.log(animals);

// d)
function replaceMiddleAnimal(newValue) {
  animals[animals.length / 2] = newValue;
  console.log(animals);
}
replaceMiddleAnimal("Rabbit");

// e)
function findMatchingAnimals(beginsWith) {
  let filterAnimals = animals.filter((animals) =>
    animals.startsWith(
      beginsWith
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join()
    )
  );
  return filterAnimals;
}

console.log(findMatchingAnimals("t"));
