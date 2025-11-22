// a) and c) Without conditional operator
function camelCase(cssProp) {
  let cssPropArr = cssProp.split("-");
  result = cssPropArr
    .map((item, index) => {
      if (index === 0) {
        return item;
      } else {
        return item[0].toUpperCase() + item.slice(1);
      }
    })
    .join("");
  return result;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// b) with conditional operator
function camelCase2(cssProp2) {
  let str = "";
  for (let letter of cssProp2) {
    letter == cssProp2[cssProp2.indexOf("-") + 1]
      ? (str += letter.toUpperCase())
      : letter == "-"
      ? (str += "")
      : (str += letter);
  }
  return str;
}

console.log(camelCase2("margin-left")); // marginLeft
console.log(camelCase2("background-image")); // backgroundImage
console.log(camelCase2("display")); // display
