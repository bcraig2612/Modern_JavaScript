// **************************THE DOM*******************************
// ***************INTERACTING WITH THE BROWSER******************
// - add content to the browser
// - change CSS styles
// - react to user events (clicking, hovering, typing, etc.)
// - cool effects like popups

// - DOM Document Object Model
// - Add, Change, & Remove content
// - Make a cool pop-up effect in the web page

// ***************THE DIRECT OBJECT MODEL EXPLAINED******************
// - Created by the browser
// - 'document' object
// you can type document in the console to inspect the document
// In the DOM, each part of our HTML document is considered a node.
// the html tag is always first in an HTML document, and it's known as the root node.

// ***************THE QUERY SELECTOR******************
// goes from top to bottom and grabs the first 'p' tag
// const para = document.querySelector("p");
// console.log(para);

// we select this 'p' tag by referring to its class selector using '.'
// const err = document.querySelector(".error");
// console.log(err);

// now to select something that has the same class 'error' but is a div instead of a p tag:
// const errdiv = document.querySelector("div.error");
// console.log(errdiv);

// go to browser, right click on any part of the page and select inspect,
// right click on the highlighted part of the html document where it's representing what you're inspecting,
// go to copy, and select copy selector. that will give you the correct way to select that element.

// const shortcut = document.querySelector("body > h2");
// console.log(shortcut);

// selecting multiple tags using .querySelectorAll();
// const errors = document.querySelectorAll(".error");
// console.log(errors);

// const paras = document.querySelectorAll("p");
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);

// USING FOR EACH
// paras.forEach(para => {
//   console.log(para);
// });

// errors.forEach(err => {
//   console.log(err);
// });

// ***************OTHER WAYS TO QUERY THE DOM******************
// GET AN ELEMENT BY ID .getElementById();

// const title = document.getElementById("page-title");
// console.log(title);

// GET ELEMENTS BY THEIR CLASS NAME .getElementsByClassName();

// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);
// console.log(errors[1]);

// GET ELEMENTS BY THEIR TAG NAME .getElementsByTagName();

// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);

// ***************ADDING & CHANGING PAGE CONTENT******************
//Adds the content to the first 'p' tag
// const para = document.querySelector("p");
// console.log(para.innerText);
// para.innerText += " DO YOU KNOW THE WAY";
// para.innerText = "DO YOU KNOW THE WAY";

// Adds the content to all 'p' tags
// const paras = document.querySelectorAll("p");
// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += " new TEXT!";
// });

// Adding to a class element
// const content = document.querySelector(".content");
// console.log(content.innerHTML);

// Replaces the <div> with the class 'content' and replaces it with an <h2>
// content.innerHTML = "<h2> This is a new H2 how about them apples. </h2>";

// If you want to add to the existing content without replacing you just use a '+='
// content.innerHTML += "<h2> This is a new H2 how about them apples. </h2>";

// Adding an array of people to the existing 'content' class as <p> tags
// const people = ["Brandon", "Kaylee", "Kayden", "Addie", "Blake"];
// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// ***************GETTING & SETTING ATTRIBUTES******************
// We select the 'a' tag, then log the 'href' attribute to the console.
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// We change the 'href' attribute to a different website and then change the text within the 'a' tag.
// link.setAttribute("href", "https://www.thenetninja.co.uk");
// link.innerText = "The Net Ninja Website";
// console.log(link.getAttribute("href"));

// const message = document.querySelector("p");
// console.log(message.getAttribute("class"));

// message.setAttribute("class", "success");
// console.log(message.getAttribute("class"));

// adding an attribute to an element that doesn't already have one
// adding style attribute text color to green
// message.setAttribute("style", "color: green;");

// ***************CHANGING CSS STYLES******************
// Using setAttribute() will completely override whatever styling was current before the change.
// const title = document.querySelector("h1");
// title.setAttribute("style", "margin: 50px;");

// console.log(title.style); // returns all of the CSS options to style an element
// console.log(title.style.color); // returns cyan

// Using this way will NOT override any styling
// title.style.backgroundColor = "darkgrey";
// title.style.margin = "50px";
// title.style.fontSize = "41px";

