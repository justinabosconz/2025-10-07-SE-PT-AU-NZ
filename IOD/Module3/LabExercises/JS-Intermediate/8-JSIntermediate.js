const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) and b)
const phoneBookDEF = new Map([
  ["Don", "0412312347"],
  ["Emma", "0433221112"],
  ["Francia", "0455221000"],
]);

// c)
phoneBookABC.set("Caroline", "0225713608");
console.log(phoneBookABC);

// d)
function printPhoneBook(contacts) {
  for (let [key, value] of phoneBookABC) {
    if (key == contacts) {
      console.log(`Phone number for ${key} is ${value}`);
    }
  }
}
printPhoneBook("Caroline");

// e)
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f)
console.log(phoneBook);
