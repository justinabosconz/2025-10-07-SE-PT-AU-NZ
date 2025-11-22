function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