// Deleting an existing style
// title.style.margin = "";

// ***************ADDING & REMOVING CLASSES******************
// Getting class(es) of an element
// const content = document.querySelector("p");
// console.log(content.classList);

// Adding class(es) to an element
// content.classList.add("anotha-one");
// console.log(content.classList);

// Removing class(es) of an element
// content.classList.remove("anotha-one");
// console.log(content.classList);

// content.classList.add("success");

// *************************SECTION-CHALLENGE*********************************
// Find a way to filter through the <p/> tags and assign them to a class of "success"
// or "error" depending on if they have the words "error" or "success" in there text.

// ***** MY SOLUTION: *****
// const par = document.querySelector("p");
// const paras = document.querySelectorAll("p");
// console.log(par);
// console.log(paras);

// paras.forEach(par => {
//   if (par.innerHTML.includes("success")) {
//     par.classList.add("success");
//   } else if (par.innerHTML.includes("error")) {
//     par.classList.add("error");
//   } else {
//     return;
//   }
// });

// ***** INSTRUCTOR SOLUTION: *****
// const paras = document.querySelectorAll("p");
// console.log(paras);

// paras.forEach(p => {
//   if (p.textContent.includes("error")) {
//     p.classList.add("error");
//   }
//   if (p.innerText.includes("success")) {
//     p.classList.add("success");
//   }
// });

// How to TOGGLE a class, giving a class if there isn't one, and taking it off if it does have one.
// const title = document.querySelector(".title");
// console.log(title); // class is 'title'

// title.classList.toggle("test");
// console.log(title); // class is 'title test'
// title.classList.toggle("test");
// console.log(title); // class is toggled back to 'title'

// ***********************PARENTS, CHILDREN & SIBLINGS*******************************
// relationships between different nodes/elements
// siblings are elements on the same level as each other

// const article = document.querySelector("article");
// console.log(article.children);

// convert html collection and turn it into an array
// console.log(Array.from(article.children));
// now that the collection is an array, we can use forEach
// Array.from(article.children).forEach(child => {
//   child.classList.add("article-element");
// });
// console.log(article);

// const title = document.querySelector("h4");
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// CHAINING
// console.log(title.nextElementSibling.parentElement.children);

// ***********************EVENT BASICS(click-events)*******************************
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("You clicked the button");
// });

// const items = document.querySelectorAll("li");

// items.forEach(item => {
//   item.addEventListener("click", event => {
// console.log("item clicked");
// console.log(event);
// console.log(event.target);
// console.log(item); --> works similar to event.target
//     event.target.style.textDecoration = "line-through";
//   });
// });

// ***********************CREATING & REMOVING ELEMENTS*******************************
// const ul = document.querySelector("ul");
// ul.remove();
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "Something new to do";
//   ul.append(li);
//   ul.prepend(li);
// });

// const items = document.querySelectorAll("li");

// items.forEach(item => {
//   item.addEventListener("click", event => {
//     event.target.remove();
//   });
// });

// ***********************EVENT BUBBLING & DELEGATION*******************************
// const ul = document.querySelector("ul");
// ul.remove();
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "Something new to do";
//   ul.append(li);
//   ul.prepend(li);
// });

// const items = document.querySelectorAll("li");

// items.forEach(item => {
//   item.addEventListener("click", event => {
//     console.log("Event in li");
//     event.stopPropagation();
//     event.target.remove();
//   });
// });

// ul.addEventListener("click", event => {
//   console.log("Event in ul");
//   console.log(event);
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// ***********************MORE DOM EVENTS*******************************
// const copy = document.querySelector(".copy-me");

// copy.addEventListener("copy", () => {
//   console.log("Hey you! My content is copyright");
// });

// const box = document.querySelector(".box");

// box.addEventListener("mousemove", event => {
// console.log(event);
//   console.log(event.offsetX, event.offsetY);
//   box.textContent = `x position - ${event.offsetX} y position - ${event.offsetY}`;
// });

// document.addEventListener("wheel", event => {
//   console.log(event.pageX, event.pageY);
// });

// ***********************BUILDING A POPUP*******************************
const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
