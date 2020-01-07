// ***************************SECTION 9: ARRAY METHODS***************************
// ****************FILTER METHOD****************
const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter(score => {
  return score > 20;
});
console.log(filteredScores);

const users = [
  { name: "Brandon", premium: true },
  { name: "Ethan", premium: true },
  { name: "Christian", premium: false },
  { name: "Brian", premium: false }
];

const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);

// ****************MAP METHOD****************
// Cycles through an array, and makes a new array based on the original array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);
console.log(salePrices);

const products = [
  { name: "Gold Star", price: 20 },
  { name: "Mushroom", price: 40 },
  { name: "Green Shells", price: 30 },
  { name: "Banana Skin", price: 10 },
  { name: "Red Shells", price: 50 }
];
// ----------------------------------------------------------------
const halfPrice = products.map(product => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(halfPrice);

// ****************REDUCE METHOD****************
// Doesn't return new array, it returns a result/value
const scores3 = [10, 20, 60, 40, 70, 90, 30];

const result = scores3.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);
console.log(result);
//--------------------------------------------------
const scores2 = [
  { player: "Mario", score: 50 },
  { player: "Yoshi", score: 30 },
  { player: "Mario", score: 70 },
  { player: "Luigi", score: 60 }
];

const marioTotal = scores2.reduce((acc, curr) => {
  if (curr.player === "Mario") {
    acc += curr.score;
  }
  return acc;
}, 0);
console.log(marioTotal);
// ****************FIND METHOD****************
// Returns the first value in an array that passes a certain test in a callback function
scores4 = [10, 5, 0, 40, 30, 10, 90, 70];

const firstHighScore = scores4.find(score => score > 50);
console.log(firstHighScore);

// ****************SORT METHOD****************
// Sorts arrays depending on certain tests. Changes the original array.
// EXAMPLE 1: SORTING STRINGS
const names = ["Brandon", "Ethan", "Christian", "Brian", "Nathen"];

names.sort();
// names.reverse();
console.log(names);

//EXAMPLE 2: SORTING NUMBERS
const scores5 = [10, 50, 20, 5, 35, 70, 45];
scores5.sort();
// scores5.reverse();
// console.log(scores5);

scores5.sort((a, b) => b - a);
// scores5.sort((a, b) => a - b); --> returns least to greatest
console.log(scores5);

//EXAMPLE 3: SORTING OBJECTS
const players = [
  { name: "Mario", score: 20 },
  { name: "Luigi", score: 10 },
  { name: "Bowser", score: 50 },
  { name: "Toad", score: 30 },
  { name: "Waluigi", score: 70 }
];

players.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});
// console.log(players);

// Same as code above, but shorter/cleaner
players.sort((a, b) => b.score - a.score);
console.log(players);
// ****************CHAINING ARRAY METHOD****************

const marioParty = [
  { name: "Gold Star", price: 30 },
  { name: "Green Shell", price: 10 },
  { name: "Red Shell", price: 40 },
  { name: "Banana Skin", price: 5 },
  { name: "Mushroom", price: 50 }
];

// const filtered = marioParty.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//   return `The ${product.name} is ${product.price / 2} coins`;
// });

// console.log(promos);

// METHOD CHAINING

const promos = products
  .filter(product => product.price > 20)
  .map(product => `The ${product.name} is ${product.price / 2} coins`);

console.log(promos);
