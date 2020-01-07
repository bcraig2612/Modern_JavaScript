// ***************************************************************************FORMS & FORM EVENTS***************************************************************************
// *************************EVENTS INSIDE FORMS*************************
// - Form Events
// --- Capture data or information from a user
// --- Examples: Username, Password, Email, PIN
// --- "SUBMIT" event, which submits the form
// --- keyboard events
// *************************SUBMIT EVENTS*************************
// const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");
// form.addEventListener("submit", event => {
// Prevents the page from refreshing when the submit button is clicked
//   event.preventDefault();
// console.log(username.value);
// You can use dot notation instead of needing to use a query to provide the username if there's an ID or NAME property.
//  console.log(form.username.value);
// });

// *************************REGULAR EXPRESSIONS*************************
// *************************TESTING RegEx PATTERNS*************************
// const username = "brandon";
// const pattern = /^[a-z]{6,}$/;

// *** *** ***1ST WAY TO TEST RegEx PATTERN*** *** ***
// let result = pattern.test(username);
// console.log(result); // returns true or false

// *** *** ***2ND WAY TO TEST RegEx PATTERN*** *** ***
// if (result) {
//   console.log("The regex test passed :)");
// } else {
//   console.log("The regex test failed :(");
// }

// *** *** ***3RD WAY TO TEST RegEx PATTERN*** *** ***
// let result = username.search(pattern);
// console.log(result); // returns -1 if it's not a match, 0 if it is.

// *************************BASIC FORM VALIDATION*************************
const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", event => {
  event.preventDefault();

  // VALIDATION
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // FEEDBACK GOOD INFO
    feedback.textContent = "That username is valid.";
  } else {
    // FEEDBACK HELP INFO
    feedback.textContent =
      "Username must contain letters only and must be between 6 - 12 characters long.";
  }
});

// *************************KEYBOARD EVENTS*************************

// LIVE FEEDBACK

form.username.addEventListener("keyup", event => {
  //   console.log(event);
  //   console.log(event.target.value, form.username.value);
  if (usernamePattern.test(event.target.value)) {
    // console.log("Passed!");
    form.username.setAttribute("class", "success");
  } else {
    // console.log("Failed!");
    form.username.setAttribute("class", "error");
  }
});
