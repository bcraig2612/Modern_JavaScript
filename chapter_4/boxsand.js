// ****************FUNCTION DECLARATION****************

// greet();

// function greet() {
//   console.log("Hello There");
// }

// ****************FUNCTION EXPRESSION****************

// const speak = function() {
//   console.log("Good day!");
// };

// speak();

// ****************ARGUMENTS & PARAMETERS****************

// const spoke = function(name = "Brandon", time = "morning") {
//   console.log(`Good ${time} ${name}!`);
// };
// spoke();
// spoke("Ethan", "evening");

// ****************RETURNING VALUES****************

// const calcArea = function(radius) {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

// ****************ARROW FUNCTION****************

// ___NON-ARROW:___
// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// ___ARROW:___
// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// ****************FUNCTIONS vs. METHODS****************

// const name = "Ron";

// ___FUNCTIONS:___
// >> we invoke it directly using parenthesis

// const greet = () => "hello";
// let resultOne = greet();

// console.log(resultOne);

// ___METHODS:___
// >> methods are invoked using dot notation

// let resultTwo = name.toUpperCase();

// console.log(resultTwo);

// ****************FOREACH METHOD & CALLBACKS****************

// let people = ["Brandon", "Kaylee", "Kayden", "Addie", "Blake"];

// const logPerson = (person, index) => {
//   console.log(`${index} - Good Evening ${person}`);
// };

// people.forEach(logPerson);

// ****************CALLBACK FUNCTIONS IN ACTION****************

// const ul = document.querySelector(".people");

// const people = ["Brandon", "Kaylee", "Kayden", "Addie", "Blake"];

// let html = ``;

// people.forEach(person => {
// create HTML template for each person
//   html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);

// ul.innerHTML = html;
