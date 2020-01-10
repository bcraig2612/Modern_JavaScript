// *** *** *** *** *** *** Section-14 Local Storage *** *** *** *** *** ***

// *** *** *** *** *** *** WHAT IS LOCAL STORAGE? *** *** *** *** *** ***
// (1.) Set up a database to store & retrieve data
// (2.) Use local storage to store and retrieve data
// local storage (in the browser/window object)

// *** *** *** *** *** *** STORING & GETTING DATA *** *** *** *** *** ***
// (1.) Store data in local storage
localStorage.setItem("name", "Brandon");
localStorage.setItem("age", 24);

// (2.) Get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name, age);

//(3.) Updating Data
localStorage.setItem("name", "Craig");
localStorage.age = "25";

name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age);

// *** *** *** *** *** *** DELETING STORAGE DATA *** *** *** *** *** ***
// (1.) Removing One Item
// localStorage.removeItem("name");

// name = localStorage.getItem("name");

// console.log(name);

// (2.) Removing All Items
localStorage.clear();

name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age);

// *** *** *** *** *** *** STRINGIFYING & PARSING DATA *** *** *** *** *** ***
const todos = [
  { text: "buy milk", author: "kayden" },
  { text: "buy bread", author: "kaylee" },
  { text: "buy cereal", author: "brandon" }
];

// console.log(JSON.stringify(todos));

localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(JSON.parse(stored));

// *** *** *** *** *** *** UPDATING THE WEATHER APP *** *** *** *** *** ***
