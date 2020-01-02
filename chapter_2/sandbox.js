// alert('Hello World');

// console.log('Howdy Partner!');


// *** USING LET ***

// let age = 25;
// let year = 2019;
// console.log(age, year);
// age = 30;
// year = 2020;
// console.log(age, year);


// *** USING CONST ***

// *** Constant variable. Can not be updated after initial declaration. ***
// const points = 100;
// console.log(points);
// points = 50;


// *** USING VAR ***

// var name = 'Brandon';
// console.log(name);
// name = 'Ethan';
// console.log(name);


// *** JAVASCRIPT DATA TYPES ***

// Numbers - 1, 2, 3, 4, 5.23, etc.
// String - 'hello' 'crsig23@gmail.com'
// Boolean - true/false
// Null - Explictily set a variable with no value
// Undefined - For variables that have not yet been defined.
// Object - Complex data structures - Arrays, Dates, Literals, etc.
// Symbol - Used with Objects


// *** STRINGS ***

// console.log("HeLlO wOrLd");
// let email = 'bcraig2612@gmail.com';
// console.log(email);


// *** STRING CONCATENATION ***

// let firstName = 'Brandon';
// let lastName = 'Craig';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);


// *** GETTING CHARACTERS (using bracket notation) ***

// console.log(fullName[0]);
// console.log(fullName[1]);
// console.log(fullName[2]);
// console.log(fullName[3]);
// console.log(fullName[4]);
// console.log(fullName[5]);
// console.log(fullName[6]);
// console.log(fullName[7]);
// console.log(fullName[8]);
// console.log(fullName[9]);
// console.log(fullName[10]);
// console.log(fullName[11]);
// console.log(fullName[12]);


// *** STRING LENGTH (using .length) ***

// console.log(fullName.length); // 13


// *** COMMON STRING METHODS ***

// ** .TOUPPERCASE(); , .TOLOWERCASE(); **

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// ** .FONTCOLOR(); **

// let result = fullName.fontcolor('red');
// console.log(result);

// ** .INDEXOF(); **

// let index = email.indexOf('@');
// console.log(index);

// ** .LASTINDEXOF(); **
// gives us the last index position of what's passed in.

// let email = 'bcraig2612@gmail.com';

// let result1 = email.lastIndexOf('@'); 
// console.log(result1); // result is 10

// ** .SLICE; **
// pass in 2 index positios and returns what is at and between those index positions.

// let result2 = email.slice(0, 6);
// console.log(result2); // result is 'bcraig'

// ** .SUBSTR(); **
// pass in 2 arguments. the 1st is a starting spot by index, and the second is how far you want to proceed from that spot.

// let result3 = email.substr(2, 6);
// console.log(result3); // result is 'raig26'

// ** .REPLACE(); **
// takes 2 args. the 1st is what you want to be replaced. the 2nd arg is what you want passed into that spot.

// let result4 = email.replace('b', 'w');
// console.log(result4); // result is 'wcraig2612@gmail.com


// *** NUMBERS ***

// let radius = 10;
// const pi = 3.14;
// console.log(radius, pi);

// ** MATH OPERATORS **
// + (add)
// - (subtract)
// * (multiply)
// / (division)
// ** (power)
// % (percentage)

// ** ORDER OF OPERATION **
// BRACKETS --> INDICES --> DIVISION --> MULTIPLICATION --> ADDITION --> SUBTRACTION

// console.log(10/2); // returns 5

// let result = radius % 3;
// console.log(result); // returns 1

// let result = pi * radius**2 
// console.log(result); // returns 314

// let result = 5 * (10 - 3) ** 2;
// console.log(result); // returns 245

// let likes = 10; 
// likes++;
// console.log(likes); // returns 11

// likes--;
// console.log(likes); // returns 10

// likes += 10;
// console.log(likes); // returns 20

// likes -= 10;
// console.log(likes); // returns 0

// likes *= 2; 
// console.log(likes); // returns 20

// likes /= 2;
// console.log(likes); // returns 5


// ** NAN (Not A Number) **
// console.log(5 / 'hello'); // returns NaN

// ** CONCAT WITH VARIABLES **
// let result = 'The blog has ' + likes + ' likes';
// console.log(result);


// *** TEMPLATE STRINGS ***

// const title = 'Best reads of 2019';
// const author = 'Brandon L Craig';
// const likes = 999;

// ** CONCATENATION WAY **
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
// console.log(result);

