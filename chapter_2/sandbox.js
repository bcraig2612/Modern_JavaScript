// alert('Hello World');
console.log('Howdy Partner!');


let age = 25;
let year = 2019;
console.log(age, year);
age = 30;
year = 2020;
console.log(age, year);


// Constant variable. Can not be updated after initial use.
const points = 100;
console.log(points);
// points = 50;


var name = 'Brandon';
console.log(name);
name = 'Ethan';
console.log(name);


// *** JAVASCRIPT DATA TYPES ***
// Numbers - 1, 2, 3, 4, 5.23, etc.
// String - 'hello' 'crsig23@gmail.com'
// Boolean - true/false
// Null - Explictily set a variable with no value
// Undefined - For variables that have not yet been defined.
// Object - Complex data structures - Arrays, Dates, Literals, etc.
// Symbol - Used with Objects


// strings
console.log("HeLlO wOrLd");

let email = 'bcraig2612@gmail.com';
console.log(email);


// string concatenation
let firstName = 'Brandon';
let lastName = 'Craig';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);
console.log(fullName[3]);
console.log(fullName[4]);
console.log(fullName[5]);
console.log(fullName[6]);
console.log(fullName[7]);
console.log(fullName[8]);
console.log(fullName[9]);
console.log(fullName[10]);
console.log(fullName[11]);
console.log(fullName[12]);

// string length
console.log(fullName.length); // 13

// string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let result = fullName.fontcolor('red');
console.log(result);

let index = email.indexOf('@');
console.log(index);