// **************OBJECTS AT A GLANCE**************

// ************OBJECT LITERALS************

// let user = {
//   name: "Brandon",
//   age: 25,
//   email: "bcraig2612@gmail.com",
//   location: "San Tan Valley, AZ",
//   blogs: ["Indianapolis Colts Fan Articles", "Coding Opinions"]
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.location);
// console.log(user.blogs);

// **************DOT NOTATION & BRACKET NOTATION************

// user.age = 25;
// console.log(user.age);

// user["email"] = "devbrandoncraig@gmail.com";
// console.log(user.email);

// const key = "blogs";
// console.log(user[key]);

// console.log(typeof user);

// ************ADDING METHODS************

// let user = {
//   name: "Brandon",
//   age: 25,
//   email: "bcraig2612@gmail.com",
//   location: "San Tan Valley, AZ",
//   blogs: ["Indianapolis Colts Fan Articles", "Coding Opinions"],
//   login: function() {
//     console.log("the user logged in!");
//   },
//   logout: function() {
//     console.log("the user has logged out!");
//   },
//   logBlogs: function() {

//   }
// };

// user.login();
// user.logout();

// const name = "Ethan";
// console.log(name.toUpperCase());

// ************'this' KEYWORD************
// ************OBJECTS IN ARRAYS************

// let user = {
//   name: "Brandon",
//   age: 25,
//   email: "bcraig2612@gmail.com",
//   location: "San Tan Valley, AZ",
//   blogs: [
//     { title: "Why mac & cheese rules.", likes: 30 },
//     { title: "10 Things To Do When You're Bored", likes: 500 }
//   ],
//   login() {
//     console.log("the user logged in!");
//   },
//   logout() {
//     console.log("the user has logged out!");
//   },
//   logBlogs() {
//     //console.log(this.blogs);
//     console.log("This user has written the following blogs: ");
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     });
//   }
// };

// user.login();
// user.logout();
// user.logBlogs();

// ************MATH OBJECT************

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area)); // 8
// console.log(Math.floor(area)); // 7
// console.log(Math.ceil(area)); // 8
// console.log(Math.trunc(area)); // 7

// RANDOM NUMBERS
// Getting a random number between 0 - 1
// const random = Math.random();

// console.log(random);
// Getting a random number between 1 - 100
// console.log(Math.round(random * 100));

// *************PRIMITIVE vs. REFERENCE TYPES************
// Primitive Types: numbers, strings, Booleans, null, undefined, symbols
// Reference Types: All types of objects, object literals, arrays, functions, dates, etc.
// primitives are stored in the stack. quicker but smaller.
// references are stored in the heap. slower but larger.

// Primitives
// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 50 scoreTwo: 50

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 100 scoreTwo: 50

//References

// const userOne = { name: "Brandon", age: 24 };
// const userTwo = userOne;
// console.log(userOne, userTwo); // {name: 'Brandon', age: 24} {name: 'Brandon', age: 24}

// userOne.age = 25;
// console.log(userOne, userTwo); // {name: 'Brandon', age: 25} {name: 'Brandon', age: 25}