// ** TEMPLATE STRING / TEMPLATE LITERAL WAY **
// let result = `The blog called ${title} by ${author} has ${likes} likes.`;
// console.log(result);

// ** CREATING HTML TEMPLATES **
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes.</span>
// `;

// console.log(html);


// *** ARRAYS ***
let ninjas = [ 'Brandon', 'Ethan', 'BillyBoy' ];
// console.log(ninjas);
// console.log(ninjas[1]);
// console.log(ninjas[0]);
// console.log(ninjas[2]);

// ninjas[1] = 'Timmy Turner';
// console.log(ninjas);

// let ages = [20, 25, 30, 35];
// console.log(ages);
// console.log(ages[0]);
// console.log(ages[1]);
// console.log(ages[2]);
// console.log(ages[3]);

// let random = [ 'hello', 'world', 12, 32 ];
// console.log(random);

// console.log(ninjas.length); // returns 3

// let result = ninjas.join(', ');
// console.log(result); // returns 'Brandon, Ethan, BillyBoy'

// let result = ninjas.indexOf('Ethan');
// console.log(result); // returns index --> 1

// let result = ninjas.concat([ 'Kurt', 'Crystal' ]);
// console.log(result);

// let result = ninjas.push( 'Meth' );
// console.log(result); // returns 4
// console.log(ninjas); // returns ['Brandon', 'Ethan', 'BillyBoy', 'Meth']

// let result = ninjas.pop();
// console.log(ninjas); // returns ['Brandon', 'Ethan']
// console.log(result); // returns BillyBoy


// *** NULL & UNDEFINED ***
// let age;
// console.log(age, age + 3, `the age is ${age}.`); // returns: undefined NaN "the age is undefined."

// let age = null;
// console.log(age, age + 3, `the age is ${age}.`); // returns: null 3 "the age is null."


// *** BOOLEANS ***
// Upper case letters are considered less than Lower case letters.

// console.log(true, false); // returns: true false
// console.log('true', 'false', true, false); // returns 'true' 'false' true false

// let email = 'bcraig2612@gmail.com';
// let names = [ 'Sub-Zero', 'Scorpion' ];

// let result = email.includes('@');
// console.log(result); // returns: true

// let result = names.includes('Sub-Zero'); // returns true
// console.log(result); // returns: true

// let age = 25;
// console.log(age == 25); // returns: true
// console.log(age == 30); // returns: false
// console.log(age != 30); // returns: true
// console.log(age != 25); // returns: false
// console.log(age > 20); // returns: true
// console.log(age < 20); // returns: false
// console.log(age <= 25); // returns: true
// console.log(age >= 25); // returns: true

// let name = 'Brandon';
// console.log(name == 'Brandon'); // returns: true
// console.log(name == 'brandon'); // returns: false

// console.log(name > 'Crystal'); //returns: false
// console.log(name < 'Crystal'); //returns: true

// console.log(name < 'brandon'); //returns: true
// console.log(name > 'brandon'); //returns: false

// ** LOOSE COMPARISON (==) **
// let age = 3;
// console.log(age == 3); // returns: true
// console.log(age == '3'); // returns: true
// console.log(age != 3); // returns: false
// console.log(age != '3'); // returns: false

// STRICT COMPARISON (===) **
// console.log(age === 3); // returns: true
// console.log(age === '3'); // returns: false
// console.log(age !== 3); // returns: false
// console.log(age !== '3'); // returns: true

// *** TYPE CONVERSION ***
// let score = '100';

// console.log(score + 1); //returns 1001
// console.log(typeof score) // returns string

// score = Number(score);
// console.log(score + 1); // returns 101
// console.log(typeof score); // returns number

// let result = Number('hello');
// console.log(result); // returns NaN

// let result2 = String(50);
// console.log(result2); // returns: 50
// console.log(typeof result2); // returns: string

// ** Positive and Negative are considered Truthy Values, Zero is considered Falsy **

// let result3 = Boolean(100); // true
// let result4 = Boolean(0); // false
// console.log(result3, result4); // returns true false 
// console.log(result3, typeof result3, result4, typeof result4); // returns true "boolean" false "boolean" 

// ** Strings that ARE NOT empty are always TRUE, Strings that ARE EMPTY are always FALSE. **

// let result = Boolean('0');
// console.log(result); // returns true
// result = Boolean('');
// console.log(result); // returns false