// *** *** *** *** *** *** Section 15: Object Oriented JavaScript *** *** *** *** *** ***

// *** *** *** *** *** *** WHAT IS OOP? *** *** *** *** *** ***
// 2 WAYS TO CREATE AN ARRAY:
// const names = ['Brandon', 'Brian', 'Christian'];
// const names = new Array('Brandon', 'Brian', 'Christian');

// 2 WAYS TO CREATE AN OBJECT:
// const userOne = {};
// const userTwo = new Object();

// 2 WAYS TO CREATE A STRING:
// const nameOne = 'Brandon';
// const nameTwo = new String('Brandon');

// 2 WAYS TO CREATE A NUMBER:
// const num1 = 1;
// const num2 = new Number(2);

// *** *** *** *** *** *** OBJECT LITERAL RECAP *** *** *** *** *** ***

// const userOne = {
//   username: "bcraig2612",
//   email: "bcraig2612@gmail.com",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("THE USER LOGGED OUT");
//   }
// };

// console.log(userOne.email, userOne.username);
// userOne.login();
// userOne.logout();

// const userTwo = {
//   username: "devbrandoncraig",
//   email: "devbrandoncraig@gmail.com",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("THE USER LOGGED OUT");
//   }
// };

// console.log(userTwo.email, userTwo.username);
// userTwo.login();
// userTwo.logout();

// We can cut down our code and be more efficient using this:
// const userThree = new User('bob123@yahoo.com', 'bob');

// *** *** *** *** *** *** CLASSES *** *** *** *** *** ***
// A class is like a blueprint for an object (it describes how one should be made)

// Car Blueprint: Properties: color, make, model, year Functionality: reverse, speed, brakes

// User Class {username, email, login(), logout()};

// *** *** *** *** *** *** CLASS CONSTRUCTORS *** *** *** *** *** ***

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//   }
// }
// creating an 'instance'
// const userOne = new User("Brandon", "bcraig2612@gmail.com");
// const userTwo = new User("Brian", "bsk111@gmail.com");

// console.log(userOne, userTwo);

// The 'new' keyword
// (1.) It creates a new empty object {}
// (2.) It binds the value of 'this' to the new empty object
// (3.) It calls the constructor function to 'build' the object

// *** *** *** *** *** *** CLASS METHODS & METHOD CHAINING *** *** *** *** *** ***

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   increaseScore() {
//     this.score++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// const userOne = new User("Brandon", "bcraig2612@gmail.com");
// const userTwo = new User("Brian", "bsk111@gmail.com");

// console.log(userOne, userTwo);
// userOne
//   .login()
//   .logout()
//   .increaseScore()
//   .increaseScore();
// userTwo
//   .login()
//   .logout()
//   .increaseScore()
//   .increaseScore();

// *** *** *** *** *** *** CLASS INHERITANCE (SUBCLASSES) *** *** *** *** *** ***

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   increaseScore() {
//     this.score++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter(u => u.username !== user.username);
//   }
// }

// const userOne = new User("Brandon", "bcraig2612@gmail.com");
// const userTwo = new User("Brian", "bsk111@gmail.com");
// const userThree = new Admin("Kaylee", "kaypink34@gmail.com");
// console.log(userOne, userTwo, userThree);

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

// *** *** *** *** *** *** SUPER() *** *** *** *** *** ***

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   increaseScore() {
//     this.score++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, email, title) {
//     // super() looks for the parent class
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter(u => u.username !== user.username);
//   }
// }

// const userOne = new User("Brandon", "bcraig2612@gmail.com");
// const userTwo = new User("Brian", "bsk111@gmail.com");
// const userThree = new Admin("Kaylee", "kaypink34@gmail.com", "THE B0$$");
// console.log(userOne, userTwo, userThree);

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

// *** *** *** *** *** *** CONSTRUCTORS (UNDER THE HOOD) *** *** *** *** *** ***

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//   }
// }

// How we did it before we were able to use the 'class' keyword
// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.login = function() {
//     console.log(`${this.username} has logged in`);
//   };
// }

// const userOne = new User("Brandon", "bcraig2612@gmail.com");
// const userTwo = new User("Brian", "bsk111@gmail.com");

// console.log(userOne, userTwo);
// userOne.login();

// *** *** *** *** *** *** PROTOTYPE MODEL *** *** *** *** *** ***
// Every object in JavaScript has a prototype
// Prototypes contain all the methods for that object type
// Makes prototypal inheritance possible and makes things more efficient

// function User(username, email) {
//   this.username = username;
//   this.email = email;
// }

// User.prototype.login = function() {
//   console.log(`${this.username} has logged in.`);
//   return this;
// };

// User.prototype.logout = function() {
//   console.log(`${this.username} HAS LOGGED OUT.`);
//   return this;
// };

// const userOne = new User("Brandon", "bcraig2612@gmail.com");
// const userTwo = new User("Brian", "bsk111@gmail.com");

// console.log(userOne, userTwo);
// userOne.login().logout();
// userTwo.login().logout();

// *** *** *** *** *** *** PROTOTYPAL INHERITANCE *** *** *** *** *** ***

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function() {
  console.log(`${this.username} has logged in.`);
  return this;
};

User.prototype.logout = function() {
  console.log(`${this.username} HAS LOGGED OUT.`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
  //delete a user
  users = users.filter(u => u.username !== user.username);
};

const userOne = new User("Brandon", "bcraig2612@gmail.com");
const userTwo = new User("Brian", "bsk111@gmail.com");
const userThree = new Admin("Kaylee", "kaypink34@gmail.com", "THE BOSS");

let users = [userOne, userTwo, userThree];
console.log(users);

console.log(userOne, userTwo, userThree);

userOne.login().logout();
userTwo.login().logout();

userThree.deleteUser(userTwo);
console.log(users);
// *** *** *** *** *** *** BUILT-IN OBJECTS *** *** *** *** *** ***
// *** *** *** *** *** *** MAKING A FORECAST CLASS (WEATHER APP) *** *** *** *** *** ***
