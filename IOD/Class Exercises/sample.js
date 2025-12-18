const epoch = new Date(0); // 0 milliseconds since Jan 1 1970
const jan2_1970 = new Date(1000 * 60 * 60 * 48); // a full day in milliseconds after Jan 1
console.log(epoch); // 1970-01-01T00:00:00.000Z
console.log(+jan2_1970); // 1970-01-02T00:00:00.000Z
