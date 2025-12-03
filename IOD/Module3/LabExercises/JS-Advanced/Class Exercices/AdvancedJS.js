// Task 1

function makePizza() {
    console.log("Started preparing pizza ...");
}

let makeBase = () {
    console.log("Made the base");
}

let sauceNCheese = () => console.log("Added the sauce and cheese");

function pizzaToppings () {
    console.log("Added the pizza toppings");
}

let cookPizza = () {
    console.log("Cooked the pizza");
}

let pizzaReady = () => console.log("Pizza is ready");

// Task 2

setTimeout(makePizza, 1000);
setTimeout(makeBase, 1001);
setTimeout(sauceNCheese, 1002);
setTimeout(pizzaToppings, 1003);
setTimeout(cookPizza, 1004);
setTimeout(pizzaReady, 1005);