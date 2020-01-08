// *** *** *** *** *** *** *** DATES & TIMES IN JavaScript *** *** *** *** *** *** ***
// const now = new Date();
// console.log(now); // Wed Jan 08 2020 15:24:25 GMT-0700 (Mountain Standard Time)

// console.log(typeof now); // Object

// Year, Months, Day, Times
// console.log("getFullYear:", now.getFullYear()); // gives current year -> 2020
// console.log("getCurrentMonth:", now.getMonth()); // gives index -> 0 is January
// console.log("getCurrentDate:", now.getDate()); // gives date of current day 01/08/2020 -> 8
// console.log("getCurrentDay:", now.getDay()); // gives index -> 3 is Wednesday
// console.log("getHours:", now.getHours()); // military time: 3:00pm -> returns 15
// console.log("getMinutes:", now.getMinutes()); // 3:18pm -> returns 18
// console.log("getSeconds:", now.getSeconds()); // current seconds 3:18:52 -> returns 52

// Timestamps
// console.log("timestamp:", now.getTime()); // number of milliseconds since 12:00am --> 1578522426905

// Date Strings
// console.log(now.toDateString()); // --> 'Wed Jan 08 2020'
// console.log(now.toTimeString()); // --> '15:29:45 GMT-0700 (Mountain Standard Time)'
// console.log(now.toLocaleString()); // --> '1/8/2020, 3:29:45 PM'

// *** *** *** *** *** *** *** TIMESTAMPS & COMPARISONS *** *** *** *** *** *** ***

//Timestamps --> number of milliseconds since 12:00am
// const before = new Date("February 1 2019 7:30:59");
// const current = new Date();

// This shows the current timestamp and the timestamp of the 'before' date that we are comparing with
// console.log(
//   "Milliseconds:",
//   current.getTime(),
//   "Milliseconds",
//   before.getTime()
// );
// --> Milliseconds: 1578523987627 Milliseconds 1549031459000

// Gets the difference between the two timestamps
// const diff = current.getTime() - before.getTime();
// console.log("milliseconds:", diff);
// --> milliseconds: 29491835327

// This is the same but we simplify milliseconds to minutes
// const mins = Math.round(diff / 1000 / 60);
// console.log("minutes:", mins);
// --> minutes: 491533

// This is the same but we simplify minutes to hours
// const hours = Math.round(mins / 60);
// console.log("minutes:", mins, "hours:", hours);
// --> minutes: 491536 hours: 8192

// This is the same but we simplify hours to days
// const days = Math.round(hours / 24);
// console.log("Minutes:", mins, "Hours:", hours, "Days:", days);
// --> Minutes: 491541 Hours: 8192 Days: 341

// Potentially use it in a situation like this:
// console.log(`The blog was written ${days} ago.`);
// --> 'The blog was written 341 ago.'

// Converting timestamps into date Objects
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));
// --> Thu Feb 09 2023 03:27:54 GMT-0700 (Mountain Standard Time)

// *** *** *** *** *** *** *** BUILDING A DIGITAL CLOCK *** *** *** *** *** *** ***
const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
    `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);
