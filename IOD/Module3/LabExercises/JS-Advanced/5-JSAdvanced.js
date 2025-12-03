let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); // this fails because the context to this is lost

// a)

setTimeout(() => car.description(), 200);

// b)

let car2 = { ...car, year: 2025 };
console.log(car2);

// c)

setTimeout(() => car2.description(), 200); // this uses the new values from b because deep cloning has been done

// d)

setTimeout(car2.description.bind(car2), 2000);

// e)

let car3 = { ...car, model: 718 };
setTimeout(car3.description.bind(car3), 2000);
