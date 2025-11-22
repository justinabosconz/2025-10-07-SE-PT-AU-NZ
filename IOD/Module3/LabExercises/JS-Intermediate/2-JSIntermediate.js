function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}

function truncateConditional(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...
