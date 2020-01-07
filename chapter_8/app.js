// *************************Section 8: Project - Interactive Ninja Quiz*****************************
// PROJECT PREVIEW & SETUP
// BOOTSTRAP BASICS
// HTML TEMPLATE
// CHECKING ANSWERS
// SHOWING THE SCORE
// THE WINDOW OBJECT
// INTERVALS & ANIMATING THE SCORE
const correctAnswers = ["A", "B", "C", "B", "C", "B", "B", "A", "A", "D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", event => {
  event.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value
  ];
  // CHECK ANSWERS
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });
  //   console.log(score);
  // SHOW RESULTS ON PAGE
  scrollTo(0, 0);
  result.classList.remove("d-none");
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// WINDOW OBJECT (GLOBAL OBJECT)

// console.log("hello");
// window.console.log("hello");

// console.log(document.querySelector("form"));
// console.log(window.document.querySelector("form"));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//   alert("hello");
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//   console.log("hello");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
