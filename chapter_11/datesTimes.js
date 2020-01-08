// Dates & Times
const now = new Date();
console.log(now); // Wed Jan 08 2020 15:24:25 GMT-0700 (Mountain Standard Time)

console.log(typeof now); // Object

// Year, Months, Day, Times
console.log("getFullYear:", now.getFullYear()); // gives current year -> 2020
console.log("getCurrentMonth:", now.getMonth()); // gives index -> 0 is January
console.log("getCurrentDate:", now.getDate()); // gives date of current day 01/08/2020 -> 8
console.log("getCurrentDay:", now.getDay()); // gives index -> 3 is Wednesday
console.log("getHours:", now.getHours()); // military time: 3:00pm -> returns 15
console.log("getMinutes:", now.getMinutes()); // 3:18pm -> returns 18
console.log("getSeconds:", now.getSeconds()); // current seconds 3:18:52 -> returns 52

// Timestamps
console.log("timestamp:", now.getTime()); // --> 1578522426905

// Date Strings
console.log(now.toDateString()); // --> 'Wed Jan 08 2020'
console.log(now.toTimeString()); // --> '15:29:45 GMT-0700 (Mountain Standard Time)'
console.log(now.toLocaleString()); // --> '1/8/2020, 3:29:45 PM'
