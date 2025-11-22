let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a)
function sumSalaries(obj) {
  let totalSalary = 0;
  for (item in obj) {
    totalSalary += obj[item];
  }
  return totalSalary;
}
console.log(sumSalaries(salaries));

// b)
function topEarner(obj) {
  let objArr = Object.entries(salaries);
  return objArr.sort()[0];
}

console.log(topEarner(salaries));
