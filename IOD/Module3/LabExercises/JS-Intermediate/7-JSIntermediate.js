const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// a)
function getBookTitle(bookId) {
  let result = books.find((item) => item.id == bookId);
  return result;
}

console.log(getBookTitle(2));

// b)
function getOldBooks() {
  let result = books.filter((item) => item.year < 1950);
  return result;
}

console.log(getOldBooks());

// c)
function addGenre() {
  let result = books.map((item) => ({ ...item, genre: "Classic" }));
  return result;
}

console.log(addGenre());
