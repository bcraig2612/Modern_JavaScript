// *** *** *** *** *** *** *** WHAT IS ASYNCHRONOUS JavaScript? *** *** *** *** *** *** ***
// Governs how we perform tasks which take some time to complete (Ex: Getting data from a database)
// Basically means start something NOW and finish it LATER
// Typically used as a callback function as a parameter of a function to be called and completed once the rest of the synchronous functionality is finished running.

// *** SYNCHRONOUS JavaScript ***
// Can run ONE statement at a time in order from top to bottom

// Example: This setTimeout is asynchronous because it doesn't block the logs from running before the 2 seconds
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//   console.log("The callback function has fired!");
// }, 2000);
// console.log(4);
// console.log(5);

const getTodos = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("ERROR GETTING RESOURCE");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/todos.json")
  .then(data => {
    console.log("promise resolved:", data);
  })
  .catch(error => {
    console.log("promise rejected:", error);
  });

// getTodos("todos/todos.json", (error, data) => {
//   console.log(data);
//   getTodos("todos/todos2.json", (error, data) => {
//     console.log(data);
//     getTodos("todos/todos3.json", (error, data) => {
//       console.log(data);
//     });
//   });
// });

// *** PROMISE EXAMPLE ***

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
// FETCH SOMETHING
// resolve("some data");
// reject("some error");
//   });
// };

// getSomething().then(
//   data => {
//     console.log(data);
//   },
//   error => {
//     console.log(error);
//   }
// );

// getSomething()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
