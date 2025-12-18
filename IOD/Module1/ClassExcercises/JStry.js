let obj1 = {
  a: 1,
  b: 2,
};

console.log(obj1);

let obj2 = Object.assign(obj1);

console.log(obj2);

obj2.b = 10;

console.log(obj1, obj2);
