// Will not print because 0 is always false
if (0) console.log("#1 zero is true");

// Will print because this is a string and string is always true
if ("0") console.log("#2 zero is true");

// Will not print because null and undefined is always false
if (null) console.log("null is true");

// Will print because this is a number which is true
if (-1) console.log("negative is true");

// Will print because this is a number which is true
if (1) console.log("positive is true");
