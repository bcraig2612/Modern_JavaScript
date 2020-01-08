// *** *** *** *** *** *** *** Date-fns LIBRARY *** *** *** *** *** *** ***
const now = new Date();
// console.log(dateFns); // --> returns objects with all of its methods
// console.log(dateFns.isToday(now)); // --> return true

// Formatting Options
console.log(dateFns.format(now, "YYYY")); // --> returns 2020
console.log(dateFns.format(now, "MMMM")); // --> returns January
console.log(dateFns.format(now, "MMM")); // --> return Jan
console.log(dateFns.format(now, "dddd")); // returns --> Wednesday
console.log(dateFns.format(now, "Do")); // returns --> 8th
console.log(dateFns.format(now, "dddd, Do, MMMM, YYYY")); // --> returns Wednesday, 8th, January, 2020

// Comparing Dates (Comparing 'now' Date with 'before' DATE)
const before = new Date("February 1 2019 12:00:00");
console.log(dateFns.distanceInWords(now, before, { addSuffix: true })); // --> returns 11 months ago
