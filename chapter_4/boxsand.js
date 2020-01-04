// FUNCTION DECLARATION
greet();

function greet() {
  console.log('Hello There');
}

// FUNCTION EXPRESSION
const speak = function() {
  console.log('Good day!');
};

speak();

// ARGUMENTS & PARAMETERS
const spoke = function(name = 'Brandon', time = 'morning') {
  console.log(`Good ${time} ${name}!`);
};
spoke();
spoke('Hitler', 'evening');

// RETURNING VALUES
const calcArea = function(radius) {
  return 3.14 * radius ** 2;
};

const area = calcArea(5);
console.log(area);

// ARROW FUNCTION

// ___BEFORE:___
// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// ___AFTER:___
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));


const name = 'shaun';

// functions



// methods 



