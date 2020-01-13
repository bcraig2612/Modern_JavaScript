// *** *** *** *** SECTION-18: MORE ES6 FEATURES *** *** *** ***
// *** *** SPREAD & REST *** ***
// Rest Parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num * 2);
};

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);

// Spread Syntax (Arrays)
const people = ["Kaylee", "Brandon", "Kayden", "Addie", "Blake"];
console.log(...people);
const people2 = ["RandomPerson", "RandomPerson2", ...people];
console.log(people2);

// Spread Syntax (Objects)
const person = { name: "Brandon", age: 24, job: "Web Developer" };
const personClone = { ...person, location: "San Tan Valley, AZ" };

console.log(person);
console.log(personClone);

// *** *** SETS *** ***
//Sets takes out any duplicates
const namesArray = ["Kaylee", "Brandon", "Brandon", "Kayden"];
console.log(namesArray); // --> (4) ["Kaylee", "Brandon", "Brandon", "Kayden"]

// const namesSet = new Set(["Kaylee", "Brandon", "Brandon", "Kayden"]);
// or this way
const namesSet = new Set(namesArray);
console.log(namesSet); //--> Set(3) { "Kaylee", "Brandon", "Kayden" }

const uniqueNames = [...namesSet];
console.log(uniqueNames); // --> (3) ["Kaylee", "Brandon", "Kayden"]

const uniqueNames2 = [...new Set(namesArray)];
console.log(uniqueNames2); // --> (3) ["Kaylee", "Brandon", "Kayden"]

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(20);
ages.delete(25);

console.log(ages, ages.size); // --> Set(2) {20, 30} 2
console.log(ages.has(25), ages.has(30)); // --> false true

ages.clear();
console.log(ages); // --> Set(0) {}

const friends = new Set([
  { name: "Christian", age: 25 },
  { name: "Brandon", age: 24 },
  { name: "Brian", age: 24 }
]);

friends.forEach(friend => {
  console.log(friend.name, friend.age); // --> Christian 25 Brandon 24 Brian 24
});

// *** *** *** *** *** *** SYMBOLS *** *** *** *** *** ***
// Unique. Symbols can allows a visually identical value but they are NEVER equal
const symbolOne = Symbol(1234);
const symbolTwo = Symbol(1234);

console.log(symbolOne, symbolTwo, typeof symbolOne, typeof symbolTwo);
// --> Symbol(1234) Symbol(1234) "symbol" "symbol"
console.log(symbolOne == symbolTwo);
// --> false

const ninja = {};
ninja.age = 24;
ninja["belt"] = "black";
ninja["belt"] = "orange";
console.log(ninja); // --> {age: 24, belt: "orange"}

ninja[symbolOne] = "Brian";
ninja[symbolTwo] = "Brandon";
console.log(ninja); // --> {age: 24, belt: "orange", Symbol(1234): "Brian", Symbol(1234): "Brandon"}
