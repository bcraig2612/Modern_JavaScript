console.log("DOM File");

const body = document.querySelector("body");

const styleBody = () => {
  body.style.background = "peachpuff";
};

const addTitle = text => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

const contact = "bcraig2612@gmail.com";

export { styleBody, addTitle, contact };
